<template>
  <div>
    <Header :title="title">
      <div slot="data" class="mt-5">
        <FormPointTraining>
          <!--        <slot name="info"></slot>-->
          <div slot="button-download">
            <v-btn depressed color="success" @click="createDOC">
              Tải về
              <v-icon
                  right
                  dark
              >
                mdi-download
              </v-icon>
            </v-btn>
          </div>
        </FormPointTraining>
      </div>
    </Header>
  </div>
</template>
<script type="text/javascript" src="@/js/jszip-utils.js"></script>

<script>
import Header from "@/components/Header";
import FormPointTraining from "@/components/formPointTraining/FormPointTraining";

import Docxtemplater from 'docxtemplater'
import JSzip from 'jszip'
import {saveAs} from 'file-saver'

export default {
  name: "FormPoint",
  components: {FormPointTraining, Header},
  data() {
    return {
      title: 'Chấm điểm rèn luyện',
      message: ''
    }
  },
  created() {

  },
  methods: {
    loadFile(url, callback) {
      JSZipUtils.getBinaryContent(url, callback)
    },
    createDOC() {
      let prev = this.getLoadedPrev
      this.loadFile('/template/abcd.docx', function (error, content) {
        if (error) {
          throw error
        }
        let zip = new JSzip(content);
        let doc = new Docxtemplater().loadZip(zip)
        doc.setData(prev)

        try {
          doc.render({
            hocKy: 1,
            namHoc: '2021-2022',
            hoTen: 'Le Thanh Huyen',
            ngaySinh: '31/03/1999',
            msv: '675105050',
            lop: 'C',
            khoas: '67',
            khoa: 'CNTT',

          })
        } catch (error) {
          let e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          }
          console.log(JSON.stringify({error: e}));
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
          throw error;
        }

        let out = doc.getZip().generate({
          type: "blob",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        })
        saveAs(out, "output.docx")
      })
    }
  }
}
</script>

<style scoped>

</style>
