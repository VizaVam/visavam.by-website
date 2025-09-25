// eslint-disable-next-line react/prop-types
export const CarouselButton = ({color = "#595959", isRight = false}) => (
  <svg width="58" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={isRight ? {transform: "rotate(180deg)"} : {}}>
    <path
      d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM2 13.5H58V10.5H2V13.5Z"
      fill={color} />
  </svg>
);

// eslint-disable-next-line react/prop-types
export const CarouselActiveButton = ({color = "#F86F00", isRight = false}) => (
  <svg width="82" height="30" viewBox="0 0 82 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={isRight ? {} : {transform: "rotate(180deg)"}}>
    <path
      d="M81.4142 13.5858C82.1953 14.3668 82.1953 15.6332 81.4142 16.4142L68.6863 29.1421C67.9052 29.9232 66.6389 29.9232 65.8579 29.1421C65.0768 28.3611 65.0768 27.0948 65.8579 26.3137L77.1716 15L65.8579 3.68629C65.0768 2.90524 65.0768 1.63891 65.8579 0.857864C66.6389 0.0768156 67.9052 0.0768156 68.6863 0.857864L81.4142 13.5858ZM80 17H0V13H80V17Z"
      fill={color} />
  </svg>
)