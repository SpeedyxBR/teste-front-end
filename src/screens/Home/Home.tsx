import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { BrandNavigationSection } from "./sections/BrandNavigationSection";
import { CategoryPurchaseSection } from "./sections/CategoryPurchaseSection";
import { MainHeaderSection } from "./sections/MainHeaderSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { ProductShowcaseWrapperSection } from "./sections/ProductShowcaseWrapperSection";
import { SupportBannerSection } from "./sections/SupportBannerSection";
import { SupportBannerWrapperSection } from "./sections/SupportBannerWrapperSection";

export const Home = (): JSX.Element => {
  // Brand data for the brand navigation section
  const brandLogos = Array(5).fill({
    logoImages: [
      {
        src: "/exclude.svg",
        alt: "Exclude",
        className: "w-[35px] h-[35px] absolute top-0 left-0",
      },
      {
        src: "/caminho-33.svg",
        alt: "Caminho",
        className: "absolute w-[13px] h-[13px] top-3 left-8",
      },
      {
        src: "/caminho-34.svg",
        alt: "Caminho",
        className: "absolute w-[11px] h-3 top-3 left-[47px]",
      },
      {
        src: "/caminho-35.svg",
        alt: "Caminho",
        className: "absolute w-[13px] h-3 top-3 left-[59px]",
      },
      {
        src: "/caminho-36.svg",
        alt: "Caminho",
        className: "absolute w-3 h-[13px] top-3 left-[72px]",
      },
      {
        src: "/caminho-37.svg",
        alt: "Caminho",
        className: "absolute w-[7px] h-3 top-3 left-[86px]",
      },
      {
        src: "/caminho-38.svg",
        alt: "Caminho",
        className: "absolute w-2.5 h-[13px] top-3 left-[94px]",
      },
      {
        src: "/caminho-39.svg",
        alt: "Caminho",
        className: "absolute w-3 h-[13px] top-3 left-[105px]",
      },
    ],
    innerLogoImages: [
      {
        src: "/caminho-33.svg",
        alt: "Caminho",
        className: "absolute w-[13px] h-[13px] top-0 left-0",
      },
      {
        src: "/caminho-34.svg",
        alt: "Caminho",
        className: "absolute w-[11px] h-3 top-0 left-[15px]",
      },
      {
        src: "/caminho-35.svg",
        alt: "Caminho",
        className: "absolute w-[13px] h-3 top-0 left-[27px]",
      },
      {
        src: "/caminho-36.svg",
        alt: "Caminho",
        className: "absolute w-3 h-[13px] top-0 left-10",
      },
      {
        src: "/caminho-37.svg",
        alt: "Caminho",
        className: "absolute w-[7px] h-3 top-0 left-[54px]",
      },
      {
        src: "/caminho-38.svg",
        alt: "Caminho",
        className: "absolute w-2.5 h-[13px] top-0 left-[62px]",
      },
      {
        src: "/caminho-39.svg",
        alt: "Caminho",
        className: "absolute w-3 h-[13px] top-0 left-[73px]",
      },
    ],
  });

  // Category data
  const categories = [
    { name: "Mercados", className: "absolute top-[722px] left-[1495px]" },
    { name: "Padarias", className: "absolute top-[722px] left-[1698px]" },
    { name: "Oriental", className: "absolute top-[722px] left-[1899px]" },
  ];

  // Product images
  const productImages = [
    {
      src: "/image-67.png",
      alt: "Image",
      className:
        "w-[142px] h-[142px] top-[70px] left-[693px] absolute object-cover",
    },
    {
      src: "/image-70.png",
      alt: "Image",
      className:
        "w-[142px] h-[142px] top-[70px] left-[944px] absolute object-cover",
    },
    {
      src: "/image-74.png",
      alt: "Image",
      className:
        "w-[142px] h-[142px] top-[70px] left-[442px] absolute object-cover",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <section className="relative w-full">
          <MainHeaderSection />

          {/* Spacer for fixed header */}
          <div className="h-[100px] md:h-[124px] lg:h-[152px]"></div>

          <div className="relative w-full">
            <img
              className="w-full h-[380px] md:h-[420px] object-cover"
              alt="Banner promocional Black Friday"
              src="Rectangle 250.png"
            />

            <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_85%)]" />

            <div className="absolute w-full max-w-[822px] top-[80px] md:top-[140px] lg:top-[180px] left-4 md:left-[81px] font-['Poppins',Helvetica] font-semibold text-white text-2xl md:text-4xl lg:text-5xl tracking-[0] leading-[30px] md:leading-[40px] lg:leading-[50px] px-4">
              Venha conhecer nossas promoções
            </div>

            <div className="absolute top-[150px] md:top-[260px] lg:top-[280px] left-4 md:left-[78px] font-['Poppins',Helvetica] font-normal text-lg md:text-2xl lg:text-[32px] tracking-[0] leading-normal px-4 mt-2">
              <span className="font-bold text-[#f7ca11]">50% Off </span>
              <span className="text-white">nos produtos </span>
            </div>

            <Button className="absolute top-[190px] md:top-[280px] lg:top-[360px] left-4 md:left-[87px] w-[150px] md:w-[180px] lg:w-[206px] h-[40px] md:h-[45px] lg:h-[50px] bg-amarelo rounded-[5px] font-['Poppins',Helvetica] font-semibold text-[#271c47] text-sm md:text-base mx-4 hover:bg-[#e0b60f] transition-colors">
              Ver produto
            </Button>

            <CategoryPurchaseSection />
          </div>
        </section>

        {/* Product Showcase */}
        <div className="mt-[200px] md:mt-[250px] lg:mt-[300px]">
          <ProductShowcaseSection />
        </div>

        {/* Support Banner */}
        <div className="px-4">
          <SupportBannerSection />
        </div>

        {/* Product Showcase Wrapper */}
        <ProductShowcaseWrapperSection />

        {/* Support Banner Wrapper */}
        <div className="px-4">
          <SupportBannerWrapperSection />
        </div>

        {/* Brand Navigation */}
        <section className="w-full mt-8 px-4 md:px-6">
          <h2 className="font-['Poppins',Helvetica] font-bold text-azul text-2xl md:text-3xl text-center mb-8">
            Navegue por marcas
          </h2>

          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 md:gap-[42px] px-1 md:px-0 min-w-[600px] md:min-w-0">
              {brandLogos.map((brand, index) => (
                <Card
                  key={`brand-${index}`}
                  className="flex-shrink-0 w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[211px] lg:h-[211px] bg-white rounded-[75px] md:rounded-[90px] lg:rounded-[105.5px] shadow-[0px_7px_20px_#00000021] flex items-center justify-center hover:shadow-[0px_10px_30px_#00000030] transition-shadow cursor-pointer"
                >
                  <div className="relative w-[80px] md:w-[100px] lg:w-[117px] h-[24px] md:h-[30px] lg:h-[34.76px]">
                    <div className="h-[24px] md:h-[30px] lg:h-[35px]">
                      <div className="relative w-[80px] md:w-[100px] lg:w-[117px] h-[24px] md:h-[30px] lg:h-[35px]">
                        <div className="bg-[#f7ca11] rounded-full w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex items-center justify-center">
                          <span className="text-[#3019b2] font-bold text-xs md:text-sm lg:text-base">
                            e
                          </span>
                        </div>
                        <span className="absolute left-7 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 font-bold text-[#3019b2] text-xs md:text-sm lg:text-base">
                          converse
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </section>

        <BrandNavigationSection />
        <NewsletterSubscriptionSection />
      </div>
    </div>
  );
};
