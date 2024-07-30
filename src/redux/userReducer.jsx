import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;// Un reducer est une fonction pure en JavaScript qui prend l'état actuel de l'application et une action, et retourne un nouvel état. 
// Les reducers sont au cœur de Redux, car ils définissent comment l'état de l'application doit changer en réponse aux actions envoyées.