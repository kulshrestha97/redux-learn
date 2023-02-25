// slicer is part of the state that can be independently managed, it helps in better code management, overall understanding of state also improves.
// initial state for slicers.
const initialState = [
  { id: 0, text: "Learn React", completed: false },
  { id: 1, text: "Learn Redux", completed: false },
  { id: 2, text: "Learn JavaScript", completed: false, color: "Green" },
  { id: 3, text: "Comeback to Hexagon", completed: false, color: "Red" },
];

const generateNextId = (state) => {
  const nextId =
    state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1;
  return nextId;
};
// reducer for handling todos, takes state and action as inputs, computes a new state and sets it to the store.
const todosSlice = (state = initialState, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return [
        ...state,
        {
          id: generateNextId(state),
          text: action.payload.text,
          completed: action.payload.completed,
          color: action.payload.color,
        },
      ];
    case "todos/removeTodo":
      console.log("Inside the slice method"); // this console statement proves that the middlewares find a place between dispatch and store (reducers)
      return [...state].filter((todo) => todo.id !== action.payload.id);
    case "todos/changeText":
      const updatedTextObj = state.filter(
        (todo) => todo.id === action.payload.id
      )[0];
      updatedTextObj.text = action.payload.text;
      const arrayWithoutID = [...state].filter(
        ({ id }) => id !== action.payload.id
      );
      arrayWithoutID.push(updatedTextObj);
      return arrayWithoutID;
    default:
      return state;
  }
};
export default todosSlice;
