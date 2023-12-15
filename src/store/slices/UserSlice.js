import { createSlice, formatProdErrorMessage } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUsers(state, action){
            state.push(action.payload)
        },
        removeUsers(state, action){
            state.splice(action.payload ,1)
        },
        removeAllUsers(state, action){
            return [];
        },
    },
});



export {userSlice};

export const { addUsers, removeUsers, removeAllUsers } = userSlice.actions;