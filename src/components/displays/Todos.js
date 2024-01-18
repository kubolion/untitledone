import React from 'react';

const Todos = ({data}) => {
    return (
        <div className="list-card">
            {data.map((item) =>
                <div className="post todos">
                <p>{item.id}</p>
                <p>{item.title}</p>
                </div>)}
        </div>
    );
};

export default Todos;