class AgeNotValidError extends Error {
    constructor(message) {
        super(message);
        this.name = "AgeNotValidError";
    }
}

// Usage
function validateAge(age) {
    if (age >= 18) {
        throw new AgeNotValidError("Age must be less than 18");
    }
    return "Valid age";
}

try {
    console.log(validateAge(20));  // will throw
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}
