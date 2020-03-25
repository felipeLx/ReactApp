import React from 'react';

import Header from './containers/Header/Header';
import Menubar from './components/Menubar/Menubar';
import Carousel from './components/Carousel/Carousel';
import Maps from './components/Maps/GoogleMaps';

function App() {
  return (
    <div>
      <Menubar />
      <header>
        <Header />
      </header>
      <div>
      <Carousel />
      </div>
      
      <div>
        <Maps />
      </div>
    </div>
  );
}

export default App;
