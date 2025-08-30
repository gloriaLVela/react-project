
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
  function Main({dishes}){
    return (
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
    )
  }
function App() {
  
  return ( <div>
    <Header name="Tere" year={new Date().getFullYear()}/>
    <Main dishes={dishObjects}/>
    </div>);
}

export default App
