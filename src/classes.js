class Foo {

}

var bar = new Foo();

class Dog {
  constructor() {
    this.says = 'life is ruff';
  }
}

class Cat {
  growl() {
    return 'meow';
  }
}

var garfield = new Cat();

class FacelessMan {
  constructor(name) {
    this.name = name;
  }
}

var aMan = new FacelessMan(`Jaqen H'ghar`);

class Lion extends Cat {
  constructor() {
    super();
    this.size = 'BIG';
  }
}
var garfield = new Lion();

class KeepSecret {
  constructor(dontTellNobody) {
    this.squeal = function() {
      return dontTellNobody;
    }
  }
}

var mySecret = new KeepSecret();

class Key {
}

class Safe {
  constructor(secret, keyhole) {
    this.unlock = function(key) {
      if (key === keyhole) {
            return secret;
      }
    }
  }
}
