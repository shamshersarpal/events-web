"use client";
import { useState } from "react";
import a1 from "@/images/a1.jpg";
import a2 from "@/images/a2.jpg";
import a3 from "@/images/a3.jpg";
import a4 from "@/images/a4.jpg";
import Image from "next/image";

export default function AfricaTours() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [a1, a2, a3, a4];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <main className="px-4 lg:px-0">
        {/* Custom Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
          {/* Large image on the left */}
          <div className="md:col-span-2 row-span-3">
            <div
              className="group relative h-full overflow-hidden rounded-xl shadow cursor-pointer"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={a1}
                alt=""
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
            </div>
          </div>

          {/* Right-side stacked images */}
          {[a2, a3, a4].map((img, i) => (
            <div
              key={i + 1}
              className="relative h-[100%] overflow-hidden rounded-xl shadow cursor-pointer"
              onClick={() => openLightbox(i + 1)}
            >
              <Image
                src={img}
                alt=""
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            >
              &times;
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white text-4xl hover:text-gray-300"
            >
              &#8249;
            </button>

            <div className="relative w-full h-[80vh] mx-4">
              <Image
                src={images[currentImage]}
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white text-4xl hover:text-gray-300"
            >
              &#8250;
            </button>
          </div>
        )}
      </main>
    </>
  );
}
