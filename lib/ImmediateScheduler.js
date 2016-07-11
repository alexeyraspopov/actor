class ImmediateScheduler {
  async schedule(task) {
    return task();
  }
}

module.exports = ImmediateScheduler;
