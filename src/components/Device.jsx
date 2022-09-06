const minSizes = {
  mobile: "320px",
  ipad: "769px",
};
const maxSizes = {
  mobile: "768px",
  ipad: "1024px",
};
export const device = {
  mobile: `(min-width:${minSizes.mobile} )and ( max-width:${maxSizes.mobile})`,

  ipad: `(min-width:${minSizes.ipad} )and ( max-width:${maxSizes.ipad})`,
};
