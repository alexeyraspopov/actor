class ImmediateScheduler {
  schedule(task, cb) {
    Promise.resolve(task()).then(cb, cb);
  }
}

module.exports = ImmediateScheduler;
