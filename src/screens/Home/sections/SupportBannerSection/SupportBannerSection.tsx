import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SupportBannerSection = (): JSX.Element => {
  // Data for banner cards to enable mapping
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

  return (
    <section className="flex flex-row items-center gap-[13px] w-full">
      {bannerCards.map((card) => (
        <Card
          key={card.id}
          className="relative w-[634px] h-[350px] rounded-[20px] overflow-hidden"
          style={{
            backgroundImage: `url(${card.backgroundImage})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="absolute w-full h-[261px] bottom-0 rounded-[0px_0px_20px_20px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_85%)] opacity-80" />

          <CardContent className="relative z-10 pt-[114px] pl-11">
            <h2 className="w-[216px] [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal] mb-7">
              {card.title}
            </h2>

            <p className="w-[200px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] mb-10">
              {card.description}
            </p>

            <Button className="w-[145px] h-12 bg-amarelo rounded-md hover:bg-amarelo/90">
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
