function hashTable(maxLength) {
    if (maxLength === void 0) { maxLength = 13; }
    var list = [];
    function getHashIndex(key) {
        var keySize = 1;
        for (var i = 0; i < key.length; i++) {
            keySize *= key.charCodeAt(i);
        }
        return keySize % maxLength;
    }
    return {
        set: function (key, value) {
            var index = getHashIndex(key);
            list[index] = value;
        },
        get: function (key) {
            var index = getHashIndex(key);
            return list[index];
        }
    };
}
var table = hashTable();
table.set('foo', 'bar');
table.set('baz', 'qux');
table.get('foo'); // bar
table.get('baz'); // qux
