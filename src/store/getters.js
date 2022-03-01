export default {
  getSourceSpot(state){
    return Array.from(state.sourceSpot.values())
  },
  getTargetSpot(state){
    return Array.from(state.targetSpot.values())
  },
  getTargetSpotId(state){
    return state.targetSpotId
  },
  getSelectedSpot(state){
    return state.selectedSpot
  }
}
