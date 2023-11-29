 class Dictionary {
    constructor() {
        this.items = {};
    }

    has(key) {
        return key in this.items;
    }

    set(key, value) {
        this.items[key] = value;
    }

    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    values() {
        return Object.values(this.items);
    }

    keys() {
        return Object.keys(this.items);
    }

    getItems() {
        return this.items;
    }

    size() {
        return Object.keys(this.items).length;
    }

    clear() {
        this.items = {};
    }
}

export default Dictionary;