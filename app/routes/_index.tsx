import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import DashboardLayout from "~/components/DashboardLayout";
import StatsCard from "~/components/StatsCard";
import { BarChart, Users, BookOpen, Hash } from "lucide-react";

export async function loader({ request }: LoaderFunctionArgs) {
  const totalClients = await db.client.count();
  const totalBooks = await db.book.count();
  const totalAccounts = await db.account.count();
  const totalHashtags = await db.hashtag.count();

  const recentOrders = await db.order.findMany({
    take: 5,
    include: {
      account: true,
      text: true,
      metrics: true,
    },
    orderBy: {
      id: 'desc',
    },
  });

  return json({
    stats: {
      totalClients,
      totalBooks,
      totalAccounts,
      totalHashtags,
    },
    recentOrders,
  });
}

export default function Index() {
  const { stats, recentOrders } = useLoaderData<typeof loader>();

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Clients"
          value={stats.totalClients}
          icon={<Users className="w-6 h-6" />}
          trend="+12%"
        />
        <StatsCard
          title="Total Books"
          value={stats.totalBooks}
          icon={<BookOpen className="w-6 h-6" />}
          trend="+5%"
        />
        <StatsCard
          title="Total Accounts"
          value={stats.totalAccounts}
          icon={<Users className="w-6 h-6" />}
          trend="+8%"
        />
        <StatsCard
          title="Total Hashtags"
          value={stats.totalHashtags}
          icon={<Hash className="w-6 h-6" />}
          trend="+15%"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Text
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Likes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.account.accountsName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.text.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.metrics?.views ?? 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.metrics?.likes ?? 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}