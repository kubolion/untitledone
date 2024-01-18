import React from 'react';
import "./InfoData.css"
import {Comments, Photos, Posts, Todos, Users} from "../displays";
const InfoData = ({stateApp}) => {
    const arrayOfComponents = {
        posts: <Posts data={stateApp.data}/>,
        comments: <Comments data={stateApp.data} />,
        photos: <Photos data={stateApp.data} />,
        todos: <Todos  data={stateApp.data} />,
        users: <Users data={stateApp.data} />
    }
    return (
        <div className="infoData">
            {arrayOfComponents[stateApp.display]}
        </div>
    );
};

export default InfoData;



