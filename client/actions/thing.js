import { read, create, update, del } from '../api/things';

export default class ThingsActions {
  constructor () {
    this.generateActions(
      'update',
      'clear',
      'picture'
    );
  }

  async read (id) {
    try {
      this.alt.getActions('RequestActions').start();
      const { data } = await read(id);
      this.alt.getActions('RequestActions').success();
      this.alt.getActions('ThingsActions').readAll();
    } catch (error) {
      return this.alt.getActions('RequestActions').fail(error);
    }
  }

  async save (thing) {
    let method = thing.id ? update : create;
    try {
      this.alt.getActions('RequestActions').start();
      const { data } = await method(thing);
      this.alt.getActions('RequestActions').success();
      this.alt.getActions('ThingsActions').readAll();
    } catch (error) {
      return this.alt.getActions('RequestActions').fail(error);
    }
  }

  async delete (thing) {
    try {
      this.alt.getActions('RequestActions').start();
      const { data } = await del(thing);
      this.alt.getActions('RequestActions').success();
      this.alt.getActions('ThingsActions').readAll();
    } catch (error) {
      return this.alt.getActions('RequestActions').fail(error);
    }
  }
}
