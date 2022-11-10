<template>
  <div>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text class="mt-5 mb-2">
          <v-row>
            <v-col>
              <v-text-field label="Từ"
                            v-model="minPoint">
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Đến"
                            v-model="maxPoint">
              </v-text-field>
            </v-col>
          </v-row>
          <v-text-field label="Điểm chữ"
                        v-model="stringPoint">
          </v-text-field>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              outlined
              color="primary"
              @click="cancel"
          >
            Huỷ
          </v-btn>

          <v-btn depressed
                 color="primary"
                 @click="ok"
          >
            Đồng ý
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogPointFrame",
  data() {
    return {
      dialog: false,
      title: '',
      option: "",
      id: '',
      stringPoint: '',
      minPoint: '',
      maxPoint: '',
      type: ''
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    // choice(){
    //   this.option === "" ? true : false
    // }
  },
  methods: {
    openDialog(type, item) {
      if (type == 'update'){
        this.title = 'Sửa khung điểm'
        this.id = item.id
        this.stringPoint = item.stringPoint
        this.maxPoint = item.maxPoint
        this.minPoint = item.minPoint
      }
      else{
        this.title = 'Thêm mới khung điểm'
      }
      this.type = type
      this.dialog = true
    },
    cancel() {
      this.dialog = false
    },
    ok() {
      if (this.type == 'addnew') {
        this.$services.PointingService.createPointFrame({
          stringPoint: this.stringPoint,
          minPoint: this.minPoint,
          maxPoint: this.maxPoint
        })
            .then(() => {
              this.closeDialog()
              this.$emit('done', 'addnew')
              this.stringPoint = ''
              this.maxPoint = ''
              this.minPoint = ''
            })
      }
      else if(this.type == 'update'){
          this.$services.PointingService.updatePointFrame({id: this.id},{
            minPoint : this.minPoint,
            maxPoint: this.maxPoint,
            stringPoint: this.stringPoint
          })
        .then(()=>{
          this.closeDialog()
          this.$emit('done', 'update')
          this.stringPoint = ''
          this.maxPoint = ''
          this.minPoint = ''
        })
      }

    },
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>
