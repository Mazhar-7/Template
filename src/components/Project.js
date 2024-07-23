import React from "react";

export default function Project() {
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="containier mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 justify-center mb-12">
          Welcome to my Projects Page{" "}
        </h2>
        <section className="grid grid-cols-2 gap-8">
          <article className="relative  rounded-lg shadow-xl bg-white p-16">
            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
              <a href="#" alt="Project" target="_blank" rel="Noopener">
                Project Title
              </a>
            </h3>
            <div className="text-gray-500 text-xs space-x-4">
              <span>
                <strong className="font-bold">Finished On</strong>:{" "}
                {new Date().toLocaleDateString()}
              </span>
              <span>
                <strong className="font-bold">Company</strong>: Location
              </span>
              <span>
                <strong className="font-bold">Company</strong>: Project Type
              </span>
              <p className="my-6 text-lg text-gray-700 leading-relaxed">
                Description
              </p>
              <a href="#" rel="opener" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400">
                View the Project {" "}
              <span role="img" aria-label="right pointer "> Unicorn Emoji </span>
              </a>

            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
