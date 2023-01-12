// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar';
import data from './data';
// import Footer from './components/Footer.js';
function App() {
  const dataCard=data.map(item=>{
    return (
   <>
    <Card 
    imgLink={item.imgLink}
    title={item.title}
    location={item.location}
    mapLink={item.mapLink}
    startDate={item.startDate}
    endDate={item.endDate}
    description={item.description}/>
    <hr className='mx-12  shadow'></hr>
    </>
   );
    
  })
  return (
    <div className='App'>
      <Navbar/>
      <section className='cardList'>
        {dataCard}
      </section>
      <Footer/>
    </div>
    
  );
}

export default App;
