export default {
  getSourceSpot(state){
    return Array.from(state.sourceSpot.values())
  },
  getTargetSpot(state){
  return Array.from(state.targetSpot.values())
  },
  getSelectedSpot(state){
    return state.selectedSpot
  }
}
