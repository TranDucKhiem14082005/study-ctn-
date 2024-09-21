
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
 * 3. ! - Not
 */

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
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
    'Python',
];

console.log(languages);

// Cách kiểm tra một cái có phải là Array hay không
console.log(Array.isArray([]));

// Độ dài
console.log(languages.length);
// Cách lấy phần tử theo index
console.log(languages[2]);

/**
 * Làm việc với mảng
 * 1. To String: chuyển sang KLD chuỗi
 * 2. Join: chuyển thành một chuỗi
 * 3.
 */

console.log(languages.toString());