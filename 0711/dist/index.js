"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["Regular"] = "regular";
})(Role || (Role = {})); //enum이 아니라 union으로 해도 됨
// 데이터 정의
// Book 모양, User모양, LoanRecord 모양의 객체만 모인다
let libraryBooks = [];
let libraryUsers = [];
let loanRecords = [];
// function isAdmin(user: User): void{
//   if (user.role === Role.Admin){
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
function isAdmin(user) {
    return user.role === Role.Admin; //맞으면 true 아니면 false
    // return 을 true/false 하고 싶으면 그냥 boolean 쓰면 됨!
}
function isRegularUser(user) {
    return user.role === Role.Regular;
}
const user = {
    id: "user-001",
    name: "park",
    role: Role.Admin
};
isAdmin(user);
isRegularUser(user);
const newBook = {
    isbn: "1234",
    title: "doremi",
    author: "wkrrk",
    publishedYear: 1983,
    isAvailable: true
};
function addBook(newBook) {
    console.log("!");
    // if (isAdmin(user) === false) return console.log("불가능한 요청입니다.");
    if (libraryBooks.length === 0) {
        console.log("!!!");
        libraryBooks.push(newBook);
        console.log(libraryBooks);
    }
    else {
        for (let book of libraryBooks) {
            if (book.isbn === newBook.isbn) {
                console.log("@");
                break;
            }
            else {
                console.log("#");
                libraryBooks.push(newBook);
                console.log(libraryBooks);
            }
        }
    }
}
addBook(newBook);
addBook(newBook);
