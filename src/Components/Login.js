import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth=Auth();
   // console.log(auth);
    return (
        <div>
            <h1>Join the party</h1>
            {
                auth.user?<button onClick={auth.signOut}>Sign-Out</button>:
                <button onClick={auth.signInWithGoogle}>Sign in with google</button>}
        </div>
    );
};

export default Login;