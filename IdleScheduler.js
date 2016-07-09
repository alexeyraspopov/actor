class IdleScheduler {
  schedule(task) {
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
