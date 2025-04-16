import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AuthPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/auth/login', data);
      localStorage.setItem('token', response.data.token);
      alert('Успешный вход!');
    } catch (error) {
      alert('Ошибка авторизации');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Авторизация</h2>
      <input 
        {...register('username')}
        placeholder="Логин"
        required
      />
      <input
        {...register('password')}
        type="password"
        placeholder="Пароль"
        required
      />
      <button type="submit">Войти</button>
    </form>
  );
}
