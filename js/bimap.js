/**
 * A pretty shitty BiMap implementation
 * I don't really check for one-to-oneness, mostly because I am lazy.
 */
class BiMap{

    constructor(map) {
        this.map = {};
        this.inverseMap = {};
        for (const [key, value] of Object.entries(map)) {
            this.put(key, value);
        }
    }

    put(key, value) {
        this.inverseMap[value] = key;
        this.map[key] = value;
    }

    getKey(key) {
        return this.map[key];
    }

    getValue(value) {
        return this.map[value];
    }

    containsKey(key) {
        return key in this.map;
    }

    containsValue(value) {
        return value in this.inverseMap;
    }
}