export default function Home() {
  const services = [
    {
      title: "Развитие Instagram",
      description:
        "Продвижение личных брендов, оформление профиля, стратегия контента, рост аудитории и повышение узнаваемости.",
    },
    {
      title: "Развитие TikTok",
      description:
        "Создание вирусного контента, работа с трендами, увеличение просмотров и привлечение новой аудитории.",
    },
    {
      title: "Развитие YouTube",
      description:
        "Продвижение YouTube-каналов, увеличение охватов, удержания аудитории и развитие медийности.",
    },
    {
      title: "Развитие Telegram",
      description:
        "Создание и продвижение Telegram-каналов, упаковка, контент и масштабирование аудитории.",
    },
    {
      title: "Создание сайтов / Telegram-ботов",
      description:
        "Разработка современных сайтов, лендингов и Telegram-ботов под задачи бизнеса.",
    },
    {
      title: "Создание AI-аватаров",
      description:
        "Создание нейросетевых AI-аватаров, digital-персонажей и уникального визуального контента.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Glow Effects */}
      <div className="absolute left-[-100px] top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute right-[-100px] top-[500px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[150px]" />

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-7xl font-black text-transparent md:text-9xl">
          NovaFlow
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
          Агентство по развитию социальных сетей, digital-масштабированию,
          AI-решениям и современному онлайн-продвижению.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="https://t.me/novafl0wmanager"
            target="_blank"
            className="rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-bold text-black transition duration-300 hover:scale-105"
          >
            Менеджер
          </a>

          <a
            href="https://t.me/novafl0w"
            target="_blank"
            className="rounded-2xl border border-purple-500 px-8 py-4 text-lg font-bold transition duration-300 hover:bg-purple-500/20"
          >
            Telegram канал
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h2 className="text-5xl font-black">О нас</h2>

          <p className="mt-8 text-lg leading-9 text-zinc-300">
            NovaFlow — digital-агентство нового поколения, специализирующееся
            на развитии социальных сетей, AI-технологиях и онлайн-масштабировании брендов.
          </p>

          <p className="mt-6 text-lg leading-9 text-zinc-400">
            Мы помогаем блогерам, предпринимателям и компаниям усиливать своё
            присутствие в интернете через современные стратегии продвижения,
            визуальный контент и автоматизацию.
          </p>

          <p className="mt-6 text-lg leading-9 text-zinc-400">
            Наша команда объединяет маркетинг, AI, дизайн и digital-аналитику,
            чтобы создавать сильные бренды и выводить проекты на новый уровень.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="text-center">
          <h2 className="text-5xl font-black">Услуги</h2>

          <p className="mt-6 text-xl text-zinc-400">
            Полный комплекс digital и AI решений для вашего бренда.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <h3 className="text-3xl font-bold">{service.title}</h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {service.description}
              </p>

              <div className="mt-8">
                <p className="font-semibold text-cyan-400">
                  Цена договорная
                </p>

                <a
                  href="https://t.me/novafl0wmanager"
                  target="_blank"
                  className="mt-5 inline-block rounded-2xl border border-purple-500 px-6 py-3 font-semibold transition hover:bg-purple-500/20"
                >
                  Связаться с менеджером
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12 backdrop-blur-xl">
          <h2 className="text-5xl font-black">
            Почему выбирают NovaFlow
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400">
                Современные стратегии
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Используем актуальные методы продвижения и AI-инструменты для
                достижения максимального результата.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400">
                Digital и AI
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Объединяем маркетинг, автоматизацию и искусственный интеллект.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400">
                Индивидуальный подход
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Для каждого проекта формируется отдельная стратегия развития.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400">
                Поддержка 24/7
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Мы сопровождаем клиентов на всех этапах продвижения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Готовы масштабировать свой бренд?
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
          Свяжитесь с NovaFlow и начните выводить свой проект на новый уровень.
        </p>

        <a
          href="https://t.me/novafl0wmanager"
          target="_blank"
          className="mt-12 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 px-10 py-5 text-xl font-bold text-black transition duration-300 hover:scale-105"
        >
          Написать менеджеру
        </a>
      </section>
    </main>
  );
}