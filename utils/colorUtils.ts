// Color utility functions for paint applications

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

// Convert HEX to RGB
export function hexToRgb(hex: string): RGB | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// Convert RGB to HEX
export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

// Convert RGB to HSL
export function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

// Convert HSL to RGB
export function hslToRgb(h: number, s: number, l: number): RGB {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

// Generate complementary color
export function getComplementary(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const newHue = (hsl.h + 180) % 360;
  const newRgb = hslToRgb(newHue, hsl.s, hsl.l);

  return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
}

// Generate analogous colors
export function getAnalogous(hex: string): string[] {
  const rgb = hexToRgb(hex);
  if (!rgb) return [hex];

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const colors = [];

  for (let offset of [-30, 0, 30]) {
    const newHue = (hsl.h + offset + 360) % 360;
    const newRgb = hslToRgb(newHue, hsl.s, hsl.l);
    colors.push(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  }

  return colors;
}

// Generate triadic colors
export function getTriadic(hex: string): string[] {
  const rgb = hexToRgb(hex);
  if (!rgb) return [hex];

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const colors = [];

  for (let offset of [0, 120, 240]) {
    const newHue = (hsl.h + offset) % 360;
    const newRgb = hslToRgb(newHue, hsl.s, hsl.l);
    colors.push(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  }

  return colors;
}

// Generate monochromatic colors
export function getMonochromatic(hex: string): string[] {
  const rgb = hexToRgb(hex);
  if (!rgb) return [hex];

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const colors = [];

  for (let lightness of [20, 40, 60, 80]) {
    const newRgb = hslToRgb(hsl.h, hsl.s, lightness);
    colors.push(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  }

  return colors;
}

// Extract dominant colors from image data
export function extractDominantColors(imageData: Uint8ClampedArray, count: number = 5): string[] {
  const colorMap = new Map<string, number>();

  // Sample every 10th pixel for performance
  for (let i = 0; i < imageData.length; i += 40) {
    const r = imageData[i];
    const g = imageData[i + 1];
    const b = imageData[i + 2];
    const a = imageData[i + 3];

    // Skip transparent pixels
    if (a < 125) continue;

    // Round to reduce color variations
    const rr = Math.round(r / 10) * 10;
    const gg = Math.round(g / 10) * 10;
    const bb = Math.round(b / 10) * 10;

    const key = `${rr},${gg},${bb}`;
    colorMap.set(key, (colorMap.get(key) || 0) + 1);
  }

  // Sort by frequency
  const sorted = Array.from(colorMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);

  return sorted.map(([rgb]) => {
    const [r, g, b] = rgb.split(',').map(Number);
    return rgbToHex(r, g, b);
  });
}

// Get color name approximation
export function getColorName(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return 'Unknown';

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // Determine hue name
  let hueName = '';
  if (hsl.s < 10) {
    if (hsl.l < 20) return 'Black';
    if (hsl.l > 90) return 'White';
    return 'Gray';
  }

  const h = hsl.h;
  if (h < 15 || h >= 345) hueName = 'Red';
  else if (h < 45) hueName = 'Orange';
  else if (h < 65) hueName = 'Yellow';
  else if (h < 150) hueName = 'Green';
  else if (h < 200) hueName = 'Cyan';
  else if (h < 260) hueName = 'Blue';
  else if (h < 290) hueName = 'Purple';
  else hueName = 'Pink';

  // Add lightness qualifier
  if (hsl.l < 30) return `Dark ${hueName}`;
  if (hsl.l > 70) return `Light ${hueName}`;

  return hueName;
}

// Calculate contrast ratio for accessibility
export function getContrastRatio(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  if (!rgb1 || !rgb2) return 1;

  const getLuminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(val => {
      val /= 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}
