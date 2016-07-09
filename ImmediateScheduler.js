class ImmediateScheduler {
  schedule(task, cb) {
    Promise.resolve(task()).then(cb);
  }
}

module.exports = ImmediateScheduler;
