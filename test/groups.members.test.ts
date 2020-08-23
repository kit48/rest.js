import kit48 from '../src';

describe('groups members', () => {
  it('get all members of group SNH48', async () => {
    const response = await kit48.groups.members(kit48.groups.members.Groups.SNH48);
    console.log('count:', response.data.rows.length);
    expect(response.data.rows.length > 0);
  });
});
