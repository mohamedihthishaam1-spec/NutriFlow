import React, { useState } from 'react';
import { UserProfile, ActivityLevel, Goal } from '../types.ts';

interface PlanFormProps {
  onSubmit: (profile: UserProfile) => void;
  isLoading: boolean;
}

const PlanForm: React.FC<PlanFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<UserProfile>({
    name: '',
    age: 25,
    weight: 70,
    height: 175,
    gender: 'Other',
    activityLevel: ActivityLevel.MODERATE,
    goal: Goal.MAINTENANCE,
    dietaryRestrictions: []
  });

  const [restrictionInput, setRestrictionInput] = useState('');

  const handleAddRestriction = () => {
    if (restrictionInput.trim() && !formData.dietaryRestrictions.includes(restrictionInput.trim())) {
      setFormData({
        ...formData,
        dietaryRestrictions: [...formData.dietaryRestrictions, restrictionInput.trim()]
      });
      setRestrictionInput('');
    }
  };

  const removeRestriction = (index: number) => {
    setFormData({
      ...formData,
      dietaryRestrictions: formData.dietaryRestrictions.filter((_, i) => i !== index)
    });
  };

  return (
    <div id="planner" className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden -mt-12 relative z-20 border border-slate-100">
      <div className="p-8 lg:p-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-serif mb-2">Tell Us About Yourself</h2>
          <p className="text-slate-500">The more accurate you are, the better the plan.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Age</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                  value={formData.age}
                  onChange={e => setFormData({ ...formData, age: Number(e.target.value) })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Gender</label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                  value={formData.gender}
                  onChange={e => setFormData({ ...formData, gender: e.target.value })}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                  value={formData.weight}
                  onChange={e => setFormData({ ...formData, weight: Number(e.target.value) })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Height (cm)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                  value={formData.height}
                  onChange={e => setFormData({ ...formData, height: Number(e.target.value) })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Primary Goal</label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                value={formData.goal}
                onChange={e => setFormData({ ...formData, goal: e.target.value as Goal })}
              >
                {Object.values(Goal).map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Activity Level</label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                value={formData.activityLevel}
                onChange={e => setFormData({ ...formData, activityLevel: e.target.value as ActivityLevel })}
              >
                {Object.values(ActivityLevel).map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Dietary Restrictions</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 outline-none"
                  placeholder="e.g. Vegan, No peanuts"
                  value={restrictionInput}
                  onChange={e => setRestrictionInput(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleAddRestriction()}
                />
                <button
                  onClick={handleAddRestriction}
                  className="px-4 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.dietaryRestrictions.map((r, i) => (
                  <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full flex items-center gap-2">
                    {r}
                    <button onClick={() => removeRestriction(i)} className="hover:text-emerald-900">&times;</button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => onSubmit(formData)}
          disabled={isLoading}
          className="w-full mt-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Crafting Your Custom Plan...
            </>
          ) : (
            'Generate Personalized Plan'
          )}
        </button>
      </div>
    </div>
  );
};

export default PlanForm;