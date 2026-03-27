import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, Legend
} from 'recharts';

const lineData = [
  { name: 'Jan', bookings: 400, revenue: 2400 },
  { name: 'Feb', bookings: 300, revenue: 1398 },
  { name: 'Mar', bookings: 200, revenue: 9800 },
  { name: 'Apr', bookings: 278, revenue: 3908 },
  { name: 'May', bookings: 189, revenue: 4800 },
  { name: 'Jun', bookings: 239, revenue: 3800 },
  { name: 'Jul', bookings: 349, revenue: 4300 },
];

const pieData = [
  { name: 'Mathematics', value: 400 },
  { name: 'Science', value: 300 },
  { name: 'English', value: 300 },
  { name: 'Arts', value: 200 },
];

const COLORS = ['#2563eb', '#8b5cf6', '#10b981', '#f59e0b'];

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-800">Bookings Overview</h3>
          <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-sm focus:outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lineData}>
              <defs>
                <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="bookings" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorBookings)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-800">Subject Distribution</h3>
          <button className="text-blue-600 text-sm font-medium hover:underline">View Details</button>
        </div>
        <div className="h-[300px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
