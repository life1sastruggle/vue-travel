<template>
  <div class="routes-main">
    <div class="content">
      <el-carousel :interval="4000" height="412px">
        <el-carousel-item v-for="(item,i) in imageList" :key="i">
          <img :src=item.image style="height:100%; width:100%">
        </el-carousel-item>
      </el-carousel>
      <routes-component></routes-component>
    </div>
  </div>
</template>

<script>
import RoutesComponent from '../components/routes/index'
import {getBanner} from '../common/api'
import {host} from '../common/config'

export default {
  name: 'RoutesPage',
  components: {
    RoutesComponent,
  },
  data () {
    return {
      imageList: []
    }
  },
  methods: {
    getImage () {
      getBanner('', res => {
        res.data.forEach(item => item.image = host + item.image)
        this.imageList = res.data
      })
    },
  },
  mounted () {
    this.getImage()
  },
}
</script>

<style scoped>
.routes-main {
  display: flex;
  justify-content: center;
}

</style>
