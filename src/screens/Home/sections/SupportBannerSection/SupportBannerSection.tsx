// SupportBannerSection: Displays a support banner with relevant information or promotions for the user.
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Functional component that renders a section with multiple support banners.
export const SupportBannerSection = (): JSX.Element => {
  // Data for banner cards to enable mapping
  // Array of banner card data for rendering
  const bannerCards = [
    {
      id: 1,
      backgroundImage: "/mask-group.png",
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "CONFIRA",
    },
    {
      id: 2,
      backgroundImage: "/mask-group-1.png",
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "CONFIRA",
    },
  ];

  // Render the section with mapped banner cards
  return (
    <section className="flex flex-row items-center gap-[13px] w-full">
      {/* Map through bannerCards and render each Card */}
      {bannerCards.map((card) => (
        // Card for each banner
        <Card
          key={card.id}
          className="relative w-[634px] h-[350px] rounded-[20px] overflow-hidden"
          style={{
            backgroundImage: `url(${card.backgroundImage})`,
            backgroundSize: "100% 100%",
          }}
        >
          {/* Gradient overlay for readability */}
          <div className="absolute w-full h-[261px] bottom-0 rounded-[0px_0px_20px_20px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_85%)] opacity-80" />

          {/* Card content with title, description, and button */}
          <CardContent className="relative z-10 pt-[114px] pl-11">
            {/* Banner title */}
            <h2 className="w-[216px] [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal] mb-7">
              {card.title}
            </h2>

            {/* Banner description */}
            <p className="w-[200px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] mb-10">
              {card.description}
            </p>

            {/* Call-to-action button */}
            <Button className="w-[145px] h-12 bg-amarelo rounded-md hover:bg-amarelo/90">
              {/* Button text */}
              <span className="[font-family:'Poppins',Helvetica] font-bold text-roxo text-base text-center tracking-[1.28px] leading-[normal]">
                {card.buttonText}
              </span>
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
