let isDone: boolean = false;
let count: number = 10;
let name1: string = 'name';
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
enum Direction {
    NORTH,
    SOUTH,
    EAST,
    WEST
};
let dir: Direction = Direction.NORTH;

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

function warnUser(): void {
    console.log("this is my warning message");
}

let x: [string, number];
x = ['value', 10];

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

let greet = (message: string | string[]) => {
    if (message instanceof Array) {
        let messages = "";
        message.forEach((msg) => {
            messages += `${msg}`;
        });
        console.log("Received messages ", messages);
    } else {
        console.log("Received message = ", message);
    }
};
greet("string");
greet(["string1", "string2"]);


