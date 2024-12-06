import { type ReactNode } from "react";
import { Link } from "@remix-run/react";
import { LayoutDashboard, Users, BookOpen, Hash, MessageSquare, Music, Users2, Phone } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold">Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <div className="w-64 bg-white h-screen">
          <nav className="mt-5 px-2">
            <Link
              to="/"
              className="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md hover:bg-gray-50"
            >
              <LayoutDashboard className="mr-4 h-6 w-6" />
              Dashboard
            </Link>
            <Link
              to="/clients"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:bg-gray-50"
            >
              <Users className="mr-4 h-6 w-6" />
              Clients
            </Link>
            <Link
              to="/books"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:bg-gray-50"
            >
              <BookOpen className="mr-4 h-6 w-6" />
              Books
            </Link>
            <Link
              to="/hashtags"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:bg-gray-50"
            >
              <Hash className="mr-4 h-6 w-6" />
              Hashtags
            </Link>
            <Link
              to="/texts"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:bg-gray-50"
            >
              <MessageSquare className="mr-4 h-6 w-6" />
              Texts
            </Link>
            <Link
              to="/sounds"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:bg-gray-50"
            >
              <Music className="mr-4 h-6 w-6" />
              Sounds
            </Link>
            <Link
              to="/crew"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:bg-gray-50"
            >
              <Users2 className="mr-4 h-6 w-6" />
              Crew
            </Link>
            <Link
              to="/phones"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:bg-gray-50"
            >
              <Phone className="mr-4 h-6 w-6" />
              Phones
            </Link>
          </nav>
        </div>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}