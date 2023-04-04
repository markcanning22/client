import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface CommentListProps
{
    postId: string;
}

type Comment = {
    id: string;
    content: string;
};

const CommentList: React.FC<CommentListProps> = ({postId}) => {
    const [comments, setComments] = useState<Comment[]>([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

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