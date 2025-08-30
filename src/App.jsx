

import {useState} from "react";
import './App.css';
import chef from "./images/chef.jpg";

function Header({name, year}){
  
    return (
      <header>
        <h1>{name}'s kitchen</h1>
        <p>Copyright {year}</p>
        </header>
      );
    }

    const items = [
      "Macaroni and Cheese",
      "Chicken Alfredo",
      "Caesar Salad",
      "Spaghetti Bolognese",
      "Tiramasu"   
    ];

    const dishObjects = items.map((dish, i) =>({
      id: i,
      title:dish
    }));
    //console.log(dishes);
  function Main({dishes, openStatus, onStatus}){
    return (
      <>
      <div>
        <button onClick={() => onStatus(true)}>
          I want to open
        </button>
        <h2>Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}</h2>
        </div>
      <main>
      <img 
        src={chef}
        height={200} 
        alt="a photo of smiling chef" 
      />
        <ul>
        {dishes.map((dish) => (
          <li style={{listStyleType:"none", textAlign:"left"}} key={dish.id}>{dish.title}</li>
          ))}
      </ul>

      </main>
      </>
    )
  }
function App() {
  const [status, setStatus] = useState(true);
  console.log(status);
  return ( <div>
    <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
    <button onClick={() => setStatus(!status)}>
      {status? "Close" : "Open"} Restaurant
    </button>
    <Header name="Tere" year={new Date().getFullYear()}/>
    <Main 
      dishes={dishObjects} 
      openStatus={status}  
      onStatus={setStatus}
    />
    </div>);
}

export default App
