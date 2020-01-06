/**
 * Utility module providing initialized global variables.
 * @module src/util/global
 */
import { SQLiteDatabase } from 'react-native-sqlite-storage';
import SQLiteClient from './SQLiteClient';

const DB_NAME = 'Test.db';
const DB_DEBUG = true;
const DB_MIGRATIONS = [
  async (dB: SQLiteDatabase): Promise<void> => {
    await dB.executeSql('PRAGMA user_version');
  },
  async (dB: SQLiteDatabase): Promise<void> => {
    await dB.executeSql('PRAGMA user_version');
  },
  async (dB: SQLiteDatabase): Promise<void> => {
    await dB.executeSql('PRAGMA user_version');
  },
];

/** Application's SQLite client */
export const sqLiteClient = new SQLiteClient(DB_NAME, DB_MIGRATIONS, DB_DEBUG);

/** Applicaiton initialization. */
export const initialize = async (): Promise<void> => {
  await sqLiteClient.connect();
};
