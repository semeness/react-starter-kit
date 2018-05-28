import Example from './Example';
import UserList from './UserList.es';

export default class Api {
    constructor(base = '') {
        this.Example = new Example(base);
        this.UserList = new UserList(base);
    }
}
