
import React from 'react';
import { PersonalizedPlan } from '../types.ts';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DietDashboardProps {
  plan: PersonalizedPlan;
}

const DietDashboard: React.FC<DietDashboardProps> = ({ plan }) => {
  const macroData = [
    { name: 'Protein', value: plan.macroTargets.protein, color: '#10b981' }, // emerald-500
    { name: 'Carbs', value: plan.macroTargets.carbs, color: '#3b82f6' },   // blue-500
    { name: 'Fats', value: plan.macroTargets.fats, color: '#f59e0b' },    // amber-500
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Overview & Macros */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-serif mb-4 text-slate-800">Plan Overview</h3>
          <p className="text-slate-600 leading-relaxed mb-6 italic">"{plan.dailySummary}"</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl text-center">
              <div className="text-emerald-600 font-bold text-xl">{plan.macroTargets.calories}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Calories</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl text-center">
              <div className="text-blue-600 font-bold text-xl">{plan.macroTargets.protein}g</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Protein</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl text-center">
              <div className="text-amber-600 font-bold text-xl">{plan.macroTargets.carbs}g</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Carbs</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl text-center">
              <div className="text-rose-600 font-bold text-xl">{plan.macroTargets.fats}g</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Fats</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center">
          <h4 className="text-lg font-semibold mb-2">Macro Distribution</h4>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macroData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {macroData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 mt-2">
            {macroData.map(m => (
              <div key={m.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }}></div>
                <span className="text-xs text-slate-500">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meal Plan */}
      <div className="space-y-6">
        <h3 className="text-2xl font-serif text-slate-800 px-2">Daily Meal Schedule</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plan.meals.map((meal, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-tighter bg-emerald-50 px-3 py-1 rounded-full">
                  {meal.time}
                </span>
                <span className="text-slate-400 text-sm">{meal.calories} kcal</span>
              </div>
              <h4 className="text-xl font-bold mb-3">{meal.title}</h4>
              <ul className="space-y-2 mb-6">
                {meal.ingredients.map((ing, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    {ing}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-2 border-t pt-4">
                <div className="text-center">
                  <div className="text-xs font-semibold text-blue-600">{meal.protein}g</div>
                  <div className="text-[10px] text-slate-400 uppercase">Pro</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-amber-600">{meal.carbs}g</div>
                  <div className="text-[10px] text-slate-400 uppercase">Carb</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-rose-600">{meal.fats}g</div>
                  <div className="text-[10px] text-slate-400 uppercase">Fat</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Routines & Growth */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
          <h3 className="text-2xl font-serif mb-6 relative z-10">Rituals & Routines</h3>
          
          <div className="space-y-8 relative z-10">
            <div>
              <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">The Morning Prime</h4>
              <ul className="space-y-3">
                {plan.routines.morning.map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-200">
                    <span className="text-emerald-500 font-bold">{i+1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">Evening Unwind</h4>
              <ul className="space-y-3">
                {plan.routines.evening.map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-200">
                    <span className="text-emerald-500 font-bold">{i+1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-serif mb-6 text-slate-800">Growth & Habits</h3>
          <div className="space-y-6">
            {plan.growthHabits.map((habit, i) => (
              <div key={i} className="group p-5 rounded-2xl bg-slate-50 border border-transparent hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{habit.title}</h4>
                  <span className="text-xs px-2 py-1 bg-white rounded-lg text-slate-400 font-medium">{habit.frequency}</span>
                </div>
                <p className="text-sm text-slate-500 italic">"Benefit: {habit.benefit}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietDashboard;
