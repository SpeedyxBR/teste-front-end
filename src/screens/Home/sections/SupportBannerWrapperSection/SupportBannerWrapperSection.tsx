// SupportBannerWrapperSection: Wrapper for the support banner section, used to group and style the support banners on the homepage.
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Functional component that renders a section with multiple support banners.
export const SupportBannerWrapperSection = (): JSX.Element => {
  // Banner data for reusability
  // Array of banner data for rendering each support banner
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

  // Render the section with mapped banners
  return (
    <section className="flex flex-wrap justify-center gap-[13px] w-full py-8">
      {/* Map through banners and render each Card */}
      {banners.map((banner, index) => (
        // Card for each banner
        <Card
          key={`banner-${index}`}
          className="relative w-[634px] h-[350px] overflow-hidden rounded-[20px] border-0"
        >
          {/* Banner background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.backgroundImage})` }}
          />

          {/* Gradient overlay for readability */}
          <div className="absolute bottom-0 left-0 right-0 h-[261px] rounded-[0px_0px_20px_20px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_85%)] opacity-80" />

          {/* Card content with title, description, and button */}
          <CardContent className="relative z-10 flex flex-col h-full pt-[114px] pl-11">
            {/* Banner title */}
            <h2 className="w-[216px] [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
              {banner.title}
            </h2>

            {/* Banner description */}
            <p className="w-[200px] mt-7 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
              {banner.description}
            </p>

            {/* Call-to-action button */}
            <Button className="w-[145px] h-12 mt-10 bg-amarelo rounded-md hover:bg-amarelo/90">
              {/* Button text */}
              <span className="[font-family:'Poppins',Helvetica] font-bold text-roxo text-base text-center tracking-[1.28px] leading-[normal]">
                {banner.buttonText}
              </span>
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
