import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "../../../../components/ProductCard";
import { ProductModal } from "../../../../components/ProductModal";
import { useProducts } from "../../../../hooks/useProducts";
import { Product } from "../../../../types/Product";

export const ProductShowcaseWrapperSection = (): JSX.Element => {
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
        aria-label="Mais produtos"
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
        aria-label="Mais produtos"
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
        className="w-full max-w-[1364px] mx-auto py-8 px-4"
        aria-label="Mais produtos"
      >
        <header className="flex flex-col items-center mb-6 w-full">
          <div className="flex flex-col sm:flex-row items-center w-full max-w-full sm:max-w-[1140px] justify-center mb-4 gap-2 sm:gap-0">
            <div className="hidden sm:block flex-1 h-px bg-gray-300 min-w-[40px]" />
            <h2 className="mx-0 sm:mx-8 [font-family:'Poppins',Helvetica] font-bold text-azul text-2xl sm:text-3xl md:text-4xl text-center w-full sm:w-auto">
              Produtos relacionados
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-gray-300 min-w-[40px]" />
          </div>
          <button className="font-bold text-preto text-[15px] text-center [font-family:'Poppins',Helvetica] hover:text-azul transition-colors w-full sm:w-auto mt-2 sm:mt-0">
            Ver todos
          </button>
        </header>

        <div className="relative">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 justify-items-center max-w-[1600px] mx-auto px-2">
            {products.slice(6, 10).map((product, index) => (
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
