
import './App.css'

function Header(props){
  console.log(props);
    return (
      <header>
        <h1>{props.name}'s kitchen</h1>
        <p>Copyright {props.year}</p>
        </header>
      );
    }

function App() {
  
  return ( <div>
    <Header name="Tere" year={new Date().getFullYear()}/>
    <main>
      <h2>We serve the most delicious food around </h2>
    </main>
    </div>);
}

export default App
