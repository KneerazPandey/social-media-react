import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Link } from 'react-router-dom';
import './post.scss';
import Comments from '../comments/Comments';

const Post = ({ post }) => {
  // Temperory
  const liked = false;
  const [commentOpen, setCommentOpen] = useState(false); 

  return (
    <div className='post'>
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration: 'none', color: 'inherit'}} >
                            <span className='name'>{ post.name }</span>
                        </Link>
                        <span className='date'>1 min ago</span>
                    </div>
                </div>
                <MoreHorizIcon className='icon' />
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
            </div>
            <div className="info">
                <div className="item">
                    {
                        liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
                    }
                    12 Likes
                </div>
                <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                     <ChatOutlinedIcon />
                    12 Comments
                </div>
                <div className="item">
                     <ShareOutlinedIcon />
                    Share
                </div>
            </div>
            { commentOpen && <Comments />}
        </div>
    </div>
  );
}

export default Post;