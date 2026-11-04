// Завдання 1
let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

// Завдання 2
let anything: any = -20;
anything = "Text";
anything = {};

// Завдання 3
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// Завдання 4
let person: [string, number];
person = ["Max", 21];
console.log(person);

// Завдання 5
enum LoadingStatus {
  LOADING = "LOADING",
  READY = "READY",
}

const status: LoadingStatus = LoadingStatus.LOADING;
console.log(status);

// Завдання 6
let value: string | number;

value = "Mariya";
value = 17;

// Завдання 7
let buttonStatus: "enable" | "disable";

buttonStatus = "enable";
buttonStatus = "disable";

// Завдання 8
function showMessage(message: string): void {
  console.log(message);
}
showMessage("Hello!)");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(calc(5, 5));

function customError(): never {
  throw new Error("Error");
}

// Завдання 9
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

console.log(page1);
console.log(page2);
