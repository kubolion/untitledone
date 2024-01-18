import React from 'react';

const Photos = ({data}) => {
    return (
        <div className="list-card">
            {data.map((item) =>
                <div className="post photos">
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.url}</p>
            </div>)}
        </div>
    );
};

export default Photos;