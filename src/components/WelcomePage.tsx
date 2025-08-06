import earthBackground from "@/assets/earth-background.png";

export const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col relative">
      {/* Desktop View */}
      <div 
        className="hidden md:flex min-h-screen flex-col justify-between items-center relative"
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

      {/* Mobile View */}
      <div className="md:hidden min-h-screen flex flex-col bg-black">
        {/* Navigation area - takes full screen initially */}
        <div className="flex-1 pt-80 pb-8">
          {/* Footer buttons */}
          <div className="flex flex-col items-center gap-4 px-8">
            <button className="w-full max-w-xs bg-yellow-400 border-2 border-yellow-600 px-6 py-4 text-yellow-900 font-bold text-lg hover:bg-yellow-300 transition-colors">
              CONNECT WITH ME
            </button>
            <button className="w-full max-w-xs bg-yellow-400 border-2 border-yellow-600 px-6 py-4 text-yellow-900 font-bold text-lg hover:bg-yellow-300 transition-colors">
              LET'S COLLABORATE
            </button>
          </div>
        </div>
        
        {/* Earth image section - appears when scrolled down */}
        <div 
          className="h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${earthBackground})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
      </div>
    </div>
  );
};