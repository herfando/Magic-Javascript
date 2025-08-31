// ===== Typed Functions =====
export function greet(name: string): string {   // input: string, return: string
    return "Hello, " + name;
}

export interface User {                           // define interface
    id: number;
    username: string;
}

const user: User = { id:1, username:"magic" };
console.log(greet(user.username));
