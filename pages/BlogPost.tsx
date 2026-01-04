import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
  return (
    <div className="mx-auto max-w-[960px] flex flex-col gap-8 px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <Link to="/" className="text-stone-500 dark:text-stone-400 hover:text-primary transition-colors">Головна</Link>
        <span className="text-stone-300 dark:text-stone-600">/</span>
        <Link to="/blog" className="text-stone-500 dark:text-stone-400 hover:text-primary transition-colors">Блог</Link>
        <span className="text-stone-300 dark:text-stone-600">/</span>
        <span className="text-gray-900 dark:text-gray-100 font-medium">Секрет закваски</span>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white font-serif">
          Секрет нашого ідеального тіста на заквасці
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-stone-500 dark:text-stone-400 border-b border-stone-200 dark:border-stone-800 pb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-stone-200 overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLRmRyrCizAD8mWNNZtvqgf9ZeXe0CM0_6NRu5QdI2x24VL_J7Q4VQjQpERxwOfeXvID6JiVhmhwmqI9hitO7vBNcC_40WGO7K4PfLg0aUcpd_SB9tOr-BP3oWTd8jn-5CKuus1cZ-4Kz9r7HPtOHW6ozCVAt3s_p0WPh0P6tKSjfd4FOtHBOvAv8cAnQzdDRhzDakAd7SWyWgK9tyrj8Og5WZABmqtw94w01klREMGhoaNraJI9yhkxwtBVXfBaLsE9uZr-3mBBY" alt="Author" className="w-full h-full object-cover"/>
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-200">Марко Россі</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-stone-300"></span>
          <span>24 Жовт, 2023</span>
          <span className="w-1 h-1 rounded-full bg-stone-300"></span>
          <span>5 хв читання</span>
          <div className="flex items-center gap-1 text-primary ml-auto md:ml-0">
            <span className="material-symbols-outlined text-[16px]">favorite</span>
            <span className="font-bold">248</span>
          </div>
        </div>
      </div>

      <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden shadow-xl">
        <div className="w-full h-full bg-stone-200 bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuKvohhuUx4njPoo57yxxGnE0f_JOcEE0fTHOlBfxCZEbTWm1umaiTAU5VdSB988t4MvXhMHE-Azkoy_qOut6M6p-BELAJKKu7Rb_3gTCw5vLhRC-FWS7GVFmf5AHrsvJdp7-Cp-AoVKUcJ26gRfDvbeD2U_4VQdm3qtKi98EaT1VgCCH8RzJUPVTIN9ngygOOmE71zfCOMSkb6stno-Gt6cojddR3Cqa_QgGEDX6Qn7QGPWLmm_XhMJoKrsixYC4m0ZbwsbObknk")'}}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
        <div className="lg:col-span-8 flex flex-col gap-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-normal font-serif">
          <p>
            <span className="text-5xl font-bold text-primary float-left mr-2 mt-[-10px]">Н</span>аша подорож до ідеальної скоринки почалася понад 48 годин тому. Ми віримо, що чудова піца починається з чудового тіста. Натуральна закваска надає унікального смаку, який балансує багатство нашої моцарели та солодкість помідорів Сан Марцано.
          </p>
          <p>
            У Pizza Roma ми не просто змішуємо борошно і воду. Ми створюємо живу екосистему. Кожна партія нашого тіста - це результат років експериментів, помилок та нескінченної любові до італійських традицій.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4 mb-2 font-sans">Мистецтво ферментації</h3>
          <p>
            Чому ми чекаємо 48 годин? Тому що час - це найважливіший інгредієнт, який не можна купити. Під час довгої холодної ферментації складні цукри розщеплюються, роблячи тісто не тільки смачнішим, але й легшим для травлення.
          </p>
          <div className="my-6 border-l-4 border-primary pl-6 py-4 italic text-2xl text-gray-700 dark:text-stone-300 bg-stone-50 dark:bg-[#1e1e1e] rounded-r-lg">
            "Справжня піца не терпить поспіху. Тісто має 'дихати', рости та розвиватися перед тим, як потрапити в піч."
          </div>
          <p>
            Коли тісто потрапляє в нашу дров'яну піч, розігріту до 400°C, стається магія. Краї миттєво піднімаються, утворюючи ту саму фірмову плямисту скоринку – "cornicione", як кажуть у Неаполі.
          </p>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="aspect-square rounded-lg overflow-hidden bg-stone-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu-VaOI7UOkHJsErOIyjJ6uMqPjNNTwqFv7RJhO1WdMJHfhcgmImUGg2aiPdrTYSsN4crTjxIAHg_2Kxa8w8ufOek6aeD5L4yQwzG3ioFBfzLAXRRja9AprM4HnY7HBxNg21vOOrVNhX3QCdd5lstGgl-lne8ebmJLZRnoer1f2rWzpLzYelG0tArFtQJhhMEj5AU4gWKgnIeE5yrdyR9FTGH_IBMqLZt8Ni3ysNioSxe4D4XhHz5tAw3u88zYsmPnA_W38GtgqQU" alt="Kneading" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden bg-stone-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIBafT26t0zO9QFp--ijy9bmAhiqaBaAV34thMLBB8_IoKSB35MEzTFD2g42DyjVFy_8yFESqzn0cbstOk-cjXcGF2tgsHyrHYXVrwXbwy_uov9dS50F8PCQjVYazJCN894Woxa6BxGAw4iWsn91AWkP2bPc5q0AtGF9lc3xOArK2KmLCkp_9WcgpHmqAHlW-_ZhYBxcNWF2mAPZ2uetUmGl1z4I01Oc6DsYYCT5y5NoYMvCZ44Wao0baq51JQ04DZPKRqK-mejhQ" alt="Oven" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
            </div>
          </div>
          <p>
            Запрошуємо вас скуштувати різницю. Наступного разу, коли замовите нашу Маргариту, зверніть увагу на текстуру. Хрустка зовні, але ніжна і повітряна всередині. Це смак терпіння.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm sticky top-24 font-sans">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <span className="material-symbols-outlined text-primary">restaurant_menu</span>
              Зголодніли?
            </h4>
            <div className="aspect-video w-full rounded-lg bg-stone-200 mb-4 overflow-hidden relative group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFbtsov77dHfjlAnTlsRZ_lcutoSl_qI8-apJodGa3sxYA9IKUPWXoPjPVdFqmEYKb02lfeiw2M253O53rEhKpQ9F1h9LGynU0EHcys78omFhc3HWB-Oyg-rTwZD_r5cLtf4T3J7cdxaH-9yrutLe4tDw4J6MhOyniWteVcKob5UNxyhszhLnjC3ocrQVA1xnmU0h6PU-7lPKn5M1jD8QpMlzLRe0RzNogn4gEIYl62Qi_n_29ThOZuyi7kSVs2lLbpk_QtnkfiAE" alt="Pizza" className="w-full h-full object-cover"/>
            </div>
            <h5 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">Класична Маргарита</h5>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-primary">240 ₴</span>
              <div className="flex text-yellow-500 text-sm">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>)}
              </div>
            </div>
            <button className="w-full py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold transition-colors">
              У кошик
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;