import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchLeague = createAsyncThunk('league/fetchLeague', async () => {
  const body = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/premierleague/table',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '94a2ed8858mshf233f5b117d0694p17d1eejsn1511b0578a55',
      'X-RapidAPI-Host': 'football98.p.rapidapi.com',
    },
  };

  const response = await axios.request(body);
  return response.data;
});

const initialState = {
  league: [],
};
const leagueSlice = createSlice({
  name: 'league',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchLeague.fulfilled, (state, action) => {
      const receivedData = action.payload;
      return { ...state, league: receivedData };
    });
  },
});
export { fetchLeague };
export default leagueSlice.reducer;
