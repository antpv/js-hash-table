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
            if (list[index]) {
                console.log('Collision:', key);
            }
            list[index] = value;
        },
        get: function (key) {
            var index = getHashIndex(key);
            return list[index];
        }
    };
}
var table = hashTable();
table.set('tou', 'qsx');
table.set('mou', 'czx');
console.log(table.get('tou'));
console.log(table.get('mou'));
