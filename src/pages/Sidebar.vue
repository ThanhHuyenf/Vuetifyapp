<template>
  <v-app id="inspire">
    <v-navigation-drawer
        app
        color="grey lighten-3"
    >
      <v-list dense>
        <v-row justify="space-around" class="mt-10">
          <v-avatar height="150px" width="150px">
            <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            >
          </v-avatar>
        </v-row>

        <v-row class="flex-column mt-4">
          <v-list-item>
            <v-list-item-content class="text-center">
              <v-list-item-title class="text-uppercase">{{tag.name}}</v-list-item-title>
              <v-list-item-subtitle>{{tag.id}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-row>

        <v-list-item-group
            v-model="selectedItem"
            color="primary"
            class="mt-10"
        >
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click.once="selectPage(item.link)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>

</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Sidebar",
  data (){
    return {
      selectedItem: 0
    }
  },
  created() {
    this.getMenu()
    this.getTag()
  },
  computed: {
    items(){
     return  this.$store.state.menu
    },
    tag(){
      return this.$store.state.tag
    }
  },
  methods: {
    ...mapActions(['getMenu', 'getTag']),
    selectPage(link){
      var listPath = ["/profile", "/homepage", "resultsHistory"]

      if(listPath.includes(this.$route.fullPath) && link != this.$route.fullPath){
          this.$router.push(link)
      }else {
        this.$router.push(link+ this.tag.role)
      }
      return
    }
  }
}
</script>

<style scoped>

</style>

