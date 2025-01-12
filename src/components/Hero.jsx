function Hero() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-500 w-3/4 absolute top-9 -rotate-[50deg] right-0 h-12 -z-10 rounded-full blur-3xl sm:bg-slate-500 sm:blur-3xl brightness-100 lg:left-2 lg:p-6 lg:w-1/3 lg:h-12"></div>

      <div className="text-slate-300 flex flex-col w-10/12">
        <p className="w-full text-sm text-green-400 text-left">
          *Powered by nature.
        </p>
        <h1 className="text-7xl font-light tracking-tight mt-2 sm:text-7xl bg-gradient-to-r from-slate-300 to-slate-500 text-transparent bg-clip-text">
          Special Place for Special Moments
        </h1>
        <p className="w-full mt-2 text-md text-slate-400 text-left">
          Nature&#39;s beauty is a gift that keeps on giving🍀.
        </p>
      </div>
    </div>
  );
}

export default Hero;
