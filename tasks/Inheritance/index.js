function Builder(value) {
  this.value = value;
}

Builder.prototype.get = function () {
  return this.value;
};

Builder.prototype.plus = function (...args) {
  this.value = args.reduce((state, current) => state + current, this.value);
  return this;
};

function IntBuilder(values) {
  Builder.call(this, values);
  this.value = typeof this.value !== 'undefined' ? this.value : 0;
}

IntBuilder.prototype = Object.create(Builder.prototype);
IntBuilder.prototype.constructor = IntBuilder;

IntBuilder.prototype.minus = function (...args) {
  this.value = args.reduce((state, current) => state - current, this.value);
  return this;
};

IntBuilder.prototype.multiply = function (value) {
  this.value *= value;
  return this;
};

IntBuilder.prototype.divide = function (value) {
  this.value /= value;
  return this;
};

IntBuilder.prototype.mod = function (value) {
  this.values %= value;
  return this;
};

IntBuilder.random = function random(max, min) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

class StringBuilder extends Builder {
  constructor(value) {
    super();
    this.value = value || '';
  }

  minus(n) {
    this.value = this.value.substr(0, this.value.length - n);
    return this;
  }

  multiply(int) {
    this.value = new Array(int).fill(this.value).join(' ');
    return this;
  }

  divide(n) {
    const k = Math.floor(this.value.length / n);
    this.value = this.value.slice(0, k);
    return this;
  }

  remove(str) {
    this.value = this.value.split(' ').reduce((acc, item) => {
      if (item !== str) {
        acc.push(item);
      }
      return acc;
    }, []).join(' ');
    return this;
  }

  sub(from, to) {
    this.value = this.value.substr(from, to);
    return this;
  }
}

const str = new StringBuilder();
console.log(str.plus('my').plus(' homework').multiply(2).minus(2)
  .remove('my')
  .get());

const int = new IntBuilder();
console.log(int.plus(1, 2, 3).multiply(2).divide(2).get());
