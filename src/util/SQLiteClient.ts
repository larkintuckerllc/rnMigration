/**
 * Utility module providing modern inteface to Redis client
 * @module src/util/SQLiteClient
 */
import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

/** Interface to SQLiteClient client.  */
export default class SQLiteClient {
  private privateConnected = false;

  private name: string;

  private privateDb: SQLiteDatabase | null = null;

  constructor(name: string, debug = false) {
    this.name = name;
    SQLite.DEBUG(debug);
  }

  public get connected(): boolean {
    return this.privateConnected;
  }

  public get dB(): SQLiteDatabase | null {
    return this.privateDb;
  }

  public async connect(): Promise<void> {
    if (this.privateConnected) {
      return;
    }
    try {
      this.privateDb = await SQLite.openDatabase({ name: this.name, location: 'default' });
      this.privateConnected = true;
    } catch (err) {
      throw new Error(`SQLiteClient: failed to connect to database: ${this.name}`);
    }
  }
}
