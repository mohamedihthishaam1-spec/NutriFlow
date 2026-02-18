import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900 text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 skew-x-[-15deg] translate-x-1/4"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium text-sm mb-6 border border-emerald-500/30">
            Elevate Your Life
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif mb-6 leading-tight">
            Nourish Your Body,<br />
            <span className="text-emerald-400">Master Your Growth.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
            Experience a personalized approach to wellness that combines clinical nutrition with holistic growth routines. Science-backed, AI-driven, and designed for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#planner" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20">
              Start Your Journey
            </a>
            <a href="#about" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-all border border-white/10">
              Learn Methodology
            </a>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          {/* Abstract Geometric Visualization instead of an image */}
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50"></div>
             
             {/* Decorative Abstract Shapes */}
             <div className="w-3/4 h-3/4 border border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite] relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full blur-sm"></div>
             </div>
             <div className="absolute w-1/2 h-1/2 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full blur-sm"></div>
             </div>
             
             {/* Central Iconography */}
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30 backdrop-blur-sm mb-4">
                  <div className="w-6 h-6 bg-emerald-500 rounded-lg animate-pulse"></div>
                </div>
                <div className="text-slate-400 font-mono text-xs tracking-[0.2em] uppercase">Holistic Intelligence</div>
             </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-slate-800 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-300">Daily Calorie Target</span>
            </div>
            <p className="text-2xl font-bold tracking-tight">2,450 kcal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;