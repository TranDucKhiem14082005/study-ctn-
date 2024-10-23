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


// let pElement = document.querySelector('p');

// console.log(pElement.innerText);
// console.log(pElement.textContent);
// pElement.textContent = 'xin chao';
// console.log(pElement.innerText);

// console.log(pElement.innerHTML);

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


// let boxElement = document.querySelector('.box-1');

// // ** Inner

// boxElement.innerHTML = '<h1 title = "Heading">New Heading</h1>' ; //set

// console.log(boxElement); // get

// console.log(document.querySelector('h1').innerText);


//Outer
// console.log(boxElement.outerHTML); // get
// 
// Set

// boxElement.outerHTML = '<spa~n>test</spa~n>' ;

// console.log(boxElement); // còn nhưng trong bộ nhớ => DOM k còn~


// let headingElement = document.querySelector('.heading');

// console.log(headingElement.innerText); // lấy 
// console.log(headingElement.textContent); 
// headingElement.textContent = 'HELLO Guy'; // đặt lại một giá trị
// console.log(headingElement.innerText);

// //Thêm một element vào một element đã có sẵn trong DOM
// //Có thể thêm tất cả các element node, atttribute node, text node
// //  innerHTML / outerHTML

// let boxElement = document.querySelector('.box');

// boxElement.innerHTML =`<h1 >this is head of you, it havent anything in this</h1>`
// //Lấy ra thằng mà mình mới thêm vào
// console.log(boxElement.innerHTML);

// // in ra toàn bộ thằng box khi đã thgitêm Element vào
// console.log(boxElement);

// //Lấy ra Element mới thêm vào
// console.log(boxElement.querySelector('.box h1'));

// //Lấy nội dung của Element mới thêm vào.    
// console.log(boxElement.querySelector('.box h1').textContent);


//  Node properties | HTML DOM

// let boxElement = document.querySelector('.box')

// boxElement.style.width = '400px';
// boxElement.style.height = '300px';
// boxElement.style.backgroundColor = 'blue';

// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '400px',
//     backgroundColor: 'orange',
//     myFunction: function() {

//     }
// })
// console.log(boxElement.style.width); //Lấy ra thuộc tính CSS inline
//Dùng để thêm CSS chứ không phải dùng để CSS

// console.log(boxElement);

//DOM style


// ClassList property

// add:thêm class
//contains: kiểm trả có 1 class trong element 
//remove: xóa
//toggle: Có thì nó sẽ xóa element còn không có thì nó thêm

// let boxElement = document.querySelector('.box');

// console.log(boxElement.classList.length);
// console.log(boxElement.classList.value);
// console.log(boxElement.classList[0]);
// boxElement.classList.add('red','blue');

// console.log(boxElement.classList.contains('red')); //Kiểm tra 1
// //element co một class nào hay không?

// console.log((boxElement.classList.remove('red')));

// setInterval(() => {
//     boxElement.classList.toggle('red'); //Ứng dụng đèn led
// }, 1000);



//DOM events: những sự kiển diễn ra ở trong DOM
//Sự kiến của trình quyệt hay là hành vì của người dùng.

// 1. Attribute events: Sử dụng attribute để lắng nghe những 
//sự kiện của người dùng



// 2. Assign event using the element node: 
//Gán events và sử dụng element node

// let h1Elements = document.querySelectorAll('h1');

// h1Element.onclick = function() {
//     // đoạn code trong này được thực thi khi sự kiện đã diễn ra
//     console.log(Math.random());
//     //Nó chỉ diễn ra khi mình thực hiện vào đúng element đó
// };

// for(var i = 0; i < h1Elements.length; i++) {
//     h1Elements[i].onclick = function(e) {
//         console.log(e.target);
//     }
// };

// h1Elements.onclick = function(e) {
//     console.log(e.target);
//     //target trả lại chính cái element chính các mình đang 
//     //lắng nghe sự kiện
// }



// 1. Input / select


// let inputValue;// sử dụng cách này để lưu gtri của input
// // vào một biến

// let inputElment = document.querySelector('input[type="text"]');

// inputElment.onchange = function(e) {
//     //Sự kiện thay đổi của một cái gì đó
//     //Sự thay đổi đó phải khác giá trị với giá trị vừa bị thay
//     //Sự kiện onchange chạy khi mình trỏ con trỏ chuột ra ngoài
    //     console.log(e.target.value);
// };

// //Muốn gõ đến đâu thì thay đến đó thì sử dụng oninput

// inputElment.oninput = function(e) {
//     inputValue = (e.target.value);
// }

// console.log(inputValue);


// let inputElment2 = document.querySelector('input[type="checkbox"]');
// inputElment2.onchange = function(e) {
//     console.log(e.target.checked);
// };


// let inputElment3 = document.querySelector('select');
// inputElment3.onchange = function(e) {
//     console.log(e.target.value);
// };

// // 2. Key up / down

// let inputElment4 = document.querySelector('input[type="text"]');
// inputElment4.onkeyup = function(e) {
//     console.log(e.target.value);
// }

// PreventDefault & StopPropagation


//1: PreventDefault:loại bỏ hành vi mặt định của trình duyệt trên
//một thẻ HTML

//2: StopPropagation: Loại bỏ sự kiện nổi bọt

// let aElement = document.querySelectorAll('a');

// console.log(aElement);
// for(let i = 0; i < aElement.length; i++) {
//     aElement[i].onclick = function(e) {
//         if(!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }

// let ulElement = document.querySelector('ul');

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = function(e) {
//     console.log(e.target);
// }


// 2 StopPropagation: SỰ kiện nổi bọt/ lan truyền

// document.querySelector('div').onclick = 
//     function() {
//         console.log('DIV');
//     }

//     document.querySelector('button').onclick =
//     function(e) {
//         e.stopPropagation();
//         console.log('CLICK ME~');
//     }


//1. Event listener: Xử lý đồng bộ
//Một sự kiện diễn ra nhưng chúng ta muốn hủy bỏ hoặc lắng nghe
//sự kiện đó tùy theo từng nhiệm vụ của mình

let btn = document.getElementById('btn');

// console.log(btn);

function viec1() {
    console.log('Viec 1');
}

btn.addEventListener('click',viec1);

setTimeout(function() { //Khi đã lắng nghe xong 3s rồi thì sau
    //3s nó không lắng nghe nữa.

    btn.removeEventListener('click', viec1)
},3000)

// btn.addEventListener('click',function(e) {
//     console.log('Event 1');
// })


// btn.addEventListener('click',function(e) {
//     console.log('Event 2');
// })

// btn.addEventListener('click',function(e) {
//     console.log('Event 3');
// })

//DOM event: Trong những trường hợp đơn giản mà không có nhu cầu gỡ bỏ nó
//1. xử lí nhiều việc khi xảy ra: DOM Event: Bat dong bo
//2. Lắng nghe / hủy bỏ lắng nghe
// btn.onclick = function() {
//     console.log('viec 1');
//     console.log('viec 2');
//     console.log('viec 3');

// }