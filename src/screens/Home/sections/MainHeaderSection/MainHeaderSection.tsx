import {
  CreditCardIcon,
  CrownIcon,
  HeartIcon,
  SearchIcon,
  ShieldIcon,
  ShoppingCartIcon,
  TruckIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const MainHeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(3);

  // Top bar promotional messages data
  const promoMessages = [
    {
      icon: <ShieldIcon className="w-4 h-4 md:w-5 md:h-5" />,
      text: (
        <>
          <span className="font-medium text-[#9f9f9f]">Compra</span>
          <span className="font-semibold text-[#3019b2]"> 100% segura</span>
        </>
      ),
    },
    {
      icon: <TruckIcon className="w-4 h-4 md:w-5 md:h-5" />,
      text: (
        <>
          <span className="font-semibold text-[#3019b2]">Frete grátis</span>
          <span className="font-medium text-[#9f9f9f]"> acima de R$ 200</span>
        </>
      ),
    },
    {
      icon: <CreditCardIcon className="w-4 h-4 md:w-5 md:h-5" />,
      text: (
        <>
          <span className="font-semibold text-[#3019b2]">Parcele</span>
          <span className="font-medium text-[#9f9f9f]"> suas compras</span>
        </>
      ),
    },
  ];

  // Navigation categories data
  const categories = [
    { name: "TODAS CATEGORIAS", active: false },
    { name: "SUPERMERCADO", active: false },
    { name: "LIVROS", active: false },
    { name: "MODA", active: false },
    { name: "LANÇAMENTOS", active: false },
    { name: "OFERTAS DO DIA", active: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Top bar with promotional messages - Hidden on mobile */}
      <div className="w-full h-8 bg-white hidden lg:block">
        <div className="max-w-[1280px] mx-auto relative h-full">
          <div className="flex items-center justify-center gap-8 xl:gap-[119px] h-full px-4">
            {promoMessages.map((promo, index) => (
              <div key={index} className="flex items-center gap-2">
                {promo.icon}
                <div className="[font-family:'Poppins',Helvetica] font-normal text-xs">
                  {promo.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator className="w-full" />
      </div>

      {/* Main navigation bar */}
      <div className="w-full h-[60px] md:h-[72px] bg-white">
        <div className="max-w-[1280px] mx-auto relative h-full flex items-center justify-between px-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-md transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <MenuIcon className="w-6 h-6 text-gray-600" />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/econverse.png"
              alt="Econverse logo"
              className="w-[120px] h-auto object-contain"
              style={{ maxHeight: '41px' }}
            />
          </div>

          {/* Search bar - Hidden on mobile */}
          <div className="hidden lg:flex relative w-[400px] xl:w-[630px] h-12 bg-[#f6f5f2] rounded-[10px] items-center">
            <Input
              className="h-12 border-none bg-transparent pl-4 pr-12 [font-family:'Poppins',Helvetica] font-medium text-gray-600 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-0"
              placeholder="O que você está buscando?"
            />
            <SearchIcon className="absolute w-6 h-6 right-4 text-gray-400" />
          </div>

          {/* Utility icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search icon for mobile/tablet */}
            <button className="lg:hidden hover:bg-gray-100 p-2 rounded-md transition-colors" aria-label="Buscar">
              <SearchIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>
            
            {/* Box/Package icon */}
            <button className="hidden md:flex hover:bg-gray-100 p-2 rounded-md transition-colors" aria-label="Pedidos">
              <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-gray-600 rounded-sm relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-1 bg-gray-600 rounded-sm"></div>
              </div>
            </button>

            {/* Heart icon */}
            <button className="hidden md:flex hover:bg-gray-100 p-2 rounded-md transition-colors" aria-label="Favoritos">
              <HeartIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>

            {/* User icon */}
            <button className="hidden md:flex hover:bg-gray-100 p-2 rounded-md transition-colors" aria-label="Conta">
              <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>

            {/* Shopping cart with counter */}
            <button className="relative hover:bg-gray-100 p-2 rounded-md transition-colors" aria-label="Carrinho de compras">
              <ShoppingCartIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f7ca11] text-[#3019b2] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center min-w-[20px] text-[10px]">
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
        <Separator className="w-full" />
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden w-full bg-white px-4 py-3 border-b">
        <div className="relative w-full h-10 bg-[#f6f5f2] rounded-[10px] flex items-center">
          <Input
            className="h-10 border-none bg-transparent pl-4 pr-10 [font-family:'Poppins',Helvetica] font-medium text-gray-600 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-0"
            placeholder="O que você está buscando?"
          />
          <SearchIcon className="absolute w-5 h-5 right-3 text-gray-400" />
        </div>
      </div>

      {/* Categories navigation - Desktop */}
      <div className="hidden lg:block w-full h-10 bg-white shadow-[0px_8px_16px_#3930131f]">
        <div className="max-w-[1280px] mx-auto h-full">
          <div className="flex items-center justify-start gap-6 xl:gap-[91px] h-full pl-4 xl:pl-[69px] overflow-x-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`[font-family:'Poppins',Helvetica] font-semibold text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#3019b2] transition-colors px-2 py-1 rounded
                  ${category.active ? "text-[#3019b2]" : "text-gray-600"}`}
              >
                {category.name}
              </button>
            ))}

            <div className="flex items-center whitespace-nowrap hover:text-[#3019b2] transition-colors cursor-pointer px-2 py-1 rounded">
              <CrownIcon className="w-4 h-4 text-gray-600" />
              <span className="ml-2 [font-family:'Poppins',Helvetica] font-semibold text-gray-600 text-xs tracking-[0] leading-[normal]">
                ASSINATURA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMobileMenu}>
          <div 
            className="bg-white w-80 h-full shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out" 
            onClick={(e) => e.stopPropagation()}
            style={{ transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b bg-[#f8f9fa]">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#f7ca11] rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#3019b2] font-bold text-sm">e</span>
                </div>
                <span className="font-bold text-[#3019b2] text-lg">converse</span>
              </div>
              <button 
                onClick={toggleMobileMenu} 
                aria-label="Fechar menu"
                className="hover:bg-gray-200 p-2 rounded-md transition-colors"
              >
                <XIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-4">
              {/* User Actions */}
              <div className="space-y-2 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Minha Conta</h3>
                <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <UserIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Entrar / Cadastrar</span>
                </button>
                <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <HeartIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Favoritos</span>
                </button>
                <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-5 h-5 border-2 border-gray-600 rounded-sm relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-1 bg-gray-600 rounded-sm"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Meus Pedidos</span>
                </button>
              </div>

              <Separator className="my-4" />

              {/* Categories */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Categorias</h3>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`block w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors
                      ${category.active ? "text-[#3019b2] font-semibold bg-blue-50" : "text-gray-700"}`}
                  >
                    {category.name}
                  </button>
                ))}
                
                <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <CrownIcon className="w-5 h-5 text-[#f7ca11]" />
                  <span className="text-gray-700 font-medium">ASSINATURA</span>
                </button>
              </div>

              <Separator className="my-4" />

              {/* Promotional Messages */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Vantagens</h3>
                {promoMessages.map((promo, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    {promo.icon}
                    <div className="[font-family:'Poppins',Helvetica] font-normal text-xs">
                      {promo.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};