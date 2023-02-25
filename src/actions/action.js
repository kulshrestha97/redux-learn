export const BUY_CAKE = "BUY_CAKE";

// this is called as action Creator: a function that returns an action
const buyCake = () => {
  return { type: BUY_CAKE, payload: { info: "Buy a cake" } };
};

export default buyCake;
