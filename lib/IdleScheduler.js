class IdleScheduler {
  schedule(task) {
    return new Promise((resolve, reject) => {
      requestIdleCallback(async () => {
        try {
          resolve(await task());
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}

module.exports = IdleScheduler;
