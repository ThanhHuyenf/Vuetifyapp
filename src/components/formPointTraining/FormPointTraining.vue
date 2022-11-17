<template>
  <div class="container-form elevation-1 pt-5 ma-7 pb-10">
    <div class="header">

      <div class="d-flex justify-space-between">
        <div class="text-center">
          <div class="text-uppercase font-weight-bold">Trường Đại học Sư phạm Hà Nội</div>
          <div class="text-uppercase font-weight-bold">Khoa Công Nghệ Thông Tin</div>
        </div>
        <div class="text-center">
          <div class="text-uppercase font-weight-bold">Cộng hòa xã hội chủ nghĩa Việt Nam</div>
          <div class="font-weight-bold">Độc lập - Tự do- Hạnh phúc</div>
        </div>
      </div>

      <div class="text-right pr-6 font-italic mt-4">
        <p>Hà Nội, ngày {{ dayNow }} tháng {{ monthNow }} năm {{ yearNow }}</p>
      </div>

      <div class="text-center mt-10">
        <h1 class="title-form text-uppercase">Phiếu đánh giá kết quả rèn luyện</h1>
        <h1 class="title-form text-uppercase">của sinh viên hệ đại học chính quy</h1>
      </div>
    </div>

    <div class="info-student mt-10 mb-4">
      <div class="row">
        <div class="col-5">Họ và tên : {{ infor.name }}</div>
        <div class="col-3">Ngày sinh: {{ infor.birthDate }}</div>
        <div class="col-4">Mã sinh viên : {{ infor.userID }}</div>
      </div>

      <div class="row">
        <div class="col-5">Học kỳ : {{ infor.semester }}</div>
        <div class="col-3">Năm học : {{ infor.year }}</div>
        <div class="col-4">Lớp : {{ infor.className }}</div>
      </div>
    </div>


    <div class="body ma-auto">
      <form>
        <table style="width: 100%" cellpadding="0">
          <thead>
          <tr>
            <th class="cot1" align="center">Nội dung đánh giá</th>
            <th class="cot2" align="center">Điểm quy định</th>
            <th class="cot3" align="center">Sinh viên</th>
            <th class="cot4" align="center">Lớp</th>
            <th class="cot5" align="center">Khoa</th>
          </tr>
          </thead>

          <!--          TIEU CHUAN 1-->

          <tr class="tieu-chuan">
            <td colspan="5"><b>I. Đánh giá về ý thức học tập</b> <i>(Khung điểm đánh giá: Từ 0 đến 20 điểm)</i></td>
          </tr>
          <tr class="font-weight-medium">
            <td colspan="5">a. Ý thức và thái độ trong học tập</td>
          </tr>

          <tr>
            <td class="pl-5">- Đi học đầy đủ, đúng giờ (Nghỉ học không phép trừ 1đ/1 lần; đi muộn 3 buổi trừ 2 điểm)
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="1" :disabled="!student"
                       v-model="markDetailStudent[0].studentScore"></td>
            <td><input type="number" max="3" min="0" step="1" :disabled="!monitor"
                       v-model="markDetailMonitor[0].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="1" :disabled="!department"
                       v-model="markDetailTeacher[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Chuẩn bị bài đầy đủ</td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[1].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[1].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[1].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">b. Ý thức và thái độ tham gia các câu lạc bộ học thuật, các hoạt động học thuật, ngoại khóa,
              hoạt động nghiên cứu khoa học
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có tham gia nghiên cứu khoa học</td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[2].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[2].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[2].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có tham gia các câu lạc bộ học thuật, ngoại khóa</td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[3].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[3].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[3].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Đạt giải nghiên cứu khoa học</td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[4].studentScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[4].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[4].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Nhận được giấy khen hoạt động ngoại khóa và các câu lạc bộ</td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[5].studentScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[5].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[5].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">c. Ý thức và thái độ tham gia các kỳ thi, cuộc thi
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia đầy đủ các buổi thi</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model=markDetailStudent[6].studentScore></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[6].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[6].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Không bị thi lại môn nào</td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model=markDetailStudent[7].studentScore></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[7].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[7].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Số tín chỉ thi lại &lt;10%</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!student"
                       v-model=markDetailStudent[8].studentScore></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!monitor"
                       v-model="markDetailMonitor[8].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!department"
                       v-model="markDetailTeacher[8].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Số tín chỉ thi lại &lt;20%</td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model=markDetailStudent[9].studentScore></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[9].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[9].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia đầy đủ các buổi rèn luyện NVSP</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model=markDetailStudent[10].studentScore></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[10].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[10].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham dự thi NVSP cấp khoa, trường</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!student"
                       v-model=markDetailStudent[11].studentScore></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!monitor"
                       v-model="markDetailMonitor[11].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!department"
                       v-model="markDetailTeacher[11].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Đạt giải nhất, nhì, ba trong các cuộc thi từ cấp khoa trở lên</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!student"
                       v-model=markDetailStudent[12].studentScore></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!monitor"
                       v-model="markDetailMonitor[12].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!department"
                       v-model="markDetailTeacher[12].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">d. Tinh thần vượt khó phấn đấu vươn lên trong học tập
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Phấn đấu rèn luyện, tu dưỡng đạo đức, có long kiên trì, nhẫn nại… có thể vượt qua mọi khó
              khăn của cuộc sống để vươn lên trong học tập (Lười biếng, ham chơi, đánh nhau, đánh bạc, lấy cắp tài sản…
              bị trừ 1.5 điểm)
            </td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model=markDetailStudent[13].studentScore></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[13].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[13].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">e. Kết quả học tập
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Sinh viên đạt điểm TBC tích lũy từ 2.50 đến 3.19</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!student"
                       v-model=markDetailStudent[14].studentScore></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!monitor"
                       v-model="markDetailMonitor[14].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!department"
                       v-model="markDetailTeacher[14].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Sinh viên đạt điểm TBC tích lũy từ 3.20 đến 3.59</td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="1.5" :disabled="!student"
                       v-model=markDetailStudent[15].studentScore></td>
            <td><input type="number" max="1.5" min="0" step="1.5" :disabled="!monitor"
                       v-model="markDetailMonitor[15].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="1.5" :disabled="!department"
                       v-model="markDetailTeacher[15].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Sinh viên đạt điểm TBC tích lũy từ 3.60 đến 4.00</td>
            <td class="text-center">2,5</td>
            <td><input type="number" max="2.5" min="0" step="2.5" :disabled="!student"
                       v-model=markDetailStudent[16].studentScore></td>
            <td><input type="number" max="2.5" min="0" step="2.5" :disabled="!monitor"
                       v-model="markDetailMonitor[16].monitorScore"></td>
            <td><input type="number" max="2.5" min="0" step="2.5" :disabled="!department"
                       v-model="markDetailTeacher[16].teacherScore"></td>
          </tr>

          <!--          TIEU CHUAN 2-->

          <tr class="tieu-chuan">
            <td colspan="5"><b>II. Đánh giá về ý thức và kết quả chấp hành nội quy, quy chế trong nhà trường</b> <i>(Khung
              điểm đánh giá: Từ 0 đến 25 điểm)</i></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">a. Ý thức chấp hành các văn bản chỉ đạo của ngành, của cơ quan chỉ đạo cấp trên được thực
              hiện trong nhà trường
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Thực hiện tốt nội quy, quy định của Đảng, Bộ Giáo dục và Đào tạo, của trường</td>
            <td class="text-center">5</td>
            <td><input type="number" max="5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[17].studentScore"></td>
            <td><input type="number" max="5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[17].monitorScore"></td>
            <td><input type="number" max="5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[17].teacherSocre"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Chấp hành đầy đủ nội quy nội, ngoại trú của lớp, khoa, trường</td>
            <td class="text-center">4</td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[18].studentScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[18].monitorScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[18].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia tích cực việc tuyên truyền, phổ biến nội quy, quy chế của trường, của Bộ Giáo
              dục và Đào tạo
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[19].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[19].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[19].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có hành vi giúp đỡ, đấu tranh để đảm bảo nội quy, quy chế được thực hiện</td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[20].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[20].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[20].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Vi phạm quy chế thi bị trừ:
              <br>&nbsp;&nbsp;&nbsp;+ Khiển trách: 10 điểm
              <br>&nbsp;&nbsp;&nbsp;+ Cảnh cáo: 15 điểm
              <br>&nbsp;&nbsp;&nbsp;+ Đình chỉ thi: 25 điểm
            </td>
            <td></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!student"
                       v-model="markDetailStudent[21].studentScore"></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!monitor"
                       v-model="markDetailMonitor[21].monitorScore"></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!department"
                       v-model="markDetailTeacher[21].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Vi phạm quy chế công tác học sinh sinh viên bị trừ:
              <br>&nbsp;&nbsp;&nbsp;+ Khiển trách: 10 điểm
              <br>&nbsp;&nbsp;&nbsp;+ Cảnh cáo: 15 điểm
              <br>&nbsp;&nbsp;&nbsp;+ Đình chỉ học tập: 25 điểm
            </td>
            <td></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!student"
                       v-model="markDetailStudent[22].studentScore"></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!monitor"
                       v-model="markDetailMonitor[22].monitorScore"></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!department"
                       v-model="markDetailTeacher[22].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">b. Ý thức chấp hành nội quy, quy chế và các quy định khác được áp dụng trong nhà trường
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Thực hiện tốt nội quy, quy định khác được áp dụng trong nhà trường</td>
            <td class="text-center">4</td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[23].studentScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[23].monitorScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[23].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia tích cực việc tuyên truyền, phổ biến nội quy, quy chế khác (ngoài ngành)</td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[24].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[24].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[24].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có hành vi giúp đỡ, đấu tranh để đảm bảo nội quy, quy chế khác (ngoài ngành) được thực
              hiện
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[25].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[25].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[25].teacherScore"></td>
          </tr>

          <!--          TIEU CHUAN 3-->

          <tr class="tieu-chuan">
            <td colspan="5"><b>III. Đánh giá về ý thức và việc tham gia các hoạt động chính trị - xã hội, văn hóa, văn
              nghệ, thể thao, phòng chống các tệ nạn xã hội </b> <i>(Khung
              điểm đánh giá: Từ 0 đến 20 điểm)</i></td>
          </tr>
          <tr class="font-weight-medium">
            <td colspan="5">a. Ý thức chấp hành các văn bản chỉ đạo của ngành, của cơ quan chỉ đạo cấp trên được thực
              hiện trong nhà trường
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia đầy đủ, đạt yêu cầu “Tuần sinh hoạt công dân sinh viên” (đánh giá chung cho cả 2
              học kỳ trong năm học) (vắng 1 lần không có phép bị trừ 1 điểm)
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[26].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[26].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[26].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức tham gia đầy đủ, nghiêm túc hoạt động rèn luyện về chính trị, xã hội, văn hóa,
              văn nghệ, thể thao do Nhà trường, Đoàn, Hội tổ chức điều động (vắng 1 lần không có phép bị trừ 1 điểm)
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[27].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[27].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[27].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Là thành viên của Chi đoàn, Chi hội, câu lạc bộ được nhận các danh hiệu thi đua khen
              thưởng từ cấp khoa trở lên
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[28].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[28].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[28].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia các hoạt động văn hóa, văn nghệ, thể dục – thể thao đạt giải nhất, nhì , ba
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[29].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[29].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[29].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">b. Ý thức tham gia các hoạt động công ích, tình nguyện, công tác xã hội trong nhà trường
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia các hoạt động tình nguyện (Hiến máu nhân đạo, tiếp sức mùa thi, mùa hè xanh)
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[30].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[30].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[30].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Được kết nạp Đảng
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[31].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[31].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[31].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Học và có giấy chứng nhận Đoàn viên Ưu tú
            </td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[32].studentScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[32].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[32].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Học và có giấy chứng nhận nhận thức về Đảng
            </td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[33].studentScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[33].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[33].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">c. Ý thức tham gia các hoạt động tuyên truyền, phòng chống tội phạm và các tệ nạn xã hội
              trong nhà trường
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức tham gia các hoạt động tuyên truyền, phòng chống tội phạm và các tệ nạn xã hội
              trong và ngoài nhà trường
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[34].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[34].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[34].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Được biểu dương khen thưởng từ cấp khoa trở lên do có thành tích trong các hoạt động
              phòng chống tội phạm, các tệ nạn xã hội
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[35].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[35].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[35].teacherScore"></td>
          </tr>

          <!--          TIEU CHUAN 4-->

          <tr class="tieu-chuan">
            <td colspan="5"><b>IV. Đánh giá về phẩm chất công dân và quan hệ cộng đồng</b> <i>(Khung điểm đánh giá: Từ 0
              đến 25 điểm)</i></td>
          </tr>
          <tr class="font-weight-medium">
            <td colspan="5">a. Ý thức chấp hành và tham gia tuyên truyền các chủ trương của Đảng, chính sách, pháp luật
              của Nhà nước
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức chấp hành tốt chính sách, pháp luật của Nhà nước (Vi phạm 1 lần bị trừ 2 điểm,
              từ lần thứ 2 trở đi bị trừ hết số điểm còn lại của tiêu chí)
            </td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[36].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[36].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[36].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tích cực tham gia tuyên truyền chính sách, pháp luật của Nhà nước
            </td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[37].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[37].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[37].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia giữ gìn trật tự an toàn xã hội
            </td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[38].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[38].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[38].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia có hiệu quả các buổi học tập tìm hiểu luật pháp do các tổ chức ngoài nhà trường
              đứng ra tổ chức
            </td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[39].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[39].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[39].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có tham gia bảo hiểm y tế (bắt buộc) theo luật bảo hiểm y tế (không tham gia bảo hiểm y
              tế bị trừ 1 điểm)
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[40].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[40].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[40].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức chấp hành, tham gia tuyên truyền các quy định về bảo đảm an toàn giao thông và
              “văn hóa giao thông” (vi phạm 1 lần bị trừ 1 điểm)
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[41].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[41].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[41].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">b. Có ý thức tham gia các hoạt động xã hội, có thành tích đượ ghi nhận, biểu dương, khen
              thưởng
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức tham gia các hoạt động xã hội, có thành tích đượ ghi nhận, biểu dương, khen
              thưởng
            </td>
            <td class="text-center">4</td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[42].studentScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[42].monitorScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[42].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức giữ gìn vệ sinh mội trường trong nhà trường và xã hội
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[43].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[43].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[43].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">c. Có tinh thần chia sẻ, giúp đỡ người gặp khó khăn, hoạn nạn
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có tinh thần chia sẻ, giúp đỡ người gặp khó khăn, hoạn nạn
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[44].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[44].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[44].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có lối sống lành mạnh, có mối quan hệ tốt với bạn trong lớp, trong trường
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[45].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[45].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[45].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có tinh thần đoàn kết giúp đỡ nhau cùng tiến bộ trong học tập
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[46].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[46].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[46].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Được biểu dương khen thưởng về tham gia giữ gìn trật tự an toàn xã hội và cộng đồng
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[47].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[47].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[47].teacherScore"></td>
          </tr>

          <!--          TIEU CHUAN 5-->

          <tr class="tieu-chuan">
            <td colspan="5"><b>V. Đánh giá về ý thức và kết quả tham gia công tác phụ trách lớp, các đoàn thể, tổ chức
              trong nhà trường hoặc đạt được thành tích đặc biệt trong học tập, rèn luyện của sinh viên </b> <i>(Khung
              điểm đánh giá: Từ 0 đến 10 điểm)</i></td>
          </tr>
          <tr class="font-weight-medium">
            <td colspan="5">a. Ý thức, tinh thần, thái độ, uy tín và đạt hiệu quả công việc khi sinh viên được phân công
              nhiệm vụ quản lý lớp, các tổ chức Đảng, Đoàn Thanh niên, Hội Sinh viên và các tổ chức khác trong Nhà
              trường
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức, tinh thần, thái độ, uy tín và đạt hiệu quả công việc khi sinh viên được phân
              công nhiệm vụ Ban cán sự lớp, là Chi ủy viên trong các tổ chức Đảng, trong Ban Chấp hành Đoàn Thanh niên,
              Hội Sinh viên và các tổ chức khác trong Nhà trường
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[48].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[48].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[48].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia đầy đủ các công tác đoàn thể xã hội do Nhà trường, Đoàn Thanh niên, Hội Sinh
              viên trường phát động
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[49].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[49].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[49].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">b. Kỹ năng tổ chức, quản lý lớp, các tổ chức Đảng, Đoàn Thanh niên, Hội Sinh viên và các tổ
              chức khác trong Nhà trường
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Đảm nhận, tích cực hoạt động phát huy tốt vai trò, kỹ năng tổ chức, quản lý lớp, các tổ
              chức Đảng, Đoàn Thanh niên, Hội Sinh viên và các tổ chức khác trong Nhà trường
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[50].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[50].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[50].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Được khen thưởng từ cấp lớp trở lên
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[51].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[51].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[51].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">c. Hỗ trợ và tham gia tích cực các hoạt động chung của tập thể lớp, khoa, trường
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Đạt danh hiệu sinh viên 5 tốt
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[52].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[52].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[52].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Vận động, tuyên truyền, tham gia giúp đỡ người khác, tham gia công việc chung của trường,
              lớp, Đoàn, Hội hiệu quả
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[53].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[53].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[53].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">d. Đạt thành tích đặc biệt trong học tập, rèn luyện
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Được biểu dương khen thưởng vì có thành tích đặc biệt trong học tập, rèn luyện (được tặng
              bằng khen, giấy khen, chứng nhận, thư khen của các cấp)
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="markDetailStudent[54].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="markDetailMonitor[54].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="markDetailTeacher[54].teacherScore"></td>
          </tr>

          <tr class="pt-4" style="height: 50px">
            <td colspan="2"><b>Tổng điểm sinh viên đạt được = Tổng điểm các phần I +II+III+IV+V</b></td>
            <td class="text-center"><b>{{ averageStudent }}</b></td>
            <td class="text-center"><b>{{ averageMonitor }}</b></td>
            <td class="text-center"><b>{{ averageTeacher }}</b></td>
          </tr>
          <tr class="pt-4" style="height: 50px">
            <td colspan="3" class="font-weight-bold">Điểm trung bình= (điểm Sinh viên + điểm Lớp + điểm Khoa)/3</td>
            <td class="text-center font-weight-bold red--text">{{ average }}</td>
            <td class="text-center">
              <v-btn outlined
                     class="reset-btn"
                     @click="resetForm"
                     :disabled="!availableForMark">Reset
              </v-btn>
            </td>
          </tr>
        </table>
      </form>
    </div>


    <div class="footer mt-4">
      <p class="font-weight-medium text-decoration-underline">Lưu ý:</p>
      <p class="ml-5">
        - Sinh viên bị kỉ luật mức khiển trách có điểm rèn luyện không quá loại khá<br>
        - Sinh viên bị kỉ luật mức cảnh cáo có điểm rèn luyện không quá loại trung bình<br>
        - Sinh viên đang trong quá trình bị đình chỉ học tập thì không đánh giá<br>
        - Sinh viên không nộp phiếu đánh giá được xếp loại kém và đạt 0 (không) điểm<br>
        - Sinh viên nộp phiếu đánh giá nhưng vắng mặt tại buổi họp đánh giá mà không được sự đồng ý của giáo viên Chủ
        nhiệm lớp bị hạ một bậc xếp loại và đạt điểm cận dưới của bậc sau khi hạ
      </p>
      <div class="text-right mt-10 d-flex justify-space-between">
        <div>
          <slot v-if="availableForMark" name="button-download"></slot>
          <slot></slot>
        </div>
        <div>
          <v-btn depressed class="mr-2"
                 :disabled="!availableForMark">Lưu nháp
          </v-btn>
          <v-btn depressed color="primary"
                 @click="submitPoint"
                 :loading="submitLoading"
                 :disabled="!availableForMark">Hoàn thành
          </v-btn>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialogComplete"
              width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Thông báo
        </v-card-title>
        <v-card-text class="mt-5">
          {{ message }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="completed"
          >
            Đồng ý
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import moment from "moment";
import {listMemberTeacherData} from "@/testData/index.js"

export default {
  name: "FormPointTraining",
  components: {},
  props: {
    // message: String
  },
  data() {
    return {
      student: false,
      monitor: false,
      department: true,
      dialogComplete: false,
      dayNow: '',
      monthNow: '',
      yearNow: '',
      message: '',
      submitLoading: false,
      infor: {
        name: '',
        birthDate: '',
        semester: '',
        userID: '',
        year: '',
        className: ''
      },
      markDetailStudent: [
        {pointId: 1, studentScore: 0},
        {pointId: 2, studentScore: 0},
        {pointId: 3, studentScore: 0},
        {pointId: 4, studentScore: 0},
        {pointId: 5, studentScore: 0},
        {pointId: 6, studentScore: 0},
        {pointId: 7, studentScore: 0},
        {pointId: 8, studentScore: 0},
        {pointId: 9, studentScore: 0},
        {pointId: 10, studentScore: 0},
        {pointId: 11, studentScore: 0},
        {pointId: 12, studentScore: 0},
        {pointId: 13, studentScore: 0},
        {pointId: 14, studentScore: 0},
        {pointId: 15, studentScore: 0},
        {pointId: 16, studentScore: 0},
        {pointId: 17, studentScore: 0},
        {pointId: 18, studentScore: 0},
        {pointId: 19, studentScore: 0},
        {pointId: 20, studentScore: 0},
        {pointId: 21, studentScore: 0},
        {pointId: 22, studentScore: 0},
        {pointId: 23, studentScore: 0},
        {pointId: 24, studentScore: 0},
        {pointId: 25, studentScore: 0},
        {pointId: 26, studentScore: 0},
        {pointId: 27, studentScore: 0},
        {pointId: 28, studentScore: 0},
        {pointId: 29, studentScore: 0},
        {pointId: 30, studentScore: 0},
        {pointId: 31, studentScore: 0},
        {pointId: 32, studentScore: 0},
        {pointId: 33, studentScore: 0},
        {pointId: 34, studentScore: 0},
        {pointId: 35, studentScore: 0},
        {pointId: 36, studentScore: 0},
        {pointId: 37, studentScore: 0},
        {pointId: 38, studentScore: 0},
        {pointId: 39, studentScore: 0},
        {pointId: 40, studentScore: 0},
        {pointId: 41, studentScore: 0},
        {pointId: 42, studentScore: 0},
        {pointId: 43, studentScore: 0},
        {pointId: 44, studentScore: 0},
        {pointId: 45, studentScore: 0},
        {pointId: 46, studentScore: 0},
        {pointId: 47, studentScore: 0},
        {pointId: 48, studentScore: 0},
        {pointId: 49, studentScore: 0},
        {pointId: 50, studentScore: 0},
        {pointId: 51, studentScore: 0},
        {pointId: 52, studentScore: 0},
        {pointId: 53, studentScore: 0},
        {pointId: 54, studentScore: 0},
        {pointId: 55, studentScore: 0},
        {pointId: 56, studentScore: 0},
      ],
      markDetailMonitor: [
        {pointId: 1, monitorScore: 0},
        {pointId: 2, monitorScore: 0},
        {pointId: 3, monitorScore: 0},
        {pointId: 4, monitorScore: 0},
        {pointId: 5, monitorScore: 0},
        {pointId: 6, monitorScore: 0},
        {pointId: 7, monitorScore: 0},
        {pointId: 8, monitorScore: 0},
        {pointId: 9, monitorScore: 0},
        {pointId: 10, monitorScore: 0},
        {pointId: 11, monitorScore: 0},
        {pointId: 12, monitorScore: 0},
        {pointId: 13, monitorScore: 0},
        {pointId: 14, monitorScore: 0},
        {pointId: 15, monitorScore: 0},
        {pointId: 16, monitorScore: 0},
        {pointId: 17, monitorScore: 0},
        {pointId: 18, monitorScore: 0},
        {pointId: 19, monitorScore: 0},
        {pointId: 20, monitorScore: 0},
        {pointId: 21, monitorScore: 0},
        {pointId: 22, monitorScore: 0},
        {pointId: 23, monitorScore: 0},
        {pointId: 24, monitorScore: 0},
        {pointId: 25, monitorScore: 0},
        {pointId: 26, monitorScore: 0},
        {pointId: 27, monitorScore: 0},
        {pointId: 28, monitorScore: 0},
        {pointId: 29, monitorScore: 0},
        {pointId: 30, monitorScore: 0},
        {pointId: 31, monitorScore: 0},
        {pointId: 32, monitorScore: 0},
        {pointId: 33, monitorScore: 0},
        {pointId: 34, monitorScore: 0},
        {pointId: 35, monitorScore: 0},
        {pointId: 36, monitorScore: 0},
        {pointId: 37, monitorScore: 0},
        {pointId: 38, monitorScore: 0},
        {pointId: 39, monitorScore: 0},
        {pointId: 40, monitorScore: 0},
        {pointId: 41, monitorScore: 0},
        {pointId: 42, monitorScore: 0},
        {pointId: 43, monitorScore: 0},
        {pointId: 44, monitorScore: 0},
        {pointId: 45, monitorScore: 0},
        {pointId: 46, monitorScore: 0},
        {pointId: 47, monitorScore: 0},
        {pointId: 48, monitorScore: 0},
        {pointId: 49, monitorScore: 0},
        {pointId: 50, monitorScore: 0},
        {pointId: 51, monitorScore: 0},
        {pointId: 52, monitorScore: 0},
        {pointId: 53, monitorScore: 0},
        {pointId: 54, monitorScore: 0},
        {pointId: 55, monitorScore: 0},
        {pointId: 56, monitorScore: 0},
      ],
      markDetailTeacher: [
        {pointId: 1, teacherScore: 0},
        {pointId: 2, teacherScore: 0},
        {pointId: 3, teacherScore: 0},
        {pointId: 4, teacherScore: 0},
        {pointId: 5, teacherScore: 0},
        {pointId: 6, teacherScore: 0},
        {pointId: 7, teacherScore: 0},
        {pointId: 8, teacherScore: 0},
        {pointId: 9, teacherScore: 0},
        {pointId: 10, teacherScore: 0},
        {pointId: 11, teacherScore: 0},
        {pointId: 12, teacherScore: 0},
        {pointId: 13, teacherScore: 0},
        {pointId: 14, teacherScore: 0},
        {pointId: 15, teacherScore: 0},
        {pointId: 16, teacherScore: 0},
        {pointId: 17, teacherScore: 0},
        {pointId: 18, teacherScore: 0},
        {pointId: 19, teacherScore: 0},
        {pointId: 20, teacherScore: 0},
        {pointId: 21, teacherScore: 0},
        {pointId: 22, teacherScore: 0},
        {pointId: 23, teacherScore: 0},
        {pointId: 24, teacherScore: 0},
        {pointId: 25, teacherScore: 0},
        {pointId: 26, teacherScore: 0},
        {pointId: 27, teacherScore: 0},
        {pointId: 28, teacherScore: 0},
        {pointId: 29, teacherScore: 0},
        {pointId: 30, teacherScore: 0},
        {pointId: 31, teacherScore: 0},
        {pointId: 32, teacherScore: 0},
        {pointId: 33, teacherScore: 0},
        {pointId: 34, teacherScore: 0},
        {pointId: 35, teacherScore: 0},
        {pointId: 36, teacherScore: 0},
        {pointId: 37, teacherScore: 0},
        {pointId: 38, teacherScore: 0},
        {pointId: 39, teacherScore: 0},
        {pointId: 40, teacherScore: 0},
        {pointId: 41, teacherScore: 0},
        {pointId: 42, teacherScore: 0},
        {pointId: 43, teacherScore: 0},
        {pointId: 44, teacherScore: 0},
        {pointId: 45, teacherScore: 0},
        {pointId: 46, teacherScore: 0},
        {pointId: 47, teacherScore: 0},
        {pointId: 48, teacherScore: 0},
        {pointId: 49, teacherScore: 0},
        {pointId: 50, teacherScore: 0},
        {pointId: 51, teacherScore: 0},
        {pointId: 52, teacherScore: 0},
        {pointId: 53, teacherScore: 0},
        {pointId: 54, teacherScore: 0},
        {pointId: 55, teacherScore: 0},
        {pointId: 56, teacherScore: 0},
      ],
      availableForMark: true
    }
  },
  created() {
    // this.getTag()
    // this.getData()

    if (this.tag.role === 'Student') {
      this.message = 'Điểm số của bạn đã được lưu! Quay về trang chủ!'
    } else {
      this.message = 'Điểm số đã được lưu! Quay về danh sách thành viên'
    }

    let d = new Date()
    this.dayNow = d.getDate()
    this.monthNow = d.getMonth() + 1
    this.yearNow = d.getFullYear()

    const tempUser = listMemberTeacherData.filter(item => item.userID === this.$route.params.id)
    this.infor = {...tempUser[0]}
    console.log(tempUser);


  },
  computed: {
    tag() {
      return this.$store.state.tag
    },
    // availableForMark() {
    //   return this.$store.state.availableForMark
    // },
    averageStudent() {
      let averageStu = this.markDetailStudent.reduce((averageStu, element) => averageStu + parseFloat(element.studentScore), 0);
      return averageStu
    },
    averageMonitor() {
      let averageMoni = this.markDetailMonitor.reduce((averageMoni, element) => averageMoni + parseFloat(element.monitorScore), 0);
      return averageMoni
    },
    averageTeacher() {
      let averageTeach = this.markDetailTeacher.reduce((averageTeach, element) => averageTeach + parseFloat(element.teacherScore), 0);
      return averageTeach
    },

    average() {
      return Math.round((this.averageStudent + this.averageMonitor + this.averageTeacher) / 3 * 100) / 100
    }
  },
  methods: {
    ...mapActions(['getTag']),
    getData() {
      //Do ko thêm id vào router được nên khi đăng nhập nếu role là student thì sẽ lưu ID vào local
      //Khi gọi chấm điểm, nếu role là student thì lấy userid ở local, ko thì lấy ở router
      var USER_ID = ''
      console.log("this.$route.params.id", this.$route.params.id)
      if(!this.$route.params.id){
        this.$services.PointingService.getPointSefl()
        .then(res => {
          console.log("res1,", res)
          this.infor.name = res.body.name
          this.infor.birthDate = moment(res.body.birthDate, 'YYYY-MM-DD').format('DD/MM/YYYY')
          this.infor.semester = res.body.semester
          this.infor.studentId = res.body.studentId
          this.infor.year = res.body.year
          this.infor.className = res.body.className
        })
      }else{

        USER_ID = this.$route.params.id
        this.$services.PointingService.getPoint({studentId: USER_ID})
            .then(res => {
              console.log("res.body.pointList", res.body)
              res.body.pointList ? this.pointList = res.body.pointList : ""
              console.log("res.body.pointList", this.pointList)

              this.infor.name = res.body.name
              this.infor.birthDate = moment(res.body.birthDate, 'YYYY-MM-DD').format('DD/MM/YYYY')
              this.infor.semester = res.body.semester
              this.infor.studentId = this.$route.params.id
              this.infor.year = res.body.year
              this.infor.className = res.body.className
            })
      }
      // USER_ID = localStorage.getItem('userID') :

      if (this.availableForMark) {
        switch (this.tag.role) {
          case 'Student':
            this.student = true
            break;
          case 'Monitor':
            !this.$route.params.id ? this.student = true : this.monitor = true

            break;
          case 'Teacher':
            this.department = true
            break;

        }
      }
    },
    submitPoint() {
      this.submitLoading = true
      // console.log('this.pointList', this.pointList)
      switch (this.tag.role) {
        case 'Student':
          this.$services.PointingService.completeStudent(
              {
                markDetail: this.markDetailStudent
              })
              .then(() => {
                this.dialogComplete = true
                this.submitLoading = false
              })
          break;
        case 'Monitor':
          if(!this.$route.params.id){
            this.$services.PointingService.completeStudent(
                {
                  markDetail: this.markDetailStudent
                })
                .then(() => {
                  this.dialogComplete = true
                  this.submitLoading = false
                })
          } else{
            this.$services.PointingService.completeMonitor(
                {studentId : this.$route.params.id},
                {
                  markDetail: this.markDetailMonitor
                })
            .then(()=>{
              this.dialogComplete = true
              this.submitLoading = false
            })
          }
          break;
          case 'Teacher':
            this.$services.PointingService.completeMonitor(
                {studentId : this.$route.params.id},
                { markDetail: this.markDetailTeacher}
            )
              break;
        case 'Department':
          break;
      }

    },
    resetForm() {
      switch (this.tag.role) {
        case 'Student':
         this.markDetailStudent.map(item => item.studentScore = 0)
          break;
        case 'Monitor':
          this.markDetailMonitor.map(item => item.monitorScore = 0)
          break;
        case 'Teacher':
          this.markDetailTeacher.map(item => item.teacherScore = 0)
          break;
      }
      this.markDetailTeacher.map(item => item.teacherScore = 0)
    },
    completed() {
      this.dialogComplete = false
      switch (this.tag.role) {
        case "Student":
          this.$router.push('/homepage')
          break;
        case "Monitor":
          this.$router.push('/listMembersMonitor')
          break;
      }
    }
  }
}
</script>

<style scoped>
.container-form {

}

.body {
  width: 90%;
  border-radius: 0px;
  border: 1px solid #e0e0e0;
}

.header, .footer {
  width: 90%;
  margin: 0px auto;
}

.title-form {
  line-height: 22px;
  font-size: 18px;
}

.info-student {
  width: 65%;
  margin: 0px auto;
  line-height: 10px;
}

table {
  border-collapse: collapse;
}

td {
  border: 1px solid #e0e0e0;
}

tbody > tr > th {
  font-size: 16px !important;
  font-weight: 500;
}

thead th {
  background: #e0e0e0 !important;
  color: #212121 !important;
  font-weight: 500;
}

tr {
  height: 35px;
}

.cot1 {
  width: 55%;
}

.cot2 {
  width: 15%;
}

.cot3 {
  width: 10%;
}

.cot4 {
  width: 10%;
}

.cot5 {
  width: 10%;
}

tr > td {
  padding-left: 8px;
  padding-right: 4px;
}

input[type=number] {
  width: 100%;
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.reset-btn {
  width: 100%;
  background: transparent;
  border: 1px solid #29B6F6;
  color: #29B6F6;
  border-radius: 4px;
}

input[type="number"]:disabled {
  color: #e0e0e0;
}
</style>
