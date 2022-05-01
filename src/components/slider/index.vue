<template>
  <div class='slider'>
    <div class="title">
      Please choose what you care about
    </div>
    <div class='component'>
      <div class='inner'>
        <div class='slider-box'>
          <span class="demonstration">Scenery</span>
          <el-slider v-model="param.scenery" @change="handleValue">
          </el-slider>
        </div>
        <div class='slider-box'>
          <span class="demonstration" >Repast</span>
          <el-slider v-model="param.repast" @change="handleValue">
          </el-slider>
        </div>
        <div class='slider-box'>
          <span class="demonstration" >Accommodation</span>
          <el-slider v-model="param.accommodation" @change="handleValue">
          </el-slider>
        </div>
      </div>
      <div class='inner'>
        <div class='slider-box'>
          <span class="demonstration" >Shopping</span>
          <el-slider v-model="param.shopping" @change="handleValue">
          </el-slider>
        </div>
        <div class='slider-box'>
          <span class="demonstration" >Entertainment</span>
          <el-slider v-model="param.entertainment" @change="handleValue">
          </el-slider>
        </div>
        <div class='slider-box'>
          <span class="demonstration" >Traffic</span>
          <el-slider v-model="param.traffic" @change="handleValue">
          </el-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAttraction} from '../../common/api'
import {mapMutations} from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      param:{
        scenery: 0,
        repast: 0,
        accommodation: 0,
        shopping: 0,
        entertainment: 0,
        traffic: 0,
      }
    }
  },
  methods: {
    ...mapMutations(['ADD_SOURCE_SPOT']),
    handleValue () {
      getAttraction(this.param, data=>{
        this.ADD_SOURCE_SPOT({spotArray: data.data})
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.slider {
  height: 300px;
  box-shadow: 2px 4px 12px #99a9bf;
  margin-bottom: 10px;
}

.title {
  margin: 10px 0 10px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
}

.slider-box {
  margin: 5px 0 5px 0;
}

.component {
  width: 350px;
  margin: 20px 0 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .inner {
    width: 150px;
  }
}

</style>
