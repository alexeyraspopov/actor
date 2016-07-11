class AnimationFrameScheduler {
  async schedule(task) {
    return new Promise((resolve, reject) => {
      requestAnimationFrame(() => {
        try {
          resolve(task());
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}

module.exports = AnimationFrameScheduler;
