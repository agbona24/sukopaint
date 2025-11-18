import React from 'react';

interface ScreenReaderOnlyProps {
  children: React.ReactNode;
}

export default function ScreenReaderOnly({ children }: ScreenReaderOnlyProps) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}
