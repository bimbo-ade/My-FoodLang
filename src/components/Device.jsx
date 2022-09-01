const minSizes = {
  mobile: "320px",
  ipad: "481px",
  laptop: "769px",
  desktop: "1025px",
};
const maxSizes = {
  mobile: "620px",
  ipad: "768px",
  laptop: "1024px",
  desktop: "1440px",
};
export const device = {
  mobile: `(min-width:${minSizes.mobile} )and ( max-width:${maxSizes.mobile})`,

  ipad: `(min-width:${minSizes.ipad} )and ( max-width:${maxSizes.ipad})`,

  laptop: `(min-width:${minSizes.laptop} )and ( max-width:${maxSizes.laptop})`,

  desktop: `(min-width:${minSizes.desktop} )and ( max-width:${maxSizes.desktop})`,
};
