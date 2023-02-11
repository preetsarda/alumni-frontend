import React from 'react';
import ReactDOM from 'react-dom';

function AlumProfile() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <img></img>
                        </div>
                        <div className='col-md-4'>
                            <button>Upload Image</button>
                            <hr/>
                            <button>Remove Image</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h5>Name</h5>
                            <h5>College Name</h5>
                            <h5>Graduation Year</h5>
                            <h5>Student ID</h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-8'>
                    <h6>About</h6>
                    <p><h6>Phone:</h6>8688235224</p>
                </div>
            </div>
        </div>
    )
}
export default AlumProfile;