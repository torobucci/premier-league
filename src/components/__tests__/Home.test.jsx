import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../routes/Home';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Home component', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  test('renders without crashing', () => {
    useSelector.mockReturnValue({ league: [] });
    render(<Home />);
  });

  test('displays the correct image', () => {
    useSelector.mockReturnValue({ league: [] });
    const { getByAltText } = render(<Home />);
    const image = getByAltText('league stars');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'skysports.png');
  });

  test('displays the correct heading details', () => {
    const mockLeague = [];
    useSelector.mockReturnValue({ league: mockLeague });
    const { getByText } = render(<Home />);
    expect(getByText('Season: 2022/2023')).toBeInTheDocument();
    expect(getByText('Teams: 20')).toBeInTheDocument();
  });

  test('displays the correct stats by points text', () => {
    useSelector.mockReturnValue({ league: [] });
    const { getByText } = render(<Home />);
    expect(getByText('Stats by points')).toBeInTheDocument();
  });

  test('displays correct details for each team', () => {
    const mockLeague = [
      {
        Name: 'Team A',
        SquadLogo: 'team-a-logo.png',
        Points: 50,
      },
      {
        Name: 'Team B',
        SquadLogo: 'team-b-logo.png',
        Points: 40,
      },
    ];
    useSelector.mockReturnValue({ league: mockLeague });
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);

    mockLeague.forEach((team) => {
      expect(getByText(team.Name)).toBeInTheDocument();
      expect(getByText(`${team.Points} pts`)).toBeInTheDocument();
    });
  });
  test('renders correctly', () => {
    const mockLeague = [
      {
        Name: 'Team A',
        SquadLogo: 'team-a-logo.png',
        Points: 50,
      },
      {
        Name: 'Team B',
        SquadLogo: 'team-b-logo.png',
        Points: 40,
      },
    ];
    useSelector.mockReturnValue({ league: mockLeague });
    const { container } = render(<BrowserRouter><Home /></BrowserRouter>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
