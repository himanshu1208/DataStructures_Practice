class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
     _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key,value) {
      // let address = this_hash(key);
      if(!this.data[this._hash(key)]) {
        this.data[this._hash(key)] = [];
      }
      this.data[this._hash(key)].push([key,value])
    }

    get(key) {
      let address = this._hash(key);
      const databucket = this.data[address];
      if(databucket.length) {
        for (var i=0; i<databucket.length; i++) {
          if(databucket[i][0] === key) {
            return databucket[i][1];
          }
        }
      }   
      return "Not Available in the map";
    }
  }
  
  const myHashTable = new HashTable(2);
  (myHashTable.set('grapes', 10000));
  console.log(myHashTable.get('grapes'));
  (myHashTable.set('apples', 9));
  console.log(myHashTable.get('apples'));
  console.log(myHashTable.data);