import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

export default function MyApp() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  const pages = [
    ["one year has passed", "and here you are"],
    ["365 days...", "you've come so far"],
    ["you are your own truth", "for that we are thankful"],
    ["so keep being you!", "we love you so much"],
    ["the world is a canvas", "and you hold the brush"]
  ];

  const handleNext = () => {
    if (isAnimating) return;

    if (!showSecondLine) {
      setShowSecondLine(true);
      return;
    }

    if (pageIndex < pages.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));
        setShowSecondLine(false);
        setIsAnimating(false);
      }, 1000);
    }
  };

  const cardClass = `card ${isAnimating ? 'fade-out' : 'fade-in'}`;
  const [line1, line2] = pages[pageIndex];

  // Change background based on page index
  const getBgImage = () => {
    if (pageIndex === pages.length - 1) return '/src/assets/pinkskybg3.png';
    if (pageIndex === 1) return '/src/assets/pinkskybg2.png';
    return '/src/assets/pinkskybg.png';
  };

  return (
    <div className="app-shell">
      <img src={getBgImage()} alt="background" className="pink-sky-bg" />
      <div className={cardClass} key={pageIndex}>
        <h1 className="big-text">{line1}</h1>
        <h2 className={`sub-text ${showSecondLine ? 'revealed' : 'hidden'}`}>{line2}</h2>
        <button className="btn" onClick={handleNext}>
          {!showSecondLine
            ? 'next →'
            : pageIndex < pages.length - 1
              ? 'continue →'
              : 'from j.do, with love <3'}
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);