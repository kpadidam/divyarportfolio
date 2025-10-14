import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from './DarkModeProvider';
import { Button } from './ui/button';

export function Header() {
  const location = useLocation();
  const { isDark, toggleDarkMode } = useDarkMode();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-indigo-600 dark:text-indigo-400">Divya Reddy Kankanala</span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                    location.pathname === item.path
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="h-9 w-9"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t">
        <ul className="flex items-center justify-around py-2 px-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-sm transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  location.pathname === item.path
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
