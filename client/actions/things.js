import { read } from '../api/things';

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
}
