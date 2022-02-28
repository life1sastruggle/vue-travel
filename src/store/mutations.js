const ADD_SOURCE_SPOT = 'ADD_SOURCE_SPOT'
const REDUCE_SOURCE_SPOT = 'REDUCE_SOURCE_SPOT'
const ADD_TARGET_SPOT = 'ADD_TARGET_SPOT'
const REDUCE_TARGET_SPOT = 'REDUCE_TARGET_SPOT'
const SET_SELECTED_SPOT = 'SET_SELECTED_SPOT'

export default {
  [ADD_SOURCE_SPOT] (state, {spotArray}) {
    spotArray.forEach((item) => {
      state.sourceSpot.set(item.id, item)
    })
  },
  [REDUCE_SOURCE_SPOT] (state, {spotArray}) {
    spotArray.forEach((item) => {
      state.sourceSpot.delete(item.key)
    })
  },
  [ADD_TARGET_SPOT] (state, {spotArray}) {
    spotArray.forEach((item) => {
      state.targetSpot.push(item.id)
    })
  },
  [REDUCE_TARGET_SPOT] (state, {spotArray}) {
    spotArray.forEach((item) => {
      state.targetSpot.delete(item.key)
    })
  },
  [SET_SELECTED_SPOT] (state, {spot}) {
    state.selectedSpot = spot
  }
}
