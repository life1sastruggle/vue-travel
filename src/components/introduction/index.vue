<template>
  <div class="content">
    <div class='content-header'>{{ name }}</div>
    <div class='content-body'>{{ body }}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'introduction',
  data () {
    return {}
  },
  computed: {
    ...mapState(['selectedSpot', 'selectedRoute']),
    name () {
      if (!this.selectedSpot) {
        if (!this.selectedRoute) {
          return null
        } else if (this.selectedRoute) {
          return this.selectedRoute.name
        }
      } else {
        return this.selectedSpot.name
      }
    }
    , body () {
      if (!this.selectedSpot) {
        if (!this.selectedRoute) {
          return null
        } else if (this.selectedRoute) {
          return this.selectedRoute.introduction
        }
      } else {
        return this.selectedSpot.introduction
      }
    }
  },
}
</script>

<style lang='scss' scoped>
.content {
  min-height: 100px;
  width: 1000px;
  box-shadow: 0 0 12px 4px #99a9bf;
  margin-bottom: 10px;

  .content-header {
    color: #1d1d1f;
    font-size: 28px;
    font-weight: 600;
    padding: 15px;
    text-align: center;
  }

  .content-body {
    padding: 0 15px 25px 15px;
  }

}
</style>
