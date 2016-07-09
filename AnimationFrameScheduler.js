class AnimationFrameScheduler {
  schedule(task, cb) {
    requestAnimationFrame(() => {
      const result = task();

      if (result instanceof Promise) {
        result.then(cb, cb);
      } else {
        cb();
      }
    });
  }
}

module.exports = AnimationFrameScheduler;
