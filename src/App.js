import logo from './logo.svg';
import './App.css';
import Navigation from './Components/navigation';
import Header from './Components/Header';
import ContactForm from './Components/ContactForm';


function App() {
  return (
    <div className="App">
      <Navigation />
      <main className='main_container'>
        <Header />
        <ContactForm /> 
      </main>
    </div>
  );
}

export default App;
