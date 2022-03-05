<template>
  <div class="main-col">
    <div v-for="(item,i) in routes" class="list_product_box" :key=i>
      <div class="list_product_item_border" :class="{'click':i === isActive}"
           @mouseenter="mouseenter(i)" @mouseleave="mouseleave" @click="handleClick(item.id)">
        <div class="list_product_item">
          <div class="list_product_left">
            <img class="list_product_pic"
                 :src=item.picUrl
                 :alt=item.name
                 style="width: 190px; height: 120px; opacity: 1;">
          </div>
          <div class="list_product_right">
            <p class="list_product_title">{{ item.name }}</p>
            <span>{{ item.comment }}</span>
            <img style="height: 16px; padding-left: 4px; margin-bottom: -2px; ">
            <div class="list_product_content basefix">
              <div class="list_content_right">
                <div class="list_change_box basefix">
                  <div class="list_change_left">
                    <p class="list_change_grade">
                      <strong>{{ item.score }}</strong> points</p>
                  </div>
                </div>
              </div>
              <div class="list_sr_price_box basefix">
                <div class="list_sr_price"><dfn>￥</dfn><strong>{{ item.price }}</strong>起</div>
              </div>
            </div>
            <div class="list_content_left">
              <div>
                <div class="list_explan_text_box" style="position: relative;"><p class="list_explan_text">
                  {{ item.intro }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="goto"></div>
        </div>
      </div>
      <div class="comment">
        <el-collapse>
          <el-collapse-item title="Comment">
            <div>A test comment</div>
            <div><a href='javascript:void(0)' @click="click()">More Comments</a></div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next, jumper"
      @next-click="nextClick"
      @prev-click="prevClick"
      @current-change="handleCurrentChange"
      :total="total">
      >
    </el-pagination>
  </div>

</template>

<script>
import {getRoutes, getRouteSpotMapping} from '../../common/api'
import {goPageTop} from '../../common/base'
import {mapMutations} from 'vuex'
import util from '../../common/util'

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
      getRoutes(this.params, data => {
        this.total = data.total
        let res = data.data
        this.routes = []
        for (let i = 0; i <= res.length; i++) {
          this.routes.push({
            id: res[i].id,
            name: res[i].name,
            picUrl: 'http://127.0.0.1/' + res[i].pic_url,
            score: res[i].score,
            price: res[i].price,
            intro: res[i].intro
          })
        }
      })
    },
    nextClick () {
      this.params.page += 1
      this.getData()
      goPageTop('#main-col')
    },
    handleClick (id) {
      this.routeSpotParams.route_id = id
      getRouteSpotMapping(this.routeSpotParams, data => {
        this.ADD_ROUTE_TARGET_SPOT({spotArray: data})
        this.$router.push('/spot')
        util.$emit('initMap', 'msg')
      })
    },
    click () {
      this.$router.push('/comment')
    },
    handleCurrentChange (val) {
      this.params.page = val
      this.getData()
      goPageTop('#main-col')
    },
    prevClick () {
      this.params.page -= 1
      this.getData()
      goPageTop('#main-col')
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

.list_product_box {
  margin-bottom: 16px;
  //background: #F5F0D3D1;
  border-radius: 4px;
  box-shadow: 2px 4px 12px #99a9bf;
  display: block;
}

.list_product_item_border {
  padding: 16px 0 16px 0;
  margin-bottom: 5px;
  transition: all 0.3s;
  background: #FFFFFF;

  &:hover {
    cursor: pointer;
    transform: scale(1.03) translateZ(0);
  }
}

.list_product_item {
  padding: 0 0 0 216px;
  font-size: 12px;
  color: #333;
}

.list_product_left {
  float: left;
  width: 200px;
  margin-left: -216px;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
}

.list_product_pic {
  border-radius: 2px;
  display: block;
  margin-left: 10px;
}

.main-col {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin-top: 5px;
}

/deep/ .el-collapse-item__header {
  //background: #F5F0D3D1;
}

.click {
  box-shadow: 0px 0px 10px #909487F0
}

.list_product_title {
  font-size: 16px;
  color: #333;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

</style>
