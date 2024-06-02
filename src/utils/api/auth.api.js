import { API } from "./api";

export const SignInAuth = async (userInfo, dispatch) => {
    console.log(userInfo);
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await API.post("/auth/signin", userInfo);
        
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data.userData,
        })
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error,
        });
    }
}
export const SignUpAuth = async (data) =>  API.post("/auth/signup", data);
        
    