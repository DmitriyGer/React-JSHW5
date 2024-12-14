// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Redux хуки
import { TOGGLE_THEME } from './redux/ThemeSlice'; // Action из Redux Slice
import { Button } from '@mui/material'; // Кнопка из Material UI

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme); // Получаем текущую тему из Redux

  const handleThemeToggle = () => {
    dispatch(TOGGLE_THEME()); // Переключаем тему
  };

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333', // Фон страницы
        color: theme === 'light' ? '#000000' : '#ffffff', // Цвет текста
        minHeight: '100vh', // Задаём высоту страницы
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Переключение темы</h1>
      <p>Текущая тема: {theme === 'light' ? 'Светлая' : 'Тёмная'}</p>
      <Button variant="contained" color="primary" onClick={handleThemeToggle}>
        Переключить тему
      </Button>
    </div>
  );
};

export default App;
