
function Login() {
  return (
    <section className="login-page">
      <h1>Login</h1>
      <p>Welcome back to Little Lemon!</p>

      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? Sign up soon!</p>
    </section>
  );
}

export default Login;
