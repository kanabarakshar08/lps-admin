import { motion } from 'motion/react';
import { Edit3, Trash2, Plus, FileText, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils.js';

const SectionHeader = ({ title, description, onAdd, addLabel = "Add New" }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
    <div>
      <h1 className="text-3xl font-bold text-slate-800 tracking-tight">{title}</h1>
      <p className="text-slate-500 mt-1">{description}</p>
    </div>
    {onAdd && (
      <button 
        onClick={onAdd}
        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
      >
        <Plus size={18} />
        {addLabel}
      </button>
    )}
  </div>
);

export const AboutAdmin = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <SectionHeader title="About LPS Group" description="Manage school history, vision, and mission statements." />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="glass-card p-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Our History</h3>
        <textarea 
          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none min-h-[200px]"
          defaultValue="LPS Group of Education was founded in 1990 with a vision to provide quality education to every child..."
        />
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all">Save History</button>
      </div>
      <div className="space-y-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Vision & Mission</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-500">Vision</label>
              <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mt-1" defaultValue="Empowering minds for a better tomorrow." />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-500">Mission</label>
              <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mt-1" defaultValue="To provide holistic education and foster innovation." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const AcademicsAdmin = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <SectionHeader title="Academics" description="Manage curriculum, departments, and academic calendars." onAdd={() => {}} addLabel="Add Department" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Primary Section (Grade 1-5)</h3>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Syllabus Overview</label>
            <textarea rows={4} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Describe the primary curriculum..."></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Key Subjects</label>
            <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Math, Science, English..." />
          </div>
          <button className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all">Update Section</button>
        </form>
      </div>

      <div className="glass-card p-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Secondary Section (Grade 6-10)</h3>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Syllabus Overview</label>
            <textarea rows={4} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Describe the secondary curriculum..."></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Key Subjects</label>
            <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Physics, Chemistry, History..." />
          </div>
          <button className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all">Update Section</button>
        </form>
      </div>
    </div>
  </motion.div>
);

export const AdmissionAdmin = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <SectionHeader title="Admissions" description="Review and manage student admission applications." />
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Student Name</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Grade</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { name: 'Aryan Sharma', grade: '5th', status: 'Pending', date: '2024-03-25' },
              { name: 'Priya Patel', grade: '8th', status: 'Reviewed', date: '2024-03-24' },
              { name: 'Rohan Gupta', grade: '10th', status: 'Approved', date: '2024-03-23' },
            ].map((app, i) => (
              <tr key={i} className="hover:bg-slate-50/50">
                <td className="p-4 font-medium text-slate-800 whitespace-nowrap">{app.name}</td>
                <td className="p-4 text-slate-600 whitespace-nowrap">{app.grade}</td>
                <td className="p-4">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                    app.status === 'Pending' ? "bg-amber-100 text-amber-600" : 
                    app.status === 'Approved' ? "bg-emerald-100 text-emerald-600" : "bg-blue-100 text-blue-600"
                  )}>{app.status}</span>
                </td>
                <td className="p-4 text-slate-500 text-sm whitespace-nowrap">{app.date}</td>
                <td className="p-4 text-right">
                  <button className="text-blue-600 font-bold text-xs hover:underline">Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </motion.div>
);

export const FeesAdmin = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <SectionHeader title="School Fees" description="Track payments, pending dues, and generate invoices." />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="glass-card p-6 bg-emerald-50 border-emerald-100">
        <p className="text-emerald-600 text-xs font-bold uppercase mb-1">Total Collected</p>
        <h3 className="text-2xl font-bold text-emerald-700">₹8.4M</h3>
      </div>
      <div className="glass-card p-6 bg-amber-50 border-amber-100">
        <p className="text-amber-600 text-xs font-bold uppercase mb-1">Pending Dues</p>
        <h3 className="text-2xl font-bold text-amber-700">₹1.2M</h3>
      </div>
      <div className="glass-card p-6 bg-blue-50 border-blue-100">
        <p className="text-blue-600 text-xs font-bold uppercase mb-1">This Month</p>
        <h3 className="text-2xl font-bold text-blue-700">₹450K</h3>
      </div>
      <div className="glass-card p-6 bg-purple-50 border-purple-100">
        <p className="text-purple-600 text-xs font-bold uppercase mb-1">Late Payments</p>
        <h3 className="text-2xl font-bold text-purple-700">42</h3>
      </div>
    </div>
    <div className="glass-card p-6">
      <h3 className="font-bold text-slate-800 mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-800">Payment from Student #102{i}</p>
                <p className="text-xs text-slate-500">Transaction ID: TXN-98234{i}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-800">₹12,500</p>
              <p className="text-xs text-slate-400">2 hours ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const GalleryAdmin = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <SectionHeader title="Gallery" description="Manage school photos and event albums." onAdd={() => {}} addLabel="Upload Photos" />
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
        <div key={i} className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
          <img src={`https://picsum.photos/seed/school-${i}/400/400`} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button className="p-2 bg-white text-blue-600 rounded-lg"><Edit3 size={16} /></button>
            <button className="p-2 bg-white text-red-600 rounded-lg"><Trash2 size={16} /></button>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export const ContactAdmin = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <SectionHeader title="Contact Inquiries" description="Manage messages from parents and students." />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={cn(
            "p-4 rounded-2xl border transition-all cursor-pointer",
            i === 1 ? "bg-blue-50 border-blue-200 shadow-sm" : "bg-white border-slate-100 hover:bg-slate-50"
          )}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-800">Rahul Verma</h4>
              <span className="text-[10px] text-slate-400">10:30 AM</span>
            </div>
            <p className="text-sm text-slate-600 line-clamp-1">Inquiry about admission for 2025 session...</p>
          </div>
        ))}
      </div>
      <div className="lg:col-span-2 glass-card p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">RV</div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Rahul Verma</h3>
              <p className="text-sm text-slate-500">rahul.v@example.com • +91 98234 56789</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200">Archive</button>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl mb-6">
          <p className="text-slate-700 leading-relaxed">
            Hello LPS Team,<br/><br/>
            I am writing to inquire about the admission process for the upcoming 2025 academic session for my daughter. 
            She is currently in 4th grade and we are looking to move her to LPS. Could you please share the fee structure 
            and the entrance test dates?<br/><br/>
            Best regards,<br/>
            Rahul Verma
          </p>
        </div>
        <div className="space-y-4">
          <textarea className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none min-h-[120px]" placeholder="Type your reply here..." />
          <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Send Reply</button>
        </div>
      </div>
    </div>
  </motion.div>
);

export const ResourcesAdmin = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <SectionHeader title="School Resources" description="Manage descriptions and images for school facilities." onAdd={() => {}} addLabel="Add Facility" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {['Library', 'Laboratories', 'Sports Complex'].map((item) => (
        <div key={item} className="glass-card p-6">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
            <FileText size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">{item}</h3>
          <p className="text-sm text-slate-500 mb-4">Manage descriptions and images for the {item.toLowerCase()}.</p>
          <button className="text-blue-600 text-sm font-bold hover:underline">Edit Details →</button>
        </div>
      ))}
    </div>
  </motion.div>
);

export const AchievementAdmin = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <SectionHeader title="Achievements & Awards" description="Manage school-wide recognitions and student awards." onAdd={() => {}} addLabel="Add Award" />
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-sm font-bold text-slate-600">Award Title</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600">Year</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600">Category</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { title: 'Best School Award 2023', year: '2023', category: 'Excellence' },
              { title: 'State Level Sports Trophy', year: '2024', category: 'Sports' },
              { title: 'Innovation in Education', year: '2022', category: 'Academic' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-all">
                <td className="px-6 py-4 font-medium text-slate-800 whitespace-nowrap">{row.title}</td>
                <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{row.year}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold whitespace-nowrap">{row.category}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-blue-600 transition-all">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </motion.div>
);

export const KnowledgeAdmin = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <SectionHeader title="Knowledge Hub" description="Manage educational articles and blog posts." onAdd={() => {}} addLabel="Add Article" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[1, 2].map(i => (
        <div key={i} className="glass-card p-6 flex gap-6">
          <div className="w-32 h-32 bg-slate-100 rounded-xl flex-shrink-0 overflow-hidden">
            <img src={`https://picsum.photos/seed/article${i}/200/200`} alt="Article" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Importance of STEM Education</h3>
            <p className="text-sm text-slate-500 mb-4 line-clamp-2">Exploring how science and technology shape the future of our students...</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Published: 12 Mar 2024</span>
              <button className="text-blue-600 text-sm font-bold">Edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
