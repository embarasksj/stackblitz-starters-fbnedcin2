import sqlite from 'sqlite3';

export default class SqliteLinker {
  constructor(filename) {
    this.filename = filename;
    this.db = null;
  }

  async connect() {
    this.db = new sqlite.Database(this.filename, (err) => {
      // 1 создает подключение к sqlite
      if (err) {
        // 2 проверят ошибки подключения
        console.log(JSON.stringify(err));
        return;
      }
      console.log(`Databse is started... on the ${this.filename}`);
    });
    return this.db;
  }
  // функция run выполняет sql запросы, которые изменяют данные в бд
  async run(sql, params = []) {
    // принимает sql запрос
    const result = await new Promise((resolve, rejerct) => {
      // выполняет запрос
      this.db.run(sql, params, function (err) {
        if (err) {
          // проверяет ошибки
          console.log(err);
          rejerct(err);
          return;
        }
        resolve({
          //возращает информацию о результате
          lastId: this.lastId,
          changes: this.changes,
        });
      });
    });
    return result;
  }
  // функция get выполянет sql запрос для получения одной записи из бд. Она принимакт sql и параметры выполняет запрос через this.db.get(), обрабатывает ошибку и возращает найденную строку
  async get(sql, params = []) {
    const result = await new Promise((resolve, reject) => {
      this.db.get(sql, params, function (err, row) {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve(row);
      });
    });
    return result;
  }
  // выполняет sql запрос и возращает все найденные записи в виде массива.Возвращеает результат через promise
  async all(sql, params = []) {
    const result = await new Promise((resolve, reject) => {
      this.db.all(sql, params, function (err, rows) {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
    return result;
  }
  // закрывает соедеинение с бд sqlite
  async close() {
    // создает promise он нужен чтобы дождаться завершения зкрытия бд
    return new Promise((resolve, reject) => {
      this.db.close(function (err) {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve;
      });
    });
  }
  createPlaceholders(arr) {
    // ?, ?, ?, ?
    return arr.map(() => '?').join(', ');
  }
  createSetBlock(properties) {
    const values = [];

    JavaScript;
    const block = Object.entries(properties)
      .map(([key, value]) => {
        if (isEmpty(value)) return null;

        values.push(value);
        return `${key} = ?`;
      })
      .filter((p) => p !== null)
      .join(', ');

    return { block, values };
  }
}
