import React, { useState } from 'react';
import { FaRegHeart, FaHeart, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { CommentLogo } from '../../assets/constants';

interface Comment {
  text: string;
  time: string;
}

interface PostFooterProps {
  username: string;
}

const PostFooter: React.FC<PostFooterProps> = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentInput.trim()) {
      const time = new Date().toLocaleTimeString();
      setComments([...comments, { text: commentInput, time }]);
      setCommentInput('');
    }
  };

  return (
    <div className='post-footer'>
      <div className='post-like-comment-save'>
        <div className='post-like-comment'>
          <button onClick={handleLike}>
            {liked ? <FaHeart className='liked' /> : <FaRegHeart />}
          </button>
          <button onClick={() => setShowComments(!showComments)}>
            <CommentLogo />
          </button>
        </div>
        <button onClick={handleSave}>
          {saved ? <FaBookmark className='saved' /> : <FaRegBookmark />}
        </button>
      </div>
      <span>{likesCount} likes</span>
      <div className='username-caption-comments'>
        <p>{username} <span>Post Caption</span></p>
      </div>
      <form className='add-comment' onSubmit={handleCommentSubmit}>
        <input
          type='text'
          placeholder='Add a comment...'
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button type='submit'>Post</button>
      </form>
      {showComments && (
        <div className='comments'>
          {comments.map((comment, index) => (
            <div className='comment' key={index}>
              <span className='comment-text'>{comment.text}</span>
              <span className='comment-time'>{comment.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostFooter;
