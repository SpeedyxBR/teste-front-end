import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { ProductCard } from "../../../../components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../../../components/ui/carousel";
import { ProductModal } from "../../../../components/ProductModal";
import { useProducts } from "../../../../hooks/useProducts";
import { Product } from "../../../../types/Product";

export const ProductShowcaseSection = (): JSX.Element => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<
    Array<{ product: Product; quantity: number }>
  >([]);

  // Ref para controlar o carrossel
  const carouselApiRef = useRef<any>(null);
  // Category tabs data
  const categories = [
    { id: "celular", label: "CELULAR", active: true },
    { id: "acessorios", label: "ACESSÓRIOS", active: false },
    { id: "tablets", label: "TABLETS", active: false },
    { id: "notebooks", label: "NOTEBOOKS", active: false },
    { id: "tvs", label: "TVS", active: false },
    { id: "ver-todos", label: "VER TODOS", active: false },
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.product.productName === product.productName
      );
      if (existingItem) {
        return prev.map((item) =>
          item.product.productName === product.productName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  if (loading) {
    return (
      <section
        className="w-full py-8 relative"
        aria-label="Produtos em destaque"
      >
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-500">Carregando produtos...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="w-full py-8 relative"
        aria-label="Produtos em destaque"
      >
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-red-500">
              Erro ao carregar produtos: {error}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        className="w-full py-8 relative"
        aria-label="Produtos em destaque"
      >
        <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-8">
          {/* Section Header */}
          <header className="flex flex-col items-center mb-4 w-full">
            <div className="flex items-center justify-center w-full mb-2">
              <div className="h-px bg-gray-300 hidden md:block flex-1" />
              <h2 className="mx-4 sm:mx-8 [font-family:'Poppins',Helvetica] font-bold text-[#3341b5] text-2xl sm:text-3xl text-center">
                Produtos relacionados
              </h2>
              <div className="h-px bg-gray-300 hidden md:block flex-1" />
            </div>
            <button className="font-bold text-preto text-[15px] text-center [font-family:'Poppins',Helvetica] hover:text-[#3341b5] transition-colors">
              Ver todos
            </button>
          </header>

          {/* Category Tabs */}
          <div className="relative z-20">
            <Tabs defaultValue="celular" className="w-full mb-6">
              <TabsList className="w-full h-10 p-0 bg-transparent grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0">
                {categories.map((category) => (
                  <TabsTrigger
                    asChild
                    key={category.id}
                    value={category.id}
                    className={`h-10 rounded-none border border-[#bdbdbd] ${
                      category.active
                        ? "[font-family:'Poppins',Helvetica] font-bold text-[#3341b5] bg-blue-50"
                        : "[font-family:'Poppins',Helvetica] font-normal text-[#3b3b3b] hover:bg-gray-50"
                    } text-sm sm:text-base transition-all`}
                  >
                    <button type="button">{category.label}</button>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          {/* Espaço entre as categorias e os cards */}
          <div className="h-16 sm:h-20" />

          {/* Product Cards: Carrossel apenas no mobile, grid no desktop */}
          <div className="relative z-10">
            {/* Navigation Buttons - soltas nas bordas, mas dentro do fluxo do container */}
            <button
              className="w-10 h-10 bg-white rounded-2xl shadow-[0px_4px_8px_#00000030] flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 border border-gray-200"
              aria-label="Produto anterior"
              type="button"
              style={{ marginLeft: "-24px" }}
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              className="w-10 h-10 bg-white rounded-2xl shadow-[0px_4px_8px_#00000030] flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 border border-gray-200"
              aria-label="Próximo produto"
              type="button"
              style={{ marginRight: "-24px" }}
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 justify-items-center max-w-[1600px] mx-auto px-2">
              {products.slice(0, 4).map((product, index) => (
                <div className="w-full max-w-[320px]">
                  <ProductCard
                    key={`${product.productName}-${index}`}
                    product={product}
                    onClick={handleProductClick}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};
