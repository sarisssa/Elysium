import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({
        email: '', password: '', error: {
            errorMessage: ''
        }
    })

    const { email, password, error } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({
                email: '', password: '', error: {
                    errorMessage: ''
                }
            });
        } catch (error) {
            console.log(error.message);
            setCredentials({
                ...userCredentials, error: {
                    errorMessage: error.message
                }
            })
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    errorMessage={error.errorMessage}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    errorMessage={error.errorMessage}
                    required
                />
                {error.errorMessage && <p className='error-message'>
                    Incorrect credentials. Please try again.
                </p>}
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;