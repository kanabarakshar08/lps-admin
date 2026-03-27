import { motion } from 'motion/react';
import { cn } from '../lib/utils.js';

export const StatCard = ({ title, value, change, isPositive, icon: Icon, color }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className={cn("p-3 rounded-xl", color)}>
          <Icon size={24} className="text-white" />
        </div>
        <div className={cn(
          "px-2.5 py-1 rounded-full text-xs font-medium",
          isPositive ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
        )}>
          {isPositive ? '+' : ''}{change}
        </div>
      </div>
      
      <div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
      </div>
      
      <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-2">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '70%' }}
          transition={{ duration: 1, delay: 0.5 }}
          className={cn("h-full", color.replace('bg-', 'bg-'))}
          style={{ backgroundColor: color.includes('blue') ? '#2563eb' : color.includes('emerald') ? '#10b981' : color.includes('amber') ? '#f59e0b' : '#8b5cf6' }}
        />
      </div>
    </motion.div>
  );
};
