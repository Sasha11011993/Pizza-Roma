import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="w-full max-w-[1280px] px-4 md:px-10 py-6 md:py-10">
        <div className="relative overflow-hidden rounded-xl min-h-[520px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center group" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYkr54tllZaDfOPVQm18lg0tWcLXJUXuh6eFv8Ulc6AL9J9Kdn1zBANSRc6a8bblfkSN79T49c9FwRI3vpAD4C_hDsLpNaOwddQYXgPdNXjWFh5izjB_XH6E6MR2KfbGJUMxs-OEsSA5DwKZ-z5YviGYiAa4GE2IVbHQWjE5YkiEF3Sow9tpeMUNTz66n4N-6b5xRJoq7voQamgqixkIk4tOkcpciikHocFgRs46gP_MfZ4D2jwSlsTo1R8L0H78DZLYyashuY81Y")'}}>
          <div className="relative z-10 max-w-3xl flex flex-col gap-6 animate-fade-in-up">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg font-epilogue">
              Більше ніж просто піца
            </h1>
            <h2 className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Ми створюємо спогади, поєднуючи автентичні італійські рецепти з українською гостинністю.
            </h2>
            <div className="pt-4">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-xl font-bold text-base transition-colors shadow-xl">
                Наша Історія
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="w-full max-w-[960px] px-6 py-16">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-black tracking-tight font-epilogue">Наша Філософія</h2>
          <p className="text-neutral-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Ми віримо в прості речі, зроблені ідеально. Для нас піца – це не просто їжа, а мистецтво об'єднувати людей.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 rounded-xl border border-[#e8cece] dark:border-gray-800 bg-white dark:bg-[#1e1e1e] p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">eco</span>
            </div>
            <div>
              <h3 className="text-text-main dark:text-white text-lg font-bold mb-2 font-epilogue">Свіжі Інгредієнти</h3>
              <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
                Ми купуємо овочі та фермерські сири щоранку від перевірених локальних постачальників.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-[#e8cece] dark:border-gray-800 bg-white dark:bg-[#1e1e1e] p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">local_fire_department</span>
            </div>
            <div>
              <h3 className="text-text-main dark:text-white text-lg font-bold mb-2 font-epilogue">Дров'яна Піч</h3>
              <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
                Автентична неаполітанська піч, розігріта до 450 градусів для ідеальної скоринки.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-[#e8cece] dark:border-gray-800 bg-white dark:bg-[#1e1e1e] p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">diversity_3</span>
            </div>
            <div>
              <h3 className="text-text-main dark:text-white text-lg font-bold mb-2 font-epilogue">Сімейні Традиції</h3>
              <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
                Рецепти тіста та соусів, що передаються поколіннями, адаптовані до сучасних смаків.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full max-w-[1080px] px-6 py-20 bg-gray-50 dark:bg-[#121212] rounded-3xl mb-12">
        <h2 className="text-text-main dark:text-white text-3xl font-bold mb-2 text-center font-epilogue">Знайомтесь з командою</h2>
        <p className="text-neutral-500 dark:text-gray-400 text-center mb-12 max-w-lg mx-auto">Люди, які щодня вкладають душу у створення вашої улюбленої піци.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group flex flex-col gap-3">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200 dark:bg-gray-800">
              <img alt="Marco" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDSoqnx2oF4aZ-6nQy-1dyJaC5EVXCv6_zQFphcEjTGQrwtrUgBdJ0RKbDQNUbVWNH9C7uGa0ocHzbOV7nllMyV9DP7pQLE_m0O6T4xSeoMdUgD8FZEd2Lq87p8EGhiPKozcILtH0kPPmZTUh-ayuS-GK9tQJqSE-HGzaoLUcMp8efolJO8EeRKFNwCQXCU2MexV_D7XrYx5TQeiadu_b4A5WVvSm0Pm_p6ztI_B5arAnplWx_ulwJ5711NTcdsghO_8B0eK1459Q"/>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-text-main dark:text-white font-epilogue">Марко</h3>
              <p className="text-primary text-sm font-medium">Шеф-кухар</p>
            </div>
          </div>
          <div className="group flex flex-col gap-3">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200 dark:bg-gray-800">
              <img alt="Olena" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCzLo0H_LOG9sMkH0cIwN7GSfle3YZT3B4OfHyxFFWEfEi2r1ZZWvPOYhrNJzlUXEjzrrOvigEKRP3sj9uxd0-6H3p3M4dQR1AKp5xDL-poj8P50vjugSq6t1GRQczu0nlv1Ca56vIMUS7cHE889WW-OIqSR8uiEAUYpGhKzySWyfSUW7kEsf7ZvjKnQq08gLEY8BIsDu7YgFbFSKFgnozECXoyg3peyuH_FK8GxDxrA72E2QgehhnWmp0VuYKLtxb2S5FwxQO0LY"/>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-text-main dark:text-white font-epilogue">Олена</h3>
              <p className="text-primary text-sm font-medium">Су-шеф</p>
            </div>
          </div>
          <div className="group flex flex-col gap-3">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200 dark:bg-gray-800">
              <img alt="Andriy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm3N5_e7oZ2dx-u4ZAPFqcoU-5-1pIuIxX-TkpohHK7IFbediZx-c9G4AS4ju-vXub2NLHCcdljV060_XhvDwhuAdrxmwpK_NCe7qmBBGzF3SpMbnIONbjgE9JbpQOOFUPPtMfphbq7i5lfoJyuHs_k6yI7rz5K_TDP_AC9I5vSWvaBILRGaSpl1dna-kRWlGd0HUEdZg2PYf8wS2m-QVxVALF2G9uBLIPx0JTeSZog-uHxzyZCq-f-U6Jg_dsRW55LKVRZ6iN1kk"/>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-text-main dark:text-white font-epilogue">Андрій</h3>
              <p className="text-primary text-sm font-medium">Менеджер</p>
            </div>
          </div>
          <div className="group flex flex-col gap-3">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200 dark:bg-gray-800">
              <img alt="Maria" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8AfDTBsO_EwmeCneqNhrNFlQpN919Ek8kU_ehYETGa6hhidCHS94Ah4R02bxG4BPLwwQYaKOTcyHL-V2jgI6ulTP7v26MySIwdjIHb5MMia4BwPLWngFE4Rw2r1QaSx0wVKTc0qY10eTCOqw512iwAsLTrGJCCWL7hHL2cUUPxloTBHQ3ID9e0tlEIDILh_obTT75OHpwJpzINFpWXkQJyVdps_AiH-zJz7gna-X-ibIbmJ374XsJTplvhD0FMdUvRErjXwKh22A"/>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-text-main dark:text-white font-epilogue">Марія</h3>
              <p className="text-primary text-sm font-medium">Бариста</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;