import React from 'react';
import "./Header.css"
const Header = ({changeState}) => {
    return (
        <header>
           <nav>
               <ul className="navigation-list">
                   <li onClick={() => changeState('posts')}>posts</li>
                   <li onClick={() => changeState('comments')}>comments</li>
                   <li onClick={() => changeState('photos')}>photo</li>
                   <li onClick={() => changeState('todos')}>todos</li>
                   <li onClick={() => changeState('users')}>users</li>

               </ul>
           </nav>
        </header>
    );
};

export default Header;