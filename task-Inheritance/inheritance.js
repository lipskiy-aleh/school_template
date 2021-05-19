function BaseBuilder(value) {
    this.value = value;
}

BaseBuilder.prototype.plus = function(...args) {
    for(let arg = 0; arg < args.length; arg++) {
        this.value += args[arg];
    }

    return this;
}

BaseBuilder.prototype.get = function(...args) {
    console.log(this.value);
    return this;
}

function IntBuilder(value) {
    BaseBuilder.call(this, value);

    this.value = value;
}

IntBuilder.prototype = Object.create(BaseBuilder.prototype);
IntBuilder.prototype.constructor = BaseBuilder;

IntBuilder.prototype.minus = function(...args) {
    for(let arg = 0; arg < args.length; arg++) {
        this.value = this.value - args[arg];
    }

    return this;
}

IntBuilder.prototype.multiply = function(n) {
    this.value = this.value * n;

    return this;
}

IntBuilder.prototype.divide = function(n) {
    this.value = this.value / n;

    return this;
}

IntBuilder.prototype.mod = function(n) {
    this.value = this.value % n;
    
    return this;
}

IntBuilder.random = function(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue) ) + minValue;
}

class StringBuilder extends BaseBuilder {
    constructor(value) {
        super(value);

        this.value = value;
    }

    minus(cutNumber) {
        this.value = this.value.slice(0, this.value.length - cutNumber);

        return this;
    }

    multiply(repeatNumber) {
        this.value = this.value.repeat(repeatNumber);

        return this;
    }

    divide(divideNumber) {
        const endValue = Math.floor(this.value.length / divideNumber)

        this.value = this.value.slice(0, endValue);

        return this;
    }

    remove = (removeString) => {
        let a = this.value.search(removeString);

        if(a !== -1) {
            this.value = this.value.slice(0, a) + this.value.slice(a + removeString.length);
            this.remove(removeString);
        }

        return this;
    }

    sub(from, n) {
        this.value = this.value.slice(from, from + n);

        return this;
    }
}


console.log(IntBuilder.random(0, 100));

let intBuilder = new IntBuilder(10).plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();

let strBuilder = new StringBuilder("Hello").plus(" all", "!").minus(4).multiply(3).divide(4).remove('l').sub(1, 1).get();