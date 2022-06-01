import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    accessToken:"",
    appNm:"Test App"
}

export const mainSlice = createSlice({
    name:"main",
    initialState,
    reducers:{
        setLoading:(state,action)=>{
            state.loading = action.payload
        },
        updateName:(state,action)=>{
            state.appNm = action.payload
        }
    }
})


export const {setLoading,updateName} = mainSlice.actions

export default mainSlice.reducer