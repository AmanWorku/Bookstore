import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BooksPage from './pages/BooksPage';
import Categories from './pages/Categories';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
