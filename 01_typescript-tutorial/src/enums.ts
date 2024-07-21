enum ServerResponseStatus {
    Success = 200,
    Error = 500,
}

interface ServerResponse {
    result: ServerResponseStatus;
    data: string[];
}

function getServerResponse(): ServerResponse {
    return {
        result: ServerResponseStatus.Success,
        data: ["first item", "second item"],
    };
}

console.log(getServerResponse());

enum BestFriend {
    friend = "Viraj",
}

interface stud {
    name: BestFriend;
}

const Ramesh: stud = {
    name: BestFriend.friend,
};

console.log(Ramesh);

//* CHALLENGE

enum UserRole {
    Admin,
    Manager,
    Employee,
}

type User = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string]; // Tuple: [email, phone]
};

function createUser(user: User): User {
    return user;
}

const user1: User = {
    id: 1,
    name: "Harshal",
    role: UserRole.Admin,
    contact: ["harshal@gmai.com", "123-456-7890"],
};

const Harshal = createUser(user1);
console.log(Harshal);

//* Type Assertion in TS
let someValue: any = "This is string";

let strLength = (someValue as string).length;
