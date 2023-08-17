//import logo from './assets/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; 
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Error404 from './components/Error/Error404'
import Footer from './components/footer/Footer'
import {useState} from 'react'

function App() {
  const [headerHeight,setHeaderHeight]= useState(0)
  const [aboutHeight,setAboutHeight]= useState(0)
  const [expHeight,setExpHeight]= useState(0)
  const [portHeight,setPortHeight]= useState(0)
  
  return (
    <Router>
    <Routes>
    <Route exact path='/' element={[
      <Header getHeight={height=> setHeaderHeight(height)}/>,
      <Nav hh={headerHeight} ah={aboutHeight} eh={expHeight} ph={portHeight}/>,
      <About getHeight={height=> setAboutHeight(height)}/>,
      <Experience getHeight={height=> setExpHeight(height)}/>,
      <Portfolio getHeight={height=> setPortHeight(height)}/>,
      <Contact/>,
      <Footer/>
    ]
    } />
    <Route path="*" element={ <Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
