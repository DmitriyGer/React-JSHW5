import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './ThemeSlice'; // Импорт редьюсера для темы

export const store = configureStore({
  reducer: {
    theme: themeReducer, // Привязываем редьюсер для темы
  },
});