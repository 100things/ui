import { read, create, update, del } from '../api/things';

export default class ThingsActions {
  constructor () {
    this.generateActions(
      'update'
    );
  }

  async readAll () {
    try {
      this.alt.getActions('RequestActions').start();
      const { data } = await read();
      this.alt.getActions('RequestActions').success();
      return this.actions.update(data);
    } catch (error) {
      return this.alt.getActions('RequestActions').fail();
    }
  }

  async read (id) {
    try {
      this.alt.getActions('RequestActions').start();
      const { data } = await read(id);
      this.alt.getActions('RequestActions').success();
      return this.actions.update(data);
    } catch (error) {
      return this.alt.getActions('RequestActions').fail();
    }
  }

  async create (thing) {
    try {
      this.alt.getActions('RequestActions').start();
      const { data } = await create(thing);
      this.alt.getActions('RequestActions').success();
      return this.actions.update(data);
    } catch (error) {
      return this.alt.getActions('RequestActions').fail();
    }
  }

  async update (thing) {
    try {
      this.alt.getActions('RequestActions').start();
      const { data } = await update(thing);
      this.alt.getActions('RequestActions').success();
      return this.actions.update(data);
    } catch (error) {
      return this.alt.getActions('RequestActions').fail();
    }
  }

  async delete (thing) {
    try {
      this.alt.getActions('RequestActions').start();
      const { data } = await del(thing);
      this.alt.getActions('RequestActions').success();
      return this.actions.update(data);
    } catch (error) {
      return this.alt.getActions('RequestActions').fail();
    }
  }
}
