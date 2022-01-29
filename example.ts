const fullName: string = "Alex Egor Anna"

const age: number = 54

const isAdmin: boolean = false

const id: symbol = Symbol()

const stolenDonate: bigint = 54000n

const baz: null = null

const bar: undefined = undefined

const userInfo: object = {
  lastName: "Egor"
}

const nick: any = "marc1k3y"

let myUnknownVar: unknown
if (typeof myUnknownVar === "string") {
  myUnknownVar.length
}

const myGreetingVar: unknown = "Hello world";
(myGreetingVar as string).length

type StrNumNil = string | number | null | undefined

let fooBarBaz: StrNumNil;
fooBarBaz = 42
fooBarBaz = "yo"
fooBarBaz = null

const haters: string[] = ["Sanya", "Patrick"]

const aliases: Array<string> = ["Ali", "As", "Es"]

const bazFoo: [number, number, string, number] = [42, 1, "hello", 13]

const bazBar: Array<number | string> = [13, 4, 7, "world"]

const foo: [number, string, ...boolean[]] = [13, "hello", false, true, true]

function sum(a: number, b: number): number {
  return a + b
}

function logMessage(message: string): void {
  console.log(message)
}

interface User {
  fName: string;
  lName: string;
  aName?: string | null;
}

const user1: User = {
  fName: "Marck",
  lName: "Nab",
  aName: null
}

const user2: User = {
  fName: "Anna",
  lName: "Vin"
}

type Person = {
  readonly fName: string;
  lName: string;
  aName?: string | null;
}

const person1: Person = {
  fName: "Marck",
  lName: "Nab",
  aName: null
}
// person1.fName = "Alex"

const person2: Person = {
  fName: "Anna",
  lName: "Vin"
}

interface Admin extends User {
  canBan: boolean;
}

const admin: Admin = {
  fName: "Marck",
  lName: "Nab",
  aName: null,
  canBan: true
}

interface IndexI {
  [key: string]: number;
}

const infoWithIndexType: IndexI = {
  age: 42
}

type KeyNames = "age" | "amount"

type ArrayKeys = {
  [key in KeyNames]: number
}

const infoWithLimIndexType: ArrayKeys = {
  age: 42,
  amount: 12
}

interface Connection<T> {
  request(url: string): Promise<T>
}

class FetchService<P> implements Connection<P> {
  request(url: string): Promise<P> {
    return fetch(url).then(res => res.json())
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = new FetchService<Post>()
fetchPosts
  .request("https://jsonplaceholder.typicode.com/posts")
  .then(data => console.log(data))

// generic
function echo<T>(data: T) {
  return data
}
const greeting: string = "Hello generic!"
const output = echo(greeting)

function getLength<T extends { length: number }>(data: T) {
  return data.length
}
// fail
// getLength(123123)
getLength({ length: 42 })
getLength("awdnkjwa")
getLength([])

interface Todo {
  id: number;
  uid: number;
  title: string;
  body?: string;
  completed?: boolean;
}

const todo1: Partial<Todo> = {
  title: "Eat"
}

const todo2: Required<Todo> = {
  id: 1,
  uid: 2,
  title: "running",
  body: "tomorrow",
  completed: false
}

const todo3: Readonly<Todo> = {
  id: 1,
  uid: 2,
  title: "running",
  body: "tomorrow",
  completed: false
}
// fail
// todo3.id = 2 

const infoWithRecordUtilityType: Record<string, number> = {
  age: 52
}

const todo4: Pick<Todo, "id" | "title"> = {
  id: 1,
  title: "buy milk"
}

const todo5: Omit<Todo, "id"> = {
  uid: 21,
  title: "buy milk"
}

interface NewTodo {
  text: Todo["title"]
}

const NewTodo1: NewTodo = {
  text: "Kek"
}

enum AuthProvider {
  Email = 1,
  Facebook,
  Google,
  Apple
}

interface UserData {
  id: number;
  authProvider: AuthProvider;
}

const userData: UserData = {
  id: 1,
  authProvider: 1
}

switch (userData.authProvider) {
  case AuthProvider.Apple:
    console.log("Messgae 1")
    break
  case AuthProvider.Email:
    console.log("Messgae 2")
    break
  case AuthProvider.Facebook:
    console.log("Messgae 3")
    break
  case AuthProvider.Google:
    console.log("Messgae 4")
    break
}

function myOwnForEach<T>(data: T[], cb: (item: T) => void) {
  for (let i in data) {
    cb(data[i])
  }
}

myOwnForEach([1,2,3,4,5], (item) => console.log(item))


// task
// string
// const fullName: string = "Фродо Бэггинс";

// // number
// const age: number = 18;

// // boolean
// const hasRing: boolean = true;

// // undefined, null или boolean
// let isSauronAlive: undefined | null | boolean = undefined;
// isSauronAlive = null;
// isSauronAlive = false;

// // array
// const friends: string[] = ["Гэндальф", "Сэм", "Мерри", "Пиппин"];

// const enemies: string[] = ["Саурон", "Саруман"];

// // Реализовать interface Person
// interface Person {
//   fullName: string;
//   address: string;
//   age: number;
// }

// const sam: Person = {
//   fullName: "Сэмуайз Гэмджи",
//   address: "Шир",
//   age: 17
// };

// const pippin: Person = {
//   fullName: "Перегрин Тук",
//   address: "Шир",
//   age: 17
// };

// // Реализовать type Wizard
// type Wizard = {
//   fullName: string;
//   address: string;
// };

// const gandalf: Wizard = {
//   fullName: "Гэндальф Серый",
//   address: "Валинор"
// };

// // interface & class

// interface Maps {
//   addMarker(latitude: number, longitude: number): void;
// }

// // Создать интрефейс Maps и имплементировать его.
// // В интерфейсе должен быть метод addMarker который
// // первым арументом принимает широту (число),
// // а вторым аргументом долготу (число).
// // Метод addMarker ничего возвращает.
// class MapsService implements Maps {
//   addMarker(latitude: number, longitude: number) {
//     // Здесь какая-то реализация добавления
//     // маркера на карту.
//   }
// }

// // Generic
// //
// // Описать тип для функции echo
// // с помощью дженериков.
// function echo<T>(data: T) {
//   return data;
// }

// const echoOutput = echo<number>(42);

// // Описать типы для функции myOwnMap
// // с помощью дженериков.
// // Типы в дженериках должны сами "подхватиться"
// // на лету.
// // В данном примере перменная myOwnMapOutput
// // должна иметь тип 'string[]'.
// function myOwnMap<T>(data: T[], callback: (item: T) => void) {
//   const result = [];

//   for (let i = 0; i < data.length; i++) {
//     result.push(callback(data[i]));
//   }

//   return result;
// }

// const myOwnMapOutput = myOwnMap([1, 2, 3], (item) => item.toString());

// // Реализовать интерфейс Connection
// // в котором есть метод request.
// // Метод request первым аргументом
// // принимает HTTP метод (GET, POST, и т.д),
// // вторым арументом принимает URL, и третим
// // необязательным аргументом принимает данные
// // для POST запроса. Возвращет метод request
// // Promise с данными полученными из сервиса.
// interface Connection<T> {
//   request(method: string, url: string, postData?: string): Promise<T>;
// }
