import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function MyButton() {
  return (
    <button class="btn">how'd it go?</button>
  );
}
  
export default function MyApp() {
  return (
    <div>
      <img src="/src/assets/pinkskybg.png" alt="background" className="pink-sky-bg" />
      <h1 className="big-text">one year.</h1>
      <MyButton />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);