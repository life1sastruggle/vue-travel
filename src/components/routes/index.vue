<template>
  <div class="container">
    <div class="list">
      <div v-for="(item,i) in routes" class="list-box" :key=i
           :style="{'background-image':'url('+item.image+')'} " :class="{'click':i === isActive}"
           @mouseenter="mouseenter(i)" @mouseleave="mouseleave" @click="handleClick(item)">
        <div class="item">
          <p class="item-name">{{ item.name }}</p>
          <p class="item-grade">{{ item.score }} </p>
        </div>
        <p class="item-introduction">{{ item.introduction }}</p>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        @next-click="nextClick"
        @prev-click="prevClick"
        @current-change="handleCurrentChange"
        :page-size="8"
        :total="total"
        class='pagination'>
      </el-pagination>
    </div>
  </div>

</template>

<script>
import {getRoute, getRouteSpotMapping} from '../../common/api'
import {goPageTop} from '../../common/base'
import {mapMutations} from 'vuex'
import util from '../../common/util'
import {host} from '../../common/config'

export default {
  name: 'index',

  data () {
    return {
      routes: [],
      params: {
        page: 1
      },
      routeSpotParams: {
        route_id: 0
      },
      isActive: '',
      total: 0,
    }
  },

  methods: {
    ...mapMutations(['ADD_ROUTE_TARGET_SPOT']),
    getData () {
      getRoute(this.params, response => {
        this.total = response.total
        for (let i = 0; i < response.data.length; i++) {
          response.data[i].image = host + response.data[i].image
        }
        this.routes = response.data
      })
    },

    nextClick () {
      this.params.page += 1
      this.getData()
      goPageTop()
    },
    handleClick (item) {
      this.routeSpotParams.route_id = item.id
      this.$store.state.selectedSpot = null
      getRouteSpotMapping(this.routeSpotParams, data => {
        this.ADD_ROUTE_TARGET_SPOT({spotArray: data})
        this.$store.state.selectedRoute = item
        this.$store.state.selectedSpot = null
        this.$router.push('/spot')
        util.$emit('initMap')
      })
    },
    handleCurrentChange (val) {
      this.params.page = val
      this.getData()
      goPageTop()
    },
    prevClick () {
      this.params.page -= 1
      this.getData()
      goPageTop()
    },
    mouseleave () {
      this.isActive = ''
    },
    mouseenter (index) {
      this.isActive = index
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;

  .list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 1800px;
    margin-top: 5px;
    flex-wrap: wrap;

    .list-box {
      margin: 5px 16px 5px 16px;
      border-radius: 4px;
      box-shadow: 2px 4px 12px #99a9bf;
      width: 418px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 300px;
      transition: all 0.3s;
      background-size: 418px 300px;

      &:hover {
        cursor: pointer;
        transform: scale(0.98) translateZ(0);
      }

      .click {
        box-shadow: 0 0 10px #909487F0
      }

      .item {
        display: flex;
        flex-direction: column;
        padding: 10px 10px 15px;
        margin: 10px;

        .item-name {
          padding: 0;
          margin: 0;
          font-weight: bold;
          font-size: 1.78em;
          line-height: 28px;
          color: #FFFFFF;
          text-shadow: 1px 1px 10px #111111;
        }

        .item-grade {
          background: #1CBD77;
          color: #FFFFFF;
          display: inline-block;
          box-sizing: border-box;
          text-align: center;
          font-weight: 800;
          line-height: 2;
          width: 35px;
          border-radius: 6.4px 6.4px 6.4px 0;
          font-size: 16px;
        }
      }

      .item-introduction {
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
        margin: 0 20px 5px 20px;
        text-shadow: 1px 1px 8px #000000;
        color: #FFFFFF;
        height: 100px;
        overflow: hidden;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding-bottom: 10px;
  }
}


</style>
