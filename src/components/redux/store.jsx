import { configureStore } from '@reduxjs/toolkit';
import leagueSlice from './premier league/leagueSlice';

const store = configureStore({
  reducer: {
    league: leagueSlice,
  },

});

export default store;
