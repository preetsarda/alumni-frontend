import React from 'react';
import ReactDOM from 'react-dom';
import Search_list from './App_list';
function Company_Page() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <img></img>
                </div>
                
                <div className='col-md-8'>
                    <h3 className='display-3'>Company Name</h3>

                </div>
            </div>
            <Search_list/>
      </div>
    )
}
export default Company_Page;