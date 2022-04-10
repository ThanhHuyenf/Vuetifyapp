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
        <p>Hà Nội, ngày 26 tháng 2 năm 2022</p>
      </div>

      <div class="text-center mt-10">
        <h1 class="title-form text-uppercase">Phiếu đánh giá kết quả rèn luyện</h1>
        <h1 class="title-form text-uppercase">của sinh viên hệ đại học chính quy</h1>
      </div>
    </div>

    <div class="info-student mt-10 mb-4">
      <div class="row">
        <div class="col-5">Họ và tên : Nguyễn Thị Thanh Huyền</div>
        <div class="col-3">Ngày sinh: 31/03/1999</div>
        <div class="col-4">Mã sinh viên : 675105050</div>
      </div>

      <div class="row">
        <div class="col-5">Học kỳ : 2</div>
        <div class="col-3">Năm học : 2021-2022</div>
        <div class="col-4">Lớp : 67C</div>
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
                       v-model="pointList[0].subType[0].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="3" min="0" step="1" :disabled="!monitor"
                       v-model="pointList[0].subType[0].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="1" :disabled="!department"
                       v-model="pointList[0].subType[0].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Chuẩn bị bài đầy đủ</td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[0].subType[0].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[0].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[0].subTypeScore[1].teacherScore"></td>
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
                       v-model="pointList[0].subType[1].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[1].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[1].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có tham gia các câu lạc bộ học thuật, ngoại khóa</td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[0].subType[1].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[1].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[1].subTypeScore[1].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Đạt giải nghiên cứu khoa học</td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[0].subType[1].subTypeScore[2].studentScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[1].subTypeScore[2].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[1].subTypeScore[2].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Nhận được giấy khen hoạt động ngoại khóa và các câu lạc bộ</td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[0].subType[1].subTypeScore[3].studentScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[1].subTypeScore[3].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[1].subTypeScore[3].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">c. Ý thức và thái độ tham gia các kỳ thi, cuộc thi
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia đầy đủ các buổi thi</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[0].subType[2].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[2].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[2].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Không bị thi lại môn nào</td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[0].subType[2].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[2].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[2].subTypeScore[1].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Số tín chỉ thi lại &lt;10%</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!student"
                       v-model="pointList[0].subType[2].subTypeScore[2].studentScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!monitor"
                       v-model="pointList[0].subType[2].subTypeScore[2].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!department"
                       v-model="pointList[0].subType[2].subTypeScore[2].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Số tín chỉ thi lại &lt;20%</td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[0].subType[2].subTypeScore[3].studentScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[2].subTypeScore[3].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[2].subTypeScore[3].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia đầy đủ các buổi rèn luyện NVSP</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[0].subType[2].subTypeScore[4].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[2].subTypeScore[4].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[2].subTypeScore[4].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham dự thi NVSP cấp khoa, trường</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!student"
                       v-model="pointList[0].subType[2].subTypeScore[5].studentScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!monitor"
                       v-model="pointList[0].subType[2].subTypeScore[5].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!department"
                       v-model="pointList[0].subType[2].subTypeScore[5].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Đạt giải nhất, nhì, ba trong các cuộc thi từ cấp khoa trở lên</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!student"
                       v-model="pointList[0].subType[2].subTypeScore[6].studentScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!monitor"
                       v-model="pointList[0].subType[2].subTypeScore[6].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!department"
                       v-model="pointList[0].subType[2].subTypeScore[6].teacherScore"></td>
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
                       v-model="pointList[0].subType[3].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[0].subType[3].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[0].subType[3].subTypeScore[0].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">e. Kết quả học tập
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Sinh viên đạt điểm TBC tích lũy từ 2.50 đến 3.19</td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!student"
                       v-model="pointList[0].subType[4].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!monitor"
                       v-model="pointList[0].subType[4].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="1" :disabled="!department"
                       v-model="pointList[0].subType[4].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Sinh viên đạt điểm TBC tích lũy từ 3.20 đến 3.59</td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="1.5" :disabled="!student"
                       v-model="pointList[0].subType[4].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="1.5" :disabled="!monitor"
                       v-model="pointList[0].subType[4].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="1.5" :disabled="!department"
                       v-model="pointList[0].subType[4].subTypeScore[1].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Sinh viên đạt điểm TBC tích lũy từ 3.60 đến 4.00</td>
            <td class="text-center">2,5</td>
            <td><input type="number" max="2.5" min="0" step="2.5" :disabled="!student"
                       v-model="pointList[0].subType[4].subTypeScore[2].studentScore"></td>
            <td><input type="number" max="2.5" min="0" step="2.5" :disabled="!monitor"
                       v-model="pointList[0].subType[4].subTypeScore[2].monitorScore"></td>
            <td><input type="number" max="2.5" min="0" step="2.5" :disabled="!department"
                       v-model="pointList[0].subType[4].subTypeScore[2].teacherScore"></td>
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
                       v-model="pointList[1].subType[0].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[1].subType[0].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[1].subType[0].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Chấp hành đầy đủ nội quy nội, ngoại trú của lớp, khoa, trường</td>
            <td class="text-center">4</td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[1].subType[0].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[1].subType[0].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[1].subType[0].subTypeScore[1].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia tích cực việc tuyên truyền, phổ biến nội quy, quy chế của trường, của Bộ Giáo
              dục và Đào tạo
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[1].subType[0].subTypeScore[2].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[1].subType[0].subTypeScore[2].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[1].subType[0].subTypeScore[2].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có hành vi giúp đỡ, đấu tranh để đảm bảo nội quy, quy chế được thực hiện</td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[1].subType[0].subTypeScore[3].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[1].subType[0].subTypeScore[3].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[1].subType[0].subTypeScore[3].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Vi phạm quy chế thi bị trừ:
              <br>&nbsp;&nbsp;&nbsp;+ Khiển trách: 10 điểm
              <br>&nbsp;&nbsp;&nbsp;+ Cảnh cáo: 15 điểm
              <br>&nbsp;&nbsp;&nbsp;+ Đình chỉ thi: 25 điểm
            </td>
            <td></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!student"
                       v-model="pointList[1].subType[0].subTypeScore[4].studentScore"></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!monitor"
                       v-model="pointList[1].subType[0].subTypeScore[4].monitorScore"></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!department"
                       v-model="pointList[1].subType[0].subTypeScore[4].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Vi phạm quy chế công tác học sinh sinh viên bị trừ:
              <br>&nbsp;&nbsp;&nbsp;+ Khiển trách: 10 điểm
              <br>&nbsp;&nbsp;&nbsp;+ Cảnh cáo: 15 điểm
              <br>&nbsp;&nbsp;&nbsp;+ Đình chỉ học tập: 25 điểm
            </td>
            <td></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!student"
                       v-model="pointList[1].subType[0].subTypeScore[5].studentScore"></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!monitor"
                       v-model="pointList[1].subType[0].subTypeScore[5].monitorScore"></td>
            <td><input type="number" max="0" min="-25" step="5" :disabled="!department"
                       v-model="pointList[1].subType[0].subTypeScore[5].teacherScore"></td>
          </tr>

          <tr class="font-weight-medium">
            <td colspan="5">b. Ý thức chấp hành nội quy, quy chế và các quy định khác được áp dụng trong nhà trường
            </td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Thực hiện tốt nội quy, quy định khác được áp dụng trong nhà trường</td>
            <td class="text-center">4</td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[1].subType[1].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[1].subType[1].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[1].subType[1].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia tích cực việc tuyên truyền, phổ biến nội quy, quy chế khác (ngoài ngành)</td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[1].subType[1].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[1].subType[1].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[1].subType[1].subTypeScore[1].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có hành vi giúp đỡ, đấu tranh để đảm bảo nội quy, quy chế khác (ngoài ngành) được thực
              hiện
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[1].subType[1].subTypeScore[2].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[1].subType[1].subTypeScore[2].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[1].subType[1].subTypeScore[2].teacherScore"></td>
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
                       v-model="pointList[2].subType[0].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[0].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[0].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức tham gia đầy đủ, nghiêm túc hoạt động rèn luyện về chính trị, xã hội, văn hóa,
              văn nghệ, thể thao do Nhà trường, Đoàn, Hội tổ chức điều động (vắng 1 lần không có phép bị trừ 1 điểm)
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[2].subType[0].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[0].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[0].subTypeScore[1].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Là thành viên của Chi đoàn, Chi hội, câu lạc bộ được nhận các danh hiệu thi đua khen
              thưởng từ cấp khoa trở lên
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[2].subType[0].subTypeScore[2].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[0].subTypeScore[2].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[0].subTypeScore[2].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia các hoạt động văn hóa, văn nghệ, thể dục – thể thao đạt giải nhất, nhì , ba
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[2].subType[0].subTypeScore[3].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[0].subTypeScore[3].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[0].subTypeScore[3].teacherScore"></td>
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
                       v-model="pointList[2].subType[1].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[1].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[1].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Được kết nạp Đảng
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[2].subType[1].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[1].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[1].subTypeScore[1].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Học và có giấy chứng nhận Đoàn viên Ưu tú
            </td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[2].subType[1].subTypeScore[2].studentScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[1].subTypeScore[2].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[1].subTypeScore[2].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Học và có giấy chứng nhận nhận thức về Đảng
            </td>
            <td class="text-center">0,5</td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[2].subType[1].subTypeScore[3].studentScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[1].subTypeScore[3].monitorScore"></td>
            <td><input type="number" max="0.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[1].subTypeScore[3].teacherScore"></td>
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
                       v-model="pointList[2].subType[2].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[2].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[2].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Được biểu dương khen thưởng từ cấp khoa trở lên do có thành tích trong các hoạt động
              phòng chống tội phạm, các tệ nạn xã hội
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[2].subType[2].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[2].subType[2].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[2].subType[2].subTypeScore[1].teacherScore"></td>
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
                       v-model="pointList[3].subType[0].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[0].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[0].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tích cực tham gia tuyên truyền chính sách, pháp luật của Nhà nước
            </td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[3].subType[0].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[0].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[0].subTypeScore[1].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia giữ gìn trật tự an toàn xã hội
            </td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[3].subType[0].subTypeScore[2].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[0].subTypeScore[2].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[0].subTypeScore[2].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia có hiệu quả các buổi học tập tìm hiểu luật pháp do các tổ chức ngoài nhà trường
              đứng ra tổ chức
            </td>
            <td class="text-center">1,5</td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[3].subType[0].subTypeScore[3].studentScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[0].subTypeScore[3].monitorScore"></td>
            <td><input type="number" max="1.5" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[0].subTypeScore[3].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có tham gia bảo hiểm y tế (bắt buộc) theo luật bảo hiểm y tế (không tham gia bảo hiểm y
              tế bị trừ 1 điểm)
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[3].subType[0].subTypeScore[4].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[0].subTypeScore[4].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[0].subTypeScore[4].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức chấp hành, tham gia tuyên truyền các quy định về bảo đảm an toàn giao thông và
              “văn hóa giao thông” (vi phạm 1 lần bị trừ 1 điểm)
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[3].subType[0].subTypeScore[5].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[0].subTypeScore[5].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[0].subTypeScore[5].teacherScore"></td>
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
                       v-model="pointList[3].subType[1].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[1].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="4" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[1].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có ý thức giữ gìn vệ sinh mội trường trong nhà trường và xã hội
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[3].subType[1].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[1].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[1].subTypeScore[1].teacherScore"></td>
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
                       v-model="pointList[3].subType[2].subTypeScore[0].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[2].subTypeScore[0].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[2].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có lối sống lành mạnh, có mối quan hệ tốt với bạn trong lớp, trong trường
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[3].subType[2].subTypeScore[1].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[2].subTypeScore[1].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[2].subTypeScore[1].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Có tinh thần đoàn kết giúp đỡ nhau cùng tiến bộ trong học tập
            </td>
            <td class="text-center">3</td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[3].subType[2].subTypeScore[2].studentScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[2].subTypeScore[2].monitorScore"></td>
            <td><input type="number" max="3" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[2].subTypeScore[2].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Được biểu dương khen thưởng về tham gia giữ gìn trật tự an toàn xã hội và cộng đồng
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[3].subType[2].subTypeScore[3].studentScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[3].subType[2].subTypeScore[3].monitorScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[3].subType[2].subTypeScore[3].teacherScore"></td>
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
                       v-model="pointList[4].subType[0].subTypeScore[0].teacherScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[4].subType[0].subTypeScore[0].teacherScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[4].subType[0].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Tham gia đầy đủ các công tác đoàn thể xã hội do Nhà trường, Đoàn Thanh niên, Hội Sinh
              viên trường phát động
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[4].subType[0].subTypeScore[1].teacherScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[4].subType[0].subTypeScore[1].teacherScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[4].subType[0].subTypeScore[1].teacherScore"></td>
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
                       v-model="pointList[4].subType[1].subTypeScore[0].teacherScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[4].subType[1].subTypeScore[0].teacherScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[4].subType[1].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Được khen thưởng từ cấp lớp trở lên
            </td>
            <td class="text-center">1</td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[4].subType[1].subTypeScore[1].teacherScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[4].subType[1].subTypeScore[1].teacherScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[4].subType[1].subTypeScore[1].teacherScore"></td>
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
                       v-model="pointList[4].subType[2].subTypeScore[0].teacherScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[4].subType[2].subTypeScore[0].teacherScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[4].subType[2].subTypeScore[0].teacherScore"></td>
          </tr>
          <tr class="chi-tiet">
            <td class="pl-5">- Vận động, tuyên truyền, tham gia giúp đỡ người khác, tham gia công việc chung của trường,
              lớp, Đoàn, Hội hiệu quả
            </td>
            <td class="text-center">2</td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!student"
                       v-model="pointList[4].subType[2].subTypeScore[1].teacherScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[4].subType[2].subTypeScore[1].teacherScore"></td>
            <td><input type="number" max="2" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[4].subType[2].subTypeScore[1].teacherScore"></td>
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
                       v-model="pointList[4].subType[3].subTypeScore[0].teacherScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!monitor"
                       v-model="pointList[4].subType[3].subTypeScore[0].teacherScore"></td>
            <td><input type="number" max="1" min="0" step="0.5" :disabled="!department"
                       v-model="pointList[4].subType[3].subTypeScore[0].teacherScore"></td>
          </tr>

          <tr class="pt-4" style="height: 50px">
            <td colspan="2"><b>Tổng điểm sinh viên đạt được = Tổng điểm các phần I +II+III+IV+V</b></td>
            <td class="text-center"><b>77</b></td>
            <td class="text-center"><b>77</b></td>
            <td class="text-center"><b>77</b></td>
          </tr>
          <tr class="pt-4" style="height: 50px">
            <td colspan="3" class="font-weight-bold">Điểm trung bình= (điểm Sinh viên + điểm Lớp + điểm Khoa)/3</td>
            <td class="text-center font-weight-bold red--text">77</td>
            <td class="text-center">
              <v-btn outlined class="reset-btn">Reset</v-btn>
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
        <slot name="button-download">
        </slot>
        <div>
          <v-btn depressed class="mr-2">Lưu nháp</v-btn>
          <v-btn depressed color="primary" @click="submitPoint" :loading="submitLoading">Hoàn thành</v-btn>
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
      department: false,
      dialogComplete: false,
      message: '',
      submitLoading: false,
      pointList: [
        {
          idType: 1,
          subType: [
            {
              idSubType: 1,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 2,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 3,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 4,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 3,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 3,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 4,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 5,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 6,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 7,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 4,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 5,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 3,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
          ]
        },
        {
          idType: 2,
          subType: [
            {
              idSubType: 6,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 3,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 4,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 5,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 6,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 7,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 3,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
          ]
        },
        {
          idType: 3,
          subType: [
            {
              idSubType: 9,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 3,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 4,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 10,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 3,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 4,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 11,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
          ]
        },
        {
          idType: 4,
          subType: [
            {
              idSubType: 12,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 3,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 4,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 5,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 6,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 13,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 14,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 3,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 4,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
          ]
        },
        {
          idType: 5,
          subType: [
            {
              idSubType: 15,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 16,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 17,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                },
                {
                  idSubTypeScore: 2,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
            {
              idSubType: 18,
              subTypeScore: [
                {
                  idSubTypeScore: 1,
                  studentScore: 0,
                  monitorScore: 0,
                  teacherScore: 0
                }
              ]
            },
          ]
        }
      ]
    }
  },
  created() {
    this.getTag()
    this.getData()
    if (this.tag.role === 'Student') {
      this.message = 'Điểm số của bạn đã được lưu! Quay về trang chủ!'
    } else {
      this.message = 'Điểm số đã được lưu! Quay về danh sách thành viên'
    }
  },
  computed: {
    tag() {
      return this.$store.state.tag
    }
  },
  methods: {
    ...mapActions(['getTag']),
    getData() {
      switch (this.tag.role) {
        case 'Student':
          this.student = true
          break;
        case 'Monitor':
          this.monitor = true
          this.student = true
          break;
        case 'Department':
          this.department = true
          break;

      }
    },
    submitPoint() {
      this.submitLoading = true
      console.log('this.pointList', this.pointList)
      switch (this.tag.role) {
        case 'Student':
          this.$services.StudentService.submitPoint(
              {
                pointList: this.pointList
              })
              .then(() => {
                this.dialogComplete = true
                this.submitLoading = false
              })
          break;
        case 'Monitor':
          break;
        case 'Department':
          break;
      }

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
