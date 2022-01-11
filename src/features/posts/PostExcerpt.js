import React from 'react';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';
import { selectPostById } from '../posts/postsSlice';
import { useSelector } from 'react-redux';

export const PostExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId));
  return (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className='post-content'>{post.content.substring(0, 1000)}</p>
      <div>
        <ReactionButtons post={post} />
      </div>
      <Link to={`/posts/${post.id}`} className='button muted-button' >View Post</Link>
    </article>
  );
};

