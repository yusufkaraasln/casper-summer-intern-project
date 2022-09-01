
import { publicRequest } from "../axiosRequest"
import { loginFailure,loginStart,loginSuccess } from "./userSlice"

export const login = async(dispatch,user)=>{
    dispatch(loginStart())
    try {
        
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
        console.log(res.data)


    } catch (error) {
        dispatch(loginFailure(error))
    }



}