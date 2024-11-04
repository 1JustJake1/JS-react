import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles';

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); 
    navigate('/login');
  };

  return (
    <div style={styles.profileContainer}>
      <h1>Профіль користувача</h1>
      <div style={styles.profileInfo}>
        <p><strong>Ім'я:</strong> Адміністратор</p>
        <p><strong>Електронна пошта:</strong> admin@example.com</p>
        <p><strong>Роль:</strong> Адміністратор сайту</p>
        <p><strong>Статус:</strong> Активний</p>
        <p>
          <strong>Про мене:</strong> Привіт! Я — адміністратор цього сайту. Мені подобається
          допомагати користувачам і підтримувати порядок у всьому, що стосується функціонування сайту.
        </p>
      </div>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Вихід
      </button>
    </div>
  );
}

export default Profile;
