<template>
  <div class='main_col'>
    <div class='product_item' @click="handleClick">
      <div class="list_product_box" data-track-product-id="2334876" data-track-is-recommend="false"
           data-track-inner-pos="0" v-for="(item,i) in routes" :key = i>
        <div class="list_product_item_border">
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
                <span>{{item.comment}}</span>
                <img style="height: 16px; padding-left: 4px; margin-bottom: -2px;">
              </p>
              <div class="list_product_content basefix">
                <div class="list_content_right">
                  <div class="list_change_box basefix">
                    <div class="list_change_left">
                      <p class="list_change_grade">
                        <strong>4.9</strong>分</p>
                    </div>
                    </div>
                    <el-collapse v-model="activeNames" @change="handleChange">
                      <el-collapse-item title="评论" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        <div><a href="/comments">More Comments</a></div>
                      </el-collapse-item>
                    </el-collapse>
                  </div>
                  <div class="list_sr_price_box basefix">
                    <div class="list_sr_price"><dfn>￥</dfn><strong>3098</strong>起</div>
                  </div>
                </div>
                <div class="list_content_left">
                  <div>
                    <div class="list_explan_text_box" style="position: relative;"><p class="list_explan_text">
                      【自营豪礼】蜈支洲岛VIP通道（节省排队时间）+24小时专车接送机+真正纯玩无购物+沙滩旅拍（含5张电子照）+升级海南四大名菜</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {getRoutes} from '../../common/api'

export default {
  name: 'index',
  data () {
    return {
      routes: []
    }
  },
  methods: {
    init () {
      const obj = {'keywords': '公园'}
      getRoutes(obj, (data) => {
        for (let i = 0; i <= data.length; i++) {
          this.routes.push({
            picUrl: data.pic_url
          })
        }
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
.main_col {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 90px;
  width: 790px;
  background: #e8d551;
}

.list_product_box {
  padding: 0 16px 0 16px;
  margin-bottom: 16px;
  background: #3333;
  border-radius: 4px;
}

.list_product_item_border {
  padding: 16px 0 16px 0;
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
</style>
