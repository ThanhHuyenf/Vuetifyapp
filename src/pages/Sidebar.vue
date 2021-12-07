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
              <v-list-item-title>{{name}}</v-list-item-title>
              <v-list-item-subtitle>{{maSV}}</v-list-item-subtitle>
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
export default {
  name: "Sidebar",
  data (){
    return {
      name: "LE THANH HUYEN",
      maSV: "675105050",
      selectedItem: 0,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }
  }
}
</script>

<style scoped>

</style>

