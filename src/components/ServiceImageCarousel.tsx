"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  image?: string;
  title: string;
}

interface ServiceImageCarouselProps {
  services: ServiceItem[];
}

export default function ServiceImageCarousel({ services }: ServiceImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Filter services that have images
  const servicesWithImages = services.filter((s) => s.image);
  
  if (servicesWithImages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-white/60 text-sm">
        Découvrez nos services
      </div>
    );
  }

  // Auto-advance carousel
  useEffect(() => {
    if (servicesWithImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesWithImages.length);
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, [servicesWithImages.length]);

  const currentService = servicesWithImages[currentIndex];

  return (
    <div className="relative w-full h-full">
      {/* Image Container with Fade Transition */}
      <div className="relative w-full h-full overflow-hidden rounded-md">
        {servicesWithImages.map((service, index) => (
          <div
            key={service.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {service.image && (
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Title at Bottom */}
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-sm text-white font-semibold leading-tight">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress Indicators */}
      {servicesWithImages.length > 1 && (
        <div className="absolute top-2 left-2 right-2 flex gap-1">
          {servicesWithImages.map((_, index) => (
            <div
              key={index}
              className="h-1 flex-1 rounded-full bg-white/30 overflow-hidden"
            >
              <div
                className={`h-full bg-white transition-all duration-300 ${
                  index === currentIndex ? "w-full" : "w-0"
                }`}
                style={{
                  transitionDuration: index === currentIndex ? "4000ms" : "300ms"
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
