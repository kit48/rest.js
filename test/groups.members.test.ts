import kit48 from '../src';

describe('groups', () => {
  it('get all members of group SNH48', () => {
    return kit48.groups.members(kit48.Groups.SNH48).then((response) => {
      console.log(response.data.rows[0]);
    });
  });
});
