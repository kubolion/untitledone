import React from 'react';

const Posts = ({data}) => {
    console.log(data)
    return (
        <div className="list-card">
            {data.map((item)=> <div className="post card">
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
            </div>)}
        </div>
    );
};

export default Posts;