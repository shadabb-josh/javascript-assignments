class Validator {
    constructor(value) {
        this.value = value;
        this.valid = true;
    }

    isString() {
        this.valid = this.valid && typeof this.value === "string";
        return this;
    }

    isNumber() {
        this.valid = this.valid && typeof this.value === "number";
        return this;
    }

    required() {
        this.valid = this.valid && this.value !== null && this.value !== undefined && this.value !== "";
        return this;
    }

    min(length) {
        this.valid = this.valid && this.value.length >= length;
        return this;
    }

    max(length) {
        this.valid = this.valid && this.value.length <= length;
        return this;
    }

    isValid() {
        return this.valid;
    }
}

// Example usage
console.log(new Validator("hello").isString().required().min(3).max(10).isValid()); // true
console.log(new Validator("").isString().required().isValid()); // false
console.log(new Validator(123).isNumber().isValid()); // true
console.log(new Validator(123).isString().isValid()); // false
