import React from 'react';

enum ModerationStatus {
    REJECTED = 'rejected',
    APPROVED = 'approved',
    PENDING = 'pending'
}

type Comment = {
    id: string;
    content: string;
    status: ModerationStatus;
};

interface CommentListProps
{
    comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({comments}) => {
    const renderedComments = comments.map(comment => {
        let content;

        switch (comment.status) {
            case ModerationStatus.APPROVED:
                content = comment.content;
                break;

            case ModerationStatus.REJECTED:
                content = 'This comment was rejected';
                break;

            case ModerationStatus.PENDING:
                content = 'This comment is awaiting moderation';
                break;
        }

        return (
            <li key={comment.id}>{content}</li>
        );
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    );
};

export default CommentList;