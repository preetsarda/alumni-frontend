import React from 'react';
import ReactDOM from 'react-dom';
import VerificationList from '../Components/Profiles/Verification_List';
function Institute_Page() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <img></img>
                </div>
                
                <div className='col-md-8'>
                    <h3 className='display-3'>College Name</h3>
                    <h3 className='display-3'>Number Of Users</h3>
                </div>
            </div>
            <VerificationList/>
        </div>
    )
}
export default Institute_Page;