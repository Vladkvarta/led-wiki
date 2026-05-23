/**
 * Единая база данных проекта
 * Загружается из файла database.json
 */

export let DB = null;

export async function loadDB() {
  try {
    // Добавляем timestamp для сброса кэша браузера при каждом запросе
    const response = await fetch(`database.json?t=${new Date().getTime()}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    DB = await response.json();
    console.log('Database loaded from database.json');
    return DB;
  } catch (error) {
    console.error('Failed to load database:', error);
    return null;
  }
}
//
