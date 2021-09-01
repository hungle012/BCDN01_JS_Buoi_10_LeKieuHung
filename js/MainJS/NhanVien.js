function NhanVien(tk,ten,email,mk,ngayLam,luongCB,chucVu,gioLam) {
    // thuộc tính
    this.taiKhoan = tk;
    this.hoTenNV = ten;
    this.email = email;
    this.matKhau = mk;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCB;
    this.chucVu = chucVu;
    this.gioLam1Thang = gioLam;
    this.tongLuong = 0;
    this.loaiNV = "";

    // phương thức
    this.tinhLuong = function(loai) {
        if (loai == "Sếp") {
            return this.luongCoBan * 3;
        } else if (loai == "Trưởng phòng") {
            return this.luongCoBan * 2;
        } else if (loai == "Nhân viên") {
            return this.luongCoBan;
        } else {
            return 0;
        }
    }

    this.xepLoai = function(gioLam) {
        if (gioLam >= 0 && gioLam < 160) {
            return "Trung bình";
        } else if (gioLam >= 160 && gioLam < 176) {
            return "khá";
        } else if (gioLam >=176  && gioLam < 190) {
            return "giỏi";
        } else if (gioLam >= 190) {
            return "Xuất sắc";
        }
    }
}