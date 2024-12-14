import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light', // Начальная тема — светлая
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    TOGGLE_THEME: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'; // Переключаем тему
    },
  },
});

export const { TOGGLE_THEME } = themeSlice.actions; // Экспортируем action
export default themeSlice.reducer; // Экспортируем редьюсер по умолчанию