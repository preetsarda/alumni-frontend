import React from 'react';
import ReactDOM from 'react-dom';
import Create_Box from '../Components/Event/event_creation';
import Events from '../Components/Event/event_list';
import Notices from '../Components/Event/notice_list';
import Navbar from '../Components/Navbar';
function Dashboard() {
    return (
        <div>
            <div className='row'>
                <div className="col-md-8">
                    <div className="display-2">Events</div>
                    <Create_Box style={{display:'none'}}/>
                    <Events/>
                </div>
                <div className="col-md-4">
                    <Notices/>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;