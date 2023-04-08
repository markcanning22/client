import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

enum ModerationStatus {
    REJECTED = 'rejected',
    APPROVED = 'approved',
    PENDING = 'pending'
}

type Comment = {
    id: string;
    content: string;
    postId: string;
    status: ModerationStatus;
};

type Post = {
    id: string;
    title: string;
    comments: Comment[]
};

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        const res: AxiosResponse = await axios.get('http://localhost:4002/posts');

        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card" style={{ width: '30%', marginBottom: '20px'}} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments}/>
                    <CommentCreate
                        postId={post.id}
                    />
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    );
};

export default PostList;