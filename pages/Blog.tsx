import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Представляємо Трюфельну Грибну Піцу",
    excerpt: "Відчуйте земляний смак нашої нової сезонної пропозиції, доступної обмежений час.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Noip7CJM7El-e7bPovbSHyM78loia5wD_tQoGgb6qXz1UEZabw7NCHxQnlA5ZgH-XYkiNyjK9Nn5_eOa8h1G8YHIImBLajEqd4YGJOK1qiBZUKM64Ejlf_5KFZ5-lw9kh_8tayuyeq6UPTpdUB5KcRWJk4KOz-isIZ9tyncw81f_2QPH8MBqQqAh9EcA6gr16r-UHUzpiBuUsn_9aqbFHxgDB4KhBgkOho-l8cI2OolCgy2LsXXlTrLgSLPfbN6k66ENDFM5u-8",
    category: "Нове Меню",
    date: "12 Жовт, 2023",
    readTime: "5 хв читання"
  },
  {
    id: 2,
    title: "Як ми обираємо помідори Сан Марцано",
    excerpt: "Глибоке занурення в вулканічні ґрунти Італії, де вирощуються наші ключові інгредієнти.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc1tr7oq8BWBaZd6mNVR-_z-86se5DpDvSugV_4mQyY5PaY1TriUxTD0ONZs11rvYw6VIE3DCOYAT31c6Gf6djwJLgo4s2qX0J9iqbaBZ32w2E2fG3hLQK6_UbKryfYTSYu0o-YKrxdC1HP9Inw6ve9EPILun8_nb1JtRJtuoJqlgUZlTeTSGPNwQ1KY04oPMXiDgpUvxNKUy3Sbb_Hrc_UIWWzSX63sFZGn5Q5uyAMYEeTOKoSEOMojH0gfzgLufNcYkSuwiXt_0",
    category: "Інгредієнти",
    date: "28 Вер, 2023",
    readTime: "8 хв читання"
  },
  {
    id: 3,
    title: "5 порад для розігріву піци вдома",
    excerpt: "Ніколи більше не їжте розмоклі залишки завдяки цим порадам від шефа.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsdD_fjzxE6VX1rDmJeLocRrViD3G_uRwb1NlZw7BJXadtXWJ8gsO-LWa5VRKpBKlwRdGTFezgz2wW4e9mtK6xSbdyXMtQMGAYcr_8kUUwAKHmwMT0euh_PBmWuk1RSZQSFC_3DH3OU5wraeneu5ANFuGww82hY38YomGe4whyYflCPie6jgow7UEj_nZXLGAp2hOSA6yNiXNRWxIrdX7SitltsHEFdAZrf1fgHuuB8zGBvEqtWJSszeWnFPXB6nk-KeyPrHP92QE",
    category: "Поради",
    date: "15 Вер, 2023",
    readTime: "3 хв читання"
  },
  {
    id: 4,
    title: "Секрет нашої скоринки на заквасці",
    excerpt: "Чому наш процес ферментації тривалістю 48 годин створює ідеальний повітряний хруст.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6fAoneSRgOCKEunYIRZwmbslGLSc3HuBWGsxx0dsckZwcVGBmBbj1MFbbfOM8QkEn8ETx0WhllKj5d9Qf_YclKoSs7GKmEeHcYeDXefTOG6HXhCYgKJ7uMWHdpvwp0stjPwxmO3EWG-xLloqVyV1SO-PXBB5N-u6KrK73SBoPSsPw6wnCuFXi2n8Eilwpy9-BtnnVp9JZKzq3NPzxBzcrljjUS8xk7924l9cdkai1GH9MHsNjQ6Lno6hPcD_VDwh1C41p7Keml28",
    category: "Кухня",
    date: "14 Сер, 2023",
    readTime: "6 хв читання"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-8 flex flex-col gap-8">
      {/* Hero */}
      <div className="w-full">
        <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden group" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIrMGiOjW3CXNc-RYG3HcCFqmFYaFtoSicFVdjnM8QmodfX6USw66IXVCew4epAvNZuouBX8ZzTAnMg95BKrlXdmPllzE5d-vNxxCATkzs-F_ta7Q2oVA3vgkSWFJnCl64MaUoFLxcuR8I-nR2mRpiFNVd16UOO9MVcnbl0gYktNBvtciWF1iggBxb9QC97KMl8JC-nr6qO23GzrovL5ZCy937IMN6CedfaI8fj767Rzn4zCoGMyHnRkQl6ejGyR5EITgNaOf1agI")'}}>
          <div className="relative z-10 flex flex-col gap-4 text-center max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Наш Блог</span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
              Свіже з печі
            </h1>
            <h2 className="text-white/90 text-base md:text-lg font-normal leading-relaxed drop-shadow-sm">
              Дізнайтеся секрети наших рецептів, познайомтеся з шеф-кухарями та будьте в курсі останніх подій Pizza Roma.
            </h2>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex w-full overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex gap-3">
          <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-primary px-5 transition-colors text-white text-sm font-bold">Всі</button>
          {['Нове Меню', 'Рецепти', 'Події', 'Поради', 'Кухня'].map(cat => (
            <button key={cat} className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e8cece]/50 dark:bg-[#1e1e1e] hover:bg-[#e8cece] dark:hover:bg-[#333] px-5 transition-colors text-[#1c0d0d] dark:text-[#f4e7e7] text-sm font-medium">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group flex flex-col gap-4 rounded-xl border border-[#e8cece] dark:border-gray-800 bg-white dark:bg-[#1e1e1e] overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
              <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: `url('${article.image}')`}}></div>
              <div className="absolute top-4 left-4 bg-white dark:bg-[#121212] px-3 py-1 rounded-md shadow-sm">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{article.category}</span>
              </div>
            </div>
            <div className="flex flex-col flex-1 p-6 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#9c4949] dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-[#1c0d0d] dark:text-white text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-[#6b4c4c] dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-auto">
                <Link to={`/blog/${article.id}`} className="inline-flex items-center text-sm font-bold text-primary hover:text-red-700 transition-colors group/link">
                  Читати статтю 
                  <span className="material-symbols-outlined text-[18px] ml-1 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;