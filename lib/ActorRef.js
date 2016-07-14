class ActorRef {
  constructor(actor) {
    this.actor = actor;
    this.actor.ref = this;
  }

  tell(message, sender) {
    this.actor.enqueue({ message, sender });
  }

  ask(message, sender, timeout) {
    return this.actor.enqueue({ message, sender });
  }
}

module.exports = ActorRef;
