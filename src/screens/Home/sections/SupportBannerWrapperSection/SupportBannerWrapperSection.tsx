import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../../../components/ui/carousel";

export const SupportBannerWrapperSection = (): JSX.Element => {
  // Banner data for reusability
  const banners = [
    {
      backgroundImage: "/mask-group-2.png",
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "CONFIRA",
    },
    {
      backgroundImage: "/mask-group-3.png",
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "CONFIRA",
    },
  ];

  return (
    <section className="w-full py-8">
      <Carousel className="relative w-full max-w-[634px] mx-auto">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem
              key={`banner-${index}`}
              className="flex justify-center"
            >
              <Card className="relative w-[634px] h-[350px] overflow-hidden rounded-[20px] border-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${banner.backgroundImage})` }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-[261px] rounded-[0px_0px_20px_20px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_85%)] opacity-80" />
                <CardContent className="relative z-10 flex flex-col h-full pt-[114px] pl-11">
                  <h2 className="w-[216px] [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
                    {banner.title}
                  </h2>
                  <p className="w-[200px] mt-7 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                    {banner.description}
                  </p>
                  <Button className="w-[145px] h-12 mt-10 bg-amarelo rounded-md hover:bg-amarelo/90">
                    <span className="[font-family:'Poppins',Helvetica] font-bold text-roxo text-base text-center tracking-[1.28px] leading-[normal]">
                      {banner.buttonText}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
