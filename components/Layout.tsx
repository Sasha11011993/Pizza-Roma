import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8cece] dark:border-gray-800 bg-surface-light/95 dark:bg-[#121212]/95 backdrop-blur-sm px-4 lg:px-10 py-3 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full md:w-auto gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-8 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined !text-[32px]">local_pizza</span>
            </div>
            <h2 className="text-xl font-extrabold leading-tight tracking-tight text-text-main dark:text-white">Pizza Roma</h2>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className={`text-sm font-bold ${location.pathname === '/' ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary transition-colors'}`}>Меню</Link>
            <Link to="/about" className={`text-sm font-medium ${location.pathname === '/about' ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary transition-colors'}`}>Про нас</Link>
            <Link to="/blog" className={`text-sm font-medium ${location.pathname === '/blog' ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary transition-colors'}`}>Блог</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Контакти</Link>
          </nav>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4 w-full md:w-auto">
          <div className="hidden md:flex relative w-full max-w-[200px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted">
              <span className="material-symbols-outlined !text-[20px]">search</span>
            </div>
            <input className="block w-full rounded-lg border-none bg-[#f4e7e7] dark:bg-surface-dark-highlight py-2 pl-10 pr-3 text-sm text-gray-900 dark:text-white placeholder:text-text-muted focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-surface-dark transition-all" placeholder="Пошук..." type="text"/>
          </div>
          
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main dark:text-white">
            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>

          <button onClick={() => navigate('/cart')} className="relative flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-transform active:scale-95 shadow-lg shadow-primary/20 group">
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            <span className="text-sm font-bold hidden sm:inline">Кошик (2)</span>
          </button>
          
          <button className="size-9 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuARqtG9lvVEKBg8Mm-qRdLeInt9a4N3GlE3lZnDBXvoQAiYaZsS-d445UIoBUs3UurRkA03kv4OZYKc5N3jXpWO6pbhWL5mr-zqdKSZIOyW239y5QUio7o1fUmcjJZeJM8W1C-eowkaXK3Qdn_lnsHYfbOA9_8ydZOod2S9gWtBtJqoxNXWJm6J7mtI8JKvDqhB5IZqQxOE5ecC_2lODYHUDN9Bw_NDHhPhGK1Zxk81Lh6FPvt-bCYmAckMf3VEtgsOvi7RU1vFA0M" alt="Profile" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light dark:bg-[#1e1e1e] border-t border-[#e8cece] dark:border-gray-800 py-10 px-4 mt-auto transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="size-6 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">local_pizza</span>
            </div>
            <span className="font-bold text-lg text-text-main dark:text-white">Pizza Roma</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Pizza Roma. Справжній італійський смак.</p>
        </div>
        <div className="flex gap-6">
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};