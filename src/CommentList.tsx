import React from 'react';

type Comment = {
    id: string;
    content: string;
};

interface CommentListProps
{
    comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({comments}) => {
    const renderedComments = comments.map(comment => {
        return (
            <li key={comment.id}>{comment.content}</li>
        );
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    );
};

export default CommentList;