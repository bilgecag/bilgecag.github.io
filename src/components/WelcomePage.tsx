import earthBackground from "@/assets/earth-background.png";

export const WelcomePage = () => {
  return (
    <div 
      className="min-h-screen bg-black flex flex-col justify-between items-center relative"
      style={{
        backgroundImage: `url(${earthBackground})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Main content area - empty for now */}
      <div className="flex-1"></div>
      
      {/* Footer section */}
      <div className="w-full px-8 pb-8">
        <div className="flex justify-center gap-8 mb-8">
          <button className="bg-yellow-400 border-2 border-yellow-600 px-6 py-3 text-yellow-900 font-bold text-lg hover:bg-yellow-300 transition-colors">
            CONNECT WITH ME
          </button>
          <button className="bg-yellow-400 border-2 border-yellow-600 px-6 py-3 text-yellow-900 font-bold text-lg hover:bg-yellow-300 transition-colors">
            LET'S COLLABORATE
          </button>
        </div>
      </div>
    </div>
  );
};