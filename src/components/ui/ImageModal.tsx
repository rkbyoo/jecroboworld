"use client"

import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { CardSwipe } from './CardSwipe';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  description?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  title,
  description
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
      // Prevent scroll on mobile
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // const handleBackdropClick = (e: React.MouseEvent) => {
  //   if (e.target === e.currentTarget) {
  //     onClose();
  //   }
  // };

  const modalContent = (
    <>
      <style>{`
        .modal-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .modal-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .modal-container {
          max-height: calc(100vh - 2rem);
          max-height: calc(100dvh - 2rem);
        }
        @media (max-width: 640px) {
          .modal-container {
            max-height: calc(100vh - 4rem);
            max-height: calc(100dvh - 4rem);
            height: auto;
            max-width: calc(100vw - 2rem);
          }
        }
      `}</style>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-sm p-4 sm:p-4 lg:p-8"
      >
        <div className="relative w-full max-w-none sm:max-w-4xl modal-container overflow-y-auto modal-scrollbar-hide">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[10000] p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors touch-manipulation"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </button>

          <div className="bg-black-900/95 backdrop-blur-sm rounded-2xl sm:rounded-2xl p-6 sm:p-4 md:p-6 lg:p-8 border border-white/10 sm:border shadow-2xl">
            <CardSwipe
              images={images}
              title={title}
              description={description || "Achievement Gallery"}
              autoplayDelay={2000}
              slideShadows={true}
            />
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};