<template>
  <div class="hello">
    <div>
      <h1>{{msg}}</h1>
      <span v-bind:title="message">
        {{message}}
      </span>
      <p v-if="seen">Now you see me</p>
    </div>
    <div>
      <ul id="myList">
        <li v-for='item in names'>{{item.name}}</li>
      </ol>
    </div>
    <div>
      <button v-on:click="reverseMessage">Reverse</button>
      <button v-on:click="goHome">Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'dominic vue.js',
      message: 'abcdefghijklmn',
      seen: true,
      names: [
        {id: '1', name: 'a'},
        {id: '2', name: 'b'},
        {id: '3', name: 'c'},
        {id: '4', name: 'd'}
      ]
    }
  },
  methods: {
    reverseMessage () {
      this.msg = this.msg.split('').reverse().join('')
      this.message = this.message.split('').reverse().join('')
      this.seen = !this.seen
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 100px
  }

  #myList {
    list-style: none;
  }
</style>
