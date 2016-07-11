class ActorRef {
  constructor(actor) {
    this.actor = actor;
  }

  tell(message) {
    this.actor.send(message);
  }

  ask(message) {
    return this.actor.send(message);
  }
}

module.exports = ActorRef;
