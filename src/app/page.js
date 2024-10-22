"use client";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import "./globals.css";

import FirebaseProvider from "@/context/FirebaseContext";
import App from "./main";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease", once: true });
  });
  return (
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  );
}
