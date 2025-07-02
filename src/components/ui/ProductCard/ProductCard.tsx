import React from 'react';
import { Product } from '../../types/Product';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price / 100);
  };

  const calculateInstallment = (price: number) => {
    const installmentValue = price / 12;
    return formatPrice(installmentValue);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/300x300/f0f0f0/666666?text=Produto';
  };

  return (
    <article className="product-card" onClick={() => onClick(product)}>
      <div className="product-card__image-container">
        <img
          src={product.photo}
          alt={product.productName}
          className="product-card__image"
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__title">{product.productName}</h3>
        <p className="product-card__description">{product.descriptionShort}</p>
        
        <div className="product-card__pricing">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <span className="product-card__installment">
            ou 12x de {calculateInstallment(product.price)} sem juros
          </span>
          <span className="product-card__shipping">Frete grátis</span>
        </div>
        
        <button className="product-card__buy-button" type="button">
          COMPRAR
        </button>
      </div>
    </article>
  );
};