function hashTable(maxLength) {
    if (maxLength === void 0) { maxLength = 13; }
    var store = [];
    function hash(key) {
        var keySize = 1;
        for (var i = 0; i < key.length; i++) {
            keySize *= key.charCodeAt(i);
        }
        return keySize % maxLength;
    }
    function findKeyIndex(list, key) {
        for (var i = 0; i < list.length; i++) {
            if (list[i][0] === key)
                return i;
        }
        return null;
    }
    return {
        set: function (key, value) {
            var storeIndex = hash(key);
            if (store[storeIndex]) {
                var matchKeyIndex = findKeyIndex(store[storeIndex], key);
                if (matchKeyIndex !== null) {
                    store[storeIndex][matchKeyIndex] = [key, value];
                }
                else {
                    store[storeIndex].push([key, value]);
                }
            }
            else {
                store[storeIndex] = [];
                store[storeIndex].push([key, value]);
            }
        },
        get: function (key) {
            var storeIndex = hash(key);
            if (store[storeIndex]) {
                var matchKeyIndex = findKeyIndex(store[storeIndex], key);
                if (matchKeyIndex !== null) {
                    return store[storeIndex][matchKeyIndex][1];
                }
            }
        },
        has: function (key) {
            var storeIndex = hash(key);
            if (store[storeIndex]) {
                var matchKeyIndex = findKeyIndex(store[storeIndex], key);
                if (matchKeyIndex !== null)
                    return true;
            }
            return false;
        }
    };
}
var table = hashTable();
table.set('foo', 'bar');
table.set('baz', 'qux');
table.get('foo'); // bar
table.get('baz'); // qux
