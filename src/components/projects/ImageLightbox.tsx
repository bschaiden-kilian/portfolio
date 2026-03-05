"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

export default function ImageLightbox({ images, title }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (images.length === 0) return null;

  function openAt(i: number) {
    setIndex(i);
    setOpen(true);
  }

  return (
    <>
      {/* Gallery thumbnails */}
      {images.length === 1 && (
        <div
          className="mb-12 cursor-zoom-in overflow-hidden rounded-xl border border-border"
          onClick={() => openAt(0)}
        >
          <Image
            src={images[0]}
            alt={`${title} screenshot`}
            width={1200}
            height={675}
            className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      )}

      {images.length === 2 && (
        <div className="mb-12 grid grid-cols-2 gap-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="cursor-zoom-in overflow-hidden rounded-xl border border-border"
              onClick={() => openAt(i)}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      )}

      {images.length >= 3 && (
        <div className="mb-12 space-y-3">
          <div
            className="cursor-zoom-in overflow-hidden rounded-xl border border-border"
            onClick={() => openAt(0)}
          >
            <Image
              src={images[0]}
              alt={`${title} screenshot 1`}
              width={1200}
              height={675}
              className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <div
            className={`grid gap-3 ${images.slice(1).length === 2 ? "grid-cols-2" : "grid-cols-3"}`}
          >
            {images.slice(1).map((src, i) => (
              <div
                key={i}
                className="cursor-zoom-in overflow-hidden rounded-xl border border-border"
                onClick={() => openAt(i + 1)}
              >
                <Image
                  src={src}
                  alt={`${title} screenshot ${i + 2}`}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* Image container — stop click propagation so overlay-click still closes */}
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-zinc-400 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              ✕ Close
            </button>

            {/* Main image */}
            <div className="overflow-hidden rounded-xl border border-border/50 shadow-2xl">
              <Image
                src={images[index]}
                alt={`${title} screenshot ${index + 1}`}
                width={1400}
                height={900}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>

            {/* Counter + nav — only shown for multiple images */}
            {images.length > 1 && (
              <div className="mt-4 flex items-center gap-6">
                <button
                  onClick={prev}
                  className="text-zinc-400 hover:text-foreground transition-colors text-lg"
                  aria-label="Previous image"
                >
                  ← Prev
                </button>
                <span className="font-mono text-sm text-zinc-500">
                  {index + 1} / {images.length}
                </span>
                <button
                  onClick={next}
                  className="text-zinc-400 hover:text-foreground transition-colors text-lg"
                  aria-label="Next image"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
