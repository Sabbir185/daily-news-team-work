import React from 'react';
import { useSelector } from 'react-redux';
import SidebarCard from './SidebarCard';

const Sidebar = () => {
    const data = useSelector((state) => state.dataReducer.data);

    return (
        <aside >
            <h4 className="text-center mt-5">Top Breaking News</h4>
            <hr />
            <div>
                {
                    data?.map(title => <SidebarCard title={title}></SidebarCard>)
                }
            </div>
        </aside>
    );
};


export default Sidebar;