/**
 * Единая база данных проекта
 * Загружается из файла database.json
 */

export let DB = null;

export async function loadDB() {
  try {
    let response;
    let dbName = 'database.local.json';
    try {
      // Пытаемся загрузить локальную базу (игнорируется в git)
      response = await fetch(`database.local.json?t=${new Date().getTime()}`);
      if (!response.ok) throw new Error('No local');
    } catch (e) {
      // Если локальной нет, грузим серверную
      dbName = 'database.json';
      response = await fetch(`database.json?t=${new Date().getTime()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    
    DB = await response.json();
    console.log(`Database loaded from ${dbName}`);
    return DB;
  } catch (error) {
    console.error('Failed to load database:', error);
    return null;
  }
}
//
