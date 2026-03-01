"use client";

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
  // Filter services that have images
  const servicesWithImages = services.filter((s) => s.image);
  
  // Duplicate for seamless loop
  const duplicatedServices = [...servicesWithImages, ...servicesWithImages];

  if (servicesWithImages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-white/60 text-sm">
        Découvrez nos services
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex gap-2 animate-carousel-scroll h-full">
        {duplicatedServices.map((service, index) => (
          <div
            key={`${service.id}-${index}`}
            className="relative flex-shrink-0 w-24 h-full rounded-md overflow-hidden border border-white/20"
          >
            {service.image && (
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-1 left-1 right-1">
              <p className="text-[10px] text-white font-medium truncate leading-tight">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
