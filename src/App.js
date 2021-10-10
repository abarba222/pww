import React from 'react';
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
