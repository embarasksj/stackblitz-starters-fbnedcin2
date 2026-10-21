
export default class Migration {
  constructor(linker) {
    this.linker = linker;
  }
  async up() {
    try {
      await this.#exec();
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Up finished');
    }
  }
  async down() {
    try {
      await this.#exec();
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Down finished');
    }
  }
  async #exec(sql) {
    try {
      if (typeof sql !== 'string') {
        throw new Error('SQL must be a string');
      }

      if (sql.trim() === '') {
        throw new Error('SQL string is empty');
      }

      const result = await this.linker.run(sql);

      return result;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      console.log('EXEC finished');
    }
  }
}
