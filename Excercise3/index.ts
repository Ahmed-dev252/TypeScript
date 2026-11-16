// part 1

function fullName(first: string, last: string): string {
  return first + " " + last;
}

// part2

function registerUser (userName: string, language: string='en', isAdmin?: boolean): string {
    return `User ${userName} registered with admin status: ${isAdmin} and preferred language: ${language}`;
}
console.log(registerUser('warsame', 'en', true));
console.log(registerUser('geedi', 'fr'));

// part3

function average(...scores: number[]): number {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
}
console.log(average(85, 90, 78, 92));