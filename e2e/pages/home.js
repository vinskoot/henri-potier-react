import { Selector } from 'testcafe';

class Home {
    constructor() {
        this.title = Selector('.page .title');
    }
}

export default new Home();
