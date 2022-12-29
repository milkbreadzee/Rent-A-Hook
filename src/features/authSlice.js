import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import thunk from "redux-thunk"
import Login from "../pages/Login/Login"

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("user/LoginUser", async(user, thunkAPI)=>{
    try {
        const response = await axios.post('http://localhost:5000/login', {
            email : user.email,
            password: user.password
        });
        console.log(response.data)
        return response.data; //payload that were returning
    } catch (error) {
        if(error.response){
            console.log(error.response.data.msg)
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message); //payload 2
        }
    }
})

export const getMe = createAsyncThunk("user/getMe", async(_, thunkAPI)=>{
    try {
        const response = await axios.get('http://localhost:5000/me',);
        console.log(response.data)
        return response.data; //payload that were returning
    } catch (error) {
        if(error.response){
            console.log(error.response.data.msg)
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message); //payload 2
        }
    }
})

export const LogOut = createAsyncThunk("user/LogOut", async()=>{
    
    await axios.delete('http://localhost:5000/logout',);
    
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    // reducers
    reducers:{
        reset: (state)=>initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginUser.pending, (state)=>{
            state.isLoading = true;

        })
        builder.addCase(LoginUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload; //we take that payload here
 
        });
        builder.addCase(LoginUser.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            // console.log(action.message) //payload 2 taken here
        })

        //get user login

        builder.addCase(getMe.pending, (state)=>{
            state.isLoading = true;

        })
        builder.addCase(getMe.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload; //we take that payload here
 
        });
        builder.addCase(getMe.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.message //payload 2 taken here
        })
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;