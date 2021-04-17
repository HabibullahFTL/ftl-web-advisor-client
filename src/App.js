import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/ServiceList/ServiceList';
import WeHave from './components/WeHave/WeHave';
import TestimonialList from './components/TestimonialList/TestimonialList';
import OurTeam from './components/OurTeam/OurTeam';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  fetch("http://localhost:3005/")
  .then(res=>res.json())
  .then(data=>console.log(data))
  return (
    <div>
      <Header/>
      <Home/>
      <Services/>
      <WeHave/>
      <TestimonialList/>
      <OurTeam/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
