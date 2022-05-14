<template>
  <div class="container" v-show="imageList">
    <el-carousel :interval="4000"  type="card" height="265px">
      <el-carousel-item v-for="(item,i) in imageList" :key="i">
        <img :src=item style="height:100%; width:100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {host} from '../../common/config'

export default {
  data () {
    return {
    }
  },
  name: 'index',
  computed: {
    ...mapState(['selectedSpot', 'selectedRoute']),
    imageList(){
      if (!this.selectedSpot) {
        if (!this.selectedRoute) {
          return null
        } else if (this.selectedRoute) {
          return [this.selectedRoute.image]
        }
      } else {
        let res=[]
        this.selectedSpot.attraction_image.forEach(item=>{
          res.push(host+item.image)
        })
        return res
      }
    }
  },
}
</script>

<style scoped>
.container {
  height: 290px;
}
</style>
