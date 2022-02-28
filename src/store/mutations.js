const ADD_SOURCE_SPOT = 'ADD_SOURCE_SPOT'
const REDUCE_SOURCE_SPOT = 'REDUCE_SOURCE_SPOT'
const ADD_TARGET_SPOT = 'ADD_TARGET_SPOT'
const ADD_TARGET_SPOT_ID = 'ADD_TARGET_SPOT_ID'
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
  [ADD_TARGET_SPOT_ID] (state, {spotArray}) {
    state.targetSpot.push(spotArray[0])
  },
  [REDUCE_TARGET_SPOT] (state, {spotArray}) {
    let arr = state.targetSpot.filter (item => spotArray[0] !== item)
    state.targetSpot = arr
  },
  [SET_SELECTED_SPOT] (state, {spot}) {
    state.selectedSpot = spot
  }
}
