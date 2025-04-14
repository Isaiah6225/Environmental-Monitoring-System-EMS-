"use client";

import React from "react";
import Link from "next/link";


export default function Container({ children }: { children: React.ReactNode }) {





  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-[#ADD8E6] shadow-md py-4 px-6 fixed top-0 left-0 z-50 text-white" >
        <div className="max-w-7xl mx-auto flex items-center ">
          <Link href="#home" className="text-3xl font-bold">
	  	Environmental Monitoring System (EMS)
          </Link>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 px-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#ADD8E6] text-white text-center py-4 mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}
