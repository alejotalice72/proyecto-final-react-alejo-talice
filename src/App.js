import './App.css';
// Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
// Components
import NavBarComponent from './components/NavBar/NavBarComponent';
// Views
import MainView from './views/MainView';
import MyBooksView from './views/MyBooksView';
import FilteredView from './views/FilteredView';
import CartView from './views/CartView';
// Context
import CartProvider from './context/CartContext';

function App() {

  const { root, myBooksView, filteredView, cartView } = routes;
  
  return (
    <>
      <BrowserRouter>
        
        <CartProvider>
        <NavBarComponent />
        
        <Routes>
          
          <Route exact path={root} element={<MainView/>} />
          <Route exact path={myBooksView} element={<MyBooksView/>} />
          <Route exact path={filteredView} element={<FilteredView/>} />
          <Route exact path={cartView} element={<CartView/>} />

        </Routes>
        </CartProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
