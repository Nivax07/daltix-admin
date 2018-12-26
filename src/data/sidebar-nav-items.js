export default function () {
  return [{
    title: 'Overview',
    htmlBefore: '<i class="material-icons">dashboard</i>',
    to: {
      name: 'overview',
    },
  }, {
    title: 'User Profile',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'user-profile',
    },
  }, {
    title: 'Forms & Components',
    htmlBefore: '<i class="material-icons">view_module</i>',
    to: {
      name: 'components-overview',
    },
  }, {
    title: 'Database Updates',
    htmlBefore: '<i class="material-icons">update</i>',
    to: {
      name: 'database-updates',
    },
  }, {

    title: 'Access Count',
    htmlBefore: '<i class="material-icons">lock_open</i>',
    to: {
      name: 'access-count',
    },
  }, {

    title: 'Registered Users',
    htmlBefore: '<i class="material-icons">supervisor_account</i>',
    to: {
      name: 'registered-users',
    },
  }];
}
