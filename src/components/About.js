import React from "react";
import image from "../bg-1.jpg";

export default function About() {
  return (
    <main className="relative">
      <img src={image} alt="bg-1" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src="#"
            alt="Photo"
            className="rounded w-32 h-32  lg:w-64 lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey There. I am <span className="text-green-100 ">Name</span>{" "}
            </h1>
            <div className="prose lg:prose-xl text-white">BLOCK CONTENT</div>
          </div>
        </section>
      </div>
    </main>
  );
}
