import React from "react";
import { HandlePlayPause, Item } from "../type";
import { Pause, PlayArrowRounded } from "@mui/icons-material";

type Props = {
  item: Item;
  handleSlideshowToggle: HandlePlayPause;
  isSlideshowActive: boolean;
};

const AsideComponent = ({
  item,
  handleSlideshowToggle,
  isSlideshowActive,
}: Props) => {
  return (
    <div className="asideComponent">
      <header>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </header>
      <footer>
        <div
          className="iconContainer"
          onClick={() => {
            handleSlideshowToggle();
          }}
        >
          {isSlideshowActive ? (
            <Pause fontSize="large" />
          ) : (
            <PlayArrowRounded fontSize="large" />
          )}
        </div>
      </footer>
    </div>
  );
};

export default AsideComponent;
