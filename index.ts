interface HashTable {
  set(key: string, value: any): void,
  get(key: string): any
}

function hashTable(maxLength: number = 13): HashTable {
  const list: any[] = []

  function getHashIndex(key: string): number {
    let keySize: number = 1

    for (let i = 0; i < key.length; i++) {
      keySize *= key.charCodeAt(i)
    }

    return keySize % maxLength
  }

  return {
    set(key: string, value: any): void {
      const index = getHashIndex(key)

      if (list[index]) {
        console.log('Collision:', key)
      }

      list[index] = value
    },

    get(key: string): any {
      const index = getHashIndex(key)

      return list[index]
    }
  }
}

const table = hashTable()

table.set('tou', 'qsx')
table.set('mou', 'czx')

console.log(table.get('tou'))
console.log(table.get('mou'))
