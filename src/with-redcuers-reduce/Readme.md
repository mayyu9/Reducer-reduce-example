
using reduceReducers, reducers share the same state

const addAndMult = reducerReduce(reducerAdd, reducerMult)

const initial = addAndMult(undefined)
/*
 * {
 *   sum: 0,
 *   totalOperations: 0
 * }
 *
 * First, reducerAdd is called, which gives us initial state { sum: 0 }
 * Second, reducerMult is called, which doesn't have payload, so it
 * just returns state unchanged.
 * That's why there isn't any `product` prop.
 */

const next = addAndMult(initial, 4)
/*
 * {
 *   sum: 4,
 *   product: 4,
 *   totalOperations: 2
 * }
 *
 * First, reducerAdd is called, which changes `sum` = 0 + 4 = 4
 * Second, reducerMult is called, which changes `product` = 1 * 4 = 4
 * Both reducers modify `totalOperations`
 */


const final = addAndMult(next, 4)
/*
 * {
 *   sum: 8,
 *   product: 16,
 *   totalOperations: 4
 * }
 */

Note: this didn't work me, might be there is an issue the way we are passing the intermediate object of reduceReducers to the createstore object.
console.log added in containers add.js shows that we have different state object for both the reducers.

reference: https://stackoverflow.com/questions/38652789/correct-usage-of-reduce-reducers
