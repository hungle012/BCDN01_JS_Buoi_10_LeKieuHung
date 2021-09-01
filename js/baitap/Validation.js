   function Validation() {
    // phương thức
    this.checkEmpty = function (inputVal, spanID, message) {
        // trim : xoá dấu cách trước và sau chuỗi.
        if (inputVal.trim() == "") {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        } else {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }

    // kiểm tra tài khoản trùng
    this.checkTK = function (inputVal, spanID, message, mang) {
        // kiểm tra mã đã tồn tại trong mảng
        var isExist = false;
        // some: return giá trị true/false dựa vào biểu thức so sánh
        isExist = mang.some(function (item) {
            return item.taiKhoan === inputVal.trim();
        });
        if (isExist) {
            // mã bị trùng => không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        } else {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }

    this.checkName = function (inputVal, spanID, message) {
        // RegExp: đối tượng giúp chuyển đổi từ String sang kiểu Regular expressions
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");

        if (pattern.test(inputVal)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkEmail = function (inputVal, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (inputVal.match(pattern)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
     
    this.checkPass = function(inputVal, spanID, message) {
        var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;

        if (inputVal.match(pattern)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

    }

    this.checkDate = function(inputVal, spanID, message) {
        var pattern = /^((0[1-9]|1[012]|[1-9])[- /.](0[1-9]|[12][0-9]|3[01]|[1-9])[- /.](19|20)\d\d|(19|20)\d\d[- /.](0[1-9]|1[012]|[1-9])[- /.](0[1-9]|[12][0-9]|3[01]|[1-9]))$/;

        if (inputVal.match(pattern)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkLuong = function(inputVal, spanID, message) {
        var check = Number.isInteger(Number(inputVal));
        var num = Number(inputVal);
        if (check && num >= 1000000 && num <= 20000000) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkDropdown = function(selectID, spanID, message) {
        var optIndex = document.getElementById(selectID).selectedIndex;
        if (optIndex != 0) {
             // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
             return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkHour = function(inputVal, spanID, message) {
        var check = Number.isInteger(Number(inputVal));
        var num = Number(inputVal);
        if (check && num >= 80 && num <= 200) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    
}