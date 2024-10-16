/*
Các hàm có sẵn ở trong JS
alert
*/

// alert
// confirm // Hiểm thị lên hộp thoại xác định một cái gì đó
// console.log();
// prompt('hello'); //Hiện ra hộp thoại + ô input để người dùng
// //nhập giá trị vào

// setTimeout // Sau một khoảng thời gian thực hiện một hành động gì đó
// setInterval // Sẽ lặp lại đi lặp một hành động sau 1 khoảng thời gian

/*
Toán tử
+
-
*
/
**
a++, ++a : Tiền tố sẽ trả về đúng giá trị
a-- , --a : Hậu tố sẽ trả về biên coppy
%
*/
/* Toán tử so sánh
> , >=
< , <=
== : so sánh tương đối, chỉ so sánh gia trị của nó
=== : So sánh tuyệt đối, so sánh cả giá trị và typeof của nó
&& : Toán tử so sánh và , tất cả đều đúng.
|| : Chỉ một thằng đúng là được.
! : Phủ định
 */

/*
Toán tử gán
=
+=
-+
*=
/=
**=
*/

/*
Ngoài 6 giá trị này thì kết quả luôn trả về true
NaN
false
0
'' || ""
undefine
null
*/

/*
Kiểu dữ liệu Number
toString : Chuyển sáng KDL dạng chuỗi
toFixed : Làm tròn số
 */

/*
Kiểu dữ liệu Number
Kiểu dữ liệu string
Boolean
undefine
null
symbol
*/

/*
Làm việc với chuỗi
length : độ dài của chuỗi
find index: Tìm vị trí của một từ
Cut String: Cắt chuỗi (vị trí bd, vị trí kết thúc)
*/

let name = 'Tran Duc Khiem';
console.log(name.indexOf('Khiem'));
console.log(name.lastIndexOf(''));
console.log(name.search('Tran'));
console.log(name.slice(0,4));