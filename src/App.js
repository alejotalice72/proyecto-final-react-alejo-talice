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
import AddBooksView from './views/AddBooksView';
import NewsView from './views/NewsView';
import DetailView from './views/DetailView';
// Context
import CartProvider from './context/CartContext';
import GeneralProvider from './context/GeneralContext';

function App() {
  
  const { root, myBooksView, filteredView, cartView, addBooksView, newsView, detailView } = routes;
  
  return (
    <>
      <BrowserRouter>
        
        <GeneralProvider>
        <CartProvider>
        <NavBarComponent />
        
        <Routes>
          
          <Route exact path={root} element={<MainView/>} />
          <Route exact path={myBooksView} element={<MyBooksView/>} />
          <Route exact path={filteredView} element={<FilteredView/>} />
          <Route exact path={cartView} element={<CartView/>} />
          <Route exact path={addBooksView} element={<AddBooksView/>} />
          <Route exact path={newsView} element={<NewsView />} />
          <Route exact path={detailView} element={<DetailView />} />

        </Routes>
        </CartProvider>
        </GeneralProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
