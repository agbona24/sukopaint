'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaPaintRoller, FaWhatsapp, FaUndo, FaDownload, FaUpload } from 'react-icons/fa';
import { useToast } from './Toast';

interface PaintColor {
  name: string;
  hex: string;
  type: string;
}

export default function VirtualRoomPainter() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<PaintColor>({
    name: 'Suko Orange',
    hex: '#F49C00',
    type: 'Emulsion',
  });
  const [paintedAreas, setPaintedAreas] = useState<Array<{ x: number; y: number; color: string }>>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(30);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const { showToast } = useToast();

  const sukoColors: PaintColor[] = [
    { name: 'Suko Orange', hex: '#F49C00', type: 'Emulsion' },
    { name: 'Navy Blue', hex: '#001F5B', type: 'Matt' },
    { name: 'Pure White', hex: '#FFFFFF', type: 'Emulsion' },
    { name: 'Soft Cream', hex: '#FFF8DC', type: 'Satin' },
    { name: 'Sage Green', hex: '#9DC183', type: 'Silk' },
    { name: 'Warm Gray', hex: '#9E9E9E', type: 'Matt' },
    { name: 'Sky Blue', hex: '#87CEEB', type: 'Emulsion' },
    { name: 'Rose Pink', hex: '#FFB6C1', type: 'Silk' },
    { name: 'Charcoal', hex: '#36454F', type: 'Gloss' },
    { name: 'Mint Green', hex: '#98FF98', type: 'Satin' },
    { name: 'Lavender', hex: '#E6E6FA', type: 'Matt' },
    { name: 'Terracotta', hex: '#E2725B', type: 'Emulsion' },
  ];

  const sampleRooms = [
    { name: 'Living Room', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800' },
    { name: 'Bedroom', url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800' },
    { name: 'Kitchen', url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target?.result as string);
      setPaintedAreas([]);
      showToast('Image uploaded! Click on walls to paint', 'info');
    };
    reader.readAsDataURL(file);
  };

  const loadSampleRoom = (url: string) => {
    setUploadedImage(url);
    setPaintedAreas([]);
    showToast('Sample room loaded! Click on walls to paint', 'info');
  };

  useEffect(() => {
    if (!uploadedImage) return;

    const canvas = canvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;
    if (!canvas || !overlayCanvas) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const maxWidth = 800;
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;
      overlayCanvas.width = width;
      overlayCanvas.height = height;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
      }

      redrawOverlay();
    };
    img.src = uploadedImage;
  }, [uploadedImage]);

  useEffect(() => {
    redrawOverlay();
  }, [paintedAreas, selectedColor]);

  const redrawOverlay = () => {
    const overlayCanvas = overlayCanvasRef.current;
    if (!overlayCanvas) return;

    const ctx = overlayCanvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

    paintedAreas.forEach((area) => {
      ctx.fillStyle = area.color + '80'; // Add transparency
      ctx.beginPath();
      ctx.arc(area.x, area.y, brushSize, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = overlayCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPaintedAreas([...paintedAreas, { x, y, color: selectedColor.hex }]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = overlayCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPaintedAreas([...paintedAreas, { x, y, color: selectedColor.hex }]);
  };

  const undoLastPaint = () => {
    setPaintedAreas(paintedAreas.slice(0, -10));
  };

  const clearAll = () => {
    setPaintedAreas([]);
    showToast('Canvas cleared', 'info');
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;
    if (!canvas || !overlayCanvas) return;

    // Create a temporary canvas to merge both canvases
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCtx.drawImage(canvas, 0, 0);
    tempCtx.drawImage(overlayCanvas, 0, 0);

    const link = document.createElement('a');
    link.download = 'suko-paint-room-design.png';
    link.href = tempCanvas.toDataURL();
    link.click();

    showToast('Image downloaded!', 'success');
  };

  const orderDesign = () => {
    const message = `Hello Suko Paint! I've created a room design using ${selectedColor.name} (${selectedColor.type}). Can I get a quote for this color?`;
    window.open(`https://wa.me/23488828606?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="room-painter" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaPaintRoller className="text-6xl text-[#F49C00] mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            Virtual Room Painter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how colors will look in your space before you buy
          </p>
        </motion.div>

        {!uploadedImage ? (
          /* Upload/Sample Selection */
          <div className="max-w-4xl mx-auto">
            {/* Upload Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="room-upload"
              />
              <label htmlFor="room-upload">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-2xl p-12 border-4 border-dashed border-[#F49C00] cursor-pointer hover:border-[#001F5B] transition text-center"
                >
                  <FaUpload className="text-5xl text-[#F49C00] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#001F5B] mb-2">
                    Upload Your Room Photo
                  </h3>
                  <p className="text-gray-600">or choose a sample room below</p>
                </motion.div>
              </label>
            </motion.div>

            {/* Sample Rooms */}
            <div className="text-center mb-4">
              <p className="text-gray-600 font-medium mb-4">Try with sample rooms:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sampleRooms.map((room) => (
                  <motion.button
                    key={room.name}
                    onClick={() => loadSampleRoom(room.url)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative h-48 rounded-xl overflow-hidden shadow-lg group"
                  >
                    <img
                      src={room.url}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{room.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Painting Interface */
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: Canvas */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="relative inline-block">
                  <canvas
                    ref={canvasRef}
                    className="max-w-full h-auto rounded-xl"
                  />
                  <canvas
                    ref={overlayCanvasRef}
                    onClick={handleCanvasClick}
                    onMouseDown={() => setIsDrawing(true)}
                    onMouseUp={() => setIsDrawing(false)}
                    onMouseLeave={() => setIsDrawing(false)}
                    onMouseMove={handleMouseMove}
                    className="absolute top-0 left-0 max-w-full h-auto cursor-crosshair"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>

                {/* Canvas Controls */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <motion.button
                    onClick={undoLastPaint}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    <FaUndo /> Undo
                  </motion.button>
                  <motion.button
                    onClick={clearAll}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    Clear All
                  </motion.button>
                  <motion.button
                    onClick={downloadImage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#001F5B] text-white px-4 py-2 rounded-lg hover:bg-[#003080] transition"
                  >
                    <FaDownload /> Download
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right: Color Selector */}
            <div className="space-y-6">
              {/* Selected Color */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold text-[#001F5B] mb-4">Selected Color</h3>
                <div
                  className="w-full h-32 rounded-xl mb-4 shadow-inner"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <div className="text-center">
                  <div className="font-bold text-lg text-[#001F5B]">{selectedColor.name}</div>
                  <div className="text-sm text-gray-500">{selectedColor.type}</div>
                  <div className="text-sm text-gray-500 font-mono">{selectedColor.hex}</div>
                </div>
              </div>

              {/* Brush Size */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold text-[#001F5B] mb-4">Brush Size</h3>
                <input
                  type="range"
                  min="10"
                  max="80"
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-sm text-gray-500 mt-2">{brushSize}px</div>
              </div>

              {/* Color Palette */}
              <div className="bg-white rounded-2xl p-6 shadow-xl max-h-96 overflow-y-auto">
                <h3 className="font-bold text-[#001F5B] mb-4">Suko Paint Colors</h3>
                <div className="grid grid-cols-3 gap-3">
                  {sukoColors.map((color) => (
                    <motion.button
                      key={color.hex}
                      onClick={() => setSelectedColor(color)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`aspect-square rounded-lg shadow-md border-4 ${
                        selectedColor.hex === color.hex
                          ? 'border-[#F49C00]'
                          : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Order CTA */}
              <motion.button
                onClick={orderDesign}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg btn-ripple"
              >
                <FaWhatsapp className="text-2xl" />
                Order This Design
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
