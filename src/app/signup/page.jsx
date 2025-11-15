export default function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen"> 
            <h1>Signup Page</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}