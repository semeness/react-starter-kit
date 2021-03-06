import BaseApi from './BaseApi';

export default class UserList extends BaseApi {
    getList() {
        return this.request('/api/user-list.json', 'GET');
    }

    create(data) {
        return this.request('/api/user-list.json', 'CREATE', false, data);
    }

    update(data) {
        return this.request('/api/user-list.json', 'PUT', false, data);
    }

    delete(data) {
        return this.request('/api/user-list.json', 'DELETE', false, data);
    }
};
