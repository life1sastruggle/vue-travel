<template>
  <div class='transfer'>
    <p class='title'>Spots</p>
    <el-transfer
      filterable
      v-model="target"
      :data="spot"
      :titles="['Popular', 'Selected']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${total}'
      }"
      @left-check-change="addSpot"
      @right-check-change="deleteSpot"
    >
    </el-transfer>
    <el-button class="transfer-footer" slot="right-footer" size="small" @click="startPlanning">Start Planning
    </el-button>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import {getSpot} from '../../common/api'
import util from '../../common/util'

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
  computed:{
    ...mapState(['targetSpotId', 'sourceSpot','targetSpot']),
  },
  methods: {
    ...mapMutations(['ADD_SOURCE_SPOT', 'ADD_TARGET_SPOT', 'REDUCE_TARGET_SPOT']),
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    },
    getSource () {
      let that = this
      getSpot(data => {
        this.ADD_SOURCE_SPOT({spotArray: data.data})
        this.spot = Array.from(that.sourceSpot.values()).map((item) => {
          return Object.assign({}, {'key': item.id, 'label': item.name})
        })
      })
    },
    getTarget () {
      this.target = this.targetSpotId
    },
    addSpot (key) {
      this.ADD_TARGET_SPOT({spotArray: key})
      this.target = this.targetSpotId
    },
    deleteSpot (key) {
      this.REDUCE_TARGET_SPOT({spotArray: key})
      this.target = this.targetSpotId
    },
    startPlanning () {
      util.$emit('initMap', 'msg')
    }
  },
  mounted () {
    this.getSource()
    this.getTarget()
  }
}
</script>

<style lang="scss" scoped>
.transfer {
  flex-direction: row;
  border: solid 1px #77e851;
}

.title {
  text-align: center;
  margin: 0 0 10px;
  background: #EBEEF5FF;
  width: 300px;
}

/deep/ .el-transfer {
  display: block;
}

/deep/ .el-transfer-panel {
  width: 150px;
  height: 419px;
  background: #FFF7C0CC;

  .el-checkbox__inner {
    display: none;
  }

  .el-transfer-panel__footer {
    height: 30px;
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
}

/deep/ .el-transfer__buttons {
  display: none;
}
</style>
