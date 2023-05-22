import { useState, createContext, useEffect, ReactNode } from "react";
import { getPosts, createOne } from "./posts.service";

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
  displayedPost: Post | undefined,
  addPost: (post: any | undefined) => void,
  browsePosts: (direction: string) => void
}

export const PostsContext = createContext<PostsContextType>({
  posts: undefined,
  displayedPost: undefined,
  addPost: () => {},
  browsePosts: () => {}
});

export const PostsContextProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [displayedPost, setDisplayedPost] = useState<Post>();

  const retrievePosts = () => {
    getPosts()
      .then((results) => {
        setPosts(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPost = (post: { content: string, isPrivate: boolean }) => {
    createOne(post)
      .then(() => {
        retrievePosts();
      })
      .catch((err) => { console.log(err)})
  };

  const browsePosts = (direction: string) => {
    const i = posts.findIndex((post: Post) => post.ID === displayedPost?.ID);

    const post = direction === 'prev'
      ? posts[i-1]
      : posts[i+1];
  
    if(post){
      setDisplayedPost(post);
    };
  };

  useEffect(() => {
    retrievePosts();
  }, []);

  useEffect(() => {
    setDisplayedPost(posts[posts.length - 1]);
  }, [posts]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        displayedPost,
        addPost,
        browsePosts
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};