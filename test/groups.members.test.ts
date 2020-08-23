import kit48 from '../src';

describe('groups', () => {
  it('get all members of group SNH48', () => {
    return kit48.groups.members(kit48.groups.members.Groups.SNH48).then((response) => {
      console.log('SNH48 members count:', response.data.rows.length);
      expect(response.data.rows.length > 0);
    });
  });
});
