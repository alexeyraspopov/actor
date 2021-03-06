const EventQueue = require('./EventQueue');
const ActorRef = require('./ActorRef');

class Actor {
  static create(...args) {
    return new ActorRef(new this(...args));
  }

  constructor(scheduler) {
    this.queue = new EventQueue(scheduler);
    this.ref = null;
  }

  enqueue({ message, sender }) {
    return this.queue.enqueue(() => this.receive(message, sender));
  }

  receive() {
    throw new Error('not implemented');
  }
}

module.exports = Actor;
