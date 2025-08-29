
import './App.css'

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
      "Caesar Salad"

    ]
  function Main({dishes}){
    return (
      <ul>
        {dishes.map((dish, index) => <li style={{listStyleType:"none"}} key={index}>{dish}</li>)}

      </ul>
    )
  }
function App() {
  
  return ( <div>
    <Header name="Tere" year={new Date().getFullYear()}/>
    <Main dishes={items}/>
    </div>);
}

export default App
