import React from 'react';

const Header = () => {
  return (
    <header
      className="border-b border-border px-6 py-5 shadow-md"
      style={{
        background: 'linear-gradient(135deg, rgb(91, 66, 145) 0%, rgb(240, 235, 239) 100%)',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-primary font-extrabold text-lg">P</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
            PAYOUT ONLINE PVT. LTD.
          </h1>
        </div>
        {/* Optional right-side content */}
        {/* <div className="hidden md:block">
          <p className="text-white text-sm opacity-80">Your trusted payment platform</p>
        </div> */}
      </div>
    </header>
  );
};

export default Header;