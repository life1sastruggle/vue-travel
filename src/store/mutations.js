const ADD_SOURCE_SPOT = 'ADD_SOURCE_SPOT'
const REDUCE_SOURCE_SPOT = 'REDUCE_SOURCE_SPOT'
const ADD_ROUTE_TARGET_SPOT = 'ADD_ROUTE_TARGET_SPOT'
const ADD_TARGET_SPOT = 'ADD_TARGET_SPOT'
const REDUCE_TARGET_SPOT = 'REDUCE_TARGET_SPOT'
const SET_SELECTED_SPOT = 'SET_SELECTED_SPOT'
const REDUCE_ALL_TARGET_SPOT = 'REDUCE_ALL_TARGET_SPOT'

export default {
  [ADD_SOURCE_SPOT] (state, {spotArray}) {
    state.sourceSpot.clear()
    state.attraction = []
    spotArray.forEach((item) => {
      state.sourceSpot.set(item.id, item)
      state.attraction.push({key: item.id, label: item.name})
    })
  },
  [REDUCE_SOURCE_SPOT] (state, {spotArray}) {
    spotArray.forEach((item) => {
      state.sourceSpot.delete(item.key)
    })
  },
  [ADD_ROUTE_TARGET_SPOT] (state, {spotArray}) {
    spotArray.forEach((item) => {
      state.targetSpotId.push(item.id)
      state.targetSpot.set(item.id, item)
    })
  },
  [ADD_TARGET_SPOT] (state, id) {
    state.targetSpotId.push(id[0])
    state.targetSpot.set(id[0], state.sourceSpot.get(id[0]))
  },
  [REDUCE_TARGET_SPOT] (state, id) {
    state.targetSpotId = state.targetSpotId.filter(item => id[0] !== item)
    state.targetSpot.delete(id[0])
  },
  [SET_SELECTED_SPOT] (state, {spot}) {
    state.selectedSpot = state.sourceSpot.get(spot[0])
  },
  [REDUCE_ALL_TARGET_SPOT] (state) {
    state.targetSpotId = []
    state.targetSpot.clear()
  }
}
