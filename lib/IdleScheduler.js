class IdleScheduler {
  async schedule(task) {
    return new Promise((resolve, reject) => {
      requestIdleCallback(() => {
        try {
          resolve(task());
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}

module.exports = IdleScheduler;
