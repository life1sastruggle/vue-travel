const ADD_SOURCE_SPOT = 'ADD_SOURCE_SPOT'
const REDUCE_SOURCE_SPOT = 'REDUCE_SOURCE_SPOT'
const ADD_ROUTE_TARGET_SPOT = 'ADD_ROUTE_TARGET_SPOT'
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
  [ADD_ROUTE_TARGET_SPOT](state, {spotArray}){
    spotArray.forEach((item) => {
      state.targetSpotId.push(item.id)
      state.targetSpot.set(item.id, item)
    })
  },
  [ADD_TARGET_SPOT] (state, {spotArray}) {
    state.targetSpotId.push(spotArray[0])
    state.targetSpot.set(spotArray[0], state.sourceSpot.get(spotArray[0]))
  },
  [REDUCE_TARGET_SPOT] (state, {spotArray}) {
    state.targetSpotId = state.targetSpotId.filter(item => spotArray[0] !== item)
    state.targetSpot.delete(spotArray[0])
  },
  [SET_SELECTED_SPOT] (state, {spot}) {
    state.selectedSpot = state.sourceSpot.get(spot[0])
  }
}
