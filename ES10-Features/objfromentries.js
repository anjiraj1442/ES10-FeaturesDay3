const arr = [
     ['firstName', 'AnjiRaj'],
     ['lastName', 'Ardula'],
     ['age', 24]
 ];
 
 const person1 = Object.fromEntries(arr);
 console.log(person1);

 //type error
 console.log(Object.fromEntries(null));
console.log(Object.fromEntries(undefined));
console.log(Object.fromEntries(true));
console.log(Object.fromEntries(100));
console.log(Object.fromEntries("Hi"));
console.log(Object.fromEntries([1,2,3]));
 