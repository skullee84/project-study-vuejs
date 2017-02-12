<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="/#/dominic">go dominic!!</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello h1!! 2'
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 20px
  }
</style>
