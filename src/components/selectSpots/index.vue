<template>

  <div class =  'transfer'>
    <p style="text-align: center; margin: 0 0 10px">选择你的目标景点</p>
    <el-transfer
      filterable
      :data="data"
      :titles="['Source', 'Target']"
      :button-texts="['-', '+']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      >
      <el-checkbox-group >
         <el-checkbox-button  v-for="(city,i) in cities" :label="city" :key="i">{{city}}</el-checkbox-button>
      </el-checkbox-group>
      <el-button class="transfer-footer " slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>
  </div>
</template>
<script>

export default {
  data () {
    return {
      // cities: this.generateData(),
      cities: [1, 2, 3],
      value: [],
      renderFunc (h, option) {
        return <span>{ option.key } - { option.label }</span>
      }
    }
  },

  methods: {
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    },
    generateData () {
      const data = []
      this.$api.getSpots({}, (data) => {
        this.cities = data.cities
      })
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
 .transfer{
   text-align: center;
   height: 75px;
 }
 .el-transfer  {
 display: flex;

}
/deep/ .el-transfer-panel{
   width: 180px;
   height: 500px;

 }

/deep/ .el-transfer-panel .el-transfer-panel__footer {
    height: 80px;
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
