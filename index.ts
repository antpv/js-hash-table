interface HashTable {
  set(key: string, value: any): void,
  get(key: string): any
}

function hashTable(maxLength: number = 13): HashTable {
  const store: any[] = []

  function hash(key: string): number {
    let keySize: number = 1

    for (let i = 0; i < key.length; i++) {
      keySize *= key.charCodeAt(i)
    }

    return keySize % maxLength
  }

  function findKeyIndex(list: any[], key: string): number | null {
    for (let i = 0; i < list.length; i++) {
      if (list[i][0] === key) return i
    }

    return null
  }

  return {
    set(key: string, value: any): void {
      const storeIndex = hash(key)

      if (store[storeIndex]) {
        const matchKeyIndex = findKeyIndex(store[storeIndex], key)

        if (matchKeyIndex !== null) {
          store[storeIndex][matchKeyIndex] = [key, value]
        } else {
          store[storeIndex].push([key, value])
        }
      } else {
        store[storeIndex] = []
        store[storeIndex].push([key, value])
      }
    },

    get(key: string): any {
      const storeIndex = hash(key)

      if (store[storeIndex]) {
        const matchKeyIndex = findKeyIndex(store[storeIndex], key)

        if (matchKeyIndex !== null) {
          return store[storeIndex][matchKeyIndex][1]
        }
      }
    }
  }
}

const table = hashTable()

table.set('tou', 'qsx')
table.set('mou', 'czx')

table.get('tou') // qsx
table.get('mou') // czx
