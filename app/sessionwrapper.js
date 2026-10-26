



// SessionProvider ka kaam hai React ke Client Components ko session ki information dena,
//  taake woh check kar saken ke user login hai ya nahi. 
// App Router mein server par session read karne ke liye auth() ab bhi preferred hai

// - children — app ke andar jo pages aur components render honge, woh yahan aayenge.


"use client";

import { SessionProvider } from "next-auth/react";  

export default function SessionWrapper({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
