// const permissions = require('./route.permissions');

module.exports = {
  types: ['sys_admin', 'distributor', 'clinic_admin', 'lab_manger', 'doctor'],
  sys_admin: {
    rights: ['mange'],
  },
  doctor: {
    rights: [],
  },
};
