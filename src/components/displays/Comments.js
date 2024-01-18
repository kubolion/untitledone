import React from 'react';

const Comments = ({data}) => {
    return (
        <div>
            <div className="list-card">
                {data.map((item) => <div className="post comments">
                    <p>{item.id}</p>
                    <p>{item.email}</p>
                    <p>{item.body}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Comments;