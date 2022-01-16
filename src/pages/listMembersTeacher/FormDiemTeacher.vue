<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="590">
      <v-card>
        <v-card-title class="headline">Cho nay nhet bang diem vo. hehe</v-card-title>
        <v-divider></v-divider>
        <v-card-text>{{item.hoTen}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click.native="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "FormDiemGV"
}
</script>

<style scoped>

</style>
