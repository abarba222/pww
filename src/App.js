import React, {useEffect} from 'react';
import WebFont from 'webfontloader';
import Header from './Header';
import Search from './Search';
import Icons from './Icons';
import Services from './Services';
import UpdatesAndCalendar from './UpdatesAndCalendar';
import News from './News';
import Footer from './Footer';
import './App.scss';
import BackToTop from './BackToTop';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans', 'Roboto Slab, Roboto Condensed'],
      }
    });
  }, [])
  return (
    <>
      <Header />
      <Search />
      <Icons />
      <Services />
      <UpdatesAndCalendar />
      <BackToTop />
      <News />
      <Footer />
    </> 
  );
}

export default App;
