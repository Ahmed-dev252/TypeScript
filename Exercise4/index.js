"use strict";
;
function login(user) {
    console.log(`Logging in user: ${user.username}`);
    console.log(`User ${user.username} logged in successfully!`);
}
// type  Extra = { email?: string; };
const a1 = {
    id: 1,
    username: "Hamza",
    password: "password123",
    email: "hamza@example.com"
};
const a2 = {
    id: 2,
    username: "Axmed",
    password: "secretPassword"
};
login(a1);
a1.id = 2;
login(a2);
