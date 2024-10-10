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

    // let headingNode = document.getElementById('heading');
    // console.log(headingNode);

    // // 1 trang web chỉ có 1 ID duy nhất
    // // Nếu đưa vào ID sai => Null
    // let headingNodes = document.getElementsByClassName('heading');
    // console.log(headingNodes);
    // // ->Trả về HTML collection => có thể sử dụng vòng lặp, lặp qua những element trong đó



    // let headingNode2s = document.getElementsByTagName('p'); // -> select ra thẻ
    // console.log(headingNode2s);

    // //CSS Selecter

    // let headingNode3s = document.querySelectorAll('.box .heading-2');
    // // document.querySelector => trả về đúng thằng mình muốn

    // //-> trả về nodelist (mảng)
    // console.log(headingNode3s); 

    // //HTML collection
    // console.log(document.forms['form-3']);
    // console.log(document.forms.testForm);

    // //document.anchors => trả về a có attribute là name'

    // //Cach 1
    // let listItemNodes = 
    //     document.querySelectorAll('.box-1 li')

    // console.log(listItemNodes);

    // let boxNode = 
    //     document.querySelector('.box-1');

    // //Công việc 1: sử dụng tới `boxNode`

    // // CÔng việc 2: sử dụng tới li element là con của `box.1`
    // console.log(boxNode);

    // console.log(boxNode.querySelectorAll('li'));
    // console.log(boxNode.getElementsByTagName('p'));
    // console.log(boxNode.querySelector('p'));


/*
1. getElementById : return ve truc tiep cai element cua minh
2. getElementByClassName: -> HTML collection
3. getElementByTagName:-> HTML collection
4. querySelector: Trả về trực tiếp element
5. querySelectorAll: -> HTML collection 
6: HTML collection 
7. document.write
*/

// ================================== //

/**
 * Text node in DOM
 * 
 * InnerText && textContent Property
 * => Lấy ra được nội dung hoặc sửa đổi của Text Node trong element
 * 
 * geter : lấy 
 * 
 * seter : đặt / thay đổi
 * 
 * inerText: nếu sử dụng methods geter thì nó sẽ lấy đúng cái
 * // giá trị mà nó đang hiện lên trình duyệt
 * 
 * textContent: Trả về nội dung của nó trong DOM
 */


// let headingElement = 
//     document.querySelector('.heading');


// console.log(headingElement.innerText); //Geter   
// // headingElement.innerText = 'New heading'; // thay đổi nội dung
// console.log(headingElement.textContent);

// headingElement.textContent = 'New heading'; //Set ter

// =============== //

// Thêm một element vào trong một element đã có sẵn
// ví dụ như, trong một thẻ div có class = box bây giờ mình muốn
//Thêm một thẻ h1 có class = name vào trong thẻ div nữa thì mình phải
// làm sao


let boxElement = document.querySelector('.box');

// ** Inner

// boxElement.innerHTML = '<h1 title = "Heading">New Heading</h1>' ; //set

// console.log(boxElement.innerHTML); // get

// console.log(document.querySelector('h1').innerText);


//Outer
// console.log(boxElement.outerHTML); // get
// 
// Set

boxElement.outerHTML = '<span>test</span>' ;

console.log(boxElement); // còn nhưng trong bộ nhớ => DOM k còn