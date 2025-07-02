import { useState, useEffect } from 'react';
import { Product, ProductResponse } from '../types/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Simulando dados do JSON fornecido
        const mockData: ProductResponse = {
          "success": true,
          "products": [
            {
              "productName": "Iphone 11 PRO MAX BRANCO 1",
              "descriptionShort": "Iphone 11 PRO MAX BRANCO 1",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 15000
            },
            {
              "productName": "IPHONE 13 MINI 1",
              "descriptionShort": "IPHONE 13 MINI 1",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 9000
            },
            {
              "productName": "Iphone 11 PRO MAX BRANCO 2",
              "descriptionShort": "Iphone 11 PRO MAX BRANCO 2",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 14990
            },
            {
              "productName": "IPHONE 13 MINI 2",
              "descriptionShort": "IPHONE 13 MINI 2",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 12000
            },
            {
              "productName": "Iphone 11 PRO MAX BRANCO 3",
              "descriptionShort": "Iphone 11 PRO MAX BRANCO 3",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 4550
            },
            {
              "productName": "IPHONE 13 MINI 3",
              "descriptionShort": "IPHONE 13 MINI 3",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 38000
            },
            {
              "productName": "Iphone 11 PRO MAX BRANCO 4",
              "descriptionShort": "Iphone 11 PRO MAX BRANCO 4",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 42000
            },
            {
              "productName": "IPHONE 13 MINI 4",
              "descriptionShort": "IPHONE 13 MINI 4",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 520
            },
            {
              "productName": "Iphone 11 PRO MAX BRANCO 5",
              "descriptionShort": "Iphone 11 PRO MAX BRANCO 5",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 149990
            },
            {
              "productName": "IPHONE 13 MINI 5",
              "descriptionShort": "IPHONE 13 MINI 5",
              "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              "price": 100000
            }
          ]
        };

        if (mockData.success) {
          setProducts(mockData.products);
        } else {
          setError('Falha ao carregar produtos');
        }
      } catch (err) {
        setError('Erro ao buscar produtos');
        console.error('Erro ao buscar produtos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};