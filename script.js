// start with strings, numbers and booleans
//The Primitive data type are copied by Value, when copied there values don't change. Let's look at an example 
    let age = 20;
    let age2 = age;
    console.log(age, age2);
    age2 = 18;
    console.log(age, age2);
// so we see that changing the value of age2 didn't affect that of age

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    
    // You might think we can just do something like this:
    let players2 = players;
    console.log(players, players2);

    // however what happens when we update that array?
    players2[3] = 'Ronaldo';
    // now here is the problem!

    // oh no - we have edited the original array too!
    console.log(players, players2);


    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way
    players2 = players.slice();
    console.log(players, players2);
    players2[3] = 'Messi';
    console.log(players, players2);

    // or create a new array and concat the old one in
    let players3 = [].concat(players2);
    console.log(players2, players3);
    players3[3] = 'Mbappe';
    console.log(players2, players3);

    // or use the new ES6 Spread
    
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:

    // how do we take a copy instead?

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

