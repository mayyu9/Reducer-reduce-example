combineReducers - each reducer manage own slice of state (e.g. state.todos and state.logging). This is useful when creating a root reducer.

const rootReducer = combineReducers({
  add: reducerAdd,
  mult: reducerMult
})

const initialState = rootReducer(undefined)
/*
 * {
 *   add:  { sum: 0, totalOperations: 0 },
 *   mult: { product: 1, totalOperations: 0 },
 * }
 */


const first = rootReducer(initialState, 4)
/*
 * {
 *   add:  { sum: 4, totalOperations: 1 },
 *   mult: { product: 4, totalOperations: 1 },
 * }
 */    
// This isn't interesting, let's look at second call...

const second = rootReducer(first, 4)
/*
 * {
 *   add:  { sum: 8, totalOperations: 2 },
 *   mult: { product: 16, totalOperations: 2 },
 * }
 */
// Now it's obvious, that both reducers get their own
// piece of state to work with

reference: https://stackoverflow.com/questions/38652789/correct-usage-of-reduce-reducers
