import React from "react";
import { HandleForwardBackward, HandleThumbnailClick, Item } from "../type";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

type Props = {
  item: Item;
  items: Item[];
  handlePrevious: HandleForwardBackward;
  handleNext: HandleForwardBackward;
  handleThumbnailClick: HandleThumbnailClick;
  currentIndex: number;
};

const MainComponent = ({
  item,
  items,
  handleThumbnailClick,
  handlePrevious,
  handleNext,
  currentIndex,
}: Props) => {
  return (
    <div className="mainComponent">
      <header>
        <img src={item.image} alt={item.title} />
      </header>
      <footer>
        <ArrowLeft
          fontSize="large"
          onClick={() => {
            handlePrevious();
          }}
        />

        <div className="imagesContainer">
          {items.map((item, index) => (
            <img
              className={index !== currentIndex ? "notActive" : ""}
              onClick={() => handleThumbnailClick(index)}
              key={item.id}
              src={item.image}
              alt={item.title}
            />
          ))}
        </div>

        <ArrowRight
          fontSize="large"
          onClick={() => {
            handleNext();
          }}
        />
      </footer>
    </div>
  );
};

export default MainComponent;
