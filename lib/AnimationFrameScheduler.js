class AnimationFrameScheduler {
  schedule(task) {
    return new Promise(resolve => {
      requestAnimationFrame(() => {
        resolve(task());
      });
    });
  }
}

module.exports = AnimationFrameScheduler;
