import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/30 py-4 px-6 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto">
          <div className="mono text-xs uppercase tracking-widest text-muted-foreground">
            Not Standard / Marketing Specialist
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl leading-[1.1] max-w-4xl">
            Эту страницу я сделал по одной причине —
          </h1>
          <p className="text-3xl md:text-5xl leading-[1.2] max-w-4xl opacity-80">
            чтобы мы не тратили время друг друга впустую.
          </p>
        </div>
        
        <div className="mt-16 space-y-6 max-w-3xl text-base leading-relaxed">
          <p>
            В какой-то момент я специально попробовал посмотреть на рынок не как маркетолог, 
            а как человек по ту сторону отбора.
            Почитал резюме, посмотрел профили, описания… и, честно, стало не по себе.
          </p>
          <p>
            Одинаковые формулировки.<br />
            Много слов — мало смысла.<br />
            Каждый второй «эксперт», каждый первый «топ».
          </p>
          <p>
            И тогда я решил:<br />
            я не буду продавать себя через клише.<br />
            Эта страница — короткий способ понять, совпадаем мы или нет.<br />
            Без надутых щёк и громких заявлений.
          </p>
          <p className="text-lg font-semibold">
            Пролистай ниже.<br />
            Скорее всего, ты уже видела это в своей работе.
          </p>
        </div>
      </section>

      {/* Profile Badge */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="border border-border rounded-lg p-8 bg-card backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
          <div className="mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
            Not Standard
          </div>
          <h2 className="text-3xl md:text-4xl mb-2">Marketing Specialist</h2>
          <div className="mono text-sm space-y-1 text-muted-foreground">
            <p>Profile Overview</p>
            <p>Version 2025.11</p>
            <p className="opacity-60">(no noise, no legends)</p>
          </div>
        </div>
      </section>

      {/* Reality Test */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl mb-6">Quick Reality Test</h2>
        <p className="text-lg mb-12 text-muted-foreground">
          Попробую угадать пару сцен из твоих будней
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Scenario 1 */}
          <div className="border border-border rounded-lg p-8 bg-card backdrop-blur-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <div className="text-4xl mb-4">👻</div>
            <h3 className="text-2xl mb-4">Silent Mode</h3>
            <p className="mono text-sm mb-4 font-semibold text-muted-foreground">
              Кандидат «был — и нет»
            </p>
            <div className="text-sm space-y-3 leading-relaxed">
              <p>
                Ты открываешь отклики.
                Один профиль сразу цепляет: адекватно, по делу, без лишнего.
              </p>
              <p>
                Созвонились, договорились продолжить.
              </p>
              <p>
                Проходит день. Два.
                Человек как будто отключил интернет навсегда.
              </p>
              <p className="text-muted-foreground">
                Без «я передумал».<br />
                Без «сорри».<br />
                Просто исчез.
              </p>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="border border-border rounded-lg p-8 bg-card backdrop-blur-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl mb-4">PowerPoint-эксперт</h3>
            <p className="mono text-sm mb-4 font-semibold text-muted-foreground">
              Громко на словах
            </p>
            <div className="text-sm space-y-3 leading-relaxed">
              <p>
                Другой типаж.
                В профиле — «строил стратегии», «масштабировал», «отвечал за рост».
              </p>
              <p>
                Начинаешь задавать вопросы —
                оказывается, вся практика уместилась в один презентационный слайд 
                и пару тестовых запусков.
              </p>
              <p className="text-muted-foreground">
                Контраст между текстом и реальностью быстро бросается в глаза.
              </p>
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="border border-border rounded-lg p-8 bg-card backdrop-blur-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <div className="text-4xl mb-4">🕶</div>
            <h3 className="text-2xl mb-4">Undercover</h3>
            <p className="mono text-sm mb-4 font-semibold text-muted-foreground">
              Слишком секретно
            </p>
            <div className="text-sm space-y-3 leading-relaxed">
              <p>
                И, конечно, люди без прошлого.
              </p>
              <p>
                Проекты — нельзя называть.<br />
                Результаты — под вопросом.<br />
                Цифры — «не принято раскрывать».
              </p>
              <p className="text-muted-foreground">
                Как будто вся карьера проходила в режиме инкогнито.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-l-4 border-accent pl-8 max-w-3xl">
          <p className="text-xl leading-relaxed mb-4 font-semibold">
            Честно?
          </p>
          <p className="text-lg leading-relaxed">
            Иногда рынок выглядит как хаотичный кастинг.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            И разбираться во всём этом приходится тебе.<br />
            А потом ещё объяснять бизнесу, почему «вроде нормальный» не сработал.
          </p>
          <p className="text-lg leading-relaxed mt-6 font-semibold">
            Я это понимаю. Поэтому и пишу так, как есть.
          </p>
        </div>
      </section>

      {/* Why Me */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-b from-transparent via-secondary/30 to-transparent -mx-6">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl mb-12">
            Почему со мной обычно спокойно
          </h2>
          <p className="text-lg mb-12 max-w-3xl">
            Я не идеален.<br />
            Зато предсказуем и честен — а это, как показывает практика, ценится больше.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Без выдуманных регалий",
                desc: "Не приписываю себе бренды, в которых не работал, и роли, которых не было."
              },
              {
                num: "02",
                title: "На связи",
                desc: "Если договорились — я появлюсь. Если планы меняются — скажу заранее."
              },
              {
                num: "03",
                title: "Без шоу",
                desc: "Не выношу личные драмы в рабочие процессы и не превращаю диалоги в монологи."
              },
              {
                num: "04",
                title: "Без всезнайства",
                desc: "Не знаю — значит не знаю. Зато умею быстро разобраться и вернуться с решением."
              },
              {
                num: "05",
                title: "Уважаю твою роль",
                desc: "Для меня ты не «прослойка», а полноценный участник процесса."
              }
            ].map((item) => (
              <div key={item.num} className="border border-border rounded-lg p-6 bg-card backdrop-blur-sm hover:shadow-lg hover:border-accent/50 transition-all duration-300">
                <div className="mono text-4xl mb-4 text-accent">
                  {item.num}
                </div>
                <h3 className="text-xl mb-3 font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl mb-12">
          Как я смотрю на маркетинг
        </h2>
        <div className="border-l-4 border-accent pl-8 mb-12 bg-card/50 py-6 rounded-r-lg">
          <p className="text-3xl">
            Это про деньги, а не про украшения
          </p>
        </div>

        <div className="space-y-8 text-lg max-w-3xl">
          <div className="border-b border-border pb-6">
            <p className="font-semibold mb-2">Красивое — вторично. Рабочее — первично.</p>
          </div>
          <div className="border-b border-border pb-6">
            <p className="font-semibold mb-2">Сначала продукт, потом упаковка</p>
            <p className="text-sm text-muted-foreground">Без смысла креатив не спасает.</p>
          </div>
          <div className="border-b border-border pb-6">
            <p className="font-semibold mb-2">Решения — через цифры</p>
            <p className="text-sm text-muted-foreground">Идея → проверка → вывод. Никакой магии.</p>
          </div>
          <div className="pb-6">
            <p className="font-semibold mb-2">Я понимаю бизнес-контекст</p>
            <p className="text-sm">
              Я знаю, что такое:<br />
              — расходы<br />
              — маржинальность<br />
              — окупаемость<br />
              — рост, а не просто трафик
            </p>
          </div>
        </div>

        <div className="mt-12 border border-border rounded-lg p-8 bg-card/80 backdrop-blur-sm max-w-3xl">
          <p className="text-xl font-medium">
            Работаю быстро, думаю системно, копаю в суть.
          </p>
        </div>
      </section>

      {/* Compatibility */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="border-2 border-border rounded-xl p-12 text-center bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
          <div className="mono text-xs uppercase tracking-widest mb-4 text-muted-foreground">
            Compatibility Check
          </div>
          <h2 className="text-4xl mb-8">Проверим, совпадаем ли мы</h2>
          <p className="mb-8 max-w-2xl mx-auto text-muted-foreground">
            Если интересно — нажми кнопку ниже.
            Это не тест и не игра, а простой шаг, чтобы понять, есть ли смысл продолжать диалог.
          </p>
          <a 
            href="https://t.me/dinarikrarik" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-accent hover:bg-accent/90 text-foreground px-12 py-6 text-lg mono uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
            >
              Start Scan
            </Button>
          </a>
        </div>
      </section>

      {/* Final Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-primary text-primary-foreground -mx-6">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg mb-12">
            Если ты дошла до этого блока —<br />
            вероятно, нам уже есть о чём говорить.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl mb-6">Точно не подойдём друг другу, если ты ищешь:</h3>
              <div className="space-y-3 opacity-80">
                <p>— медийного персонажа вместо специалиста</p>
                <p>— человека, который продаёт обещания</p>
                <p>— бурную активность без результата</p>
              </div>
              <p className="mt-6 text-sm opacity-60">
                В этом случае правда лучше не начинать.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-6">А если тебе нужен:</h3>
              <div className="space-y-3">
                <p className="flex items-start gap-2">
                  <span className="text-accent">✔️</span>
                  адекватный маркетолог
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent">✔️</span>
                  человек, который уважает договорённости
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent">✔️</span>
                  спокойная, рабочая коммуникация
                </p>
              </div>
              <p className="mt-6 text-2xl">👇 Тогда просто напиши.</p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://t.me/dinarikrarik" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-accent hover:bg-accent/90 text-foreground px-16 py-8 text-xl mono uppercase tracking-wider shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              >
                Связаться
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-6 px-6 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto mono text-xs text-center text-muted-foreground">
          Version 2025.11 / No Noise, No Legends
        </div>
      </footer>
    </div>
  );
};

export default Index;
