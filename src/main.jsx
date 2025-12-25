import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function MyButton() {
  return (
    <button>bawefhwoef</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>welc to the gang</h1>
      <MyButton />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);