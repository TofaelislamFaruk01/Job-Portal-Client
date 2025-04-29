import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const SocialLogIn = () => {
    const {signInWithGoogle} = useContext(AuthContext);

    const handleSignInWithGoogle=()=>{
        signInWithGoogle()
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className='p-3 pt-1'>
            <div className="divider">OR</div>
            <div className='flex items-center justify-center'>
            <button onClick={handleSignInWithGoogle} className='btn link link-hover m-auto'>Sign in with Google</button>
            </div>
            
        </div>
    );
};

export default SocialLogIn;