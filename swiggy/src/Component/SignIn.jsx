import Header from './Header';

const SignIn = () => {

    return(
        <>
            <div className="Signin">
                <div className="close-btn">&times;</div>
                <h2>Login</h2>
                <p>or Create a new acc</p>
                <label htmlFor="pno">Phone number</label>
                <input type="number" id="phno"/>
            </div>
        </>
    )
}

export default SignIn;