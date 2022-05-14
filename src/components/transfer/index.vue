<template>
  <div class='transfer'>
    <el-transfer
      filterable
      v-model="target"
      :data="attraction"
      :titles="['Popular', 'Selected']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${total}'
      }"
      target-order="push"
      @left-check-change="addSpot"
      @right-check-change="deleteSpot"
    >
    </el-transfer>
    <div class='button'>
      <div class="transfer-footer">
      <el-button type="success" round slot="left-footer" size="small" @click="startPlanning">
        Planning
      </el-button>
      </div>
      <div class="transfer-footer">
      <el-button type="success" round slot="right-footer" size="small" @click="deselect">
        Deselect
      </el-button>
        </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import {getAttraction} from '../../common/api'
import util from '../../common/util'

export default {
  data () {
    return {
      target: [],
      renderFunc (h, option) {
        return <span>{option.key} - {option.label}</span>
      }
    }
  },
  computed: {
    ...mapState(['targetSpotId', 'sourceSpot', 'targetSpot', 'selectedSpot', 'attraction']),
  },
  methods: {
    ...mapMutations(['ADD_SOURCE_SPOT', 'ADD_TARGET_SPOT', 'REDUCE_TARGET_SPOT', 'SET_SELECTED_SPOT', 'REDUCE_ALL_TARGET_SPOT']),
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    },
    getSource () {
      getAttraction('', data => {
        this.ADD_SOURCE_SPOT({spotArray: data.data})
        util.$emit('initMap')
      })
    },
    getTarget () {
      this.target = this.targetSpotId
    },
    addSpot (key) {
      this.ADD_TARGET_SPOT(key[0])
      this.target = this.targetSpotId
      this.SET_SELECTED_SPOT(key[0])
      util.$emit('getComment')
    },
    deleteSpot (key) {
      this.REDUCE_TARGET_SPOT(key[0])
      this.target = this.targetSpotId
      this.SET_SELECTED_SPOT(key[0])
      util.$emit('getComment')
    },
    startPlanning () {
      util.$emit('initMap')
    },
    deselect () {
      this.REDUCE_ALL_TARGET_SPOT()
      this.target = this.targetSpotId
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
  box-shadow: 2px 4px 12px #99a9bf;
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
  width: 190px;
  height: 425px;

  .el-checkbox__inner {
    display: none;
  }

  .el-transfer-panel__footer {
    height: 30px;
    background: #FFF;
    margin: 0;
    border-top: 1px solid #EBEEF5;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
}

.button {
  display: flex;
  justify-content: center;
  .transfer-footer{
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

/deep/ .el-transfer__buttons {
  display: none;
}

/deep/ .el-transfer-panel__list.is-filterable {
  height: 320px;
  padding-top: 0;
}

</style>
