<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="mt-2 pa-4">
          <v-subheader class="mb-n2">Tong so: {{ items.length }}</v-subheader>
          <v-data-table
              :headers="headers"
              :items="filteredItems"
              item-key="text"
              class="elevation-1 rounded-0"
          >

            <template #item.index="{ item }">
              {{ filteredItems.indexOf(item) + 1 }}
            </template>


            <template v-slot:item.tacVu="{item}">
              <v-menu
                  top
                  offset-x
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                      v-bind="attrs"
                      v-on="on"
                  >
                    mdi-dots-vertical
                  </v-icon>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title @click="edit(item)">Chỉnh sửa</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-dialog v-model="dialogChangePassword"
                              persistent
                              max-width="450">

                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item-title v-bind="attrs"
                                           v-on="on">Thay đổi mật khẩu
                        </v-list-item-title>
                      </template>

                      <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                          Thay đổi mật khẩu
                        </v-card-title>
                        <v-card>
                          <v-card-text>
                            <v-form ref="form">
                              <v-text-field
                                  color="primary"
                                  v-model="newPassword"
                                  label="Mật khẩu mới"
                                  min="8"
                                  :type="!e1 ? 'password' : 'text'"
                                  :append-icon="!e1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                                  @click:append="() => (e1 = !e1)"
                                  :rules="passwordRules"
                                  required
                              ></v-text-field>

                              <v-text-field
                                  color="primary"
                                  label="Xác nhận lại mật khẩu"
                                  v-model="passwordConfirmation"
                                  :type="!e2 ? 'password' : 'text'"
                                  :append-icon="!e2 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                                  @click:append="() => (e2 = !e2)"
                                  required
                                  :rules="passwordCofirmationRules"
                              ></v-text-field>

                              <v-item-group class="text-right d-flex justify-space-between">
                                <v-btn class="reset-btn ml-auto"
                                       text
                                       color="green darken-1"
                                       @click="clear">
                                  Reset
                                </v-btn>

                                <v-btn class="mr-2"
                                       text>
                                  Huỷ
                                </v-btn>

                                <v-btn
                                    color="primary"
                                    outlined
                                    @click="changePassword"
                                    :loading="loading"
                                >
                                  Lưu
                                </v-btn>
                              </v-item-group>
                            </v-form>
                          </v-card-text>
                        </v-card>
                        <!--                        <v-divider></v-divider>-->
                        <!--                        <v-card-actions>-->
                        <!--                          <v-spacer></v-spacer>-->
                        <!--                          <v-btn-->
                        <!--                              color="primary"-->
                        <!--                              outlined-->
                        <!--                              @click="dialogDeleteItem = false"-->
                        <!--                          >-->
                        <!--                            Huỷ-->
                        <!--                          </v-btn>-->
                        <!--                          <v-btn-->
                        <!--                              color="primary"-->
                        <!--                              depressed-->
                        <!--                              @click="deleteItem(item)"-->
                        <!--                          >-->
                        <!--                            Đồng ý-->
                        <!--                          </v-btn>-->
                        <!--                        </v-card-actions>-->
                      </v-card>

                    </v-dialog>
                  </v-list-item>

                  <v-list-item>
                    <v-dialog
                        v-model="dialogDeleteItem"
                        persistent
                        max-width="290"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item-title v-bind="attrs"
                                           v-on="on">Xoá
                        </v-list-item-title>
                      </template>
                      <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                          Xác nhận xoá
                        </v-card-title>
                        <v-card-text class="mt-8 mb-2">Hành động này không thể hoàn tác. Vui lòng kiểm tra kỹ trước khi
                          xoá
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                              color="primary"
                              outlined
                              @click="dialogDeleteItem = false"
                          >
                            Huỷ
                          </v-btn>
                          <v-btn
                              color="primary"
                              depressed
                              @click="deleteItem(item)"
                          >
                            Đồng ý
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>

          </v-data-table>
        </v-item-group>
      </div>
    </Header>
    <DialogEditTeacher ref="dialogEditTeacher"></DialogEditTeacher>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogEditTeacher from "@/components/DialogEditTeacher";

export default {
  name: "ListTeachersDepartment",
  components: {DialogEditTeacher, Header},
  created() {
    this.getData()
  },
  data() {
    return {
      title: "Danh sách cố vấn học tập",
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'index',
          width: '7%'
        },
        {
          text: 'Họ tên',
          align: 'start',
          value: 'hoTen',
          width: '25%',
          sort: (hoTen1, hoTen2) => {

            hoTen1 = hoTen1.trim()
            hoTen2 = hoTen2.trim()

            let ten1 = hoTen1.substr(hoTen1.lastIndexOf(" ") + 1);
            let ten2 = hoTen2.substr(hoTen2.lastIndexOf(" ") + 1);

            return ten1.localeCompare(ten2);
          }
        },
        {
          text: 'Email',
          align: 'start',
          sortable: false,
          value: 'email',
          width: '20%'
        },
        {
          text: 'Số điện thoai',
          align: 'start',
          sortable: false,
          value: 'soDienThoai',
          width: '20%'
        },
        {
          text: 'Lớp đang QL',
          align: 'start',
          sortable: false,
          value: 'listClasses',
          width: '20%'
        },
        {
          text: 'Tác vụ',
          align: 'start',
          sortable: false,
          value: 'tacVu',
          width: '15%'
        }
      ],
      items: [],
      dialogChangePassword: true,
      dialogDeleteItem: false,
      newPassword: '',
      passwordConfirmation: '',
      e1: false,
      e2: false,
      passwordRules: [
        v => !!v || 'Không được để trống trường này',
        v => v.length > 7 || 'Mật khẩu cần có đọ dài tối thiểu là 8',
      ],
      passwordCofirmationRules: [
        v => !!v || 'Không được để trống trường này'
      ],
      loading: false
    }
  },
  computed: {
    filteredItems() {
      return this.items
    }
  },
  methods: {
    getData() {
      this.$axios.get("http://localhost:3000/listTeachers")
          .then(res => {
            this.items = res.data
          })
    },
    edit(item) {
      this.$refs.dialogEditTeacher.openDialog(item)
    },
    deleteItem() {
      return
    },
    clear() {
      this.$refs.form.resetValidation()
      this.newPassword = ''
      this.passwordConfirmation = ''
    },
    changePassword() {
      return
    }
  }
}
</script>

<style scoped>

</style>
