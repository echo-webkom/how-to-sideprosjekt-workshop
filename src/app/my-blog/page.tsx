import React from "react";
import BlogPosts from "@/app/components/blogList";
import { Navigation } from "@/app/components/navigation";

export default function MyBlog() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
            <Navigation/>
            <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
                <h2 className="text-2xl text-gray-100 mb-4">My blog:</h2>
                <BlogPosts />
            </div>
        </div>
    );
}