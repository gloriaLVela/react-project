import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const [first, second, third] = ['dog', 'cat', 'elephant'];
console.log(second);

createRoot(document.getElementById('root')).render(<App />);
