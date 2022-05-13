import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  sourceSpot: new Map(),
  targetSpot: new Map(),
  selectedRoute: null,
  targetSpotId: [],
  selectedSpot: null,
  attraction: [],
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
})
