export default {
  getSourceSpot(state){
    return Array.from(state.sourceSpot.values())
  },
  getTargetSpot(state){
  return state.targetSpot
  },
  getSelectedSpot(state){
    return state.selectedSpot
  }
}
