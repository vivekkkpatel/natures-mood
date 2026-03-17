import logo from "../assets/Logo.svg";

const BrandLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-6 z-50 backdrop-blur-md bg-black/30 transition-opacity duration-500">
      {/* Logo Container */}
      <div className="relative w-44 h-44 flex items-center justify-center">
        {/* Premium gradient glow */}
        <div className="logo-glow-ring"></div>
        {/* Logo */}
        <img
          src={logo}
          alt="Nature's Mood Logo"
          className="absolute w-full h-full object-contain"
        />

        {/* Loader inside logo gap */}
        {/* <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div> */}
      </div>

      {/* Text */}
      <h2 className="font-Outfit font-medium text-2xl tracking-tight">
        Loading weather...
      </h2>
    </div>
  );
};

export default BrandLoader;
