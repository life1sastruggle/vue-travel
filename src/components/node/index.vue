<template>
  <div class="node-container" v-if="nodes.length">
    <div class="nav">
      <div class="nav-list">
        <div class="nav-item" v-for="(spot,i) in nodes" :key=i>
          <span>{{ spot.name }}</span>
          <i class="round"></i>
        </div>
      </div>
    </div>
    <div class="node">
      <div class="node-item" v-for="(item,i) in nodes" :key=i>
        <i class="icon"></i>
        <span @click="getInfo(item)">{{ item.name }}</span>
        <p>{{ item.introduction }}</p>
        <div class="node-picture">
          <div class="picture-item" :style="imageNum(item.attraction_image.length)"
               v-for="(imageItem,i) in item.attraction_image" :key=i>
            <img :src="host+imageItem.image">
          </div>
        </div>
        <div class="detail-separate"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {goPageTop} from '../../common/base'
import {host} from '../../common/config'
import util from '../../common/util'

export default {
  name: 'node',
  data () {
    return {
      host: host,
    }
  },
  computed: {
    ...mapState(['targetSpot', 'targetSpotId', 'sourceSpot']),
    nodes () {
      let res = []
      this.targetSpotId.forEach(id => res.push(this.targetSpot.get(id)))
      return res
    },
    imageNum () {
      return (length) => {
        if (length < 3) {
          return 'width: 400px; height:300px;'
        } else if (length === 3) {
          return 'width: 250px; height:185px;'
        } else if (length > 3) {
          return 'width: 190px; height: 142.5px;'
        }
      }
    }
  },
  methods: {
    ...mapMutations(['SET_SELECTED_SPOT']),
    getInfo (item) {
      goPageTop()
      this.SET_SELECTED_SPOT(item.id)
      util.$emit('getComment')
    },
  },
}
</script>

<style lang="scss" scoped>
.node-container {
  width: 920px;
  box-shadow: 2px 4px 12px #99a9bf;
  display: flex;
  flex-direction: row;
  background: #fff;
  margin-top: 10px;
  padding: 30px 40px 20px;

  .nav {
    display: block;
    position: static;
    top: 0;
    width: 110px;

    .nav-list {
      border-right: 2px solid #8c939d;
      width: 92px;

      .nav-item {
        position: relative;
        margin: 8px 0;
        padding-right: 18px;
        cursor: pointer;
        display: block;
        width: 84px;
        //height: 24px;
        overflow: hidden;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        text-align: right;
        line-height: 24px;

      }
    }
  }
}

.node {
  position: relative;
  margin: 0 0 20px 5px;
  padding: 0 40px 20px;
  color: #333;
  font-size: 14px;
  line-height: 30px;
  width: 840px;

  .node-item {
    position: relative;
    margin: 10px 0;
    font-size: 18px;
    color: #333;
    padding-left: 0;

    span {
      cursor: pointer;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
      font-family: arial, Tahoma, Microsoft YaHei;
      color: #404040;
      text-align: left;
    }

    .node-picture {
      width: 800px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;

      .picture-item {
        padding: 3px;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .icon {
    position: absolute;
    left: -30px;
    top: 2px;
    vertical-align: middle;
    background-image: url(../../assets/image/icon.svg);
    height: 25px;
    width: 25px;
    overflow: hidden;
    display: inline-block;
    background-repeat: no-repeat;
  }
}

.round {
  position: absolute;
  right: 0;
  top: 3px;
  background-image: url(../../assets/image/dot.svg);
  height: 18px;
  width: 18px;
  overflow: hidden;
  display: inline-block;
  background-repeat: no-repeat;
}

.detail-separate {
  margin: 10px 0;
  border: 0;
  border-top: 1px dotted #ddd;
}
</style>
