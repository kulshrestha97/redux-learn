// each slice is a part of state, assume you have a fruit, now each slice is part of that fruit.

// initialState represents the initial state that we have for that particular Slice
const initialState = {
    status: "All",
    colors: []
}

// filtersSlice is a reducer, a reducer takes a state and action, calculates the updated state, and updates the store with the new state value.
export default function filtersSlice(state = initialState, action) {
    switch(action.type) {
        case "filters/statusChanged":
            return {...state, status: action.payload.status}
        case "filters/colorAdded":
            return {...state,
                colors: [...state.colors, action.payload.color]
            }
        default:
            return state
    }
}