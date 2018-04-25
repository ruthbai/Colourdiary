// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    seeds: {
      directory: './tests/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    production: {
      client: 'postgresql',
      connection: {
        database: 'postgres://fsqdkccnqvlfdw:44928630c14f82a589a986c79dca36af72214445e500fd8bb1a60f13ea280b1f@ec2-50-16-196-238.compute-1.amazonaws.com:5432/ddthdujnfcsvli',
        user:     'username',
        password: 'password'
      }
  }
  }
};
