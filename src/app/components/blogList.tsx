import React from "react";
import { posts } from "@/utils/blogPosts";
const BlogPosts: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg">
            <ul className="space-y-4">
                {posts.map(post => (
                    <li key={post.title} className="bg-gradient-to-b from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% p-8 rounded-lg shadow-lg">
                        <h3 className="text-white text-xl">{post.title}</h3>
                        <p className="text-gray-200">{post.date}</p>
                        {post.content && <p className="text-gray-200">{post.content}</p>}
                        {post.sections?.map(section => (
                            <div key={section.title}>
                                {section.title && <h4 className="text-lg text-gray-300">{section.title}</h4>}
                                <p className="text-sm text-gray-200">{section.content}</p>
                                <br></br>
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPosts;