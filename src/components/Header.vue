<template>
  <div>
  <v-app-bar app color="grey lighten-3">
    <v-app-bar-nav-icon @click="controlDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
    <div class="test">
      <slot name="data"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: [
      'title'
  ],
  data(){
    return {
      // title: 'hahaa',
      drawer: false
    }
  },
  methods: {
    controlDrawer(){
      this.$store.commit('SET_DRAWER')
    }
  }
}
</script>

<style scoped>

</style>
