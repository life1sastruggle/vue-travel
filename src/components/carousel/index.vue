<template>
  <el-carousel :interval="4000" type="card" height="265px">
    <el-carousel-item v-for="item in imageList" :key="item">
      <img :src=item>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import {getAttractionImage} from '../../common/api'
import {mapState} from 'vuex'
import util from '../../common/util'
import {host} from '../../common/config'

export default {
  data () {
    return {
      imageList: []
    }
  },
  name: 'index',
  computed: {
    ...mapState(['selectedSpot']),
  },
  methods: {
    getImage () {
      this.imageList.length = 0
      getAttractionImage({id: this.selectedSpot.id}, res => {
        for (let i = 0; i <  res.data.length; i++) {
          this.imageList.push(host +  res.data[i].image)
        }
      })
    }
  },
  mounted () {
    let that = this
    util.$on('getImage', function () {
      that.getImage()
    })
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
