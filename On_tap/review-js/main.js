
// var fullName = 'Tran Duc Khiem';
// var age = 19;
// alert(fullName);
// alert(age)
// console.log(fullName);

/*
// Built-in function: Hàm đã được định nghĩa sẵn

    1.Alert
    2.Console
    3.Confirm: the same to Alert but it must us choice
    cancel or ok for identify
    4.Prompt: the same to Confirm but it has input for me write
    information into it
    5.Set timeout
    6.Set interval

*/

// var fullName = 'Tran Duc Khiem';

// console.log(fullName);

// setTimeout(function () {
//     console.log(fullName)
// },1000)


/*
    Toán tử trong JavaScript
    1. Toán tử số học
    2. Toán tử gán
    3. Toán tử so sánh
    4. Toán tử logic
*/

/*
    Toán tử số học
    +
    -
    *
    **: Lũy thừa
    /
    %
    ++
    --
*/

// const a = 1;
// const b = 2;
// const c = a + b;
// console.log(c);


/*
Toán tử chuỗi
*/

// var firstName = 'Khiem';
// var lastName = 'Tran';

// console.log(firstName + ' '+ lastName);

/*
Toán tử so sánh
== --> Bằng
!= --> Không bằng
> --> Lớn hơn
< --> Bé hơn
>= --> Lớn hơn hoặc bằng
<= --> Bé hơn hoặc bằng
*/

// var a = 1;
// var b = 2;
// if( a != b) {
//     console.log('Điều kiện đúng');
// }else 
//     console.log('Điều kiện sai');

/*
*Boolean
*/

// var a = 1;
// var b = 2;
// var Success = a > b;
// console.log(Success);

/**
 * If - else
//  */
// const a = 4;
// const b = 4
// if (a >= b) {
//     console.log('DIEU KIEN DUNG');
// }else {
//     console.log('DIEU KIEN SAI');
// }

/**
 * Những value này điều là sai, ngoài những giá trị này thì nó luôn đúng
 * 
 * 0
 * false
 * '' _ ""
 * undefined
 * NaN
 * null
 */

/**
 * Toán tử logic
 * 1. && - And: all condition the true is true
 * 2. || - Or: one in all condition the true is true
 * 3. ! - Not: 
 * 4. ??:       
 */

// let glass = null;

// let newGlass = glass ?? "water";

// console.log(newGlass);

// var a = 1;
// var b = 3;
// var c = 6;
// if(a>0 && b >0){
//     console.log('true');
// }

/*
Data type in JavaScript

1. Dữ liệu nguyên thử -  Primitive Data
giá trị được tạo ra và được lưu vào vùng nhớ và không được thay đổi
giá trị/vùng nhớ đó
    -Number
    -String
    -Boolean:  true / false
    -Undefined: khi biến được tạo và không gán giá trị cho nó
    -Null: Không có gì
    -Symboll:

2. Dữ liệu phức tạp - Complex Data
    -Function: function () {}
    -Object: {}
*/

// Symboll

// var id = Symbol('id'); //unique

// var id2= Symbol('id');

// if(id == id2){
//     console.log(true);
// }

// var myObject = {
//     name: 'Khiem Tran',
//     age: 19,
//     adress: 'Nha Trang',
//     myFunction: function () {

//     }
// }

// var myArray = [ //Array là một đứa con trong Object
//     //dinh nghia mot danh sach
//     'JavaScript',
//     'PHP',
//     'Ruby'
// ];

// how to check data type in JavaScript; typeof <Tên biến>


// Toan tu so sanh - P2

/*
* ===: b1: so sánh về value
b2: nó so sánh luôn về data type

* !==: b1: so sánh về value
b2: nó so sánh luôn về data type

// */

// var a = 1;
// var b = '1';

// // vd ===
// console.log(a===b);

// // vd !==
// var a = '1';
// var b = 1;
// console.log(a!==b);


/**
 * Câu điều kiện và phép so sánh
 */
// Toán tự logic không trả về kiểu boolean mà nó trả về kết quả của các
// phép so sánh. Tức là nó sẽ trả kết quả của một trong 2 vế thôi 

// var result = 'A' && null && undefined && 'C';
/**
 * Những giá trị sai (Nhắc lại lần nữa), những giá trị khác 6 giá trị này kết quả là đúng
 * null
 * 0
 * false
 * '' or ""
 * undefined
 * NaN
 */
// Nó kiểm tra, nếu mà kết quả trả về là sai, thì nó sẽ lấy giá trị
// của kết quả đó gán vào biến của mình.

// console.log(result);

// var result = 'a'||'b'||'c';
// Nó sẽ kiểm tra xem nếu kết quả trả về đúng thì nó sẽ lấy 
// giá trị của kết quả đó gán vào biến của chúng ta mà không cần quan tâm đến những giá trị khác
// console.log(result);


/**
 * String in JavaScript
 * 1. Created String
 * -Các cách tạo chuỗi: 
 * -Nên dung cách nào? Lý do là gì?
 * -Kiểm tra data type
 * 2. Một số case sử dụng backslash(\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 */

/*
1. Tạo chuỗi:
-Có 2 cách để tạo chuỗi
-Nên dùng cách 1 về cách số 2 dài hơn và nó có từ khóa new, liên qua đến khởi tạo đối tượng và
kiểu dữ liệu được tạo ra chúng ta không mong muố (Object).


*/

// // Cách 1
// var fullName = 'Khiêm Trần';
// Cách 2
// var fullName = new String('Khiêm Trần');
// console.log(typeof fullName);

//2. Một số case sử dụng backslash (\):
// trong một chuỗi của JS thì nó sẽ không biết được là đâu là dấu mở đâu là dấu đóng
// vì vậy chúng ta sẽ sử dấu \ trong chuỗi của mình. 
// var fullName = 'Khiêm Trân \'the best in programming world\', and a person important in the company of himself';
// console.log(fullName);

// // 3. Độ dài chuỗi
// console.log(fullName.length);
// // 4. Độ dài của một dòng code không quá 80 từ
// // 5. Template string ES6
// var firstName = "Khiêm";
// var lastName = "Trần";
// console.log(`Tôi là: ${firstName} ${lastName}`);

// ============================= //
/*
var myString = 'Học JS JS tại F8!'
/**
 * Làm việc về chuỗi
 * 1. Length
 * 2. Find index: Tìm vị trí
 * 3. Cut string
 * 4. Replace : Ghi đè
 * 5. convert to uppercase: chuyển sang kí tự in hoa
 * 6. convert to lowercase: chuyển sang kí tự in thường
 * 7. strim: Chuẩn hóa chuỗi (Chỉ xóa khoảng trắng ở đầu và cuối)
 * 8. split: Chuyển đổi chuỗi thành mảng.
 * 9. get a character by index: Lấy 1 kí tự bởi 1 vị trí cho trước


// 1: Length
console.log(myString.length);
/**
 * 2. Find index: Mình sẽ ghi kí tự và nó sẽ tìm đúng chỉ mục
 * đầu tiên của kí tự đó. Nếu mình gọi không có trong chuỗi thì nó sẽ
 * trả về -1


console.log(myString.indexOf('JS'));
console.log(myString.indexOf('la')); // trả về -1 nếu kí tự không có trong chuỗi

console.log(myString.indexOf('F8',6));
// Nó sẽ tìm kiếm kí tự sau một chỉ mục nhất định
// Nếu trong một chuỗi có nhều kí tự/từ trùng nhau mà chúng ta muốn
// tìm kí tự ở cuối cùng thì chùng ta có thể sử dụng cách sau
console.log(myString.lastIndexOf('JS'));

// 3. Cut string: Cắt chuỗi, sử dụng từ khóa "slice"
var fullName = 'Tôi tên là Khiêm';
console.log(fullName.slice(4,8));//Dùng cách này thì chúng ta sẽ cắt từ 
// vị trí mà chúng ta muốn cắt đến trước vị trí chúng ta muốn dừng

// Cách cắt từ vị trí muốn cắt đến cuối chuỗi
console.log(fullName.slice(1));

// 4. Replace: Ghi đè, Sử dụng từ khóa ""replace"
var mylanguage = 'C là C C C ngôn ngữ mà chúng ta phải biết tư duy';
console.log(mylanguage.replace('C','JavaScript')); //Cách này nó chỉ ghi đề phần tử đầu
// Cách thay thế hết tất cả
console.log(mylanguage.replace(/C/g,'JavaScript'));

//5. Chuyển sang in hoa hết
console.log(mylanguage.toUpperCase());
//6. Chuyển sang in thường hết
console.log(mylanguage.toLocaleLowerCase());

//7. Strim: Chuẩn hóa chuỗi (Nhưng chỉ xóa khoảng cách đầu và cuối)
var mySentence =  '          we should       learn English beacause it hepl us make much money and learn culture of one contryside       '
console.log(mySentence.length);
console.log(mySentence.trim());
console.log(mySentence.trim().length);

//8. split: Chuyển đổi chuỗi thành mảng

var mylanguages = 'Ruby, PHP, JavaScript, C, C++';
console.log(mylanguages.split(', '));
// ', ' là cái giống nhau trong chuỗi, nó dựa vào đó để
// chuyển hóa thành mảng
// Nếu mình không truyền những kí tự giống nhau của tất cả các từ
// thì nó sẽ chuyển mỗi kí tự thành một phần từ của mảng
console.log(mylanguages.split(''));
// Nếu các bạn không truyền gì vào thì nó sẽ đưa nguyên chuỗi đó thành một mảng
console.log(mylanguages.split());

// 9. get a character by index: Lấy một kí tự bởi một vị trí cho trước, Dùng từ khóa: charAt
// Cách 1: sử dụng charAt
console.log(mylanguages.charAt(-10)); //truyền sai thì nó sẽ trả về rỗng
// cách 2: sử dụng []

console.log(mylanguages[-100]); // Nếu truyền sai thì trả về undefined
*/

// ================ //

// **** Kiểu số (Number) trong JavaScript

/*
1. Tạo giá trị Number
    -Các cách tạo
    -Dùng cách tạo nào? Tại sao?
    -Kiểm tra data type

2. Làm việc với Number
    -To String: Chuyển sang kiểu chuỗi
    -To Fixed: Làm tròn số
 */
/*
var age = 19;
console.log(age);
console.log(typeof age);
var otherNumber = new Number(19);
console.log(otherNumber);
console.log(typeof otherNumber);

// Nếu thực hiện một phép tính không hợp lệ thì nó sẽ chuyển thành "NaN"

var result = 200 / 'abc';
console.log(result);
console.log(typeof result); //Mặc dù nó trả về NaN những kiểu dữ liệu của nó vẫn là Number
// NaN không phải là số, nhưng nó là sẽ đại diện cho một số không hợp lệ.

// Muốn kiểm tra xem kết quả hoặc phép tình của mình có phải là NaN không thì: 
console.log(isNaN(result));


// 2. Làm việc với number

console.log(age.toString()); //Lúc này KDL của nó cũng là String
var Pi = 3.14;
console.log(Pi.toFixed(3));
// Nếu chúng ta k truyền gì vào trong hàm method toFixed() thì nó sẽ là tròn dưới hoặc trên 
// theo tùy trường hợp, ví dụ: nếu 3.14 => 3, còn 3.5 =>4
// Tức là sau dấu , nếu >= 5 thì làm tròn trên, ngược lại làm tròn dưới.

console.log(typeof Pi.toFixed(3)); //Sau khi sd toFixed thì nó sẽ chuyển sang KDL string   
*/


//  ========================== //

/**
 * Mảng trong JavaScript - Array
 * 1. Tạo mảng
 *  - How to create array
 *  - what do we should use way? why?
 *  - check data type?
 * 2. Truy xuất mảng
 *  - Độ dài mảng
 *  - Lấy phần tử theo index
 */

// Array có thể chứa tất cả các KDL trong JavaScript
// KDL của Array là Object 
// var languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'Python',
// ];

// var languages1 = [
//     'Java'
// ]

// console.log(languages.toString());
// console.log(languages.join());
// console.log(languages.pop());
// console.log(languages.push('world'));
// console.log(languages.shift());
// console.log(languages.unshift('Dart'));
// console.log(languages);
// console.log(languages.splice(1,2));
// console.log(languages.splice(1,0,'Hello')); //Chèn
// console.log(languages.concat(languages1));
// console.log(languages.slice(0,1));

// // Cách kiểm tra một cái có phải là Array hay không
// console.log(Array.isArray([]));

// // Độ dài
// console.log(languages.length);
// // Cách lấy phần tử theo index
// console.log(languages[2]);

/**
 * Làm việc với mảng
 * 1. To String: chuyển sang KLD chuỗi
 * 2. Join: chuyển thành một chuỗi
 * 3. Pop: Xóa đi phần tử cuối cùng và trả về pt đó
 * 4. Push: thêm 1 / nhiều pt vào cuối mảng.Trả về số pt trong mảng mới
 * 5. Shift: Xóa pt ở đầu mảng và trả về pt đã xóa. Trả về
 * undefined khi đã xóa hết các pt trong mảng.
 * 6. Unshift: Thêm 1/nhiều phần tử đầu mảng và trả về độ dài
 * mới của màng
 * 7. Splicing: Xóa / chèn 1 pt trong mảng
 * *Xóa: vd: languages.splice(1,1)
 * *Chèn: languages.splice(1,0,'Dart')
 * 8. Concat: Dùng để nối mảng.
 * 9. Slicing: Cắt 1 / toàn bộ element
 */

// nó chỉ có thể xóa được đến hết mảng, nếu hơn nữa thì nó vẫn trả về 
// số lương đã xóa từ vị trí xóa đến hết mảng

/**
 * Function
 * 1: Hàm?
 *  là một khối mã
 * làm 1 việc cụ thể
 * 2. Loại hàm
 * -Built-in
 * - Tự định nghĩa
 * 3. Tính chất
 * -Không thực thi khi định nghĩa
 * - Sẽ thực thi khi được gọi
 * - Có thể nhận tham sô
 * -Có thể trả về 1 giá trị
 * 4.Tạo hàm 
 */

// function showDiaLog() {
//     alert('hi xin chào các bạn');
// }


// showDiaLog();

// Tham số hàm 
/*
1. Tham số?
    - Định nghĩa?
     là một giá trị truyền vào khi gọi một func, dùng để tính toán hay xử lý dữ liệu
   
     - Kiểu dữ liệu?: Có thể tạo nhiều kiểu dữ liệu trong hàm. Không giới hạn.
   
     - Tính private?: tham số có tính cục bộ, sử dụng trong hàm
   
     - 1 tham số 
    
     - Nhiều tham số
     -- Nếu mình truyền vào 2 tham số nhưng chỉ sd 1 tham số thì nó 
     sẽ trả về undefined

2. Truyền tham số
    -  1 tham số
    
    -  Nhiều tham số

3. Arguments?

    - Đối tượng Arguments
    - giới thiệu vòng lặp For of
*/

// function writelog(message) {
//     console.log(message);
//     //when it in the function so it call name is: tham số

// }

// writelog('Test message'); //when it out function so it called name: đối số


// return trong hàm JS
// trong một hàm  mà không trả về thì nó sẽ trả về undefined
// trong hàm sẽ trả về bất kì kiểu dữ liệu nào
// function cong(a, b) {
//     a+b;
// }

// var result = cong(4,5)
// console.log(result);

/**
 * Một số điều cần biết về function
 * 1. Khi function đặt trùng tên?
 * 2. Khai báo biến trong hàm?
 * 3. Định nghĩa hàm trong hàm?
 * 
 */

// 1. Khi function đặt trùng tên?
// Khi mình định nghĩa ra hai function trùng tên
//function định nghĩa sau sẽ ghi đè lên function định nghĩa trước
// function showMessage() {
//     console.log('messgae1');
// }
// function showMessage() {
//     console.log('messgae2');
// }

// showMessage();

//2. Khai báo biến trong hàm?
// => có

// function showMessage() {
//     var fullName = 'Khiem Tran';
//     //pham vi hoat dong trong function: bien cuc bo
//     console.log(fullName);
// }

// showMessage();

// 3. Định nghĩa hàm trong hàm?
// => Có

// function showMessage() {
//     function showMessage2() {
//         console.log('Message 2');
//     }
//     showMessage2();
// }

// showMessage();

// ====================================================================== //

// Review knowledge

// alert('xin chao moi nguoi')
// confirm('hello mn')
// console.log(confirm('hello'))
// console.log(prompt('ban hay nhap so tuoi cua minh'));

// var a = 2;
// var b = 1;
//setTimeout: nó sẽ thực thi khối code khi qua một khoản thời gian nào đó
// mà chúng ta sẽ set cho nó
// setTimeout (
//     function showMessage() {
//         console.log('this is message');
//     }
// ,2000)

// //SetInterval: nó sẽ thực thi liên tục sau một khoảng thời gian nào đó
// setInterval (function total() {
//     var result = a + b;
//     console.log(result + Math.random());
// },1000)


// var a = 9;
// var b = a--;

// console.log(b);//return về biến copy nếu là hậu tố.
// console.log(a);

// // Câu điều kiện If - else
// a = 2;
// b = 2;
// if(null){
//     console.log('điều kiện đúng');
// } else {
//     console.log('điều kiện sai');
// }
//Câu điều kiện. Nếu ngoài 6 giá trị này thì kết quả luôn đúng.
/**
 * 1. 0
 * 2. false
 * 3. NaN
 * 4. undefined
 * 5."" or ''
 * 6. Null
 */

//Toán sử so sánh === or !== : toán tử so sánh tuyệt đôi

//====================================================//

//Làm việc với chuỗi
// var fullName = '      Im Khiêm      ';
// console.log(fullName.length);

// console.log(fullName.indexOf('m',3)); //nếu truyền vào một giá trị kh đúng trả về -1

// console.log(fullName.search('khiem')); //Trả về vị trí đầu của từ

// console.log(fullName.slice(2));// Cắt chuổi

// console.log(fullName.split(' ')); //Chuyển chuỗi thành mảng

// console.log(fullName.replace('Im','I am')); //Ghi đè chữ
// // Nếu chúng ta truyền vào sai giá trị thì nó sẽ trả về đúng cái chuỗi ban đầu

// console.log(fullName.repeat(3,3)); //Lặp lại từ vị trí nào, và giá trị ở sau là số lần lặp

// console.log(fullName.trim()); // Chuẩn hóa chuỗi đầu cuối

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// console.log(fullName.charAt(4)); // lấy một giá trị khi đã biết vị trí

// //====================================================//
// /**
//  * Làm việc với kiểu số
//  * 1. To String: chuyển về KDL String
//  * 2. To Fixed: làm tròn số
//  */

// var soTaiKhoan = 1312321312;
// var soTienDU = 3.1312513512312;

// console.log(typeof soTaiKhoan.toString());

// console.log(soTienDU.toFixed(3)); 

//====================================================//

//Array

// var languages = [
//     'JavaScript',
//     'Dart',
// ]

// var languages2 = [
//     'Python',
//     'Java'
// ]

// console.log(typeof languages); // KDL: Object

// console.log(languages.length); // do dai chuoi

// console.log(languages.concat(languages2)); //Nối 2 mảng lại với nhau

// console.log(languages.toString()); // Chuyển mảng về kdl String

// console.log(languages.join());// chuyển mang về dạng chuỗi

// console.log(languages.shift()); // xóa phần tử đầu mảng
// console.log(languages.pop()); //Xóa phần tử cuối mảng
// console.log(languages.unshift('Ruby','Dart')); //Thêm phần tử đầu mảng và trả về độ dài của mảng
// console.log(languages);

// console.log(languages.push('hello')); // Thêm phần tử cuối mảng và trả về độ dài của mảng
// console.log(languages);

// console.log(languages.slice(1,4)); // Nếu nhập ngoài số phần tử của mảng thì nó sẽ trả về cái mảng rỗng

//========================================================//
//Function in JavaScript (JS)

// function Tong(a,b) { //Tham số
//     return a + b;
// }

// var result = Tong(4,5); // Đối số
// console.log(result);

// //Các loại hàm trong JS:

// //Declaration function: Có thể gọi khi định nghĩa hàm
// function showLog(message) {
//     console.log(message);
// }

// showLog('hello ae ')


// // Expression function

// var showLog2 = function(message2) {
//     console.log(message2);
// }

// showLog2();//nếu không truyền gì vào sẽ trả về undefineda

// setTimeout( function() {

// });

// var myObject = {
//     myfunction: function() {

//     }
// }

//hosting: 

// Arrow function

//=======================================================//
/*
    Polyfill? 
*/


// =================================== //

/**
 * Object: lưu trữ thông tin của một đối tượng cụ thể.
 */

// var myPhone = 'phone'

// var myInfo = {
//     //Có thể biến key thành một chuỗi
//     name: 'Khiem',
//     age: 19,
//     address: 'Nha Trang',
//     [myPhone]: 0388312313,
//     getName: function() {
//         return this.name;
//     }
    

// }
// console.log(myInfo.getName());
// //Thêm key và value nữa sau khi object đã được tạo.
// myInfo.email = 'khiemtran015@gmail.com';
// //cach 2
// myInfo['my-email']  = 'Khiem@gmail.com';

// console.log(myInfo);

// var myKey = 'age';
// //Cách để lấy value ra ngoài
// console.log(myInfo.name); // cách 1

// console.log(myInfo['my-name']); // nếu mình truyền vào key không có thì trả về undefined

// //Cách lấy một value thong qua một biến bên ngoài
// console.log(myInfo[myKey]);

// //Cách xóa một cặp key và value
// delete myInfo.age;
// console.log(myInfo);

//Trường hợp là một function ==>> Phương thước / method
//Others =>> Thuộc tính / Property

// var newName = 'name';

// var courses = {
//     name: 'JavaScript',
//     price: 1200,
//     time: 3,
//     getPrice: function() {
//         return this.price;
//     }
// }

// console.log(courses.getPrice());

// courses.address = 'khiemtran@gmail.com'
// // console.log(courses.name); => lay value
// // console.log(courses['price']); => Lay value
// // console.log(courses); 
// // console.log(courses[newName]); => lay value thong qua mot bien khac
// // delete courses.name; => Xoa mot cap key va value
// // console.log(courses);
// var myEmail = 'email';
// var myInfo = {
//     name: 'Khiem Tran',
//     age: 19,
//     getAge: function() {
//         return this.age;
//     }
// }
// console.log(myInfo);
// myInfo[myEmail] = 'khiemtran@gmail.com'
// myInfo.address = 'Nha trang';
// console.log(myInfo);
// myInfo.phone = 3123125324;
// console.log(myInfo);

// // delete myInfo.age;
// // console.log(myInfo);

// console.log(myInfo.name);
// console.log(myInfo['name']);
// console.log(myInfo.getAge());

/**Object contructor in JavaScript : Xây dựng đối tượng
 * Chữ cái đầu viết hoa
 */

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// var author = new User('Khiem','Tran','Avatar');
// var user = new User('Linh','Tran','Avatar');
// console.log(author.getName());
// console.log(user.getName());


// function Oto(brand,price,years){
//     this.brand = brand;
//     this.price = price;
//     this.years = years;
//     this.getBrand = function() {
//         return this.brand;
//     }
// }

// var ferrari = new Oto('Ferrari','1200000','2024');
// var honda = new Oto('HonDa','10000','2024');

// //Nếu chúng ta thêm một key và value mới trên một object thì sẽ bị lỗi
// ferrari.vip = 'limit on the world';
// honda.limit = 'this is has 1000 car on the world';


// console.log(ferrari.getBrand());
// console.log(honda.getBrand());


// function User(firstName,lastName,avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() { //muon lay ve full name cua doi tuong
//         return `${firstName} ${lastName}`;
//     }
// }

// var author  = new User('Khiem','Tran','Avatar');
// var user  = new User('Linh','Tran','Avatar');

// author.title = 'Hello moi nguoi';
// user.comment = 'Em chao anh, khong biet hom nay anh se day cai gi';

// console.log(author.getName());
// console.log(user.getName());


// ========================================= //
/*
    Object prototype: Nguyên liệu  - Basci

    1.What is Prototype? => Nguyên mẫu/ Khuôn
    2. when we use it? =>
*/

// function User(firstName,lastName,avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }

// //Su dung Prototype
// User.prototype.className = 'KhiemTran';
// User.prototype.getClassName = function() {
//     return this.className;
// }
// var author = new User('Khiem','Tran','Avatar');
// var user = new User('Linh','Tran','Avatar');

// console.log(author);
// console.log(user);


// //Đối tượng Date => lấy ra giá trị thời gian
// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// var thu = date.getDay() + 1;
// //Get day la lay ra so ngay trong tuan va chay tu 0->6
// console.log(date);
// console.log(`Thứ ${thu} Ngày ${day} Tháng ${month} Năm ${year}`);


// ============================================= //

// Cây lệnh rẽ nhánh - If else

// var date = 4;

// if (date === 2) {
//     console.log('Hôm nay là thứ 2');
// }else if (date === 3) {
//     console.log('Hôm nay là thứ 3');
// }else if (date === 4) {
//     console.log('Hôm nay là thứ 4');
// } else {
//     console.log('Vui lòng nhập lại, bạn đã nhập sai dữ liệu');
// }


// // Câu lệnh rẽ nhánh - Switch
// var date = 3;
// /*
//     Chú ý: Khi mà một case nào đó đúng thì những case bên dưới nó đều
//     đúng, nếu mình không sd câu lệnh break để thoát ra thì nó sẽ thực
//     thi các câu lệnh bên dưới.
// */
// switch(date) {
//     case 2:
//         console.log('Thu 2');
//         break;
//     case 3:
//         console.log('Thu 3');
//         break;
//     case 4:
//         console.log('Thu 4');
//         break;
//     case 5:
//         console.log('Thu 5');
//         break;
//     default:
//         console.log('Sai du lieu');                  
// }


// Toán tử 3 ngôi - Ternary operator

// var courses = {
//     name: 'JavaScript',
//     coin: 250
// }

// // if (courses.coin > 0) {
// //     console.log(`${courses.coin} Coin`);
// // } else {
// //     console.log('Free');
// // }

// var result = courses.coin > 0 ? `${courses.coin} Coin` : 'Free'; 
// console.log(result);

// var a = 3;
// var b = 4;
// var c = a > b ? a : b;
// console.log(c);


// ======================================= //

/*
    Vòng lặp: FOR
*/
// var myArray = [
//     'JavaScript',
//     'PHP',
//     'Java'
// ]


// //cach lay mot gia tri trong mang ra
// var arrayLength = myArray.length; // Viet nhu nay se toi uu hon
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
// }

// //For/in loop : Dùng nó để lấy những key của đối tượng.

// //Object
// var myInfo = {
//     name: "Khiem Tran",
//     age: 19,
// }

// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }

// //Mang
// var languages = [
//     'JavaScript',
//     'PHP',
//     'Dart'
// ]

// for (var key in languages) {
//     console.log(languages[key]);
// }

// //Chuoi
// var myString = 'JavaScript';
// for (var key in myString) {
//     console.log(myString[key]);
// }

// //For/of loop
// // Muon lay ra cac phan tu cua mang / lay tung chu cai cua chuoi

// var languages = [
//     'JavaScript',
//     'PHP'
// ]

// for (var value of languages) {
//     console.log(value);
// }

// //Chuoi

// var myLanguage = 'JavaScript';
// for (var value of myLanguage) {
//     console.log(value);
// }

// //Object => khong phai la mot doi tuong co the dung for/of de lap

// var myInfo = {
//     name: 'Khiem Tran',
//     age: 19,
// }
// console.log(Object.keys(myInfo)); // lap qua cac key
// for (var value of Object.keys(myInfo)) { // sd key de lay value
//     console.log(myInfo[value]);
// }

// console.log(Object.values(myInfo));

// for( var value of Object.values(myInfo)) {
//     console.log(myInfo);
// }

// // For/in

// var languages = [
//     'JavaScript',
//     'PHP'
// ]

// for (var key in languages){

//     console.log(languages[key]);
// }

// var myInfo = {
//     name: 'Khiem Tran',
//     age: 19
// }

// for(var key in myInfo) {
//     console.log(myInfo[key]);
// }


// // For / of

// var languages = [
//     'JS',
//     'Java',
//     'Python'
// ]

// for(var value of languages) {
//     console.log(value);
// }

// var myInfo = {
//     name: "Linh Tran",
//     age: 15
// }
// // For/of khong cho lay gia tri ra tu Object,
// //vi the chung ta se su dung Object.values(ten Object) de lay value
// for(var value of Object.values(myInfo)) { 
//     console.log(value);
// }

//Vong lap While
//in ra gia tri so tu 1 -> 1000
// var i = 0;
// while (i < 1000) {
//     i++;
//     console.log(i);
// }

// var myArray = [
//     'JS',
//     'PHP'
// ]

// var i  = 0;
// while (i<myArray.length) {
//     console.log(myArray[i]);
//     i++;
// }

// // Do/While loop
// // ra mot day so tang dan tu 1 den 10

// var i = 0;

// var isSuccess = false;

// do {
//     i++;
//     console.log('Nap the lan ' + i);
//     if(true) {
//         isSuccess = true;
//     }
// }while(!isSuccess && i <= 3)


// // Vong lap long nhau
// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]

// for ( var i = 0; i < myArray.length;i++) { // chay tung mang con
//     for(var j = 0; j<myArray[i].length; j++) {// chay tung phan tu cua mang con
//         console.log(myArray[i][j]);
//     }
// }

// // vd mo rong ve vong lap

// for(var i = 100; i > 0; --i) {
//     console.log(i);
// }

// for (var i = 0; i<= 100;i+=5){
//     console.log(i);
// }

// for (var i = 100; i >= 0; i-=5){
//     console.log(i);
// }


// ======================================================= //

// Lam viec voi mang trong JavaScript | Array methods (Phan 2)

/*
    Array methods:
        forEach(): Duyet qua tung phan tu cua mang
        every(): Duyet qua het tat ca cac phan tu cua mang va tat ca cac pt deu dung
        some(): Tra ve phan tu va index: Duyet qua het tat ca cac pt cua mang va giong nhu Toan tu SS Or
        find()
        filter()
        map()
        reduce()
 */


// var courses = [
//     {
//         id: 1,
//         name: 'JavaScript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'Java',
//         coin: 400
//     },
//     {
//         id: 3,
//         name: 'Python',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'Ruby',
//         coin: 1000
//     },
//     {
//         id: 5,
//         name: 'C',
//         coin: 200
//     },
//     {
//         id: 6,
//         name: 'Dart',
//         coin: 200
//     }
// ];


// courses.forEach(function(course,index) {
//     console.log(course); //duyet qua tung phan tu cua mang
// })

// var priceCourse = courses.every(function(course,index) {
//     return course.coin === 200; // duyet qua tat ca phan tu, va phai deu dung
// })

// console.log(priceCourse);

// var isFree = courses.some(function(course,index) {
//     return course.coin === 0; // duyet qua tat ca cac pt va sd toan tu OR de so sanh
// })

// console.log(isFree);


// var haveJava = courses.find(function(course,index) {
//     return course.name === 'Java'; //tim kiem mot duy nhat
// })
// console.log(haveJava);

// var course = courses.filter(function(course, index) {
//     return course.coin === 200; //Tra ve nhung thang thoa dieu kien
// })

// console.log(course);

// //forEach // Duyet qua tung phan tu cua mang

// courses.forEach(function(courses, index) { //TS1:tung phan tu cua mang
//     //TS2: tra ve chi muc cua mang
//     console.log(index, courses);
// });

// // Every: Tat ca phai deu dung

// // var isFree = courses.every(function() {
// //     return courses.coin === 0;
// // });

// // console.log(isFree);

// var isFree = courses.some(function(courses, index) {
//     return courses.coin === 0;
// });

// console.log(isFree);    


// // Find: Chi tim duoc mot doi tuong

// var course = courses.find(function(course, index) {
//     return course.name === 'Java';
// })

// console.log(course);

// //Filter: Tra ve tat ca cac phan tu thoa man dieu kien

// var course = courses.filter(function(course, index) {
//     return course.coin === 200;
// });
 
// console.log(course);

// Array map method trong JavaScript: tra ve mot array

// var courses = [
//     {
//         id: 1,
//         name: 'JavaScript',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'Ruby',
//         coin: 230
//     },
//     {
//         id: 3,
//         name: 'Dart',
//         coin: 612
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 900
//     },
// ]

// function courseHandler(course,index,originArray) {
//     return {
//        id: course.id,
//        name: `Khoa hoc: ${course.name}`,
//        coin: `Gia tien khoa hoc: ${course.coin}`,
//        index: index,
//        originArray: originArray
//     }
// }

// var newCourses = courses.map(courseHandler);

// console.log(newCourses);


// function courseHandler(course,index,originArray) { //index: key cua chung ta //return ve cai gi
//     //thi no se tra ve dung cai ma minh return
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coiText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: originArray
//     }
// };

// var newCourses = courses.map(courseHandler);
// console.log(newCourses);

//Reduce: muon nhan ve mot phan tu duy nhat khi chung ta tinh toan trong mot array
//=> neu khong dung reduce thi dung vong lap

//1. Dễ hiểu: loop
//2. Ngắn gọn: Array methods / reduce
//3. Hiệu năng: loop


// var totalCoin = 0;
// for(var course of courses) {
//     totalCoin += course.coin;
// }
// console.log(totalCoin);


// REDUCE
// Biến lưu trữ
// Thực hiện việc lưu trữ

//Khi không có giá trị khởi tạo thì nó sẽ lấy giá trị của pt đầu tiên

// Khi mong muốn nhận được KLD là gì,giá trị gì thì hãy có giá trị khởi tạo.
//nếu khi không đặt mà nó vẫn ra giá trị mà chúng ta muốn thì không cần truyền

//Giá trị khởi tạo không bắt buộc. Nhưng không phải bài toán nào cũng không khởi tạo
//tùy vào trường họp thì chúng ta sẽ có những cách xử lý khác nhau

// var i = 0;

// function coinHandler(accumulator,currentValue,currentIndex,originArray) {
//     i++; // Mỗi lần lặp qua thì các phần tử trong mảng được gọi lại
//     console.table({
//         'Lượt chạy: ': i,
//         'Biến tích trữ': accumulator,
//         'Giá trị hiện tại: ': currentValue.coin,
//         'Tổng thu được: ': currentValue.coin + accumulator
//     })

//     return currentValue.coin + accumulator;
// }

// var totalCoin = courses.reduce(coinHandler, 0); // 0: giá trị khởi tạo (gtri ban đầu)
// console.log(totalCoin);


// var numbers = [100, 230, 612, 900];

// var totalCoin2 = numbers.reduce(function(total,number) {
//     return total + number;
// });

// console.log(totalCoin2);

//============ Bài tập ============

// 1. Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutPut,depthItem) {
//     return flatOutPut.concat(depthItem);
// },[]);

// console.log(flatArray);_

// // 2. Lấy ra các khóa học đưa vào 1 mảng mới

// var topics = [
//     {
//         topic: 'Front-end',
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "Javascript"
//             },
//         ]
//     },
//     {
//         topic: 'Back-end',
//         courses: [
//             {
//                 id: 1,
//                 title: "NodeJS"
//             },
//             {
//                 id: 2,
//                 title: "PHP"
//             },
//         ]
//     },
// ]

// var newCourses = topics.reduce(function(course,topic) {
//     return course.concat(topic.courses);
// },[]);

// console.log(newCourses);

// var html = newCourses.map(function(course) {
//     return `
//         <div>   
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `;
// })

// console.log(html.join());


// ==================== //

// Phương thức includes : tồn tại trong prototype Array, String

// console.log(Array.prototype.includes);

// //Trong chuỗi: Dùng để kiểm tra xem 1 chuỗi có nằm trong 1 chuỗi hay không?
// var title = 'Responsive web design';

// console.log(title.includes('Responsive', 1)); 
// // Đối số thứ 2 là: 1 Chỉ số để bắt đầu tìm kiếm

// //Trong mang: Dùng để kiếm tra xem 1 pt có nằm trong mảng hay không?
// var courses = ['JS','PHP'];

// console.log(courses.includes('JS'));
// Đối số thứ 2 là: Chỉ số để bắt đầu tìm kiếm

// ==================================================== //
/*
//Đối tượng Math - JS math object

1. Math.PI
2. Math.round() => Làm tròn. >=5 -> trên / <5 -> dưới
3. Math.abs() => Trị tuyệt đối
4. Math.ceil() => Làm tròn trên
5. Math.floor() => Làm tròn dưới
6. Math.random() => Tạo một số thập phân ngẫu nhiên nhỏ hơn 1
7. Math.min()
8. Math.max()
*/


// console.log(Math.PI);
// console.log(Math.round(1.345));
// console.log(Math.abs(-8));
// console.log(Math.ceil(-8,312312)); 
// console.log(Math.floor(.3131));
// console.log(Math.min(-8,5));
// console.log(Math.max(-8,10));


// ====================================== //

/*

-Callback?

+Là hàm (function) được truyền qua đối số khi gọi hàm khác gọi

1. Là hàm
2. Được truyền qua đối số
3. Được gọi lại (trong hàm nhận đối số)

// */

// function myFunction(param) {
//     if(typeof param === 'function'){
//         param(12312);
//     }
// }

// function myCallback(value) {
//     console.log('Value: ',value);
// }

// myFunction(myCallback);

// Callback - Phần 2?

// Array.prototype.map2 = function(callback) {

//     let output = [],  arrayLength = this.length;
//     for(var i = 0 ; i < arrayLength; i++) {
//        var result =  callback(this[i],i);
//        output.push(result)
//     }

//     return output;
// }

// var courses = [
//     'JS',
//     'PHP',
//     'Ruby'
// ]

// courses.map(function(course) {
//     console.log(course);
// });

// let htmls = courses.map2(function(course, index) {
//     return `<h2>${course}</h2>`
// });

// console.log(htmls);
// console.log(htmls.join(''));

// var courses = [
//     'Javascript',
//     'PHP'
// ];

// courses.length = 10;

// for (var index in courses) {
//     console.log(courses[index]);
// }

//Xay dung phuong thuc forEach
//forEach không return  

// Array.prototype.forEach2 = function(callback) {
//     for(var index in this) { //Vi thằng for in không chỉ duyệt 
//         //những element nằm trong mảng mà còn duyệt qua những element nằm
//         //trong prototype
//        if( this.hasOwnProperty(index)){ //kiểm tra xem  element có nằm trong thuộc tính gần nhất không
//             callback(this[index],index,this);
//        }
//     }
// }
// var courses = [
//     'Javascript',
//     'PHP',
//     'Dart'
// ];
// courses.length = 1000;
// courses.forEach2(function(course,index,originArray) {
//     console.log(course,index,originArray);
// });


//Xây dựng phương thước filter: lộc qua những pt thỏa mản điều kiện.


// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for(var index in this) {
//         if( this.hasOwnProperty(index)){
//             var result = callback(this[index],index,this);
//             if(result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }
// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: 'Ruby',
//         coin: 730
//     },
//     {
//         name: 'Java',
//         coin: 980
//     },
//     {
//         name: 'Dart',
//         coin: 880
//     },
// ];

// var filterCourses = courses.filter2(function(course,index,array) {
    
//     return course.coin > 700;
// });


//Xây dựng phương thức some2: tối thiểu một phần tử của mạng đúng
// vả trả về true / false


// Array.prototype.map2 = function(callback) {
//     let output = [], arrayLength = this.length;
//     for(var i  = 0; i < arrayLength;i++) {
//         let result = callback(this[i], i);
//         output.push(result);
//     }
//     return output;
// }


// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//             const kq = callback(this[index], index, this);
//             if(kq) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }

// Array.prototype.every2 = function(callback) {
//     var output = true;
//     for(let index in this) {
//         if(this.hasOwnProperty(index)) {
//             const result = callback(this[index], index, this);
//             if(result) {
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// };

// Array.prototype.some2 = function(callback) {
//     for (var index in this) {
//         if(this.hasOwnProperty(index)) {
//             if(this[index], index, this) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// Array.prototype.forEach2 = function(callback) {
//     for(let index in this) {
//         if(this.hasOwnProperty(index)) {
//             console.log(this[index],index, this);
//         }
//     }
// }

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'Ruby',
//         coin: 730,
//         isFinish: true
//     },
//     {
//         name: 'Java',
//         coin: 980,
//         isFinish: false
//     },
//     {
//         name: 'Dart',
//         coin: 880,
//         isFinish: false
//     },
// ];

// var result = courses.filter2(function(course,index,array) {
//     return course.coin > 700;
// });

// console.log(result);

// var result1 = courses.some2(function(course,index,array) {
//     return course.isFinish;
// });

// console.log(result1);

// var result2 = courses.forEach2(function(course,index,array) {
//     console.log(result2);
// });



// var result3 = courses.every2(function(course,index,array) {
//     return course.coin > 800;
// });

// console.log(result3);

// const result4 = courses.map2(function(course,index) {
//     return course;
// });

// console.log(result4);



// // ============================== //

// /*
// 1. Xac dinh duoc diem dung
// 2. Logic handle => tao ra diem dung
// 3.

// */


// function countDown(num) {
//     if(num > 0) {
//         console.log(num);
//         return countDown(num - 1);
//     }
//     return num;
// }

// countDown(10);

// function loop(start,end,callback) {
//     if( start <= end) {
//         callback(start)
//         return loop(start+1, end, callback)
//     }
// }



// var array = [ 'JS', 'PHP']

// loop(0,array.length-1, function(index) {
//     console.log(array[index]);
// });


// function giaiThua(num) {
//     var output = 1;
//     for(var i = num; i > 0; i--) {
//         output *= 1;
//     }
//     return output;
// }
// giaiThua(3);


// function giaiThua2(number) {
//     if(number > 0) {
//         return number * giaiThua2(number - 1);
//     }
//     return 1;
// }

// console.log(giaiThua2(6));