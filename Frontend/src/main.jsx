import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from '../App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
    <div className='dark:bg-slate-900 dark:text-white'>
      <App />
      </div>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}

