import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ProductCard } from "../../../../components/ProductCard";
import { ProductModal } from "../../../../components/ProductModal";
import { useProducts } from "../../../../hooks/useProducts";
import { Product } from "../../../../types/Product";

export const BrandNavigationSection = (): JSX.Element => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<
    Array<{ product: Product; quantity: number }>
  >([]);

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
        className="w-full max-w-[1364px] mx-auto py-8"
        aria-label="Produtos relacionados"
      >
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">Carregando produtos...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="w-full max-w-[1364px] mx-auto py-8"
        aria-label="Produtos relacionados"
      >
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-red-500">
            Erro ao carregar produtos: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        className="w-full max-w-[1364px] mx-auto py-8 px-2 sm:px-4"
        aria-label="Produtos relacionados"
      >
        <header className="flex flex-col items-center mb-6 w-full">
          <div className="flex items-center w-full max-w-[1140px] mb-4">
            <div className="flex-1 h-px bg-gray-300 hidden md:block" />
            <h2 className="mx-4 md:mx-8 font-bold text-azul text-2xl sm:text-3xl md:text-4xl text-center [font-family:'Poppins',Helvetica] w-full">
              Produtos relacionados
            </h2>
            <div className="flex-1 h-px bg-gray-300 hidden md:block" />
          </div>
          <button className="font-bold text-preto text-[15px] text-center [font-family:'Poppins',Helvetica] hover:text-azul transition-colors">
            Ver todos
          </button>
        </header>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 pointer-events-none">
            <button
              className="w-8 h-8 bg-white rounded-2xl shadow-[0px_4px_4px_#00000040] flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform"
              aria-label="Produto anterior"
              type="button"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
            <button
              className="w-8 h-8 bg-white rounded-2xl shadow-[0px_4px_4px_#00000040] flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform"
              aria-label="Próximo produto"
              type="button"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {products.slice(4, 8).map((product, index) => (
              <ProductCard
                key={`${product.productName}-${index}`}
                product={product}
                onClick={handleProductClick}
              />
            ))}
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
