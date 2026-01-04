import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Product: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-6">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex mb-6">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined !text-[18px] mr-1">home</span>
              Головна
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-text-muted/50 dark:text-gray-600 !text-[16px]">chevron_right</span>
              <Link to="/" className="ms-1 text-sm font-medium text-text-muted hover:text-primary md:ms-2 dark:text-gray-400 dark:hover:text-white transition-colors">Меню</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="material-symbols-outlined text-text-muted/50 dark:text-gray-600 !text-[16px]">chevron_right</span>
              <span className="ms-1 text-sm font-bold text-text-main md:ms-2 dark:text-white">Пепероні</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 pb-12">
        {/* Left Column: Image */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-surface-light dark:bg-[#1e1e1e] rounded-2xl overflow-hidden group flex items-center justify-center p-8 border border-gray-100 dark:border-gray-800">
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
                <span className="material-symbols-outlined !text-[14px] mr-1">eco</span> Популярне
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 border border-orange-200">
                <span className="material-symbols-outlined !text-[14px] mr-1">local_fire_department</span> Гостре
              </span>
            </div>
            <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
              <div className="w-full h-full bg-center bg-contain bg-no-repeat drop-shadow-2xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPHFYg4Hbh4ULeEKMgEf59ma_CpDs1TKR7QFQNgo_NfgzkdLF1XTdKnyKn8W0X3YH7Z6cEhXT_DdGXFHlt-fyd8-bOKaRCywnkDCTMq5WrhEwaFGq_FN1-lIo5vfzhEIRGQYg10Y1QrjoufuOPQ-H4bJeCRUSvOl1TPgAQxa-DWzTK6WKqnluJ_IwI0tBFA8pMAD0nnCBYfUKIprO9eXgRoyvqJXBSDza5t3u11Ykg6bvxlUaNmY8uhNiampbSHW09XxXbHOJFm_0")'}}></div>
            </div>
          </div>
          
          <div className="hidden lg:block space-y-4">
            <h3 className="text-lg font-bold text-text-main dark:text-white">Опис</h3>
            <p className="text-text-main/80 dark:text-gray-300 leading-relaxed">
              Класична піца з гострими ковбасками пепероні, подвійною порцією ніжної моцарели та нашим фірмовим томатним соусом з італійськими травами. Ідеальний баланс гостроти та сирного смаку на хрусткому тісті.
            </p>
            <div className="border-t border-surface-light dark:border-gray-800 my-4"></div>
            <details className="group bg-transparent">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-2 text-text-main dark:text-white hover:text-primary transition-colors">
                <span>Харчова цінність (на 100г)</span>
                <span className="transition group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              <div className="text-sm text-text-muted dark:text-gray-400 mt-2 grid grid-cols-4 gap-4 bg-surface-light dark:bg-[#1e1e1e] p-4 rounded-lg">
                <div className="text-center">
                  <span className="block text-xs font-semibold uppercase tracking-wider">Ккал</span>
                  <span className="block text-lg font-bold text-text-main dark:text-white">265</span>
                </div>
                <div className="text-center">
                  <span className="block text-xs font-semibold uppercase tracking-wider">Білки</span>
                  <span className="block text-lg font-bold text-text-main dark:text-white">10г</span>
                </div>
                <div className="text-center">
                  <span className="block text-xs font-semibold uppercase tracking-wider">Жири</span>
                  <span className="block text-lg font-bold text-text-main dark:text-white">12г</span>
                </div>
                <div className="text-center">
                  <span className="block text-xs font-semibold uppercase tracking-wider">Вуглеводи</span>
                  <span className="block text-lg font-bold text-text-main dark:text-white">28г</span>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Right Column: Controls */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-24 flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl md:text-4xl font-extrabold text-text-main dark:text-white tracking-tight">Пепероні</h1>
                <button className="text-text-muted hover:text-primary transition-colors p-1">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <p className="text-sm text-text-muted dark:text-gray-400">Томатний соус, Моцарела, Пепероні</p>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-text-main dark:text-white">Розмір</label>
              <div className="bg-surface-light dark:bg-[#1e1e1e] p-1.5 rounded-xl flex border border-gray-100 dark:border-gray-800">
                <button className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white">
                  <span className="block text-xs mb-0.5">Маленька</span>
                  <span className="font-bold">25 см</span>
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-white dark:bg-[#2a2a2a] shadow-sm text-sm font-bold text-primary transition-all ring-1 ring-black/5 dark:ring-white/10">
                  <span className="block text-xs mb-0.5 text-text-main dark:text-gray-300 font-normal">Стандарт</span>
                  <span className="font-bold">30 см</span>
                </button>
                <button className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white">
                  <span className="block text-xs mb-0.5">Велика</span>
                  <span className="font-bold">35 см</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-text-main dark:text-white">Тісто</label>
              <div className="grid grid-cols-2 gap-3">
                <label className="cursor-pointer relative">
                  <input type="radio" name="crust" className="peer sr-only" defaultChecked />
                  <div className="p-3 rounded-lg border-2 border-surface-light dark:border-[#1e1e1e] hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex items-center gap-3">
                    <span className="material-symbols-outlined text-text-muted peer-checked:text-primary">bakery_dining</span>
                    <span className="text-sm font-medium text-text-main dark:text-white">Традиційне</span>
                  </div>
                </label>
                <label className="cursor-pointer relative">
                  <input type="radio" name="crust" className="peer sr-only" />
                  <div className="p-3 rounded-lg border-2 border-surface-light dark:border-[#1e1e1e] hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex items-center gap-3">
                    <span className="material-symbols-outlined text-text-muted peer-checked:text-primary">cookie</span>
                    <span className="text-sm font-medium text-text-main dark:text-white">Тонке</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-text-main dark:text-white">Додати інгредієнти</label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { name: "Сирний бортик", price: 45, icon: "chess", color: "text-orange-500" },
                  { name: "Бекон", price: 30, icon: "set_meal", color: "text-red-700" },
                  { name: "Гриби", price: 25, icon: "nutrition", color: "text-[#8b4513]" },
                  { name: "Халапеньйо", price: 20, icon: "spa", color: "text-green-600" },
                  { name: "Оливки", price: 15, icon: "circle", color: "text-black dark:text-gray-400" },
                  { name: "Кукурудза", price: 15, icon: "egg_alt", color: "text-yellow-500" },
                ].map((ing, i) => (
                  <label key={i} className="cursor-pointer group relative">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-surface-light dark:border-[#1e1e1e] bg-white dark:bg-[#121212] hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:shadow-sm transition-all h-full text-center">
                      <div className={`size-8 mb-2 ${ing.color}`}>
                        <span className="material-symbols-outlined !text-[32px]">{ing.icon}</span>
                      </div>
                      <span className="text-xs font-medium text-text-main dark:text-white leading-tight mb-1">{ing.name}</span>
                      <span className="text-xs font-bold text-primary">+{ing.price} ₴</span>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 transition-opacity text-primary">
                      <span className="material-symbols-outlined !text-[16px] font-bold">check_circle</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-6 border-t border-surface-light dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-medium text-text-muted dark:text-gray-400">Всього:</span>
                <span className="text-3xl font-extrabold text-text-main dark:text-white">245 ₴</span>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center border border-surface-light dark:border-gray-800 rounded-lg bg-surface-light/30 dark:bg-[#2a2a2a]">
                  <button className="w-10 h-12 flex items-center justify-center text-text-main dark:text-white hover:bg-surface-light dark:hover:bg-[#333] rounded-l-lg transition-colors">
                    <span className="material-symbols-outlined !text-[20px]">remove</span>
                  </button>
                  <span className="w-8 text-center font-bold text-lg text-text-main dark:text-white">1</span>
                  <button className="w-10 h-12 flex items-center justify-center text-text-main dark:text-white hover:bg-surface-light dark:hover:bg-[#333] rounded-r-lg transition-colors">
                    <span className="material-symbols-outlined !text-[20px]">add</span>
                  </button>
                </div>
                <button className="flex-1 bg-primary hover:bg-red-700 text-white font-bold text-lg rounded-lg shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 py-3">
                  <span>У кошик</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;