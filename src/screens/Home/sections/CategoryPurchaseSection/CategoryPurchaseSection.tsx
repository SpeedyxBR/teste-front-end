import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CategoryPurchaseSection = (): JSX.Element => {
  // Define categories data for mapping - Imagens exatas do Figma
  const categories = [
    {
      name: "Tecnologia",
      image: "/tecnologia.png",
      isActive: true,
    },
    {
      name: "Supermercado",
      image: "/supermercados 1.png",
      isActive: false,
    },
    {
      name: "Bebidas",
      image: "whiskey.png",
      isActive: false,
    },
    {
      name: "Ferramentas",
      image: "/ferramentas 1.png",
      isActive: false,
    },
    {
      name: "Saúde",
      image: "cuidados-de-saude 1.png",
      isActive: false,
    },
    {
      name: "Esportes e Fitness",
      image: "corrida 1.png",
      isActive: false,
    },
    {
      name: "Moda",
      image: "moda 1.png",
      isActive: false,
    },
  ];

  return (
    <section 
      className="absolute top-[350px] md:top-[420px] lg:top-[480px] left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] px-4" 
      aria-label="Categorias de produtos"
    >
      <div className="flex items-center gap-3 md:gap-6 lg:gap-[42px] w-full overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center min-w-[100px] md:min-w-[120px] lg:w-32 flex-shrink-0">
            <Card
              className={`w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-32 lg:h-32 shadow-md cursor-pointer transition-all duration-200 hover:scale-105 ${
                category.isActive
                  ? "bg-white shadow-[0px_2px_9px_#00000038] ring-2 ring-[#3019b2]"
                  : "bg-[#f4f4f4] shadow-[0px_4px_11px_#00000021] hover:bg-white"
              }`}
              role="button"
              tabIndex={0}
              aria-label={`Categoria ${category.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Handle category selection
                }
              }}
            >
              <CardContent className="flex items-center justify-center h-full p-2">
                <img
                  className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] object-cover rounded-lg"
                  alt={`Ícone da categoria ${category.name}`}
                  src={category.image}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/70x70/f0f0f0/666666?text=Cat';
                  }}
                />
              </CardContent>
            </Card>

            <h3
              className={`mt-3 md:mt-4 lg:mt-6 font-['Poppins',Helvetica] text-xs md:text-sm text-center max-w-[90px] md:max-w-[110px] lg:max-w-[120px] leading-tight ${
                category.isActive
                  ? "font-semibold text-[#3019b2]"
                  : "font-medium text-[#4d4d4d]"
              }`}
            >
              {category.name}
            </h3>
          </div>
        ))}
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
  );
};