import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BoardProvider } from './context/BoardContext';

createRoot(document.getElementById('root')).render(
  <BoardProvider>
    <App />
  </BoardProvider>
);
