import React from 'react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Ваше замовлення</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">3 смачні страви чекають на вас</p>
            </div>
            <button className="text-sm font-medium text-slate-400 hover:text-primary transition-colors flex items-center gap-1 group">
              <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">delete_sweep</span>
              Очистити
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {/* Item 1 */}
            <div className="group relative flex flex-col sm:flex-row gap-4 p-4 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 transition-all hover:border-primary/20 hover:shadow-md">
              <div className="shrink-0">
                <div className="w-full sm:w-32 aspect-square rounded-xl bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
                  <img alt="Pepperoni Pizza" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgAhd8KNAqcFhS5TBEzLSsICgs9nXJIymDMpYOeY5UhIozglufjlCVMvORdYE9hjdFfsGtx-1WLElm52mH_77dWEZ3J4ia0cH_GXFHM1Zq3s-x2TGTTzLCDGwW5gtgGpTtQpeMe5gH_BM_e3pqXfd3wJjSYWj7mBJfNkPUQNgNv0XBWxH2nM3WT6PTDkUvrM79Dcvmg-B59JYWFDHEnC0Dz9CAHB9woFDtO5NR7O78_A9JHZDnMqIdC7CdufSj6YNTaH8YCgePJPQ"/>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Піца Пепероні</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">30 см, Тонке тісто, Сирний бортик</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-100 dark:border-red-900/20">Гостре</span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/10"><span className="material-symbols-outlined">delete</span></button>
                </div>
                <div className="flex items-end justify-between mt-4">
                  <div className="flex items-center gap-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-1 border border-transparent dark:border-white/5">
                    <button className="size-8 flex items-center justify-center rounded-md bg-white dark:bg-neutral-700 text-slate-600 dark:text-white shadow-sm hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">remove</span></button>
                    <input className="w-8 text-center bg-transparent border-none text-slate-900 dark:text-white font-bold p-0 focus:ring-0" readOnly value="1"/>
                    <button className="size-8 flex items-center justify-center rounded-md bg-primary text-white shadow-sm hover:bg-red-700 transition-colors"><span className="material-symbols-outlined text-[18px]">add</span></button>
                  </div>
                  <div className="text-right"><p className="text-xl font-bold text-slate-900 dark:text-white">210 ₴</p></div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group relative flex flex-col sm:flex-row gap-4 p-4 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 transition-all hover:border-primary/20 hover:shadow-md">
              <div className="shrink-0">
                <div className="w-full sm:w-32 aspect-square rounded-xl bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
                  <img alt="Margherita Pizza" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmHb-pEkuRewvPwne7xSSBPUs2lHqKR8gRdp-K9yLpUInbpNm7Ow9t_nvNg-faJlJ9YoYLH4B0L6n3pobahtggaKeDWU1QcKhwwoGg517W3_zWVZGnZFqwVJPNjmJMa2-iyAdQgNzXL3aq1_2khGZUzESBo8X3Tc5KAvHjHfOOGaThZ0UYCKG_Pyk-R4eVRZXZFzxdfH72AbPkiKMR_15dImsVTaMki3dVhLkfTHpc77Q4LCIraedIU6NqzjQgXryfRIpjUVLJhkc"/>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Піца Маргарита</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">40 см, Традиційне тісто</p>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/10"><span className="material-symbols-outlined">delete</span></button>
                </div>
                <div className="flex items-end justify-between mt-4">
                  <div className="flex items-center gap-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-1 border border-transparent dark:border-white/5">
                    <button className="size-8 flex items-center justify-center rounded-md bg-white dark:bg-neutral-700 text-slate-600 dark:text-white shadow-sm hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">remove</span></button>
                    <input className="w-8 text-center bg-transparent border-none text-slate-900 dark:text-white font-bold p-0 focus:ring-0" readOnly value="1"/>
                    <button className="size-8 flex items-center justify-center rounded-md bg-primary text-white shadow-sm hover:bg-red-700 transition-colors"><span className="material-symbols-outlined text-[18px]">add</span></button>
                  </div>
                  <div className="text-right"><p className="text-xl font-bold text-slate-900 dark:text-white">190 ₴</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">thumb_up</span> Рекомендуємо додати
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-[#1e1e1e] p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 text-center group hover:shadow-md transition-all">
                <div className="aspect-square rounded-lg bg-neutral-50 dark:bg-neutral-800 mb-3 overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmqT5S8i3wDD8Vw950d2bljnrvcqkZjgANLwR_1Tqvt_0gsMC1Fr67rRqvWzeuRzplVSyRBuMBt8P7OYPNinWHLssZ7xbRjFkj-PgI8lM68_IegL5eZhC-BR9zMq--8XF9mRsPclqHcpywdljHePn1UYDbBwtmQxEnpet5VDY6tIGMerCvkl4psKu9XHfzPDUNWW3xQZczhb9k9bFOrZRIuqwvO0t13uFz_RPTZt80KxDXFor0vxFpHNQZ-RxsguzpGkxlqxQjQTM" alt="Sauce" className="w-full h-full object-cover"/>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">Часниковий Соус</h4>
                <p className="text-xs text-slate-500 mb-3">15 ₴</p>
                <button className="w-full py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-primary/10 hover:text-primary transition-colors">Додати</button>
              </div>
              <div className="bg-white dark:bg-[#1e1e1e] p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 text-center group hover:shadow-md transition-all">
                <div className="aspect-square rounded-lg bg-neutral-50 dark:bg-neutral-800 mb-3 overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIW033Ir_SeWu_vaD9a5llOvden2Pj1XqScOSsYJTlyPLyLobjABYPwGzBfF8c_IqX3Wp7xjQDLvwwyrS9FJN0APfmhRp4A3ZRYax0RYqky0uxjCo1D5mzLLeiOELNNJpjmBWFv5ypluk4zhl9Qj7gACCv8TMDduw49Qp8iyzMHWtsuAAXQA7CEusnc_U7xRmgaSxEwglT1Y6aQE-jCdMWIumXNujcHB68Z0zlcgyxhhNDqo6oSDE8UocKPtKRCmcP5wktcDCEviM" alt="Fries" className="w-full h-full object-cover"/>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">Картопля Фрі</h4>
                <p className="text-xs text-slate-500 mb-3">55 ₴</p>
                <button className="w-full py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-primary/10 hover:text-primary transition-colors">Додати</button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 overflow-hidden">
            <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#252525]">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Разом</h2>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between text-slate-600 dark:text-slate-400 text-sm"><span>Сума</span><span className="font-medium text-slate-900 dark:text-slate-200">450 ₴</span></div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400 text-sm"><span>Знижка</span><span className="text-primary font-medium">-10 ₴</span></div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400 text-sm"><span>Доставка</span><span className="text-green-600 font-medium">Безкоштовно</span></div>
              <div className="h-px bg-neutral-100 dark:bg-neutral-700 my-2"></div>
              <div className="relative">
                <input className="w-full rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700 text-sm py-2.5 pl-3 pr-10 focus:ring-1 focus:ring-primary dark:text-white placeholder-slate-400" placeholder="Є промокод?" type="text"/>
                <button className="absolute right-2 top-1.5 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">arrow_forward</span></button>
              </div>
            </div>
            <div className="p-6 bg-neutral-50 dark:bg-[#121212] border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex justify-between items-end mb-6">
                <span className="text-slate-900 dark:text-white font-bold">До сплати</span>
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">440 ₴</span>
              </div>
              <Link to="/checkout" className="w-full group bg-primary hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-red-200 dark:shadow-red-900/20 transition-all flex items-center justify-center gap-2">
                <span>Оформити</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;