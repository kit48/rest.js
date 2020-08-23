import kit48 from '../src';

describe('groups tickets', () => {
  it('get 2020-08 tickets of group SNH48, tema HII', async () => {
    const response = await kit48.groups.tickets({
      group: kit48.groups.tickets.Groups.SNH48,
      date: '2020-08',
      team: kit48.groups.tickets.TEAMS.HII,
    });
    console.log('count:', response.data.desc.length);
    expect(response.data.desc.length > 0);
  });
});
