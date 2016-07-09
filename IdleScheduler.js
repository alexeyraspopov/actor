class IdleScheduler {
  schedule(task, cb) {
    requestIdleCallback(() => {
      const result = task();

      if (result instanceof Promise) {
        result.then(cb, cb);
      } else {
        cb();
      }
    });
  }
}

module.exports = IdleScheduler;
