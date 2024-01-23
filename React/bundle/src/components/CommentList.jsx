import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: '이후제',
        comment: '안녕하세요. 소플입니다.',
    },
    {
        name: '김재식',
        comment: '리액트 재밌습니다.',
    },
    {
        name: '정한석',
        comment: '저도 리액트 배워보고 싶습니다!!',
    },
];

const CommentList = (props) => {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;