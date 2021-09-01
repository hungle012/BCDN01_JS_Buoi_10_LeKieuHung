var dsnv = new DanhSachNhanVien();
var validation = new Validation();

function layPhanTu(id) {
    return document.getElementById(id);
}


function setLocalStorage() {
    //localStorage: biến đối tượng có sẵn của js
    //localStorage chỉ lưu kiểu dữ liệu Json
    //chuyển dssv.mangSV từ kiểu mảng sang kiểu Json
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
    //getItem sẽ lấy dữ liệu lên là Json
    //parse chuyển từ Json về kiểu mảng
    //Kiểm tra có dữ liệu localStorage hay không
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}
getLocalStorage();


// hiển thị bảng
function hienThiTable(mang) {
    var content = "";
    
    mang.map(function (item, index) {

        content += `<tr>
            <td>${item.taiKhoan}</td>
            <td>${item.hoTenNV}</td>
            <td>${item.email}</td>
            <td>${item.ngayLam}</td>
            <td>${item.chucVu}</td>
            <td>${item.tongLuong}</td>
            <td>${item.loaiNV}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaNV('${item.taiKhoan}')">Xoá</button>
            </td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="xemChiTiet('${item.taiKhoan}')">Xem</button>
            </td>
        </tr>` ;
    });
    layPhanTu("tableDanhSach").innerHTML = content;
}

// lấy dữ liệu
function layDuLieu() {
    // lấy dữ liệu
    var taiKhoan = layPhanTu("tknv").value;
    var tenNV = layPhanTu("name").value;
    var email = layPhanTu("email").value;
    var pass = layPhanTu("password").value;
    var ngayLam = layPhanTu("datepicker").value;
    var luong = layPhanTu("luongCB").value;
    var chucVu = layPhanTu("chucvu").value;
    var gioLam = layPhanTu("gioLam").value;

    // validation
    var isValid = true;
    // kiểm tra tài khoản
    if ( layPhanTu("tknv").disabled != true) {
        isValid = validation.checkEmpty(taiKhoan,"tbTKNV","Tài khoản không được để trống!") && validation.checkTK(taiKhoan,"tbTKNV","Tài khoản đã tồn tại, vui lòng nhập lại!",dsnv.mangNV);
    }

    // kiểm tra tên
    isValid &= validation.checkEmpty(tenNV,"tbTen","Tên nhân viên không được để trống!") && validation.checkName(tenNV, "tbTen", "Tên nhân viên phải là kí tự chữ và không chứa ký tự đặc biệt!");

    // kiểm tra email
    isValid &= validation.checkEmpty(email,"tbEmail","Email không được để trống!") && validation.checkEmail(email,"tbEmail","Email không đúng định dạng!");

    // kiểm tra mật khẩu
    isValid &= validation.checkEmpty(pass,"tbMatKhau","Mật khẩu không được để trống!") && validation.checkPass(pass,"tbMatKhau","Mật khẩu phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

    // kiểm tra ngày
    isValid &= validation.checkEmpty(ngayLam,"tbNgay","Bạn chưa chọn ngày làm!") && validation.checkDate(ngayLam,"tbNgay","Ngày chưa đúng định dạng (MM/DD/YYYY)!");

    // kiểm tra lương
    isValid &= validation.checkEmpty(luong,"tbLuongCB","Bạn chưa nhập lương cơ bản!") && validation.checkLuong(luong,"tbLuongCB","Lương cơ bản phải nằm trong khoảng 1.000.000 đến 20.000.000!");

    // kiểm tra chức vụ
    isValid &= validation.checkDropdown("chucvu","tbChucVu","Bạn chưa chọn chức vụ!");

    // kiểm tra giờ làm
    isValid &= validation.checkEmpty(gioLam,"tbGiolam","Bạn chưa nhập giờ làm trong tháng!") && validation.checkHour(gioLam,"tbGiolam","giờ làm trong tháng phải nằm trong khoảng 80-200");

    if (isValid) {
        var nv = new NhanVien(taiKhoan,tenNV,email,pass,ngayLam,Number(luong),chucVu,Number(gioLam));
        nv.tongLuong = nv.tinhLuong(chucVu);
        nv.loaiNV = nv.xepLoai(gioLam);

        return nv
        
    } else {
        return 0
    }
    
}

// thêm nhân viên
function themNV(){
    var nv = layDuLieu();

    if (nv != 0) {
        dsnv.themNhanVien(nv);
        // lưu xuống local
        setLocalStorage();
        // hiển thị lên table
        hienThiTable(dsnv.mangNV);
    }
}

 function xoaNV(taikhoan) {
    dsnv.xoaNhanVien(taikhoan);

    hienThiTable(dsnv.mangNV);
    setLocalStorage();
}

function xemChiTiet(tk) {
    var viTri = dsnv.timViTri(tk);
    var nv = dsnv.mangNV[viTri];

    layPhanTu("tknv").disabled = true;
    layPhanTu("tknv").value = nv.taiKhoan;
    layPhanTu("name").value = nv.hoTenNV;
    layPhanTu("email").value = nv.email;
    layPhanTu("password").value = nv.matKhau;
    layPhanTu("datepicker").value = nv.ngayLam;
    layPhanTu("luongCB").value = nv.luongCoBan;
    layPhanTu("chucvu").value = nv.chucVu;
    layPhanTu("gioLam").value = nv.gioLam1Thang;
    
}

function capNhatNV() {
   var nv = layDuLieu();

    if (nv != 0) {
        dsnv.capNhatNhanVien(nv);
        // lưu xuống local
        setLocalStorage();
        // hiển thị lên table
        hienThiTable(dsnv.mangNV);
    }
}

function resetForm() {
    layPhanTu("form").reset();
    layPhanTu("tknv").disabled = false;
}

function timKiemTheoLoai() {
    var tuKhoaTK = layPhanTu("searchName").value;
    var mangKQ = dsnv.timKiem(tuKhoaTK);
    hienThiTable(mangKQ);
}