import React from 'react';
import styles from './styles';

function Home() {
  return (
    <div style={styles.homeContainer}>
      <h1>Ласкаво просимо на нашу платформу!</h1>
      <p style={styles.homeIntro}>
        Ми раді вітати вас на нашому сайті! Наша платформа створена для того, щоб зробити ваш досвід роботи з сучасними технологіями зручним та приємним. Тут ви знайдете всі необхідні інструменти для ефективної співпраці, доступ до важливих новин та оновлень, а також можливість брати участь у наших подіях та конкурсах.
      </p>

      <h2>Основні можливості</h2>
      <ul style={styles.homeFeatures}>
        <li>⚡ <strong>Актуальні новини</strong>: дізнавайтеся про останні оновлення та новини нашої платформи.</li>
        <li>📱 <strong>Мобільний додаток</strong>: працюйте з нами будь-де, завдяки мобільному додатку для iOS та Android.</li>
        <li>🤝 <strong>Співпраця з партнерами</strong>: користуйтеся додатковими послугами завдяки нашим партнерам.</li>
        <li>🎉 <strong>Участь у розіграшах</strong>: беріть участь у регулярних конкурсах і вигравайте цінні призи.</li>
        <li>🔒 <strong>Надійність та безпека</strong>: ваші дані знаходяться під надійним захистом.</li>
      </ul>

      <h2>Зареєструйтеся та приєднуйтесь до нас!</h2>
      <p style={styles.homeCallToAction}>
        Щоб отримати доступ до всіх можливостей платформи, зареєструйтеся або увійдіть у свій профіль. Ми надаємо нашим зареєстрованим користувачам доступ до ексклюзивного контенту, спеціальних пропозицій та можливість спілкування з іншими членами спільноти.
      </p>
    </div>
  );
}

export default Home;
