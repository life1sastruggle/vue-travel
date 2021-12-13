<template>
  <div id='content'>
    <div class='content_header'>
      <div id='left-div'>
        <div id='transfer'>
          <select-spots/>
        </div>
      </div>
      <div id='middle-div'>
      </div>
      <div id='right-div'>
      </div>
    </div>
    <div id='footer'>
      <a id="toinfo" href="/">AboutUs</a>
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
#content {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

#left-div {
  height: 100vh;
  width: 30vw;
}

#right-div {
  height: 100vh;
  width: 30vw;
  background: #035a17
}

#middle-div {
  height: 100vh;
  width: 40vw;
  background: #e8d551
}

#footer {
  text-align: left;
  height: 42px;
  width: 100%;
  line-height: 42px;
  border-top: none;
  margin-top: 0;
  background: #111111;
}

.content_header {
  display: flex;
}
</style>
