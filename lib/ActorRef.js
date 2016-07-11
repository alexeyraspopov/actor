class ActorRef {
  constructor(actor) {
    this.actor = actor;
  }

  tell(message) {
    this.actor.enqueue(message);
  }

  ask(message) {
    return this.actor.enqueue(message);
  }
}

module.exports = ActorRef;
