import React from 'react';
import { useLanguage } from '@/hooks/use-language';

interface AccessibleImageProps {
  src: string;
  alt: string;
  altFr?: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

/**
 * AccessibleImage component provides enhanced accessibility for images
 * with proper alt text that respects the current language setting.
 * 
 * It includes proper image dimensions to prevent layout shifts,
 * keyboard accessibility for clickable images, and support for lazy loading.
 */
export function AccessibleImage({
  src,
  alt,
  altFr,
  width,
  height,
  className = '',
  loading = 'lazy',
  onClick
}: AccessibleImageProps) {
  const { language } = useLanguage();
  const finalAlt = language === 'en' ? alt : (altFr || alt);
  
  const image = (
    <img
      src={src}
      alt={finalAlt}
      width={width}
      height={height}
      loading={loading}
      className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
    />
  );
  
  // If image is clickable, wrap it in a button for keyboard accessibility
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="bg-transparent p-0 border-0 inline-block"
        aria-label={finalAlt}
      >
        {image}
      </button>
    );
  }
  
  return image;
}
