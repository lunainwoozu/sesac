enum Role {
  Admin = 'admin',
  Regular = 'regular'
} //enum이 아니라 union으로 해도 됨

interface User {
  id: string;
  name: string;
  role: Role;
}

interface Book {
  isbn: string;
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

interface LoanRecord {
  loanId: number;
  bookIsbn: string;
  userId: string;
  loanDate: Date;
  dueDate: Date;
  returnDate?: Date;
}

// 데이터 정의
// Book 모양, User모양, LoanRecord 모양의 객체만 모인다
let libraryBooks: Book[] = [];
let libraryUsers: User[] = [];
let loanRecords: LoanRecord[] = [];

// function isAdmin(user: User): void{
//   if (user.role === Role.Admin){
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

function isAdmin(user: User): boolean{
  return user.role === Role.Admin; //맞으면 true 아니면 false
  // return 을 true/false 하고 싶으면 그냥 boolean 쓰면 됨!
}
function isRegularUser(user: User): boolean{
  return user.role === Role.Regular;
}

const user: User = {
  id: "user-001",
  name: "park",
  role: Role.Admin
}

isAdmin(user);
isRegularUser(user);

const newBook: Book = {
  isbn: "1234",
  title: "doremi",
  author: "wkrrk",
  publishedYear: 1983,
  isAvailable: true
}

function pAddBook(newBook: Book, user: User){

  if (isAdmin(user) === false) return console.log("불가능한 요청입니다.");
  
  if (libraryBooks.length === 0) {
    libraryBooks.push(newBook);
    console.log(libraryBooks)
  } else {
    for(let book of libraryBooks){
      if (book.isbn === newBook.isbn) {
        break;
      } else {
        libraryBooks.push(newBook);
        console.log(libraryBooks)
      }
    }
  }
  
}

function addBook(newBook: Book, user: User): void {
  // 1. 관리자 권한 확인
  if (!isAdmin(user)) {
    console.log("불가능한 요청입니다.");
    return; // 권한이 없으면 즉시 함수 종료
  }

  // 2. ISBN 중복 확인
  // libraryBooks 배열에 newBook과 동일한 ISBN을 가진 책이 이미 있는지 확인합니다.
  const isDuplicate = libraryBooks.some(book => book.isbn === newBook.isbn);

  // 3. 조건에 따라 도서 추가 또는 메시지 출력
  if (isDuplicate) {
    console.log("이미 존재하는 도서입니다."); // 책이 이미 있으면 알림
  }

  libraryBooks.push(newBook); // 중복이 아니면 새 책을 추가
  console.log("도서가 추가되었습니다:", libraryBooks); // 변경된 라이브러리 상태 출력
}

addBook(newBook, user);

function removeBook(user: User, isbn: string): void {
  // 권한 확인
  if (!isAdmin(user)) return console.log("불가능한 요청입니다.");

  // isbn 맞는 책 찾기
  // const rmb = libraryBooks.find(b => b.isbn === isbn)
  // findIndex는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
  const rmb = libraryBooks.findIndex(book => book.isbn === isbn);

  if (rmb === -1) {
    return console.log("존재하지 않는 도서입니다.");
  }
  
  if (!libraryBooks[rmb].isAvailable){ 
    return console.log("해당 도서는 현재 대출 중으로 삭제할 수 없습니다.")
  }

  // 삭제된 개체 특정 시 사용
  const removebook = libraryBooks.splice(rmb, 1)[0]
  // 해당 ISBN을 가진 도서를 제외한 나머지 도서들로 새 배열을 만듭니다
  // libraryBooks = libraryBooks.filter(book => book.isbn !== isbn);

  console.log(`${removebook} 도서가 삭제되었습니다:`, libraryBooks)
}

function borrowBook(user: User, isbn: string): number {
  // 권한 확인
  if(!isRegularUser(user)) {console.log("불가능한 요청입니다."); return -1;}
  
  // isbn 맞는 책 찾기
  const rmb = libraryBooks.findIndex(book => book.isbn === isbn);

  if (rmb === -1) {
    console.log("존재하지 않는 도서입니다.");
    return rmb; // 없으면 -1 리턴
  }
  
  if (!libraryBooks[rmb].isAvailable) {
    console.log("대출 중인 도서입니다.");
    return -1; // 대출 중인 도서 -1 리턴
  }
  
  console.log(`${libraryBooks[rmb].title} 도서를 대출하였습니다.`);
  libraryBooks[rmb].isAvailable = false;
  return rmb; // 있으면 해당 index 반환
}


function pRegisterUser(me: User, newUser: User){
  if (!isAdmin(me)) return console.log('권한이 없습니다.');

  const isDuplicateId = libraryUsers.findIndex(user => user.id === newUser.id);

  if (isDuplicateId !== -1){
    return console.log('아이디가 중복되었습니다.')
  }

  libraryUsers.push(newUser)
  console.log(`${newUser.name} 회원이 등록되었습니다.`)
}

function registerUser(
  user: User,
  {
    id,
    name,
    role
  }: User
){
  if (!isAdmin(user)) return console.log('권한이 없습니다.');

  if(libraryUsers.some(u => u.id === id)){
    return console.log('중복된 아이디입니다.')
  }

  const newUser: User = {
    id,
    name,
    role
  }

  libraryUsers.push(newUser)
  console.log(`${newUser.name} 회원이 등록되었습니다.`)
}