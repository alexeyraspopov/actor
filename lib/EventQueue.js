class EventQueue {
  constructor(scheduler) {
    this.queue = [];
    this.scheduler = scheduler;
    this.isDequeuing = false;
  }

  enqueue(cb) {
    return new Promise((resolve, reject) => {
      this.queue.push([cb, resolve, reject]);

      if (!this.isDequeuing) {
        this.dequeue();
      }
    });
  }

  async dequeue() {
    if (this.isDequeuing) {
      throw new Error('in progress');
    }

    this.isDequeuing = true;

    while (this.queue.length) {
      const [next, resolve, reject] = this.queue.shift();

      try {
        const result = await this.scheduler.schedule(next);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }

    this.isDequeuing = false;
  }
}

module.exports = EventQueue;
