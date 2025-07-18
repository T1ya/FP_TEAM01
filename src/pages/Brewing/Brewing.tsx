import React from 'react';

const Brewing: React.FC = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white/70 rounded-2xl p-10 shadow-xl w-[300px] flex flex-col items-center">
        <div className="relative mb-4">
          {/* Чашка */}
          <div className="w-24 h-16 bg-brown-700 rounded-b-full relative z-10"></div>
          
          {/* Ручка чашки */}
          <div className="absolute top-2 right-[-15px] w-6 h-10 border-4 border-brown-700 rounded-full z-0"></div>

          {/* Пар */}
          <div className="absolute top-[-30px] left-[30%] w-2 h-10 bg-white/70 rounded-full animate-steam"></div>
          <div className="absolute top-[-40px] left-[45%] w-2 h-12 bg-white/60 rounded-full animate-steam delay-200"></div>
          <div className="absolute top-[-50px] left-[60%] w-2 h-14 bg-white/50 rounded-full animate-steam delay-500"></div>
        </div>

        <p className="text-xl font-semibold text-brown-900 animate-pulse text-center">
          Готовим напиток...
        </p>
      </div>

      {/* Анимация пара */}
      <style>
        {`
          @keyframes steam {
            0% {
              opacity: 0.6;
              transform: translateY(0) scaleX(1);
            }
            100% {
              opacity: 0;
              transform: translateY(-40px) scaleX(1.2);
            }
          }

          .animate-steam {
            animation: steam 2s infinite ease-in-out;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .delay-500 {
            animation-delay: 0.5s;
          }

          .bg-brown-700 {
            background-color: #5C4033;
          }

          .border-brown-700 {
            border-color: #5C4033;
          }
        `}
      </style>
    </div>
  );
};

export default Brewing;