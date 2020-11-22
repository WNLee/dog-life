import Dog from '../../src/classes/dog';

const dog = new Dog();

dog.eat('duck');
dog.sleep(1000);
setTimeout(() => {
  dog.eat('orange');
}, 2000);
dog.eat('apple');
dog.sleep(2000);
dog.eat('chicken');
