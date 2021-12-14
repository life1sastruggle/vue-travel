<template>
  <div class='content-main'>
    <div class='left-div'>
      <div class='transfer'>
        <select-spots/>
      </div>
    </div>
    <div class='middle-div'>
    </div>
    <div class='right-div'>
    </div>
  </div>
</template>
<script>
import selectSpots from '@/components/selectSpots/index'

export default {
  data () {
    return {}
  },
  components: {
    selectSpots
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.content-main {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.left-div {
  height: 100vh;
  width: 25vw;
}

.right-div {
  height: 100vh;
  width: 25vw;
  background: #035a17
}

.middle-div {
  height: 100vh;
  width: 40vw;
  background: #e8d551
}

</style>
