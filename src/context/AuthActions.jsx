
export const SignInStart =(userCredentials)=>(
    {
        type :"LOGIN_START",
    }
);
export const SignInSuccess =(user)=>(
    {
        type :"LOGIN_SUCCESS",
        payload :user,
    }
);
export const SignInFailure =(error)=>(
    {
        type :"LOGIN_FAIL",
        payload :error,
    }
);

