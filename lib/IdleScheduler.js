class IdleScheduler {
  schedule(task) {
    return new Promise(resolve => {
      requestIdleCallback(() => {
        resolve(task());
      });
    });
  }
}

module.exports = IdleScheduler;
