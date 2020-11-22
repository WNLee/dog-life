
export default class Dog {
  private pipe: Promise<any>
  private time: number;

  constructor() {
    this.pipe = Promise.resolve();
    this.time = Date.now();
  }

  private asyncFactory(callback) {
    this.pipe = this.pipe.then(() => {
      return new Promise(next => {
        callback(next);
      }).then();
    });
  }

  eat(food) {
    this.asyncFactory(next => {
      console.log(`eat ${food}: ${Date.now() - this.time}ms`);
      next();
    });
    return this;
  }

  sleep(time) {
    this.asyncFactory(next => {
      console.log(`start sleep: ${Date.now() - this.time}ms`);
      const timer = setTimeout(() => {
        console.log(`end sleep: ${Date.now() - this.time}ms`);
        next();
        clearTimeout(timer);
      }, time);
    });
    return this;
  }
};
