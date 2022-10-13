import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
const TOKEN = localStorage.getItem('token')
Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', `Bearer ${TOKEN}`)
    request.headers.set('Accept', 'application/json')
    next()
})
//http://api.lethanhhuyen.nvcd.xyz/api/auth/auth/login
const LoginService = Vue.resource('api/auth/auth/login', {}, {
    query: {method: 'POST', url: 'api/auth/auth/login'},
    // đăng nhập
    forgotPassword : { method: 'POST', url: 'api/training/common/create-reset-password'},
    // cấp lại password
    resetPassword : { method: 'POST', url: 'api/training/common/reset-password'}
    // đổi password
})
const ChangePassword = Vue.resource('api/training/users/change-password', {}, {
    changePassword : { method: 'POST', url: 'api/training/users/change-password'},
    // đổi password
})
const ProfileService = Vue.resource('api/training/detail-users', {}, {
    query: {method: 'GET', url: 'api/training/detail-users'},
    // ảnh đại diện
    updateProfile: {method: 'PUT', url: 'api/training/detail-users/update'},
    getAvatar:{method: 'GET', url: 'api/training/common/avatars/{fileId}'}

})
const ImgService = Vue.resource('api/training/common/avatar', {}, {
    changeAvatar: {method : 'POST', url: 'api/training/common/avatar',headers: {
            'Content-Type': 'multipart/form-data'
    }}
})

const PointingService = Vue.resource('api/training', {}, {
    getPoint: {method: 'POST', url: 'api/training/mark/get-detail-mark'},
    // Điểm của sv
    getPointSefl: {method: 'POST', url: 'api/training/mark/get-detail-mark'},
    // Điểm của sv
    submitPoint : {method: 'POST', url: 'api/training/mark'},
    getHistory : {method: "POST", url: 'api/training/mark/history'},
    // năm học, học kỳ, tổng điểm, xếp loại
    getPointFrame: {method: "GET", url: 'api/training/point-frame?page=1&perPage=20'},
    // khund điểm rèn luyện: điểm số, điểm chữ
    createPointFrame: {method: "POST", url: 'api/training/point-frame'},
    deletePointFrame: {method: 'DELETE', url: 'api/training/point-frame/{id}'},
    // xóa 1 khung điểm
    updatePointFrame: {method: 'PUT', url: 'api/training/point-frame/{id}'},
    // sửa khung điểm
    completeStudent: {method: 'POST', url: 'api/training/mark'},
    // submit điểm sv chấm
    completeMonitor: {method: 'POST', url: 'api/training/mark/monitor/{studentId}'},
    // Submit điểm lớp trưởng chấm
    completeTeacher: {method: 'POST', url: 'api/training/mark/teacher/{studentId}'},
    // submit điểm GV chấm
})

const MonitorService = Vue.resource('api/training/detail-users/monitor',{}, {
    getMembers : {method: "GET", url: "api/training/detail-users/monitor/list-students"}
    //Danh sách sinh viên mà lớp trưởng quản lý: userID (mã sv), name, className, studentScore (điểm sv chấm), monitorScore (điểm lớp trưởng chấm)
})

const TeacherService = Vue.resource('api/training/class', {}, {
    getClasses : {method: "GET", url: "api/training/class/head-master"},
    // danh sách lớp mà giảng viên quản lý: chỉ cần tên lớp
    getMembers: {method: "GET", url: "api/training/detail-users/head-master/list-students/0"},
    //Danh sách sinh viên mà giảng viên quản lý: userID (mã sv), name, className, studentScore (điểm sv chấm), monitorScore (điểm lớp trưởng chấm)
    assignMonitor: {method: "GET", url: "api/training/detail-users/head-master/list-students/assign-monitor/{id}"},
    getListClass: {method: 'GET', url: 'api/training/mark/list-class-department'},
    // Danh sách chi tiết lớp GV quản lý: className, teacherName (tên GV), namHoc, semester (học kỳ)
    // Vì có thể mỗi kỳ q giảng viên khác nhau quản lý nên phải hiển thị cả teacherName
})

const DepartmentSevice = Vue.resource('api/training/class',{}, {
    getClasses : {method: 'GET', url:'api/training/class'},
    // Danh sách lớp thuộc khoa: courseName (khóa), className(lớp), count (sĩ số), headMasterName (tên cố vấn), thoiGian (thơi gian của khóa, vd: k67 thì thời gian là 2017-2021)
    getDetailClass: {method: 'GET', url: 'api/training/class/{id}'},
    // Thông tin chi tiết của lớp: namHoc, semester, count (sĩ số), headMasterName (giảng viên), xuatSac (số lượng sv xuất sắc), tot, kha, tbkha, tb, yeu, kem, tong (tổng sl)
    getMembers: {method: 'GET', url:'api/class/common'},
    getTeachers: {method: "GET", url : "api/training/department/list-teachers"},
    // Danh sách giảng viên thuộc khhoa: teacherName, email, teacherNumber (sdt), listClasses (danh sách lớp đang QL)
    listBrowseMark: {method: "GET", url: 'api/training/mark/get-mark/{markId}'},
    //
    browseMark: {method: "GET", url: 'api/training/mark/approved-mark/{markId}'},
    // Khoa duyệt điểm cho sinh viên
})

const AdminService= Vue.resource('api/training', {}, {
    getDepartments : {method: 'GET', url: 'api/training/department'},
    // Danh sách các khoa: departmentId (mã khoa), departmentName(tên khoa), countClasses(số lượng lớp), countStudent(số lượng sinh viên), countTeachers (sô giảng viên), departmentAdminName(tên giáo vụ) 
    getTime: {method: "GET", url: "api/training/time"},
    // Danh sách thời gian được phép sử dụng hệ thống của các tác nhân: startYear, endYear (của năm học)
    // startTimeStudent, endTimeStudent (thời gian của sinh viên)
    // startTimeMonitor, endTimeMonitor (thơi gian của lớp trưởng)
    // startTimeHeadMaster, endTimeHeadMaster (thời gian của giảng viên)
    // startTimeDepartment, endTimeDepartment (thời gian của khoa)
    fixTime: {method: "PUT", url:"api/training/time/{id}" },
    // Thay đổi thơi gian
    addDepartment: {method: 'POST'},
    setupTime: {method: "GET", url: "api/training/time/active"},
    // Lấy thời gian đang học kỳ gần nhất
    createNewTime: {method: 'POST', url: 'api/training/time'},
    // Tạo khung thời gian mới
    deleteTime: {method: 'DELETE', url: 'api/training/time/{id}'},
    // xóa thời gian
    getListTeachers: {method: "GET", url: "api/training/admin/list-teacher"},
    // Danh sách giảng viên: teacherName, email, teacherNumber (sdt), teacherDepartmentName (khoa), class (danh sách lớp đang quản lý)
    createDepartmentManual: {method: 'POST',url: 'api/training/department' },
    // Tạo khoa mới
    getListStudent: {method: 'GET', url: 'api/training/admin/list-student'},
    // Danh sách sinh viên: userID (mã sinh viên), name, email, createdAt, createdAt (update lần cuối)
    uploadListStudent: {mehod: 'POST', url: 'api/training/detail-users/upload'}
})

const services = {
    LoginService,
    ChangePassword,
    ProfileService,
    ImgService,
    PointingService,
    MonitorService,
    TeacherService,
    DepartmentSevice,
    AdminService
}
export default services
