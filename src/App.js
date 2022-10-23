import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="Orange" to="/">Вернуться домой</Link>
        <Link className="Orange" to="/Page1">Нажать ссылку 1 и получить приветствие</Link>
        <Link className="Orange" to="/Page2">Нажать ссылку 2 и получить карточки</Link>
        <p>
          Это начало всех начал. С этой страницы начинается наше путешествие к двум компонентам.
        </p>
        <Outlet />
      </header>
    </div>
  );
}

export default App;

