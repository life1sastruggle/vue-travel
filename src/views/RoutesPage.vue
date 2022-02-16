<template>
  <div class="routes-main">
    <div class="content">
      <routes-component></routes-component>
    </div>
  </div>
</template>

<script>
import RoutesComponent from '../components/routes/index'

export default {
  name: 'RoutesPage',
  components: {
    RoutesComponent
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.routes-main {
  display: flex;
  justify-content: center;
}
.content {
  width: 800px;
}
</style>
