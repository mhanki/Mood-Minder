import { useState, createContext, useEffect, ReactNode } from "react";
import { getPosts } from "./posts.service";

export type Post = {
  ID: number,
  content: string,
  isPrivate: boolean,
  createdAt: string,
  updatedAt: string,
  userId: number
};

interface PostsContextType {
  posts: Post[] | undefined,
  error: any
};

export const PostsContext = createContext<PostsContextType>({ 
  posts: undefined, 
  error: null 
});

export const PostsContextProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(null);

  const retrievePosts = () => {
    getPosts()
      .then((results) => {
        setPosts(results);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        error
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};