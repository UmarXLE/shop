import './App.css';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
        <Header />
     <Breadcrumbs />
     <Filter />
     <div className='wrapperProductsBtns'>
     <div className='wrapperProducts'>
        {/* map */}
        <Product />
        <Product />

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        <Product />
        <Product />

        {/* кнопки пагинации */}
          
          </div>
          <div className='buttonsWrapperPaginate'>
              <button className='buttonPaginate'>1</button>
              <button className='buttonPaginate'>2</button>
              <button className='buttonPaginate'>3</button>
              <button className='nextBtn buttonPaginate'>Next</button>
          </div>
        
    </div>
      <Info />
      <Footer />

    </div>
  );
}

export default App;
