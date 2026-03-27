import { Sparkles, TrendingUp, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const AIInsights = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={20} className="text-blue-600" />
        <h3 className="font-bold text-slate-800">AI-Powered Insights</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-xl shadow-blue-200 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Growth Forecast</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Bookings up 12%</h4>
            <p className="text-sm opacity-90 leading-relaxed">Based on current trends, we expect a 15% increase in Mathematics bookings next month.</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
             <TrendingUp size={120} />
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 border-l-4 border-l-amber-500"
        >
          <div className="flex items-center gap-2 mb-2 text-amber-600">
            <AlertCircle size={18} />
            <span className="text-xs font-semibold uppercase tracking-wider">Optimization Tip</span>
          </div>
          <h4 className="text-lg font-bold text-slate-800 mb-1">Teacher Shortage</h4>
          <p className="text-sm text-slate-500 leading-relaxed">High demand for Physics teachers in the evening slots. Consider onboarding 3-5 more experts.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 border-l-4 border-l-emerald-500"
        >
          <div className="flex items-center gap-2 mb-2 text-emerald-600">
            <Sparkles size={18} />
            <span className="text-xs font-semibold uppercase tracking-wider">Revenue Insight</span>
          </div>
          <h4 className="text-lg font-bold text-slate-800 mb-1">Premium Tier</h4>
          <p className="text-sm text-slate-500 leading-relaxed">Users are 40% more likely to book teachers with &quot;Premium&quot; badges. Revenue could grow by $2.4k.</p>
        </motion.div>
      </div>
    </div>
  );
};
