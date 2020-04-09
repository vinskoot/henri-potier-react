import { Selector } from 'testcafe';

class Home {
    constructor() {
        this.text = Selector('.text');
    }
}

export default new Home();
