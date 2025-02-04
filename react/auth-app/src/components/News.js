import React from 'react';
import styles from './styles';

function News() {
  const newsArticles = [
    {
        title: 'Оновлення платформи до версії 2.0',
        date: '2024-11-03',
        description: 'Ми раді повідомити про вихід нової версії платформи з покращеною продуктивністю, новими функціями та оновленим інтерфейсом.',
      },
      {
        title: 'Запуск мобільного додатка',
        date: '2024-10-15',
        description: 'Тепер наші користувачі можуть зручно працювати з платформою на ходу за допомогою нового мобільного додатка для iOS та Android.',
      },
      {
        title: 'Співпраця з новими партнерами',
        date: '2024-09-25',
        description: 'Ми підписали угоди з декількома новими партнерами, що дозволить нам розширити можливості нашої платформи та запропонувати нові послуги.',
      },
      {
        title: 'Розіграш призів для користувачів',
        date: '2024-09-01',
        description: 'Запрошуємо всіх наших користувачів взяти участь у розіграші цінних призів. Не пропустіть свій шанс виграти!',
      },
      {
        title: 'Новий розділ "Блог" на платформі',
        date: '2024-08-10',
        description: 'Ми додали розділ "Блог", де ви зможете знайти корисні поради, новини індустрії та інтерв’ю з експертами. Заходьте та читайте!',
      },
      {
        title: 'Розширення технічної підтримки',
        date: '2024-07-15',
        description: 'Тепер наша служба підтримки працює 24/7. Ми готові допомогти вам у будь-який час доби з усіма питаннями, що виникають!',
      },
      {
        title: 'Щорічна конференція користувачів',
        date: '2024-06-20',
        description: 'Запрошуємо вас на нашу щорічну конференцію, де ми обговоримо останні досягнення платформи та плани на майбутнє. Поспішайте зареєструватися!',
      },
      {
        title: 'Оновлення політики конфіденційності',
        date: '2024-05-30',
        description: 'Ми внесли зміни до політики конфіденційності для забезпечення більшої прозорості та захисту ваших даних. Ознайомтесь з оновленнями в розділі "Політика конфіденційності".',
      },
  ];

  return (
    <div style={styles.newsContainer}>
      <h1>Новини</h1>
      <div style={styles.newsList}>
        {newsArticles.map((article, index) => (
          <div key={index} style={styles.newsItem}>
            <h2>{article.title}</h2>
            <p style={styles.newsDate}>{article.date}</p>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;

          
    
      

