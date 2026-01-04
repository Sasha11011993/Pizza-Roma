import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 w-full max-w-[1200px] mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1e1e1e] rounded-xl p-6 sm:p-10 shadow-sm border border-[#f4e7e7] dark:border-gray-800 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[200px] text-primary">check_circle</span>
            </div>
            <div className="flex flex-col gap-4 z-10">
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined filled">check_circle</span>
                <span className="font-bold text-sm tracking-wide uppercase">Оплата успішна</span>
              </div>
              <h1 className="text-[#1c0d0d] dark:text-white tracking-tight text-3xl sm:text-4xl font-extrabold leading-tight max-w-[600px]">
                Дякуємо! Ваше замовлення отримано
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg font-normal leading-relaxed max-w-[600px]">
                Номер замовлення <span className="text-primary font-bold">#45920</span>. Ми вже почали готувати вашу піцу. Ви отримаєте сповіщення, коли кур'єр буде в дорозі.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1e1e1e] rounded-xl p-6 shadow-sm border border-[#f4e7e7] dark:border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#1c0d0d] dark:text-white">Орієнтовний час доставки</h3>
              <span className="text-primary font-bold bg-primary/10 px-3 py-1 rounded-full text-sm">~ 45 хв</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-stretch gap-2">
                <div className="flex h-16 sm:h-20 grow items-center justify-center rounded-lg bg-background-light dark:bg-[#121212] border border-[#f4e7e7] dark:border-gray-700">
                  <p className="text-[#1c0d0d] dark:text-white text-2xl sm:text-3xl font-bold font-mono">00</p>
                </div>
                <div className="text-center"><p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">Годин</p></div>
              </div>
              <div className="flex flex-col items-stretch gap-2">
                <div className="flex h-16 sm:h-20 grow items-center justify-center rounded-lg bg-background-light dark:bg-[#121212] border border-[#f4e7e7] dark:border-gray-700">
                  <p className="text-[#1c0d0d] dark:text-white text-2xl sm:text-3xl font-bold font-mono">44</p>
                </div>
                <div className="text-center"><p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">Хвилин</p></div>
              </div>
              <div className="flex flex-col items-stretch gap-2">
                <div className="flex h-16 sm:h-20 grow items-center justify-center rounded-lg bg-background-light dark:bg-[#121212] border border-[#f4e7e7] dark:border-gray-700">
                  <p className="text-[#1c0d0d] dark:text-white text-2xl sm:text-3xl font-bold font-mono text-primary">12</p>
                </div>
                <div className="text-center"><p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">Секунд</p></div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1e1e1e] rounded-xl p-6 shadow-sm border border-[#f4e7e7] dark:border-gray-800">
            <div className="flex flex-col gap-4">
              <div className="flex gap-6 justify-between items-end">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Статус замовлення</p>
                  <p className="text-[#1c0d0d] dark:text-white text-xl font-bold leading-normal flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary animate-pulse">oven_gen</span>
                    Готується
                  </p>
                </div>
                <p className="text-primary font-bold text-lg">25%</p>
              </div>
              <div className="relative w-full h-3 rounded-full bg-[#f4e7e7] dark:bg-[#121212] overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{width: '25%'}}>
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 font-medium mt-1">
                <span className="text-primary font-bold">Прийнято</span>
                <span className="text-[#1c0d0d] dark:text-white font-bold">Кухня</span>
                <span>Доставка</span>
                <span>Вручення</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1e1e1e] rounded-xl p-6 shadow-sm border border-[#f4e7e7] dark:border-gray-800 flex items-start gap-4">
              <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="text-[#1c0d0d] dark:text-white font-bold mb-1">Адреса доставки</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  вул. Хрещатик, 22<br/>
                  Під'їзд 3, Поверх 4, Кв 45<br/>
                  Київ, Україна
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1e1e1e] rounded-xl p-6 shadow-sm border border-[#f4e7e7] dark:border-gray-800 flex items-start gap-4">
              <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h4 className="text-[#1c0d0d] dark:text-white font-bold mb-1">Контакти</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  Олександр Петренко<br/>
                  +380 67 123 45 67<br/>
                  <span className="text-xs text-gray-400 mt-1 block">Кур'єр зателефонує за 5 хв</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1e1e1e] rounded-xl shadow-sm border border-[#f4e7e7] dark:border-gray-800 overflow-hidden sticky top-24">
            <div className="p-6 border-b border-[#f4e7e7] dark:border-gray-800">
              <h2 className="text-[#1c0d0d] dark:text-white text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">receipt_long</span>
                Деталі замовлення
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-[#f4e7e7] dark:divide-gray-800 max-h-[400px] overflow-y-auto">
              <div className="p-4 flex gap-4 hover:bg-background-light dark:hover:bg-[#252525] transition-colors group">
                <div className="size-16 rounded-lg bg-gray-100 dark:bg-gray-700 bg-center bg-cover shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB652Djim-meDilUcxaUi4VEiUkgEEC_pCQmqO0qztPY_6V3CXEfJHc1PUR35A_z6zm1fEJGJ_Xsei4qTykG1KuXI0UtwrOyJs_3V8CFFCwWGx2IVpf_lCg_UlmYGqlRUAbdhmCXyexcqVPTDrZEDHiVdWgPz8Vu1_VbhVofQhnCJ1LdvSmI2UNbgJA6MGAWg9jqOJjr32TaOI_dc0Kixsgl3fxFnFtilicYT1K9PgkwTpzTMGcUCysw_pYdJhK0wbKj6qZkDbX_p8")'}}></div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#1c0d0d] dark:text-white font-bold text-sm">Пепероні Класична</h4>
                    <span className="text-[#1c0d0d] dark:text-white font-bold text-sm">215 ₴</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">30 см, Тонке тісто</p>
                  <div className="text-xs text-primary font-medium mt-1">x 1</div>
                </div>
              </div>
              <div className="p-4 flex gap-4 hover:bg-background-light dark:hover:bg-[#252525] transition-colors group">
                <div className="size-16 rounded-lg bg-gray-100 dark:bg-gray-700 bg-center bg-cover shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBlnZYisIR83rgYLxt68q8S93M-G_4bGzhNBOEoQwT5yfYI697TZchbInsxCe0Z6N5y4qlfM1uihICwH2nAdzXR8hb3YAaoRIsIpPbkTwYxWOzWk-KNVu5l-76CMhFTA-8KvtWNY1hPHwNgTzGM0sDW0WGANphy9xdFEdCV3UlLnTbsA0ah3rH9YbPBMkMEwNpnC7hcc6b-hIZLu2NOkpdxMcp3gzMSmHLwIuy40cKMLhBQ2wSfbQ3YWGvuGDesENazO85_AQrYL0")'}}></div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#1c0d0d] dark:text-white font-bold text-sm">Чотири Сири</h4>
                    <span className="text-[#1c0d0d] dark:text-white font-bold text-sm">245 ₴</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">30 см, Тонке тісто</p>
                  <div className="text-xs text-primary font-medium mt-1">x 1</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-background-light dark:bg-[#121212] space-y-3">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Сума</span>
                <span>560 ₴</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Доставка</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Безкоштовно</span>
              </div>
              <div className="h-px bg-[#f4e7e7] dark:border-gray-700 my-2"></div>
              <div className="flex justify-between items-center">
                <span className="text-[#1c0d0d] dark:text-white font-bold text-lg">Сплачено</span>
                <span className="text-primary font-extrabold text-2xl">560 ₴</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                <span className="material-symbols-outlined text-[16px]">credit_card</span>
                Картою онлайн
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <button className="w-full h-12 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <span className="material-symbols-outlined">map</span>
                Стежити на мапі
              </button>
              <Link to="/" className="w-full h-12 flex items-center justify-center gap-2 bg-transparent border border-gray-300 dark:border-gray-600 hover:border-primary hover:text-primary text-gray-700 dark:text-gray-300 font-bold rounded-lg transition-all">
                На головну
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;