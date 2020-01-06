/**
 * Utility module providing initialized global variables.
 * @module src/util/global
 */
import SQLiteClient from './SQLiteClient';

const DB_NAME = 'Test.db';
const DEBUG = true;

/** Application's SQLite client */
export const sqLiteClient = new SQLiteClient(DB_NAME, DEBUG);

/** Applicaiton initialization. */
export const initialize = async (): Promise<void> => {
  await sqLiteClient.connect();
};
