function echo<T>(input: T): T {
  return input;
}

// string
const result = echo("Hello, Ahmed!"); 
// number
const result2 = echo(42);
// object
const result3 = echo({ name: "Ahmed", age: 30 });
// array
const result4 = echo([1, 2, 3, 4, 5]);


interface ApiResult<T> {
status: string;
data: T;
}

const StringApiResult : ApiResult<string> = {
    status: "success",
    data: "This is a string result"
};

const objectApiResult : ApiResult<{ id: number; name: string }>= {
    status: "success",
    data: { id: 1, name: "Ahmed" }
}

function  first<T>(items: T[]): T {
    return items[0];
}
// An array of numbers
const numbers = [10, 20, 30, 40, 50];
const firstNumber = first(numbers);

// An array of strings
const strings = ["apple", "banana", "cherry"];
const firstString = first(strings);

// An array of objects
const objects = [{ id: 1, name: "Ahmed" }, { id: 2, name: "Ali" }];
const firstObject = first(objects);