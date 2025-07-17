export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-10 rounded-xl border border-gray-700 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6"></div>
      <div className="text-center sm:text-left">
          <p className="text-lg font-semibold">𝐶𝑜𝑓𝑓𝑒𝑒𝑇𝑖𝑚𝑒</p>
          <p>𝑴ü𝒉𝒍𝒆𝒏𝒔𝒕𝒓𝒂ß𝒆 10, 10115 𝑩𝒆𝒓𝒍𝒊𝒏, 𝑮𝒆𝒓𝒎𝒂𝒏𝒚</p>
          <p>𝑷𝒉𝒐𝒏𝒆: +49 123 456 789</p>
          <p className="text-sm mt-2"></p>        
        <div className="text-center sm:text-right">
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦
            </a>
          </p>
          </div>
          <div className="text-center sm:text-right"></div>
          <p className="mt-1">© team01, 2025</p>
        </div>
    </footer>
          
);
};

