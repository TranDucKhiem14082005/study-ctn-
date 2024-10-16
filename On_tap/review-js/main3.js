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
Cut String: Cắt chuỗi:  slice(vị trí bd, vị trí kết thúc)
Replace: Ghi đè:  replace('từ bị ghi đè', 'từ ghi đè')
Convert to upper case: toUpperCase()
Convert to lower case: toLowerCase()
Trim: Chuẩn hóa chuổi: trim()
Split: chuyển đổi chuỗi thành mảng: split()
Get a character by index: Lấy 1 kí tự bởi một vị trí cho trước
charAt(vị trí mà mình muốn từ kí tự), []
*/

let name = '   Tran Duc Khiem   ';
console.log(name.indexOf('Khiem'));
console.log(name.lastIndexOf(''));
console.log(name.search('Tran'));
console.log(name.slice(0,4));
console.log(name.replace('Tran','TRAN'));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());
console.log(name.split(' '));

/*
Array in Javascript
length: Độ dài của chuỗi
pop: Xóa đi pt cuối cùng của mảng và trả về số lượng pt đó
push: Thêm vào phần tử cuối cùng của mảng và trả về số lg pt đó
shift: Xóa đi phần tử đầu mảng và trả về pt tử đã xóa
Unshift: Thêm vào phần tử đầu mảng và trả về số lượng pt
splice: Chèn/ xóa: splice(vị trí xóa, số lượng phần tử)
splice(vị trí muốn chèn, 0, phần tử muốn chèn vào)
concat: Nối mảng concat()
slicing: Cắt slice(vị trí bắt đầu, vị trí kết thúc)
*/



let language = [
    'Javascript',
    'PHP',
    'C'
];

let language2 = [
    'C++'
]

console.log(language);
console.log(language[1]);
console.log(language.length);
console.log(language.splice(1,0,'Dart')); 
console.log(language);
console.log(language.length);
console.log(language.pop()); 
console.log(language);
console.log(language.push('Ruby'));
console.log(language);
console.log(language.shift());
console.log(language.unshift());
console.log(language);
console.log(language.concat(language2));
console.log(language.slice(0,3));