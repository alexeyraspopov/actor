class ImmediateScheduler {
  schedule(task) {
    return Promise.resolve(task());
  }
}

module.exports = ImmediateScheduler;
