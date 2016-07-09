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

  async dequeue() {
    if (this.isDequeuing) {
      throw new Error('in progress');
    }

    this.isDequeuing = true;

    while (this.queue.length) {
      const next = this.queue.shift();
      await this.scheduler.schedule(next);
    }

    this.isDequeuing = false;
  }
}

module.exports = EventQueue;
