import { fetchLeague } from '../redux/premier league/leagueSlice';

jest.mock('axios', () => 'Mockedaxios');
describe('League teams', () => {
  test('fetch correct teams', () => {
    const data = fetchLeague();
    expect(data.length).not.toBeNull();
  });
});
