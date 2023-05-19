import { Post } from './posts.context'
import { API_URL } from '../../../env';
import { fetchWithBearer } from '../auth/auth.service';
import camelize from 'camelize-ts';

export const getPosts = async () => {
  const res = await fetchWithBearer(`${API_URL}/posts`);
  const posts = await res.json();
  return posts.map((post: Post) => camelize<Post, false>(post));
};

/* const getOne = async (id: string) => {
  const res = await fetchWithBearer(`${baseUrl}/${id}`);
  const data = await res.json();
  return data.post;
};

const createOne = async (post: {content: string, isPrivate: boolean}) => {
  const newPost = {
    content: post.content,
    isPrivate: post.isPrivate ? 1 : 0
  };

  const res = await fetchWithBearer(baseUrl, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {'Content-Type': 'application/json'}
  });

  return res.json();
};

const updateOne = async (post: {ID: number, content: string, isPrivate: boolean}) => {
  const updatedPost = {
    content: post.content,
    isPrivate: post.isPrivate ? 1 : 0
  };

  const res = await fetchWithBearer(`${baseUrl}/${post.ID}`, {
    method: 'PUT',
    body: JSON.stringify(updatedPost),
    headers: {'Content-Type': 'application/json'}
  });

  return res.json();
}

const postsService = { getAll, getOne, createOne, updateOne };
export default postsService; */