
"use client";

import { useRouter } from "next/navigation";
import "./login.css";
import { signIn } from "next-auth/react";


export default function LoginPage() {
  const router = useRouter();

  async function login(event) {
    event.preventDefault();

    const form = event.currentTarget;

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email.value,
          password: form.password.value,
        }),
      });

      const resulttt = await res.json();

    alert(resulttt.message);


      if (res.ok) {
        router.push("/dashboard");
      }
    } 
    
catch (error) {
  console.error("Login error:", error);
  alert("Login failed. Please try again.");
}
  }

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>
        
        <form onSubmit={login}>

          <div className="form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="loginbtn">
            Login
          </button>
        </form>

        <p className="reglink">
          Don't have an account?{" "}
          <a href="/register">Register</a>
        </p>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          type="button"
          className="google-btn"
          onClick={() =>
            signIn("google", {
              redirectTo: "/dashboard",
            })
          }
        >
          Continue with Google
        </button>

        <button
          type="button"
          className="github-btn"
          onClick={() =>
            signIn("github", {
              redirectTo: "/dashboard",
            })
          }
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}






//jwt ---> json web token
//header  ---->token formate(like kis algorithm sy sign ha) and token type
//payload  --->user info and expiry data
//sign----->  is mai header or pylaod verify krny ke liye cryptographic proof

//basically signature is like-----------> Server header aur payload ko combine karta hai. 
// Phir signing algorithm aur secret key ki madad se ek signature calculate karta hai.
