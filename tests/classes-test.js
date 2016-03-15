'use strict';

test('Ignore this! Free passing test here...', function(assert) {
  assert.ok(true);
});

test(`There is a Foo class and an instance called bar`, function(assert) {
  assert.ok(bar instanceof Foo, `Create a simple class called 'Foo'and create a new instance from it called 'bar'`);
});

test(`Dogs say what they should`, function(assert) {
  assert.equal(new Dog().says, 'life is ruff',
    `Create a class called 'Dog' that sets a property on itself within the constructor.
     The property should be called 'says' and the value should be set to 'life is ruff'`);
});

test(`Cats are a little bit different`, function(assert) {
  assert.ok(garfield instanceof Cat,
    `Create a class called 'Cat' and a new instance of Cat called 'garfield'`);

  assert.equal(garfield.growl(), 'meow',
    `The class should have a method called 'growl' that returns the string 'meow'`);
});

test(`The order of the Faceless Men`, function(assert) {
  const girl = new FacelessMan('The Waif');

  assert.ok(aMan instanceof FacelessMan, `Create a class called 'FacelessMan' and a new instance of FacelessMan called 'aMan'`);

  assert.equal(aMan.name, `Jaqen H'ghar`, `A girl gives a man his own name (aMan.name should return 'Jaqen H'ghar')`);

  assert.equal(girl.name, `The Waif`,
    `The FacelessMan constructor takes an argument and sets a value called 'name' based on the passed in argument`);
});

test(`Really BIG cats`, function(assert) {
  assert.ok(new Lion() instanceof Cat,
    `Create a new class called 'Lion' that extends from the 'Cat' class`);

  assert.equal(new Lion().size, 'BIG',
    `The 'Lion' class constructor should set a property called 'size' to the string 'BIG'`);
});

test(`A student knows how to keep a secret`, function(assert) {
  const mySecret = 'My class rocks!';
  const dontTellNobody = new KeepSecret(mySecret);

  assert.ok(mySecret instanceof KeepSecret,
    `Create a new class called 'KeepSecret' that takes a single argument that it stores for later`);

  for (var prop in dontTellNobody) {
    if (dontTellNobody.hasOwnProperty(prop)) {
      assert.notEqual(dontTellNobody[prop], mySecret,
        `The class 'KeepSecret' should not store the password as a public property. Currently stored to: ${prop}`);
    }
  }
  assert.equal(dontTellNobody.squeal(), mySecret,
    `The class instance 'KeepSecret' should be able to return the secret phrase passed in the constructor when 'squeal' is called`);
});

test(`You are basically a locksmith now!`, function(assert) {
  const sensitive = "shhhhh!";
  const rightKey  = new Key();
  const wrongKey  = new Key();
  const safe      = new Safe(sensitive, rightKey);

  assert.ok(rightKey instanceof Key,
    `Create a class named 'Key' that takes no arguments in its constructor`);

  assert.ok(safe instanceof Safe,
    `Create a class named 'Safe' that takes two arguments in its, a secret and a 'Key' object`);

  assert.notEqual(safe.unlock(wrongKey), sensitive,
    `If the wrong key is passed to the 'unlock' function for a 'Safe' then return 'undefined'`);
  assert.equal(safe.unlock(rightKey), sensitive,
    `If the right key is passed to the 'unlock' function for a 'Safe' then return the secret phrase passed in the constructor`);
});
