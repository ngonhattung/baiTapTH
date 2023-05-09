$(document).ready(() => {
    $("#openModal").click(() => {
        $("#myModal").modal();
    });
})
var form = document.getElementById('form');
var masv = document.getElementById('maSV');
var tensv = document.getElementById('tenSV');
var ngaythamgia = document.getElementById('ngayThamGia');
var email = document.getElementById('emailSV');
var sdt = document.getElementById('sdtSV');
var errormaSV = document.getElementById('error-masv');
var errortenSV = document.getElementById('error-tenSV');
var errorNgayThamGia = document.getElementById('error-ngayThamGia');
var errorEmail = document.getElementById('error-emailSV');
var errorSDT = document.getElementById('error-sdtSV');

var render = document.getElementById('table-render');

var btnSave = document.getElementById('btnLuu');
function checkErrorEmptymasv() {
    if (masv.value == '') {
        errormaSV.innerText = 'Buộc nhập';
        return true;
    }
    errormaSV.innerText = '';
    return false;
}

function checkErrorEmptytensv() {
    if (tensv.value == '') {
        errortenSV.innerText = 'Buộc nhập';
        return true;
    }
    errortenSV.innerText = '';
    return false;
}

function checkErrorEmptyngaythamgia() {
    if (ngaythamgia.value == '') {
        errorNgayThamGia.innerText = 'Buộc nhập';
        return true;
    }
    errorNgayThamGia.innerText = '';
    return false;
}

function checkErrorEmptyerrorEmail() {
    if (email.value == '') {
        errorEmail.innerText = 'Buộc nhập';
        return true;
    }
    errorEmail.innerText = ' ';
    return false;
}

function checkErrorEmptyerrorSDT() {
    if (sdt.value == '') {
        errorSDT.innerText = 'Buộc nhập';
        return true;
    }
    errorSDT.innerText = '';
    return false;
}


function checkErrortensv() {
    var regexTenSV = new RegExp('[A-Z]')
}

function checkErrorNgayThamGia() {
    const dateValue = new Date(ngaythamgia.value);
    const dateCur = new Date();
    if ((dateValue.getUTCDate() - dateCur.getUTCDate()) < 7 && dateValue.getMonth() == dateCur.getMonth() && dateValue.getFullYear() == dateCur.getFullYear()) {
        errorNgayThamGia.innerText = 'Sau ngày hiện tại 7 ngày';
        return true;
    }
    errorNgayThamGia.innerText = '';
    return false;

}

function checkErrorEmail() {
    var regexEmail = new RegExp('([a-z]|[0-9][A-Z])@iuh.edu.vn')

    if (regexEmail.test(email.value) == false) {
        errorEmail.innerText = 'Email sai định dạng hoặc đang để trống';
        return true;
    }
    errorEmail.innerText = '';
    return false;

}

function checkErrormasv() {
    var regexSDT = new RegExp('[0-9]{10}')
    if (regexSDT.test(sdt.value) == false) {
        errormaSV.innerText = 'Mã sinh viên phải 10 số'
        return true;
    }
    errormaSV.innerText = '';
    return true;
}

var data = [];
function render1() 
{
    table =`
            <tr>
                <th>STT</th>
                <th>Mã SV</th>
                <th>Tên SV</th>
                <th>Ngày tham gia</th>
                <th>Email</th>
                <th>Số điện thoại</th>
            </tr>
     
        `

    for (let index = 0; index < data.length; index++) {
        table += `
        <tr>
            <td>${index+1}</td>
            <td>${data[index].masv}</td>
            <td>${data[index].tensv}</td>
            <td>${data[index].ngaythamgia}</td>
            <td>${data[index].email}</td>
            <td>${data[index].sdt}</td>
         </tr>
        
        `
    }

    document.getElementById('table-render').innerHTML = table;
}


document.getElementById('btnLuu').addEventListener('click',e=>{
    e.preventDefault();
    var messFinish = document.getElementById('mess-finish');

    var checkEmptyMaSV = checkErrorEmptymasv();
    var checkErrorEmptyTenSV = checkErrorEmptytensv();
    var checkErrorEmptyNgayThamGia = checkErrorEmptyngaythamgia();
    var checkErrorEmptyEmail = checkErrorEmptyerrorEmail();
    var checkErrorEmptySDT = checkErrorEmptyerrorSDT();
    var checkReGexEmail = checkErrorEmail();
    var checkReGexMaSV = checkErrormasv();
    if(checkEmptyMaSV || checkErrorEmptyTenSV || checkErrorEmptyNgayThamGia || checkErrorEmptyEmail || checkErrorEmptySDT || checkReGexEmail || checkReGexMaSV)
    {
        messFinish.innerText = '';
    }
    else
    {
        const dateValue = new Date(ngaythamgia.value);
        var dt = dateValue.getDate();
        var mn = dateValue.getMonth();
        var yy = dateValue.getFullYear();
        var obj = {
            masv: masv.value,
            tensv: tensv.value,
            ngaythamgia: ngaythamgia.value = dt + '/' + mn + '/' + yy,
            email: email.value,
            sdt: sdt.value
        }
        data.push(obj);
        render1();
        messFinish.innerText = 'Đăng ký thành công';
    }


 })