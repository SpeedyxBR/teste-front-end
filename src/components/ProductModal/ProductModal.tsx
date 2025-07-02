import React, { useState, useEffect } from "react";
import { X, Plus, Minus, ShoppingCart, Heart, Share2 } from "lucide-react";
import { Product } from "../../types/Product";
import "./ProductModal.scss";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setQuantity(1);
      setSelectedImage(0);
      setIsImageLoading(true);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price / 100);
  };

  const calculateInstallment = (price: number) => {
    const installmentValue = price / 12;
    return formatPrice(installmentValue);
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    setIsImageLoading(false);
  };

  // Simular múltiplas imagens do produto
  const productImages = [product.photo, product.photo, product.photo];

  return (
    <div
      className="product-modal-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div className="product-modal">
        {/* Drag handle para mobile */}
        <div className="product-modal__drag-handle" aria-hidden="true"></div>
        <header className="product-modal__header">
          <button
            className="product-modal__close"
            onClick={onClose}
            aria-label="Fechar modal"
            type="button"
          >
            <X size={24} />
          </button>
        </header>

        <div className="product-modal__content">
          <section
            className="product-modal__gallery"
            aria-label="Galeria de imagens do produto"
          >
            <div className="product-modal__main-image">
              {isImageLoading && (
                <div className="product-modal__image-skeleton" />
              )}
              <img
                src={productImages[selectedImage]}
                alt={product.productName}
                className="product-modal__image"
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: isImageLoading ? "none" : "block" }}
              />
            </div>

            <div className="product-modal__thumbnails">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`product-modal__thumbnail ${
                    selectedImage === index
                      ? "product-modal__thumbnail--active"
                      : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Ver imagem ${index + 1} do produto`}
                  type="button"
                >
                  <img
                    src={image}
                    alt={`${product.productName} - Imagem ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </section>

          <section className="product-modal__details">
            <div className="product-modal__info">
              <h1 id="product-modal-title" className="product-modal__title">
                {product.productName}
              </h1>

              <p className="product-modal__description">
                {product.descriptionShort}
              </p>

              <div className="product-modal__pricing">
                <div className="product-modal__price">
                  <span className="product-modal__current-price">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <div className="product-modal__installment">
                  <span>
                    ou 12x de {calculateInstallment(product.price)} sem juros
                  </span>
                </div>

                <div className="product-modal__shipping">
                  <span className="product-modal__free-shipping">
                    Frete grátis
                  </span>
                </div>
              </div>

              <div className="product-modal__actions">
                <div className="product-modal__quantity">
                  <label
                    htmlFor="quantity-input"
                    className="product-modal__quantity-label"
                  >
                    Quantidade:
                  </label>
                  <div className="product-modal__quantity-controls">
                    <button
                      className="product-modal__quantity-btn"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      aria-label="Diminuir quantidade"
                      type="button"
                    >
                      <Minus size={16} />
                    </button>

                    <input
                      id="quantity-input"
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 1 && value <= 99) {
                          setQuantity(value);
                        }
                      }}
                      min="1"
                      max="99"
                      className="product-modal__quantity-input"
                      aria-label="Quantidade do produto"
                    />

                    <button
                      className="product-modal__quantity-btn"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= 99}
                      aria-label="Aumentar quantidade"
                      type="button"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="product-modal__buttons">
                  <button
                    className="product-modal__add-to-cart"
                    onClick={handleAddToCart}
                    type="button"
                  >
                    <ShoppingCart size={20} />
                    Adicionar ao Carrinho
                  </button>

                  <div className="product-modal__secondary-actions">
                    <button
                      className="product-modal__wishlist"
                      aria-label="Adicionar aos favoritos"
                      type="button"
                    >
                      <Heart size={20} />
                    </button>

                    <button
                      className="product-modal__share"
                      aria-label="Compartilhar produto"
                      type="button"
                    >
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-modal__features">
                <h3 className="product-modal__features-title">
                  Características do produto:
                </h3>
                <ul className="product-modal__features-list">
                  <li>✓ Produto original e lacrado</li>
                  <li>✓ Garantia de 12 meses</li>
                  <li>✓ Entrega rápida e segura</li>
                  <li>✓ Suporte técnico especializado</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
