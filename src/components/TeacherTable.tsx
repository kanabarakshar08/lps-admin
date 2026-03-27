import React from 'react';
import { MoreHorizontal, Check, X, Eye } from 'lucide-react';
import { cn } from '../lib/utils';

const teachers = [
  { id: 1, name: 'Dr. Sarah Wilson', subject: 'Mathematics', exp: '12 Years', status: 'Active', rating: 4.9, image: 'https://picsum.photos/seed/sarah/100/100' },
  { id: 2, name: 'Prof. James Miller', subject: 'Physics', exp: '8 Years', status: 'Pending', rating: 4.7, image: 'https://picsum.photos/seed/james/100/100' },
  { id: 3, name: 'Elena Rodriguez', subject: 'English', exp: '5 Years', status: 'Active', rating: 4.8, image: 'https://picsum.photos/seed/elena/100/100' },
  { id: 4, name: 'David Chen', subject: 'Computer Science', exp: '10 Years', status: 'Inactive', rating: 4.5, image: 'https://picsum.photos/seed/david/100/100' },
  { id: 5, name: 'Aisha Khan', subject: 'Biology', exp: '7 Years', status: 'Active', rating: 4.9, image: 'https://picsum.photos/seed/aisha/100/100' },
];

export const TeacherTable: React.FC = () => {
  return (
    <div className="glass-card mt-8 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-slate-800">Teacher Management</h3>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-100 transition-all">Export</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Add New Teacher</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Teacher</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Experience</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-blue-50/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={teacher.image} alt={teacher.name} className="w-10 h-10 rounded-xl object-cover border border-slate-200" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-semibold text-slate-800">{teacher.name}</p>
                      <p className="text-xs text-slate-500">ID: #TC-{1000 + teacher.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium">{teacher.subject}</span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{teacher.exp}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    teacher.status === 'Active' ? "bg-emerald-100 text-emerald-600" : 
                    teacher.status === 'Pending' ? "bg-amber-100 text-amber-600" : "bg-slate-100 text-slate-500"
                  )}>
                    {teacher.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    <span className="text-sm font-bold">{teacher.rating}</span>
                    <span className="text-xs">★</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View Profile">
                      <Eye size={18} />
                    </button>
                    {teacher.status === 'Pending' && (
                      <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all" title="Approve">
                        <Check size={18} />
                      </button>
                    )}
                    <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Reject/Delete">
                      <X size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
        <p className="text-sm text-slate-500">Showing 5 of 124 teachers</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm disabled:opacity-50" disabled>Previous</button>
          <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  );
};
