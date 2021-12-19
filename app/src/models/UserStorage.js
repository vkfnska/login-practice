class UserStorage {
    static #users = {
        id: ["ciro", "opset", "raison"],
        psword: ["1234", "12345", "123456"],
        name: ["진영이", "승훈이", "동석이"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;