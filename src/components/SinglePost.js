import React from "react";

export default function SinglePost(){

    return (
       <main className="bg-gray-200 min-h-screen p-12">
        <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
            <header className="relative">
                <div className="absolute h-full w-full flex items-center justify-center p-8">
                    <div className="bg-white bg-opacity-75 rounded p-12"> 
                        <h1 className="cursive text-3xl lg:text-6xl mb-4">Title of the Post</h1>
                        <div className="flext justify-center text-gray-800">
                            <img src="#" alt="post name" className="w-10 h-10 rounded-full"/> 
                            </div>
                        <p className="cursive  flex items-center pl-2 text-2xl">Single Post Name</p>
                    </div>
                </div>
                <img src="#" alt="Single post title" className="w-full object-cover rounded-t" style={{height: "400px"}}/>
            </header>
            <div className="px-16 lg:px-48 py-12 lg:py-20 lg:prose-xl max-w-full">BLOG CONTENT</div>
        </article>
       </main>
       );  
       
}