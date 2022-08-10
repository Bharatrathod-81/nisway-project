import './App.css';
import { Header } from './component/header/header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home-page/home-page';
import { SinglePage } from './pages/single-page/single-page';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/singlePage/:itemId' element={<SinglePage /> } />
      </Routes>
    </div>
  );
}

export default App;
