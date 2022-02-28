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
                 style="width: 200px; height: 150px; opacity: 1;">
          </div>
          <div class="list_product_right">
            <p class="list_product_title"
               :title=item.name>
              <span>{{ item.comment }}</span>
              <img style="height: 16px; padding-left: 4px; margin-bottom: -2px;">
            </p>
            <div class="list_product_content basefix">
              <div class="list_content_right">
                <div class="list_change_box basefix">
                  <div class="list_change_left">
                    <p class="list_change_grade">
                      <strong>{{ item.score }}</strong>分</p>
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
        <el-collapse v-model="item.name">
          <el-collapse-item title="Comments" name="1">
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            <div><a href="/comments">More Comments</a></div>
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
  <!--  <div class='footer'>-->

  <!--  </div>-->
</template>

<script>
import {getRoutes, getRouteSpotMapping} from '../../common/api'
import {goPageTop} from '../../common/base'
import {mapMutations} from 'vuex'

export default {
  name: 'index',

  data () {
    return {
      routes: [],
      total: 0,
      loading: false,
      params: {
        page: 1
      },
      routeSpotParams: {
        route_id: 0
      },
      isActive: ''
    }
  },
  computed: {
    noMore () {
      return this.params.page >= 7
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    ...mapMutations(['ADD_TARGET_SPOT']),
    getData () {
      getRoutes(this.params, data => {
        this.total = data.total
        let res = data.data
        this.routes = []
        for (let i = 0; i <= res.length; i++) {
          this.routes.push({
            id: res[i].id,
            name: res[i].name,
            picUrl: res[i].picUrl,
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
        let res = data
        this.ADD_TARGET_SPOT({spotArray: res})
        this.$router.push('/spot')
      })
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

<style scoped>

.list_product_box {
  /*padding: 0 16px 0 16px;*/
  margin-bottom: 16px;
  background: #DCE8C9F0;
  border-radius: 4px;
  display: block;
}

.list_product_item_border {
  padding: 16px 0 16px 0;
  margin-bottom: 5px;
  /*border: solid 1px #000000;*/
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
}

.main-col {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin-top: 5px;
}

/deep/ .el-collapse-item__header {
  background: rgba(220, 232, 201, 0.94);
}

.click {
  box-shadow: 0px 0px 10px #909487F0
}

</style>
