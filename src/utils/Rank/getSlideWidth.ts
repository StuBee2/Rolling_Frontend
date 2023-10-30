export const getSlideWidth = (width: number) => {
  switch (width) {
    case 1200:
      return 1225;
    case 1000:
      return 920;
    case 800:
    case 600:
      return 614;
    case 480:
      return 307;
  }
};
