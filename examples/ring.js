const uuid = require('uuid');
const Actor = require('../lib/Actor');
const ImmediateScheduler = require('../lib/ImmediateScheduler');

class DecrementNode extends Actor {
  constructor() {
    super(new ImmediateScheduler());
    this.id = uuid.v4();
  }

  receive({counter, nodes}) {
    console.log(this.id, counter);

    const next = nodes.next();

    if (!next.done) {
      next.value.send({counter: counter - 1, nodes});
    }
  }
}

const nodes = Array.from(Array(10), () => new DecrementNode());

nodes[nodes.length - 1].send({
  counter: 10,
  nodes: nodes[Symbol.iterator]()
});
