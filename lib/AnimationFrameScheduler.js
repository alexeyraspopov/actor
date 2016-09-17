class AnimationFrameScheduler {
  schedule(task) {
    return new Promise((resolve, reject) => {
      requestAnimationFrame(async () => {
        try {
          resolve(await task());
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}

module.exports = AnimationFrameScheduler;
