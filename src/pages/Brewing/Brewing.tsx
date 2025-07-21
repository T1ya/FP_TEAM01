import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Brewing: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/ready');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
    >
      <div className="bg-white/70 rounded-2xl p-20 shadow-xl w-[600px] flex flex-col items-center animate-fade-in text-center relative overflow-hidden">
        <div className="relative mb-8">
          <div className="w-32 h-20 bg-brown-700 rounded-b-full relative z-10"></div>
          <div className="absolute top-3 right-[-20px] w-8 h-12 border-[6px] border-brown-700 rounded-full z-0"></div>
          <div className="absolute top-[-40px] left-[30%] w-2 h-12 bg-white/70 rounded-full animate-steam"></div>
          <div className="absolute top-[-50px] left-[45%] w-2 h-14 bg-white/60 rounded-full animate-steam delay-200"></div>
          <div className="absolute top-[-60px] left-[60%] w-2 h-16 bg-white/50 rounded-full animate-steam delay-500"></div>
        </div>

        <p className="text-3xl font-extrabold text-brown-900 animate-pulse mb-10">
          {t('brewing')}
        </p>

        <div className="w-full h-3 bg-brown-200 rounded-full overflow-hidden">
          <div className="h-full bg-brown-700 animate-progress-bar"></div>
        </div>
      </div>

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

          .bg-brown-200 {
            background-color: #d3b8a3;
          }

          .border-brown-700 {
            border-color: #5C4033;
          }

          @keyframes progressBar {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }

          .animate-progress-bar {
            animation: progressBar 10s linear forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.8s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Brewing;