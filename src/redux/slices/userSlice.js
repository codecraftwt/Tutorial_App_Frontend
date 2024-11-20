// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Thunk for fetching user profiles from AsyncStorage
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   const users = await AsyncStorage.getItem('users');
//   return users ? JSON.parse(users) : [];
// });

// // Thunk for saving user profiles to AsyncStorage
// export const saveUser = createAsyncThunk('users/saveUser', async (user, { getState }) => {
//   const state = getState();
//   const updatedUsers = [...state.users.userList, user];
//   await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
//   return updatedUsers;
// });

// const userSlice = createSlice({
//   name: 'users',
//   initialState: {
//     userList: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.userList = action.payload;
//       })
//       .addCase(saveUser.fulfilled, (state, action) => {
//         state.userList = action.payload;
//       });
//   },
// });

// export default userSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Fetch users from AsyncStorage
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const users = await AsyncStorage.getItem('users');
  return users ? JSON.parse(users) : [];
});

// Save a new user to AsyncStorage
export const saveUser = createAsyncThunk('users/saveUser', async (user, { getState }) => {
  const state = getState();
  const updatedUsers = [...state.users.userList, user];
  await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
  return updatedUsers;
});

// Edit an existing user
export const editUser = createAsyncThunk('users/editUser', async (updatedUser, { getState }) => {
  const state = getState();
  const updatedUsers = state.users.userList.map(user => 
    user.id === updatedUser.id ? updatedUser : user
  );
  await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
  return updatedUsers;
});

// Delete a user from AsyncStorage
export const deleteUser = createAsyncThunk('users/deleteUser', async (userId, { getState }) => {
  const state = getState();
  const updatedUsers = state.users.userList.filter(user => user.id !== userId);
  await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
  return updatedUsers;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userList = action.payload;
      })
      .addCase(saveUser.fulfilled, (state, action) => {
        state.userList = action.payload;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.userList = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.userList = action.payload;
      });
  },
});

export default userSlice.reducer;
