// ProductShowcaseWrapperSection: Wrapper for the product showcase, used to organize and style the product listing area.
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "../../../../components/ProductCard";
import { ProductModal } from "../../../../components/ProductModal";
import { useProducts } from "../../../../hooks/useProducts";
import { Product } from "../../../../types/Product";

// Functional component that renders a section with a product showcase and modal.
export const ProductShowcaseWrapperSection = (): JSX.Element => {
  // Fetch products and manage loading/error state
  const { products, loading, error } = useProducts();
  // State for selected product in modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // State for modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for cart items
  const [cartItems, setCartItems] = useState<
    Array<{ product: Product; quantity: number }>
  >([]);

  // Handle click on a product card to open modal
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle closing the product modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle adding a product to the cart
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

  // Show loading state
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

  // Show error state
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

  // Render the product showcase section and modal
  return (
    <>
      {/* Product showcase section */}
      <section
        className="w-full max-w-[1364px] mx-auto py-8 px-4"
        aria-label="Mais produtos"
      >
        <header className="flex flex-col items-center mb-6">
          <div className="flex items-center w-full max-w-[1140px] justify-center mb-4">
            <div className="hidden md:block w-[360px] h-px bg-gray-300" />
            <h2 className="mx-8 [font-family:'Poppins',Helvetica] font-bold text-azul text-3xl">
              Produtos relacionados
            </h2>
            <div className="hidden md:block w-[360px] h-px bg-gray-300" />
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
            {products.slice(6, 10).map((product, index) => (
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
