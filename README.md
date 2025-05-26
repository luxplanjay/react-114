# Заняття 13 - HTTP-запити з Redux Toolkit

- Асинхронні операції
- Форма стану слайса: loading, error, data
- Оголошення операції `fetchTasks` через `createAsyncThunk`
  - URL запиту: `https://62584f320c918296a49543e7.mockapi.io/tasks`
  - Діспатч операції у компоненті при монтуванні
  - Екшени операціії: pending, fulfilled, rejected
  - Обробка результату операцій у слайсі (`extraReducers`)
  - Отримання результату у компоненті з `dispatch().unwrap()`
  - Кастомізація помилок з `thunkAPI.rejectWithValue`
- Операціі `addTask` та `deleteTask`
  - Діспатч операцій у компонентах
  - Обробка результату операцій у слайсі

<!-- https://create.kahoot.it/details/ua-7-1-redux/e5fdf2e3-b873-40b5-bf95-02f8f715093a -->
