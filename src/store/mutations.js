export default {
  ['ADD_SOURCE_SPOT'] (state, {spotArray}) {
    state.sourceSpot.clear()
    state.attraction = []
    spotArray.forEach((item) => {
      state.sourceSpot.set(item.id, item)
      state.attraction.push({key: item.id, label: item.name})
    })
  },
  ['REDUCE_SOURCE_SPOT'] (state, {spotArray}) {
    spotArray.forEach((item) => {
      state.sourceSpot.delete(item.key)
    })
  },
  ['ADD_ROUTE_TARGET_SPOT'] (state, {spotArray}) {
    state.targetSpotId = []
    state.targetSpot.clear()
    spotArray.forEach((item) => {
      state.targetSpotId.push(item.id)
      state.targetSpot.set(item.id, item)
    })
  },
  ['ADD_TARGET_SPOT'] (state, id) {
    state.targetSpotId.push(id)
    state.targetSpot.set(id, state.sourceSpot.get(id))
  },
  ['REDUCE_TARGET_SPOT'] (state, id) {
    state.targetSpotId = state.targetSpotId.filter(item => id !== item)
    state.targetSpot.delete(id)
  },
  ['SET_SELECTED_SPOT'] (state, id) {
    state.selectedSpot = state.sourceSpot.get(id)
  },
  ['REDUCE_ALL_TARGET_SPOT'] (state) {
    state.targetSpotId = []
    state.targetSpot.clear()
  }
}
