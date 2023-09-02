import React, { useState } from 'react'
import firebase from '../../firebase';
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import 'react-phone-number-input/style.css'
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { login } from '../../actions/auth';
import PhoneInput from 'react-phone-number-input';

export default function Verification({ setShow }){
    const [phone_number, setPhone_number] = useState('')
    const [userName, setUserName] = useState('')
    const [replace, setReplace] = useState(true)
    const [otp, setOtp] = useState('')
    const dispatch = useDispatch()
    const auth = getAuth(firebase)
    const googleSignin = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
        onAuthStateChanged(auth, (currentUser) => {
            dispatch(login({ email: currentUser?.email }))
            setShow(false)
        })
    }
    const configureCaptcha = () => {

        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            },
        });

    }

    const onSignInSubmit = (e) => {
        e.preventDefault()
        configureCaptcha()
        const phoneNumber = phone_number
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setReplace(false)
                // alert('OTP sent to Your Mobile. Clieck "OK"')
                alert('sent to your number within 5 minutes')
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                if (error.code === "auth/too-many-requests") {
                    alert("Too many sign-in attempts. Please try again later.")
                } else {
                    alert(error.code);
                }
            });


    }
    const otpsubmit = (e) => {
        e.preventDefault()
        const code = otp;
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            alert("done", { autoClose: 1000})
            setShow(false);
            dispatch(login({ email: userName }))

            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...

            if (error.code === "auth/invalid-verification-code") {
                alert("Invalid verification code");
            } else if (error.code === "auth/code-expired") {
                alert("Verification code expired");
            } else if (error.code === "auth/too-many-requests") {
                alert("Too many sign-in attempts. Please try again later.");
            }
            else {
                alert(error.code);
            }
        });
    }

    return (
        <div className='contaienr_CreateEditChannel' style={{ height: '92vh' }}>
            <input
                onClick={() => setShow(false)}
                type="submit" name='text' value={'X'} className='ibtn_x' />
            {replace ?
                <>
                    <form className='container2_CreateEditChannel' style={{ backgroundColor: 'black' }} onSubmit={onSignInSubmit}>
                        <h1 style={{ textAlign: "center" }}>Login</h1>
                        <input type="text" placeholder='Enter Name' className='ibox' name='text' value={userName} onChange={(e) => setUserName(e.target.value)} required />
                        <PhoneInput value={phone_number} defaultCountry = 'IN' className='ibox' placeholder="Enter Phone Number" onChange={setPhone_number} required />
                        <input type="submit" value="Done" className='ibtn' /><br />
                        <GoogleButton style={{ margin: "0 auto", }} onClick={googleSignin} />
                    </form>
                </>
                :
                <>
                    <form className='container2_CreateEditChannel' style={{ backgroundColor: 'black' }} onSubmit={otpsubmit}>
                        <h1 style={{ textAlign: "center" }}>Enter OTP</h1>
                        <input type="text" name='number' className='ibox' placeholder='ONE TIME PASSWORD' value={otp} onChange={(e) => setOtp(e.target.value)} required />
                        <input type="submit" value="Login" className='ibtn' />
                    </form>
                </>
            }
            <div id="sign-in-button"></div>
        </div>
    )
}
