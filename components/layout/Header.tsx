'use client';

import { usePathname } from 'next/navigation';

interface HeaderProps {
  onMenuClick: () => void;
}

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/projects': 'Projects',
  '/tasks': 'Tasks',
  '/team': 'Team',
  '/settings': 'Settings',
};

export default function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? 'Dashboard';

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center border-b bg-white px-4">
      <button
        className="mr-4 rounded-md p-2 hover:bg-gray-100 md:hidden"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        ☰
      </button>

      <h1 className="text-lg font-semibold">
        {title}
      </h1>

      <div className="ml-auto flex items-center gap-4">
        {/* Placeholder user avatar */}
        <div className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
