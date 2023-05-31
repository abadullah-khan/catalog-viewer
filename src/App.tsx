import React, { useEffect, useState } from "react";
import "./App.css";

import MainComponent from "./components/MainComponent";
import AsideComponent from "./components/AsideComponent";
import { items } from "./data";

import "./styles/mainComponent.css";
import "./styles/aside.css";
import "./styles/mediaQuery.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };
  const handleThumbnailClick: (index: number) => void = (index) => {
    setCurrentIndex(index);
    console.log(currentIndex);
  };
  const handleSlideshowToggle = () => {
    setIsSlideshowActive(!isSlideshowActive);
  };

  useEffect(() => {
    let slideshowInterval: NodeJS.Timeout;
    if (isSlideshowActive) {
      slideshowInterval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => {
      clearInterval(slideshowInterval);
    };
  }, [isSlideshowActive]);

  return (
    <div className="app">
      <main>
        {items.map(
          (item, index) =>
            index === currentIndex && (
              <MainComponent
                key={index}
                item={item}
                handleNext={handleNext}
                items={items}
                handleThumbnailClick={handleThumbnailClick}
                handlePrevious={handlePrevious}
                currentIndex={currentIndex}
              />
            )
        )}
      </main>
      <aside>
        {items.map(
          (item, index) =>
            index === currentIndex && (
              <AsideComponent
                key={index}
                item={item}
                handleSlideshowToggle={handleSlideshowToggle}
                isSlideshowActive={isSlideshowActive}
              />
            )
        )}
      </aside>
    </div>
  );
}

export default App;
