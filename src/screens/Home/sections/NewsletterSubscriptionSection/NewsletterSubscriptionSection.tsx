import React from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const NewsletterSubscriptionSection = (): JSX.Element => {
  // Footer links data
  const footerColumns = [
    {
      title: "Institucional",
      links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
    },
    {
      title: "Ajuda",
      links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
    },
    {
      title: "Termos",
      links: [
        "Termos e Condições",
        "Política de Privacidade",
        "Troca e Devolução",
      ],
    },
  ];

  // Social media icons
  const socialIcons = [
    { name: "Instagram", src: "/instagram.svg" },
    { name: "Facebook", src: "/facebook.svg" },
    { name: "Linkedin", src: "/linkedin.svg" },
  ];

  return (
    <section className="flex flex-col w-full items-center">
      {/* Newsletter Subscription Banner */}
      <div className="w-full bg-cores-principaisvioleta">
        <div className="container flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-5 md:px-20">
          {/* Left side - Text */}
          <div className="flex flex-col items-start gap-2 mb-6 md:mb-0">
            <h2 className="font-['Outfit',Helvetica] font-semibold text-white text-[32px] leading-[38.4px] max-w-[463px]">
              Inscreva-se na nossa newsletter
            </h2>
            <p className="font-['Poppins',Helvetica] font-light text-white text-sm leading-[18px] max-w-[515px]">
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6">
              <Input
                className="w-full sm:w-[233px] h-[42px] bg-white rounded-lg border border-[#e6e6e6] px-6 py-3 font-['Poppins',Helvetica] text-[#676767] text-sm"
                placeholder="Digite seu nome"
              />
              <Input
                className="w-full sm:w-[233px] h-[42px] bg-white rounded-lg border border-[#e6e6e6] px-6 py-3 font-['Poppins',Helvetica] text-[#676767] text-sm"
                placeholder="Digite seu e-mail"
                type="email"
              />
              <Button className="w-full sm:w-auto px-10 py-[15px] bg-[#f7ca11] rounded-lg font-['Poppins',Helvetica] font-semibold text-[#161615] text-sm leading-3 hover:bg-[#e0b60f]">
                INSCREVER
              </Button>
            </div>

            <div className="flex items-center gap-1 mt-2">
              <Checkbox
                id="terms"
                className="w-[15px] h-[15px] rounded-[1px] border-[#8c342b] bg-neutral-100"
              />
              <label
                htmlFor="terms"
                className="font-['Poppins',Helvetica] font-normal text-white text-sm leading-[21px] cursor-pointer"
              >
                Aceito os termos e condições
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#f4f4f4]">
        <div className="container flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[90px] px-5 md:px-20 py-[42px]">
          {/* Company Info */}
          <div className="flex flex-col items-start gap-[27px]">
            {/* Logo */}
            <div className="flex flex-col items-start gap-[18px]">
              <div className="relative w-[164px] h-12">
                <div className="relative h-12">
                  <img
                    className="absolute w-[49px] h-12 top-0 left-0"
                    alt="Caminho"
                    src="/caminho-30.svg"
                  />
                  <img
                    className="absolute w-[17px] h-[17px] top-4 left-2"
                    alt="Caminho"
                    src="/caminho-39-1.svg"
                  />
                  <img
                    className="absolute w-4 h-[17px] top-4 left-[27px]"
                    alt="Caminho"
                    src="/caminho-32.svg"
                  />
                  <img
                    className="absolute w-[18px] h-[17px] top-4 left-[45px]"
                    alt="Caminho"
                    src="/caminho-33.svg"
                  />
                  <img
                    className="absolute w-4 h-[17px] top-4 left-[65px]"
                    alt="Caminho"
                    src="/caminho-34.svg"
                  />
                  <img
                    className="absolute w-[18px] h-4 top-[17px] left-[83px]"
                    alt="Caminho"
                    src="/caminho-35.svg"
                  />
                  <img
                    className="absolute w-[17px] h-[17px] top-4 left-[101px]"
                    alt="Caminho"
                    src="/caminho-36-2.svg"
                  />
                  <img
                    className="absolute w-[9px] h-[17px] top-[17px] left-[121px]"
                    alt="Caminho"
                    src="/caminho-37-11.svg"
                  />
                  <img
                    className="absolute w-3.5 h-[17px] top-4 left-[131px]"
                    alt="Caminho"
                    src="/caminho-38.svg"
                  />
                  <img
                    className="absolute w-[17px] h-[17px] top-4 left-[147px]"
                    alt="Caminho"
                    src="/caminho-39-1.svg"
                  />
                  <div className="absolute w-[164px] h-12 top-0 left-0">
                    <div className="absolute w-[62px] h-12 top-0 left-0">
                      <img
                        className="absolute w-[49px] h-12 top-0 left-0"
                        alt="Group"
                        src="/group-1.png"
                      />
                      <img
                        className="absolute w-[18px] h-[17px] top-4 left-[45px]"
                        alt="Caminho"
                        src="/caminho-33.svg"
                      />
                    </div>
                    <img
                      className="absolute w-4 h-[17px] top-4 left-[65px]"
                      alt="Caminho"
                      src="/caminho-34.svg"
                    />
                    <img
                      className="absolute w-[18px] h-4 top-[17px] left-[83px]"
                      alt="Caminho"
                      src="/caminho-35.svg"
                    />
                    <img
                      className="absolute w-[17px] h-[17px] top-4 left-[101px]"
                      alt="Caminho"
                      src="/caminho-36-2.svg"
                    />
                    <img
                      className="absolute w-[9px] h-[17px] top-[17px] left-[121px]"
                      alt="Caminho"
                      src="/caminho-37-11.svg"
                    />
                    <img
                      className="absolute w-3.5 h-[17px] top-4 left-[131px]"
                      alt="Caminho"
                      src="/caminho-38.svg"
                    />
                    <img
                      className="absolute w-[17px] h-[17px] top-4 left-[147px]"
                      alt="Caminho"
                      src="/caminho-39-1.svg"
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm font-['Poppins',Helvetica] font-light text-preto max-w-[354px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-[26px]">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  className="w-6 h-6"
                  alt={icon.name}
                  src={icon.src}
                />
              ))}
            </div>
          </div>

          {/* Vertical Separator */}
          <Separator
            orientation="vertical"
            className="hidden md:block h-[198px]"
          />

          {/* Footer Links */}
          <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-[100px]">
            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col items-start gap-5">
                <h3 className="font-['Poppins',Helvetica] font-bold text-[#222222b5] text-base leading-4">
                  {column.title}
                </h3>
                <ul className="flex flex-col items-start gap-4">
                  {column.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className={`font-${column.title === "Termos" ? "['Poppins']" : "['Work_Sans']"},Helvetica font-normal text-[#222222b5] text-sm leading-4 cursor-pointer`}
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="w-full bg-white py-3">
        <div className="container text-center">
          <p className="text-[13px] font-['Poppins',Helvetica] font-light text-preto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};
