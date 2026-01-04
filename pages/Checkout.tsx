import React from 'react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-xl border border-border-light dark:border-gray-800 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h1 className="text-3xl font-black tracking-tight text-text-main dark:text-white">Оформлення</h1>
              <div className="flex items-center gap-2 text-sm font-medium text-text-muted dark:text-gray-400">
                <span>Кошик</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary">Інфо & Оплата</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span>Підтвердження</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-text-main dark:text-gray-200">Крок 2 з 3</span>
                <span className="text-primary">66%</span>
              </div>
              <div className="h-2 w-full bg-border-light dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3 rounded-full"></div>
              </div>
            </div>
          </div>

          <section className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-xl border border-border-light dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
              <h2 className="text-xl font-bold text-text-main dark:text-white">Контактні дані</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-sm font-medium text-text-main dark:text-gray-300 mb-2 block">Ім'я</span>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500 material-symbols-outlined">person</span>
                  <input className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] text-text-main dark:text-white placeholder-text-muted/70 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Ваше ім'я" type="text" defaultValue="Олександр"/>
                </div>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-text-main dark:text-gray-300 mb-2 block">Телефон</span>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500 material-symbols-outlined">call</span>
                  <input className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] text-text-main dark:text-white placeholder-text-muted/70 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="+380 XX XXX XX XX" type="tel"/>
                </div>
              </label>
            </div>
          </section>

          <section className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-xl border border-border-light dark:border-gray-800 shadow-sm">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</div>
                <h2 className="text-xl font-bold text-text-main dark:text-white">Спосіб доставки</h2>
              </div>
              <div className="bg-background-light dark:bg-[#121212] p-1 rounded-lg flex border border-border-light dark:border-gray-700">
                <button className="px-4 py-1.5 rounded-md text-sm font-bold bg-white dark:bg-[#1e1e1e] shadow-sm text-primary transition-all">Доставка</button>
                <button className="px-4 py-1.5 rounded-md text-sm font-medium text-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-gray-200 transition-all">Самовивіз</button>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-12 gap-4">
                <label className="col-span-12 md:col-span-8">
                  <span className="text-sm font-medium text-text-main dark:text-gray-300 mb-2 block">Вулиця</span>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500 material-symbols-outlined">location_on</span>
                    <input className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] text-text-main dark:text-white placeholder-text-muted/70 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Почніть вводити адресу..." type="text"/>
                  </div>
                </label>
                <label className="col-span-6 md:col-span-2">
                  <span className="text-sm font-medium text-text-main dark:text-gray-300 mb-2 block">Будинок</span>
                  <input className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] text-text-main dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" type="text"/>
                </label>
                <label className="col-span-6 md:col-span-2">
                  <span className="text-sm font-medium text-text-main dark:text-gray-300 mb-2 block">Кв/Офіс</span>
                  <input className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] text-text-main dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" type="text"/>
                </label>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <label className="col-span-6 md:col-span-4">
                  <span className="text-sm font-medium text-text-main dark:text-gray-300 mb-2 block">Під'їзд</span>
                  <input className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] text-text-main dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" type="text"/>
                </label>
                <label className="col-span-6 md:col-span-4">
                  <span className="text-sm font-medium text-text-main dark:text-gray-300 mb-2 block">Поверх</span>
                  <input className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] text-text-main dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" type="text"/>
                </label>
                <label className="col-span-12 md:col-span-4">
                  <span className="text-sm font-medium text-text-main dark:text-gray-300 mb-2 block">Домофон</span>
                  <input className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] text-text-main dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" type="text"/>
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-text-main dark:text-gray-300 mb-2 block">Коментар</span>
                <textarea className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] text-text-main dark:text-white placeholder-text-muted/70 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" placeholder="Наприклад: не дзвонити у двері, спить дитина" rows={2}></textarea>
              </label>
            </div>
          </section>

          <section className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-xl border border-border-light dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</div>
              <h2 className="text-xl font-bold text-text-main dark:text-white">Оплата</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="relative group cursor-pointer">
                <input type="radio" name="payment" className="peer sr-only" defaultChecked/>
                <div className="h-full p-4 rounded-xl border-2 border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center justify-center gap-3 text-center">
                  <span className="material-symbols-outlined text-3xl text-text-muted peer-checked:text-primary">credit_card</span>
                  <span className="text-sm font-bold text-text-main dark:text-gray-200 peer-checked:text-primary">Картою онлайн</span>
                  <div className="absolute top-2 right-2 hidden peer-checked:block">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  </div>
                </div>
              </label>
              <label className="relative group cursor-pointer">
                <input type="radio" name="payment" className="peer sr-only"/>
                <div className="h-full p-4 rounded-xl border-2 border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center justify-center gap-3 text-center">
                  <span className="material-symbols-outlined text-3xl text-text-muted peer-checked:text-primary">payments</span>
                  <span className="text-sm font-bold text-text-main dark:text-gray-200 peer-checked:text-primary">Google / Apple Pay</span>
                  <div className="absolute top-2 right-2 hidden peer-checked:block">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  </div>
                </div>
              </label>
              <label className="relative group cursor-pointer">
                <input type="radio" name="payment" className="peer sr-only"/>
                <div className="h-full p-4 rounded-xl border-2 border-border-light dark:border-gray-700 bg-background-light dark:bg-[#121212] peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center justify-center gap-3 text-center">
                  <span className="material-symbols-outlined text-3xl text-text-muted peer-checked:text-primary">wallet</span>
                  <span className="text-sm font-bold text-text-main dark:text-gray-200 peer-checked:text-primary">Готівка</span>
                  <div className="absolute top-2 right-2 hidden peer-checked:block">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  </div>
                </div>
              </label>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-background-light dark:bg-[#121212] flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600">lock</span>
              <p className="text-sm text-text-muted dark:text-gray-400">Ваші платіжні дані надійно захищені. Ми не зберігаємо дані вашої картки.</p>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-xl border border-border-light dark:border-gray-800 shadow-lg">
              <h3 className="text-xl font-bold mb-5 pb-4 border-b border-border-light dark:border-gray-800 text-text-main dark:text-white">Ваше замовлення</h3>
              <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex gap-3 items-start">
                  <div className="size-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                    <img alt="Pepperoni" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3vK5G1Kh6BXKoR1WY5gW6y88tP9f3NOp8iIQJWVhZzlXnoPd8dixHIV0qa0neD68KO6b6TiOrAU3njwNm-0Va2uBloPt5cYjrdDlH31l5KfYMS6NvNAmFG8jAyxQAZrf5sGPX2uq_E0OGw1FCzgUFQrOnOyhEGjQa8q5NaFGL5Nw5fBoDVfeYfRM9ih3XoxMVb96huxZ5gGiePx_4H03mJ-HHfZo-f7UCAB-zfpghXj0bqQ4v-PxZrkRdaSIysPzuwA6AYRRHPR8"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-sm font-bold text-text-main dark:text-white leading-tight">Пепероні</p>
                      <p className="text-sm font-bold text-text-main dark:text-white">240 ₴</p>
                    </div>
                    <p className="text-xs text-text-muted dark:text-gray-400 mb-1">Середня 30см, Тонке тісто</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">x 1</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="size-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                    <img alt="Cheese" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tGSXg7ihGnLMS9QTFf8q-BVEwMLl6I9O7KpvsqI3RIo6ONXgve79zDnU-nALb9e51QkBCYALp6pj17S7zxfCvf6LNd_TDROOHuMGT4bJYqG-eW9p1Kwnka-6OqbMRYsexEfxRnDSv6bTzGTELInqt5yc5Zodt8k4fU84TyM2dUxSsvAcynbCjh1z8WouuAZjyJMg8H2c3Ccudk38OtwX5SR2pA3vXdQ60NQSb-ZJJ3VvP5dkGG1vamrDF8sm98izpc-2yfZlbdA"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-sm font-bold text-text-main dark:text-white leading-tight">Чотири Сири</p>
                      <p className="text-sm font-bold text-text-main dark:text-white">320 ₴</p>
                    </div>
                    <p className="text-xs text-text-muted dark:text-gray-400 mb-1">Велика 40см, Тонке тісто</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">x 1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-6 border-b border-border-light dark:border-gray-800 mb-6">
                <div className="flex justify-between text-sm text-text-main dark:text-gray-300">
                  <span>Сума</span>
                  <span>560 ₴</span>
                </div>
                <div className="flex justify-between text-sm text-text-main dark:text-gray-300">
                  <span>Доставка</span>
                  <span className="text-green-600 font-medium">Безкоштовно</span>
                </div>
              </div>
              <div className="flex justify-between items-end mb-6">
                <span className="text-lg font-bold text-text-main dark:text-white">До сплати</span>
                <span className="text-2xl font-black text-primary">560 ₴</span>
              </div>
              <Link to="/confirmation" className="w-full block text-center py-4 bg-primary hover:bg-primary-hover text-white text-lg font-bold rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                Підтвердити
              </Link>
              <p className="text-xs text-center text-text-muted dark:text-gray-500 mt-4">
                Натискаючи кнопку, ви погоджуєтесь з <a href="#" className="underline hover:text-primary">умовами публічної оферти</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;