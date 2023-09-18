const create = require('./create');
const read = require('./read');
const update = require('./update');
const remove = require('./remove');
const updatePassword = require('./updatePassword');
const profile = require('./profile');
const status = require('./status');
const search = require('./search');
const filter = require('./filter');
const listAll = require('./listAll');
const list = require('./paginatedList');

const adminController = {
  create,
  read,
  update,
  delete: remove,
  updatePassword,
  profile,
  status,
  search,
  filter,
  listAll,
  list,
};

module.exports = adminController;