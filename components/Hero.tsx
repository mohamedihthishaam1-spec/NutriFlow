
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
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
             <img 
               src="https://picsum.photos/seed/health/800/800" 
               alt="Healthy Lifestyle" 
               className="w-full h-full object-cover opacity-80"
             />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-slate-800 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-300">Daily Calorie Target</span>
            </div>
            <p className="text-2xl font-bold">2,450 kcal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
