
interface User {
    username: string;
    password: string;
    readonly id: number;
     email?: string;
    
};

function login(user: User): void {
   
    console.log(`Logging in user: ${user.username}`);

    console.log(`User ${user.username} logged in successfully!`);
}


// type  Extra = { email?: string; };


const a1: User = {
  id: 1,
  username: "Hamza",
  password: "password123",
  email: "hamza@example.com"

};

const a2: User = {
    id: 2,
    username: "Axmed",
    password: "secretPassword"
};
login(a1);

a1.id = 2; 

login(a2);