const EventQueue = require('./EventQueue');

class Actor {
  constructor(scheduler) {
    this.queue = new EventQueue(scheduler);
  }

  send(message) {
    this.queue.enqueue(() => this.receive(message));
  }

  receive() {
    throw new Error('not implemented');
  }
}

module.exports = Actor;
