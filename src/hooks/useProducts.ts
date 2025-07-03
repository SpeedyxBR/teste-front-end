import { useState, useEffect } from "react";
import { Product, ProductResponse } from "../types/Product";

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
          success: true,
          products: [
            {
              productName: "iPhone 11 Pro Max 256GB Branco",
              descriptionShort:
                "Desempenho avançado e câmera tripla de última geração.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 15000,
            },
            {
              productName: "iPhone 13 Mini 128GB Azul",
              descriptionShort:
                "Compacto, potente e com tela Super Retina XDR.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 9000,
            },
            {
              productName: "iPhone 11 Pro Max 64GB Dourado",
              descriptionShort:
                "Bateria de longa duração e acabamento premium.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 14990,
            },
            {
              productName: "iPhone 13 Mini 256GB Preto",
              descriptionShort: "Design elegante e performance surpreendente.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 12000,
            },
            {
              productName: "iPhone 11 Pro Max 128GB Verde",
              descriptionShort: "Tela OLED de 6,5'' e resistência à água.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 4550,
            },
            {
              productName: "iPhone 13 Mini 512GB Branco",
              descriptionShort: "Armazenamento de sobra e câmeras aprimoradas.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 38000,
            },
            {
              productName: "iPhone 11 Pro Max 512GB Cinza Espacial",
              descriptionShort: "O topo de linha para quem exige o máximo.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 42000,
            },
            {
              productName: "iPhone 13 Mini 64GB Rosa",
              descriptionShort: "Leve, moderno e com bateria otimizada.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 520,
            },
            {
              productName: "iPhone 11 Pro Max 128GB Prata",
              descriptionShort: "Experiência premium em todos os detalhes.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 149990,
            },
            {
              productName: "iPhone 13 Mini 128GB Verde",
              descriptionShort: "Tecnologia de ponta em um formato compacto.",
              photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
              price: 100000,
            },
          ],
        };

        if (mockData.success) {
          setProducts(mockData.products);
        } else {
          setError("Falha ao carregar produtos");
        }
      } catch (err) {
        setError("Erro ao buscar produtos");
        console.error("Erro ao buscar produtos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
