export type Item = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export type HandleForwardBackward = () => void;
export type HandleThumbnailClick = (index: number) => void;
export type HandlePlayPause = () => void;
