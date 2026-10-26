
"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./register.css";

export default function register() {

  const router=useRouter();
async function registration(event)
{
  event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // email validation
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    // Password must contain at least 8 characters
    const passwordPattern = /^.{8,}$/;

    if (!passwordPattern.test(password)) {
      alert("Password must be at least 8 characters");
      return;
    }

  try {
  const res= await fetch("/api/register",{
    method:"POST",

    headers:{
      "content-type": "application/json" }
      ,
      body: JSON.stringify({

        name,
        email,
        password

        // name:form.name.value,
        // email:form.email.value,
        // password:form.password.value,
      }),
  
  })
    const resulttt=await res.json();
    alert(resulttt.message);


if (res.ok) {
  router.push("/login");
}

  }

  catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please check  API and server.");
    }
  }


  // function regsuccess(event) {
  //   alert("Registration successful!");
  // }

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Create Account</h1>


        <form onSubmit={registration}>
          <div className="form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

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

          <button type="submit" className="regbtn">
            Register
          </button>
        </form>

        <p className="link">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>


      </div>
    </div>
  );
}
