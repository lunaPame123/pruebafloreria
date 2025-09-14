import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  };
<div style={{ maxWidth: "400px", margin: "auto", paddingTop: "50px" }}>
  <h2>Iniciar Sesión</h2>
  <form>
    <div>
      <label>Email:</label>
      <input type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
      <label>Contraseña:</label>
      <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button>Ingresar</button>
  </form>
</div>;

export default Login;


