// HTML DOM //

/*
DOM: Document Object Model
DOM: DOM là một cái cây, gồm có gốc, thân , cành và hoa
DOM: Có 3 thành phần.
1. Element
2. Attribute : thuộc tính
3. Text :  Đoạn chữ / phần tử của DOM

NODE : Điểm giao nhau

*JS có thể thay đổi "Element,attribute,text" khi truy cập vào DOM
*HTML DOM: 

--------------------------------------------------

//Javascript: La phương tiện để truy xuất vào HTML DOM => DPOM k phải của JS
// JS : Browser | Server (NodeJS)

API: Application programming interface: Một ứng dụng mở ra con đường cho một ứng 
dụng khác nhìn thấy hoặc có thể giao tiếp được.

// Brower: HTML -> DOM -> DOM API (WEB API)

----------------------------------
DOM: là đại diện cho cả website => truy cập vào Element,attribute,text
 phải đi qua Document (chứa tất cả những gì trong Website)
*/

//document.write('HELLO GUY!') // Được ghi vào phần tử cuối cùng của body


// =============================================== //


// Lấy ELEMENT trong DOM => đi từ tổng quan đến cụ thể

// Element: ID, class, tag Name (h1,h2,...),
//CSS selector, HTML collection

let headingNode = document.getElementById('heading');
console.log(headingNode);

// 1 trang web chỉ có 1 ID duy nhất
// Nếu đưa vào ID sai => Null
let headingNodes = document.getElementsByClassName('heading');
console.log(headingNodes);

let headingNode2s = document.getElementsByTagName('p');
console.log(headingNode2s);

//CSS Selecter

let headingNode3s = document.querySelector('.box .heading-2');
console.log(headingNode3s);