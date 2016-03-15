class Foo {
  bar() {
    return `Create a simple class called 'Foo'and create a new instance from it called 'bar'`;
  }
}

var bar = new Foo(`Create a simple class called 'Foo'and create a new instance from it called 'bar'`)

class Dog {
  constructor(says) {
    this.says = 'life is ruff';
  }
}

class Cat {
  growl() {
    return 'meow';
  }
}

var garfield = new Cat('Meow');

class FacelessMan {
  constructor(name) {
    this.name = name;
  }
}

var aMan = new FacelessMan(`Jaqen H'ghar`);
var aGirl = new FacelessMan(`The Waif`);

class Lion extends Cat {
  constructor(size) {
    super(size, 'Lion');
    this.size = 'BIG';
  }
}
var garfield = new Lion();
