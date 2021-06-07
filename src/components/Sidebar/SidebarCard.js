import React from 'react';
import './Sidebar.css'

const SidebarCard = (props) => {
    const {title} = props.title;
    console.log(title)

    return (
        <div>
            <p className="title">{title}</p>
        </div>
    );
};

export default SidebarCard;