import React from 'react';

const PostDetail = () => {
  return (
    <div className='post__detail'>
      <div className='post__box-id'>
        <div className='post__title'>Title</div>
      </div>
      <div className='post__profile-box'>
        <div className='post__profile' />
        <div className='post__author-name'>이상진</div>
        <div className='post__date'>날짜</div>
      </div>
      <div className='post__utils-box'>
        <div className='post__delete'>삭제</div>
        <div className='post__edit'>수정</div>
      </div>
      <div className='post__text'>게시글 내용</div>
    </div>
  );
};

export default PostDetail;
