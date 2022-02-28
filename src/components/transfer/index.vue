<template>
  <div class='spots-container'>
    <div class='transfer'>
      <p class='title'>Spots</p>
      <el-transfer
        filterable
        v-model="target"
        :data="spot"
        :titles="['Popular', 'Selected']"
        :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
        @change="handleChange"
      >
        <!--      <el-checkbox-group v-model:="spots">-->
        <!--&lt;!&ndash;        <el-checkbox-button  v-for="(spot,i) in spots" :label="spot" :key="i">{{ spot }}</el-checkbox-button>&ndash;&gt;-->
        <!--      </el-checkbox-group>-->
        <el-button class="transfer-footer " slot="left-footer" size="small" @click>Add</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small" @click>Delete</el-button>
      </el-transfer>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import {getSpot} from '../../common/api'

export default {
  data () {
    return {
      target: [],
      spot: [],
      renderFunc (h, option) {
        return <span>{option.key} - {option.label}</span>
      }
    }
  },

  methods: {
    ...mapGetters(['getTargetSpot','getSourceSpot']),
    ...mapMutations(['ADD_SOURCE_SPOT']),
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    },
    getSource () {
      getSpot(data => {
        this.ADD_SOURCE_SPOT({spotArray: data.data})
        this.spot = this.getSourceSpot().map((item) => {
          return Object.assign({}, {'key': item.id, 'label': item.name})
        })
      })
    },
    getTarget () {
      this.target = this.getTargetSpot()
    }
  },
  mounted () {
    this.getSource()
    this.getTarget()
  }
}
</script>

<style lang="scss" scoped>
.spots-container {
  flex-direction: column;
}

.route {
  height: 75px;
  width: 70px;
  border: 1px solid #EBEEF5;
}

.transfer {
  //text-align: center;
  height: 75px;

  .title {
    text-align: center;
    margin: 0 0 10px;
    background: #EBEEF5FF;
    width: 180px;
  }
}

/deep/ .el-transfer {
  display: block;
}

/deep/ .el-transfer-panel {
  width: 180px;
  height: 400px;
  background: #FFF7C0CC;

}

/deep/ .el-transfer__buttons {
  display: none;
}

/deep/ .el-transfer-panel .el-transfer-panel__footer {
  height: 32px;
  background: #FFF;
  margin: 0;
  // padding: 0;
  border-top: 1px solid #EBEEF5;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>
