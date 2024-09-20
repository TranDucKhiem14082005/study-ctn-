
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

var a = 1;
var b = 3;
var c = 6;
if(a>0 && b >0){
    console.log('true');
}

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

var id = Symbol('id'); //unique

var id2= Symbol('id');

if(id == id2){
    console.log(true);
}

var myObject = {
    name: 'Khiem Tran',
    age: 19,
    adress: 'Nha Trang',
    myFunction: function () {

    }
}

var myArray = [ //Array là một đứa con trong Object
    //dinh nghia mot danh sach
    'JavaScript',
    'PHP',
    'Ruby'
];

// how to check data type in JavaScript; typeof <Tên biến>