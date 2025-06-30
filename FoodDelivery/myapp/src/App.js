import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './FoodDelivery/Header';
import Footer from './FoodDelivery/Footer';
import Routing from './FoodDelivery/Routing';
import { createContext, useState } from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const LoginStatus = createContext();

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <LoginStatus.Provider value={[login, setLogin]}>
        <Header />
        <Routing />
        <Footer />       
      </LoginStatus.Provider>


    </div>
  );
}

export default App;




