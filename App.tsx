
import React, { useState } from 'react';
import Hero from './components/Hero';
import PlanForm from './components/PlanForm';
import DietDashboard from './components/DietDashboard';
import { UserProfile, PersonalizedPlan } from './types';
import { generatePlan } from './services/geminiService';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState<PersonalizedPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlan = async (profile: UserProfile) => {
    setIsLoading(true);
    setError(null);
    try {
      const generatedPlan = await generatePlan(profile);
      setPlan(generatedPlan);
      // Scroll to dashboard after generation
      setTimeout(() => {
        const dashboard = document.getElementById('results');
        if (dashboard) dashboard.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err) {
      console.error(err);
      setError('Something went wrong generating your plan. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20">
              N
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Nutri<span className="text-emerald-600">Flow</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Methodology</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Resources</a>
            <a href="#planner" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all">Get Started</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        
        <div className="container mx-auto px-6 py-12">
          <PlanForm onSubmit={handleGeneratePlan} isLoading={isLoading} />
          
          {error && (
            <div className="mt-12 p-6 bg-rose-50 border border-rose-200 text-rose-700 rounded-3xl text-center max-w-2xl mx-auto">
              <p className="font-bold mb-2">Error</p>
              <p>{error}</p>
            </div>
          )}

          {plan && (
            <div id="results" className="mt-24">
              <div className="mb-12 text-center">
                <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-4">Your Personalized Roadmap</h2>
                <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
              </div>
              <DietDashboard plan={plan} />
            </div>
          )}
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16 mt-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  N
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">Nutri<span className="text-emerald-400">Flow</span></span>
              </div>
              <p className="max-w-sm leading-relaxed">
                Empowering individuals through science-backed nutrition and holistic personal development. Join the flow to a healthier, more fulfilled version of yourself.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Explore</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Premium Plans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Support</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2024 NutriFlow Holistic Wellness. All rights reserved.</p>
            <div className="flex gap-6">
              {/* Simple icons placeholders */}
              <div className="w-5 h-5 bg-white/10 rounded-full cursor-pointer hover:bg-emerald-500 transition-colors"></div>
              <div className="w-5 h-5 bg-white/10 rounded-full cursor-pointer hover:bg-emerald-500 transition-colors"></div>
              <div className="w-5 h-5 bg-white/10 rounded-full cursor-pointer hover:bg-emerald-500 transition-colors"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
