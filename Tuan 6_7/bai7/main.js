function dayMonthYear() {
    var date = new Date();

    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var dayofmonth = date.getUTCDate();

    var days = new Array('Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7');
    var months = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');


    document.getElementById('ngayThang').innerHTML = days[day] + " Ngày " +
        dayofmonth + "/" + months[month] + "/" + year;
}