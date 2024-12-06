import { type ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  trend: string;
}

export default function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="bg-blue-50 rounded-full p-3">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <span className="text-green-500 text-sm font-medium">{trend}</span>
        <span className="text-gray-600 text-sm ml-2">from last month</span>
      </div>
    </div>
  );
}