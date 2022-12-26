// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from './data';

function App() {
  const dataCard=data.map(item=>{
    return (<Card 
    imgLink={item.imgLink}
    title={item.title}
    location={item.location}
    mapLink={item.mapLink}
    startDate={item.startDate}
    endDate={item.endDate}
    description={item.description}/>);
  })
  return (
    <div className='App'>
      <Navbar/>
      {dataCard}
    </div>
    
  );
}

export default App;
