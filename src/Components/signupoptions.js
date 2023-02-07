import React from 'react';
import ReactDOM from 'react-dom';
import { Link} from "react-router-dom";

function Type_Radio() {
    return (
        // <div className="container">
        //     <div className="form-check form-check-inline">
        //         <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"  defaultValue="option1" />
        //         <label className="form-check-label" htmlFor="inlineRadio1">
        //             Alumni
        //         </label>
        //     </div>
        //     <div className="form-check form-check-inline">
        //         <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2"/>
        //         <label className="form-check-label" htmlFor="inlineRadio2">
        //             Company
        //         </label>
        //     </div>
        // </div>
        <div className='containter-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <Link className='display-1' to="alum">Alumni</Link>
                </div>
                <div className='col-6'>
                    <Link className='display-1' to="/signup/company">Company</Link>
                </div>
            </div>
        </div>
    )
}
export default Type_Radio;