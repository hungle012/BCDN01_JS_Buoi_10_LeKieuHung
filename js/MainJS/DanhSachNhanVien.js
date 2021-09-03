function DanhSachNhanVien() {
    // thuộc tính
    this.mangNV = [];

    // phương thức
    this.themNhanVien = function(nv) {
        this.mangNV.push(nv);
    }

    this.timViTri = function(tk) {
        var viTri = -1;
        this.mangNV.map(function(item,index) {
            // item là 1 phần tử trong mảng
            if (item.taiKhoan == tk) {
                viTri = index;
            }
        });

        return viTri;
    }

    this.xoaNhanVien = function(tk) {
        var viTri = this.timViTri(tk);
        if (viTri >= 0) {
            this.mangNV.splice(viTri,1);
        }
    }

    this.capNhatNhanVien = function(nv) {
        var viTri = this.timViTri(nv.taiKhoan);
        if (viTri >= 0) {
            this.mangNV[viTri] = nv;
        }
    }

    this.timKiem = function(tuKhoaTK) {
        var mangKQ = [];
        var lowerTK = tuKhoaTK.trim().toLowerCase();

        this.mangNV.map(function(item,index) {
            var lower = item.loaiNV.trim().toLowerCase();
            var kq = lower.indexOf(lowerTK);
            if (kq >= 0) {
                mangKQ.push(item);
            }
        });
    
        return mangKQ
    
    }
}
