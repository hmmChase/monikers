import Dexie from 'dexie';

const indexedDB = new Dexie('Monikers');

indexedDB.version(1).stores({
  teams: '++id,teamOne,teamTwo,numPlayers'
});

export default indexedDB;
