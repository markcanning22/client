import React, { useState } from 'react';
import axios from 'axios';

const PostCreate: React.FC = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title: title
        });

        setTitle('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                    <label>Title</label>
                    <input
                        className="form-control"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;