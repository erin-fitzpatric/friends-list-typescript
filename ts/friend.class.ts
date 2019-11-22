export class Friend {
    name: string;
    age: number;
    email: string;
    bestFriend: boolean;

    constructor(name: string = "", age: number = 0, email: string = "", bestFriend: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bestFriend = bestFriend;
    }
}