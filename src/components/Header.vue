<template>
  <div>
  <v-app-bar app color="grey lighten-3">

    <v-toolbar-title>{{ title }}</v-toolbar-title>
<!--    <v-responsive max-width="156" class="float-right">-->
<!--    <v-text-field-->
<!--        dense-->
<!--        flat-->
<!--        hide-details-->
<!--        solo-inverted-->
<!--    ></v-text-field>-->
<!--    </v-responsive>-->
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
      // drawer: []
    }
  }
}
</script>

<style scoped>

</style>
