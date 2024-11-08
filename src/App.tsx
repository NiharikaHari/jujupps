import ContactForm from './components/ContactForm';
import Containers from './components/Containers';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  // const handleContact = (event: any) => {};

  return (
    <>
      <Header></Header>
      <div className="underline"></div>
      <div className="main-content">
        <NavBar></NavBar>
        <Containers></Containers>
        <div className="underline"></div>
        <ContactForm></ContactForm>
        <Footer></Footer>
        <img src="./assets/juicebox.svg" className="juicebox-icon"></img>
      </div>
    </>
  );
}

export default App;
