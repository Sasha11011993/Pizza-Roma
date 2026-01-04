import React from 'react';
import { Link } from 'react-router-dom';

const pizzas = [
  {
    id: 1,
    name: "Пепероні Фіст",
    description: "Моцарела, подвійні слайси пепероні, орегано, гострий томатний соус.",
    price: 240,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVAVRYv2wZci3kRDrCQPjIjBXjOGX8v-kNedpfNXr_Bz657OPwHWIDhP1UvG3gin5teXAXDz2JolsrE2ujaO_t9LDjKNqBL5y1NeHBBSEI6i5AE_-YvU9nrgso3OHiNfPgj-bL_xa6_Emc-fQHE83CTCWzvWCSl1eBFfpIWtHa1KDGCedbawjklj8uejo49-4z3yUllUV7b2GVISQ58bNW2yiVt7JMsRs-Rvvyn36Pl8cAq0GLM-_M7AJScNszf6ufdRe_FEvRHto",
    tag: "Гостре",
    tagColor: "bg-white dark:bg-black/90",
    icon: "local_fire_department",
    iconColor: "text-primary"
  },
  {
    id: 2,
    name: "Маргарита Класична",
    description: "Свіжий базилік, моцарела ді буфала, томатний соус сан марцано.",
    price: 180,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_4rJuRVTgrwjJQxpmd86n4QHn-oQA8VS1SW-ZaoCv7RYj0wGtXYiZA0tzbHUUtgRL2p2MCAivlL68cMdysDE31_qK4aQh1m5fNt9pC5s1G2D4eWyyVhMXuDp1JNRBA5ocWyBbfcNN8buzmIpvDZ3b8H8c0LhMzdRv1rkfd6lHcrRE-esmv--zfsgcX4s2OAAjmaqNCy1OJbcCGoxe-IAlYfljDsPR_YqX8oIwkccovi9BRQOrIg-EaxI133elmwNi8FF908QH3lU",
    tag: "Вег",
    tagColor: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
    icon: "eco",
    iconColor: ""
  },
  {
    id: 3,
    name: "Курка Барбекю",
    description: "Куряче філе гриль, соус барбекю, червона цибуля, кукурудза.",
    price: 220,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYscMxm-dY3MCQQeKzpU-kVT6gS5vDwg01ulZGDq03hbZn0Z6Pw9klWgNx0IaAZQc58jwIIV1Wx6U2l8_62lsiGhP-BpsfZ0LcvIKwXZklD4QFNyAQILAgN9zym5dOkCMRLagEeUI-26zRauhkJ2qkPwj5qPj0nA7n1bTMtx_A7BWppCbCAHDJkeleJvfL26pikIQcsm5YETIhD_QY1Yiz4E9fVcVzdOLz4P3wmT8zkxfneJypDF_yupvj2nNE_2o69rgKXdNqF9Y"
  },
  {
    id: 4,
    name: "Чотири Сири",
    description: "Моцарела, витриманий чеддер, пармезан, вершкова горгонзола.",
    price: 210,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvnrk9HKAs0UDswQQis845QYZFTNn21ym2UsuG7DcAtyx6NZrP8FeDXQP8rz80r01zVCo2ekjcAM4wm8ye1Cvuqj59gtx0A5Q4lDjBXal139o443uNXJXmU2EmBARNuvh2z-BMptL7et_64Rh11SwBJ8ZkeZdiySgdYV7i0d8Y91KaVo0Ck1cGJnOxXqYwAEJJyzKUARzQKnfkbA3qKRtNvQdJ14_rHCC6uFbACA9C8cssb_yHAZNZkCbJbxJhmnm_c4yanDfkqGQ"
  }
];

const drinks = [
  { name: "Кока-Кола", desc: "0.5л Пляшка", price: 40, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyILoEY9Fv-r9cnHkqaqcv-UiwMFEyg8hcY6o_iyZGzUvuk4XnpGChy_JHUOx7mw0R8r32yGBIaL9AigOTPgHjRUwR7mebQz28A4IVuPduNCw5g_qG9tkYlLrcOIl0WahwHf-Z29dBJohJwalrGwUQq9fVpCW2MdCpJGROp6Bm8C74SfgLtiNTVSnII42WBQvVfQIuw1F461xaSUW46yUvXwDULieqGHRZghY3Nx_ZdvDM1nG2FoMXWdiYp9Oc881ulqv8HYXJVsM" },
  { name: "Апельсиновий Сік", desc: "0.3л Фреш", price: 65, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfMWZI6wekV6Jhc3XPkR3yMERu71yh7yVW7QSg5HVrcDurt3ZKIDdY8UyeTVBruGpO1Wja77UmZ8BuXGZJ12lBPWB6oL4NpgrKcDG7Sq9nYj43WBXxROLO65rLIRoA8jPAbWhShVQuUrrIAGQZ__1rQRS5Low5s4gsrmyeEzBkRksoYARc9l_zTZHmp2R1plR1JkTfaOSU1t_81vICHCs7pRqw77TFVcwO3kcT6uUTnSLpxoPEKLN3PVxvwgRnkK047v624m_xUyg" },
  { name: "Газована Вода", desc: "0.5л Мінеральна", price: 30, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhO7ohT-oTx6-azeh02o3sVZPW8RwVPxujs5w-NJjugVcyTAdZZ5tgtgMc8DbeYAcaya3nrnkACpXw7dH7_p3RWXQLwcFB8c76sh6nvHUtQUjgj-DXwx9t8kTqGUul1NWYWqBWGeqnVb0fFx6zy608D3XspiHoRhD3eUizow44u8MspwF78Xk0_ilUcbNfSrAeVuef6cIrZRa-MFWMjn5IeMJVwa7gZICBUGTOquSt31Bx22ff2Zp07R844Ab8kYQcGII5OlKNS18" },
  { name: "Холодний Чай", desc: "0.4л З лимоном", price: 45, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSn6XMUynh6USFF6j4ugpmJtT2yHIw1lrCbC-ANMWGFfxMXneiwTx7tLo7LEvmBDvxmltIO1XMMHhDldHSPYv6kB5VDWc0TnFkKAKArwbhFicyc-yRJbe08x6u1cKHnkJvyiGouPL_xcEhM5n_rBoaxQ5SY4sYdvwmHlu4ZIaPP6q0YD3dZ1KL6yS0lCnY6X2UAkqpiZDA8Y1FBw2_4CgUAkqFd32JKtcBHgNMlDHZm0mrtCMDNmYQbrGksgxTpT18AmBy39DqobY" },
  { name: "Енергетик", desc: "0.33л Банка", price: 55, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaK59I0uEU6KFYu1fRwxll5Yu8FzPpvx9r3QMh1s07pUpkCra2v2hMMPCWoIkH3oW1Ysu_wgIiWhhUWsFX5vSGC_fPo-xZF7WVsHy9Z7MWk8wNUJx2Ch02141ZEC0smBzQFJZ0kh4-lE-cY8xtSRWwA1Tow1Uv_A1qaC1Qqxvy5lyGRNdKkT3lA8OdngTARkKMTPpxU8gVBGioFEJY1EyzEuR91IorN1exKEXrw-2p3nIJVQv6KKQhC7XHb_gZhN7V4ImaHXMussc" },
];

const Menu: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6">
      {/* Hero Section */}
      <section className="w-full mb-10 rounded-2xl overflow-hidden relative shadow-xl border border-gray-200 dark:border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
        <div className="relative min-h-[400px] sm:min-h-[480px] flex flex-col justify-center px-6 sm:px-12 md:px-20 z-20 w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHRztbdYG0G5yPeMbDIwq9La30t6OT5gMWe1ZogCHddqlE8FeD3h-Zfl9IlBxWpjgcUOc1eB3dPdsmXi_scXHqGBMYwf2D2z04LQA3NwpXROpHbw-AN4xpMvgYWvF_dFRIKwljKAZjgQtqeGsdkO0RvjfuFQMp5u4bvX3x4c80ylm_lvjGlM6ploIa0bZgFr4vCJaaZZ12tynvMw7K9cjvN9mvZx2Kqo_ee6dDmMlJLxiFhSfJD37fZfmgCBNfTkFDt-5giu1sUGY")'}}>
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-white bg-primary rounded-full shadow-lg shadow-red-900/50">
              Піца Дня
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-md">
              Відчуй <br/><span className="text-primary drop-shadow-sm">Автентичність</span>
            </h1>
            <h2 className="text-lg sm:text-xl text-gray-200 font-medium mb-8 max-w-lg leading-relaxed drop-shadow-sm">
              Знижка 20% на всі м'ясні піци сьогодні! Скуштуйте справжній смак Італії з нашим фірмовим тістом.
            </h2>
            <div className="flex gap-4">
              <Link to="/product/1" className="bg-primary hover:bg-red-700 text-white text-base sm:text-lg font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 active:translate-y-0">
                Замовити
              </Link>
              <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white text-base sm:text-lg font-bold py-3 px-8 rounded-lg border border-white/20 transition-all hover:border-white/40">
                Переглянути Меню
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-[73px] z-40 bg-background-light/95 dark:bg-[#121212]/95 backdrop-blur-sm -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 py-4 border-b border-gray-200 dark:border-gray-800/50 transition-colors">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide no-scrollbar items-center">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white shadow-md shadow-primary/20 transition-all whitespace-nowrap group hover:bg-red-600">
            <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
            <span className="text-sm font-bold">Всі</span>
          </button>
          {[
            {name: 'М\'ясні', icon: 'local_pizza'},
            {name: 'Вегетаріанські', icon: 'eco'},
            {name: 'Гострі', icon: 'whatshot'},
            {name: 'Напої', icon: 'local_drink'},
            {name: 'Десерти', icon: 'cake'}
          ].map((item, idx) => (
            <button key={idx} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#1e1e1e] border border-[#f4e7e7] dark:border-gray-700 hover:border-primary/30 hover:bg-red-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-all whitespace-nowrap group text-text-main dark:text-gray-300">
              <span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primary">
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pizzas Grid */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-8 bg-primary rounded-full block shadow-lg shadow-primary/40"></span>
            Фірмові Піци
          </h2>
          <a href="#" className="text-primary font-bold text-sm hover:text-red-400 flex items-center gap-1 transition-colors">
            Всі <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pizzas.map((pizza) => (
            <Link to={`/product/${pizza.id}`} key={pizza.id} className="group bg-surface-light dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-transparent dark:border-gray-800 hover:border-primary/20 flex flex-col h-full">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `url('${pizza.image}')`}}></div>
                {pizza.tag && (
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-1 backdrop-blur-sm border border-gray-100 dark:border-gray-800 ${pizza.tagColor}`}>
                    <span className={`material-symbols-outlined text-[14px] ${pizza.iconColor}`}>{pizza.icon}</span>
                    {pizza.tag}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">{pizza.name}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{pizza.description}</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-xl font-black text-text-main dark:text-white">{pizza.price} <span className="text-sm font-medium text-gray-500">грн</span></span>
                  <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg p-2.5 transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Drinks Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-8 bg-blue-500 rounded-full block shadow-lg shadow-blue-500/40"></span>
            Холодні Напої
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {drinks.map((drink, idx) => (
            <div key={idx} className="group bg-surface-light dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-800 hover:border-primary/20 p-4">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-3 bg-gray-50 dark:bg-gray-800">
                <div className="w-full h-full bg-center bg-cover bg-no-repeat group-hover:scale-105 transition-transform" style={{backgroundImage: `url('${drink.img}')`}}></div>
              </div>
              <h3 className="text-base font-bold text-text-main dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">{drink.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{drink.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold dark:text-gray-200">{drink.price} ₴</span>
                <button className="size-8 rounded-full bg-gray-100 dark:bg-[#2a2a2a] hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;