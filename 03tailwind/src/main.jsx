import { createRoot } from 'react-dom/client';
import './index.css';
import App from './02Login';
import { BoardProvider } from './context/BoardContext';

createRoot(document.getElementById('root')).render(
  <BoardProvider>
    <App />
  </BoardProvider>
);
