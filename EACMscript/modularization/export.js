export default () => {
  console.log(this);
};

const a = 1;
const b = 2;

export {
  a, b,
};

export const c = 3;
