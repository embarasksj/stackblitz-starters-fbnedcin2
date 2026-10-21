import Migration from '../migration.js';
import SqliteLinker from '../sqlite.js';
const linker = new SqliteLinker();
const migration = new Migration(linker);

async function createDB() {
  await migration.up('PRAGMA foreign_keys=ON;');

  // 1. Structure
  await migration.up(`
    create table if not exists structure (
        id integer primary key autoincrement,
        name text not null,
        addres text not null
    );
  `);

  // 2. Floor
  await migration.up(`
    create table if not exists floor (
        id integer primary key autoincrement,a
        name text not null,
        structure_id integer,
        foreign key (structure_id) references structure(id)
            on delete cascade
    );
`);

  // 3. Room
  await migration.up(`
    create table if not exists room (
        id integer primary key autoincrement,
        name text not null,
        floor_id integer,
        foreign key (floor_id) references floor(id)
            on delete cascade
    );
`);

  // 4. Place
  await migration.up(`
    create table if not exists place (
        id integer primary key autoincrement,
        name text not null,
        room_id integer,
        foreign key (room_id) references room(id)
            on delete cascade
    );
`);

  // 5. Location
  await migration.up(`
    create table if not exists location (
        id integer primary key autoincrement,
        name text not null,
        place_id integer,
        foreign key (place_id) references place(id)
            on delete cascade
    );
`);

  // 6. Category
  await migration.up(`
    create table if not exists category (
        id integer primary key autoincrement,
        name text not null
    );
`);

  // 7. Item
  await migration.up(`
    create table if not exists item (
        id integer primary key autoincrement,
        name text not null,
        properties json not null,
        status text not null,
        category_id integer ,
        location_id integer ,
        current_location_id integer ,
        foreign key (category_id) references category(id)
            on delete set null,
        foreign key (location_id) references location(id)
            on delete set null
         foreign key (current_location_id) references location (id)
            on delete set null
    );
`);
}
