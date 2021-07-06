const { roles } = require('../constants');

const roleRights = new Map();
roleRights.set('sys_admin', [...roles.sys_admin.rights]);
roleRights.set('doctor', [...roles.doctor.rights]);
module.exports = {
  roleRights,
};
