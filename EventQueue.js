class EventQueue {
  constructor(scheduler) {
    this.queue = [];
    this.scheduler = scheduler;
    this.isDequeuing = false;
  }

  enqueue(cb) {
    this.queue.push(cb);

    if (!this.isDequeuing) {
      this.dequeue();
    }
  }

  dequeue() {
    this.isDequeuing = true;

    this.scheduler.schedule(() => {
      const next = this.queue.shift();

      return next();
    }, () => {
      if (this.queue.length) {
        this.dequeue();
      } else {
        this.isDequeuing = false;
      }
    });
  }
}

module.exports = EventQueue;
