import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
// Importe o logotipo que você escolheu (ex: rs_logo_design_1.png)
 // Caminho relativo para sua imagem

const PortfolioQRCode = () => {
  const portfolioUrl = "https://portifolio-dev-sigma-one.vercel.app/";

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md max-w-sm mx-auto border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Acesse meu Portfólio</h3>
      <p className="text-sm text-gray-500 text-center mb-4">
        Escaneie com a câmera do celular para ver meus projetos.
      </p>
      
      <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
        <QRCodeSVG 
          value={portfolioUrl} 
          size={200}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"H"} // Mantemos 'H' para maior tolerância a erros com o logo
          includeMargin={true}
          // Adicione esta seção de imageSettings:
          imageSettings={{
            src: "./img-qrcode.png", // <--- Altere para o texto com a barra inicial
            x: undefined,
            y: undefined,
            height: 40,
            width: 40,
            excavate: true,
          }}
        />
      </div>
      
      <span className="mt-3 text-xs text-blue-600 font-mono break-all">{portfolioUrl}</span>
    </div>
  );
};

export default PortfolioQRCode;