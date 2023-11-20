import { PostPageProps } from "@/types/posts";
import React, { useEffect, useState } from "react";

async function getPost(postId: string): Promise<string> {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(postId);
      }, 1000);
   });
}

export default function PostPage({ postId }: PostPageProps) {
   const [post, setPost] = useState<string>("");
   useEffect(() => {
      getPost(postId).then((post) => setPost(post));
   }, [postId]);

   return (
      <div className="container">
         <h1 className="text-2xl">Post Title</h1>
         <p>{post}</p>
      </div>
   );
}
