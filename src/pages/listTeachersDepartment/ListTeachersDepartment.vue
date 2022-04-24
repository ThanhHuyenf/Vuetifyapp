<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <v-item-group class="pa-4">
          <div class="text-right d-flex justify-space-between">
            <v-subheader class="mb-n2">Tổng số: {{ items.length }}</v-subheader>

            <v-btn outlined
                color="primary"
                   @click="addNew">
              Thêm
            </v-btn>
          </div>

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

                              <v-item-group class="text-right">
                                <v-btn text class="mr-2"
                                       outlined
                                       color="primary"
                                       @click="dialogChangePassword = false">
                                  Huỷ
                                </v-btn>

                                <v-btn
                                    color="primary"
                                    @click="changePassword"
                                    :loading="loading"
                                >
                                  Lưu
                                </v-btn>
                              </v-item-group>
                            </v-form>
                          </v-card-text>
                        </v-card>
                      </v-card>

                    </v-dialog>
                  </v-list-item>

                  <v-list-item>
                    <v-dialog
                        v-model="dialogDeleteItem"
                        persistent
                        max-width="500"
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
                              text
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
    <DialogAddTeacher ref="dialogAddTeacher"></DialogAddTeacher>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DialogEditTeacher from "@/components/DialogEditTeacher";
import DialogAddTeacher from "@/components/DialogAddTeacher";

export default {
  name: "ListTeachersDepartment",
  components: {DialogAddTeacher, DialogEditTeacher, Header},
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
          value: 'teacherName',
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
          value: 'teacherNumber',
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
      dialogChangePassword: false,
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
      this.$services.DepartmentSevice.getTeachers()
          .then(res => {
            console.log(res.data)
            this.items = res.data
            this.items.forEach(element => {
              element.email = "huyenntt@hnue.edu.vn"
              element.listClasses = ["67A", "67B"]
            })
          })
    },
    edit(item) {
      this.$refs.dialogEditTeacher.openDialog(item)
      return item
    },
    deleteItem() {
      return
    },
    changePassword() {
      return
    },
    addNew() {
      // this.$refs.dialogAddTeacher.openDialog()
    }
  }
}
</script>

<style scoped>
.v-btn--absolut v-icon {
  left: 40%;
}
</style>
