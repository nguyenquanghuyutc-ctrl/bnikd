import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line 
} from 'recharts';
import { 
  Trophy, Users, Clock, AlertTriangle, CheckCircle, 
  TrendingUp, FileText, ChevronRight, Star, Target 
} from 'lucide-react';

// --- MOCK DATA (Dữ liệu giả lập) ---
const salesData =;

const employeeRankings =;

const meetingSteps =;

// --- COMPONENTS ---

const Card = ({ title, value, subtext, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <p className={`text-xs mt-2 font-medium ${color === 'red'? 'text-red-500' : 'text-green-500'}`}>
        {subtext}
      </p>
    </div>
    <div className={`p-3 rounded-lg ${color === 'blue'? 'bg-blue-50 text-blue-600' : color === 'red'? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
      <Icon size={24} />
    </div>
  </div>
);

const TrafficLightBadge = ({ status }) => {
  const colors = {
    green: "bg-green-100 text-green-700 border-green-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    red: "bg-red-100 text-red-700 border-red-200"
  };
  const labels = {
    green: "Vùng Xanh (Xuất sắc)",
    yellow: "Vùng Vàng (Cảnh báo)",
    red: "Vùng Đỏ (Nguy hiểm)"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors[status]}`}>
      {labels[status]}
    </span>
  );
};

// --- MAIN APP COMPONENT ---

export default function BaLangDashboard() {
  const = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#0a2540] text-white p-6 flex flex-col z-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0a2540] font-bold text-xl">
            B
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Ba Làng</h1>
            <p className="text-xs text-blue-300">Sales Command Center</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard'? 'bg-blue-600 text-white' : 'text-blue-100 hover:bg-white/10'}`}
          >
            <TrendingUp size={20} /> Tổng Quan
          </button>
          <button 
            onClick={() => setActiveTab('process')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'process'? 'bg-blue-600 text-white' : 'text-blue-100 hover:bg-white/10'}`}
          >
            <Clock size={20} /> Quy Trình Họp
          </button>
          <button 
            onClick={() => setActiveTab('ranking')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'ranking'? 'bg-blue-600 text-white' : 'text-blue-100 hover:bg-white/10'}`}
          >
            <Users size={20} /> Nhân Sự (Traffic Lights)
          </button>
        </nav>

        <div className="pt-6 border-t border-blue-800">
          <p className="text-xs text-blue-400 mb-2">Hệ thống quản trị</p>
          <div className="flex items-center gap-2 text-sm text-blue-100">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            Online: 18/20 Sales
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {activeTab === 'dashboard' && 'Tổng Quan Hiệu Suất Tuần'}
              {activeTab === 'process' && 'Quy Trình Họp Chuẩn BNI - Ba Làng'}
              {activeTab === 'ranking' && 'Bảng Phong Thần (Traffic Lights)'}
            </h2>
            <p className="text-slate-500 text-sm mt-1">Cập nhật lúc: 08:00 AM - 18/01/2026</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-slate-600">
              Xuất Báo Cáo
            </button>
            <button className="px-4 py-2 bg-[#d12e2e] text-white rounded-lg text-sm font-medium hover:bg-red-700 shadow-sm flex items-center gap-2">
              <AlertTriangle size={16} /> Báo cáo Khẩn Cấp
            </button>
          </div>
        </header>

        {/* VIEW: DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card 
                title="Doanh Số Tuần (Triệu VNĐ)" 
                value="493.5" 
                subtext="+12% so với mục tiêu" 
                icon={TrendingUp} 
                color="blue"
              />
              <Card 
                title="Điểm Bán Mới (Outlets)" 
                value="28" 
                subtext="+5 điểm so với tuần trước" 
                icon={Target} 
                color="green"
              />
              <Card 
                title="Tỷ lệ Tuân thủ Tuyến" 
                value="94%" 
                subtext="2 nhân viên vi phạm" 
                icon={CheckCircle} 
                color="blue"
              />
              <Card 
                title="Cảnh báo Đứt hàng (OOS)" 
                value="12" 
                subtext="Cần xử lý gấp: Mắm Tôm" 
                icon={AlertTriangle} 
                color="red"
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <TrendingUp size={20} className="text-blue-600"/> 
                  Biểu Đồ Doanh Số vs Mục Tiêu (Tháng 1/2026)
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Legend />
                      <Bar dataKey="doanhSo" name="Thực đạt" fill="#0a2540" radius={} barSize={40} />
                      <Bar dataKey="mucTieu" name="Mục tiêu" fill="#e2e8f0" radius={} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Trophy size={20} className="text-yellow-500"/> 
                  Vinh Danh Tuần
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700 font-bold">A</div>
                      <div>
                        <p className="font-bold text-gray-800">Nguyễn Văn A</p>
                        <p className="text-xs text-gray-500">Khu vực Thanh Hóa</p>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      🏆 <span className="font-semibold">Best Seller:</span> 150 Triệu
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">B</div>
                      <div>
                        <p className="font-bold text-gray-800">Trần Thị B</p>
                        <p className="text-xs text-gray-500">Khu vực Hà Nội</p>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      🚀 <span className="font-semibold">Mở Lối:</span> 5 Đại lý mới
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: PROCESS */}
        {activeTab === 'process' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50">
              <h3 className="font-bold text-lg text-gray-800">Lịch Trình Họp Sáng Thứ 2 (08:00 - 09:30)</h3>
              <p className="text-sm text-gray-500">Tuân thủ nghiêm ngặt khung thời gian BNI</p>
            </div>
            <div className="divide-y divide-gray-100">
              {meetingSteps.map((step) => (
                <div key={step.id} className="p-5 hover:bg-blue-50 transition-colors group flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center text-blue-800">
                    <span className="text-xs font-semibold uppercase">Bước</span>
                    <span className="text-2xl font-bold">{step.id}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-lg text-gray-800 group-hover:text-blue-700">{step.title}</h4>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium flex items-center gap-1">
                        <Clock size={12} /> {step.time}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.content}</p>
                  </div>
                  <ChevronRight className="text-gray-300 group-hover:text-blue-500 self-center" />
                </div>
              ))}
              <div className="p-5 text-center text-blue-600 font-medium cursor-pointer hover:underline">
                Xem toàn bộ 20 bước chi tiết...
              </div>
            </div>
          </div>
        )}

        {/* VIEW: RANKING */}
        {activeTab === 'ranking' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                    <th className="p-6 font-semibold">Nhân Viên</th>
                    <th className="p-6 font-semibold">Khu Vực</th>
                    <th className="p-6 font-semibold">Doanh Số / KPI (%)</th>
                    <th className="p-6 font-semibold">Điểm Mới</th>
                    <th className="p-6 font-semibold">Kỷ Luật (PALMS)</th>
                    <th className="p-6 font-semibold">Xếp Hạng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {employeeRankings.map((emp, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-medium text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                          {emp.name.charAt(0)}
                        </div>
                        {emp.name}
                      </td>
                      <td className="p-6 text-gray-600">{emp.area}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-800">{emp.kpi}%</span>
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${emp.kpi >= 100? 'bg-green-500' : emp.kpi >= 80? 'bg-yellow-400' : 'bg-red-500'}`} 
                              style={{ width: `${Math.min(emp.kpi, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-gray-600">{emp.newOutlets}</td>
                      <td className="p-6 text-gray-600">{emp.discipline}/100</td>
                      <td className="p-6">
                        <TrafficLightBadge status={emp.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
