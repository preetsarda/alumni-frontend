import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';
function Alumni_Form() {
    const [user, setUser] = useState({
        email: "",
        pwd: "",
        access_code: 2,
        firstname: "",
        lastname: "",
        phone: "",
        college: "",
        gender: "",
        branch: "",
        studentID: "",
        occupation: "",
        organization: "",
        graduationyear: 2011,
        status:0,
    });

    // const navigate = useNavigate();
    function updateUser(value) {
        return setUser((prev) => {
            console.log(prev);
            console.log(value);
            return { ...prev, ...value };
        });
    }
    async function onSubmit() {
        const newPerson = { ...user };
        console.log(JSON.stringify(newPerson));
        await fetch("http://localhost:5000/user/add", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
            });

        setUser({
            email: "",
            pwd: "",
            access_code: 2,
            firstname: "",
            lastname: "",
            phone: "",
            college: "",
            gender: "",
            branch: "",
            studentID: "",
            occupation: "",
            organization: "",
            graduationyear:2011,
            status:0,
        });
    }
    return (
        <div className='conatiner'>
            <div className='row'>
                <div className='col-md-6'>
                    <form>
                        <div className='container'>
                            <h3 className='display-6'>Login Credentials</h3><br />
                            <div className="row mb-3">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" value={user.email} onChange={(e) => updateUser({ email: e.target.value })} className="form-control" id="inputEmail" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" value={user.pwd} onChange={(e) => updateUser({ pwd: e.target.value })} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputCPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                <div className="col-sm-10">
                                    <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control" id="inputCPassword" />
                                </div>
                            </div>
                        </div>
                        <br /><hr />
                        <div className='container'>
                            <h3 className='display-6'>Personal Information</h3><br />
                            <div className='row mb-3'>
                                <label htmlFor="firstname" className="col-sm-2 col-form-label">Name</label>
                                <div class="col">
                                    <input type="text" id="firstname"   value={user.firstname} onChange={(e) => updateUser({ firstname: e.target.value })} className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div class="col">
                                    <input type="text"  value={user.lastname} onChange={(e) => updateUser({ lastname: e.target.value })} className="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>

                                <div className="col-sm-10">
                                    <input type="text" value={user.phone} onChange={(e) => updateUser({ phone: e.target.value })} className="form-control" placeholder="Phone Number" aria-label="Phone Number" id="phone" />
                                </div>
                            </div>
                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div className="col-sm-10">
                                    <div className="form-check-inline">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Female
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                            Others
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </form >
                </div>
                <div className="col-md-6">
                    <form>
                        <div className='container'>
                            <h3 className='display-6'>College Information</h3><br />

                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">College</legend>
                                <div className='col-sm-10'>
                                    <select value={user.college} onChange={(e) => updateUser({ college: e.target.value })} id='college_select' className="form-select" aria-label="College">
                                        <option selected>College</option>
                                        <option value={1} >Keshav Memorial Institute Of Technology</option>
                                        <option value={2}>Keshav Memorial Engineering College</option>
                                        <option value={3}>Neil Gogte Institute Of Technology</option>
                                    </select></div>
                            </fieldset>
                            <div className='row mb-3'>
                                <label htmlFor="gradyear" className="col-sm-2 col-form-label">Graduation Year</label>

                                <div className="col-sm-10">
                                    <input type="number" value={user.graduationyear} onChange={(e) => updateUser({ graduationyear: e.target.value })} className="form-control" defaultValue={2011} placeholder="Graduation Year" aria-label="Graduation Year" id="gradyear" />
                                </div>
                            </div>
                            <fieldset className="row mb-3">
                                <legend htmlFor="college" className="col-form-label col-sm-2 pt-0">Course</legend>
                                <div className='col-sm-10'>
                                    <select id="college" value={user.branch} onChange={(e) => updateUser({ branch: e.target.value })} className="form-select" aria-label="College">
                                        <option selected>Branch</option>
                                        <option value={1} >CSE</option>
                                        <option value={2}>CSM</option>
                                        <option value={3}>IT</option>
                                        <option value={4}>CSD</option>
                                        <option value={5}>ECE</option>
                                        <option value={6}>EIE</option>
                                    </select></div>
                            </fieldset>
                            <div className='row mb-3'>
                                <label htmlFor="ID" className="col-sm-2 col-form-label">Student ID</label>

                                <div className="col-sm-10">
                                    <input type="text" value={user.studentID} onChange={(e) => updateUser({ studentID: e.target.value })} className="form-control" placeholder="Student ID" aria-label="Student ID" id="ID" />
                                </div>
                            </div>
                        </div>
                        <br /><hr />
                        <div className='container'>
                            <h3 className='display-6'>Further Details</h3><br />

                            <div className='row mb-3'>
                                <label htmlFor="occ" className="col-sm-2 col-form-label">Current Occupation</label>

                                <div className="col-sm-10">
                                    <input type="text" value={user.occupation} onChange={(e) => updateUser({ occupation: e.target.value })} className="form-control" placeholder="Current Occupation" aria-label="Current Occupation" id="occ" />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor="org" className="col-sm-2 col-form-label">Current Organization</label>

                                <div className="col-sm-10">
                                    <input type="text" value={user.organization} onChange={(e) => updateUser({ organization: e.target.value })} className="form-control" placeholder="Current Organization" aria-label="Current Organization" id="org" />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor="furthercertifications" className="col-sm-2 col-form-label">Further Certifications (if any)</label>

                                <div className="col-sm-10">
                                    <input class="form-control" type="file" id="furthercertification" multiple />

                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor="resume" className="col-sm-2 col-form-label">Resume</label>

                                <div className="col-sm-10">
                                    <input class="form-control" type="file" id="resume" />

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div className='text-center'><input
                type="submit"
                onClick={onSubmit}
                className="btn btn-primary"
            />
            </div>
        </div>
    )

}
// export function Login_C() {
// return (
//     <div className='container'>
//         <h3 className='display-6'>Login Credentials</h3><br />
//         <div className="row mb-3">
//             <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
//             <div className="col-sm-10">
//                 <input type="email" value={user.email} onChange={(e) => updateUser({ email: e.target.value })} className="form-control" id="inputEmail" />
//             </div>
//         </div>
//         <div className="row mb-3">
//             <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
//             <div className="col-sm-10">
//                 <input type="password" value={user.pwd} onChange={(e) => updateUser({ pwd: e.target.value })} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control" id="inputPassword" />
//             </div>
//         </div>
//         <div className="row mb-3">
//             <label htmlFor="inputCPassword" className="col-sm-2 col-form-label">Confirm Password</label>
//             <div className="col-sm-10">
//                 <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control" id="inputCPassword" />
//             </div>
//         </div>
//         <input
//             type="submit"
//             onClick={onSubmit}
//             className="btn btn-primary"
//         />
//     </div>
// )
//  }
// function Personal_Info() {
//     return (
//         <div className='container'>
//             <h3 className='display-6'>Personal Information</h3><br />
//             <div className='row mb-3'>
//                 <label htmlFor="firstname" className="col-sm-2 col-form-label">Name</label>
//                 <div class="col">
//                     <input type="text" id="firstname" value={user.firstname} className="form-control" placeholder="First name" aria-label="First name" />
//                 </div>
//                 <div class="col">
//                     <input type="text" value={user.lastname} className="form-control" placeholder="Last name" aria-label="Last name" />
//                 </div>
//             </div>
//             <div className='row mb-3'>
//                 <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>

//                 <div className="col-sm-10">
//                     <input type="text" value={user.phone} className="form-control" placeholder="Phone Number" aria-label="Phone Number" id="phone" />
//                 </div>
//             </div>
//             <fieldset className="row mb-3">
//                 <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
//                 <div className="col-sm-10">
//                     <div className="form-check-inline">
//                         <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
//                         <label className="form-check-label" htmlFor="gridRadios1">
//                             Male
//                         </label>
//                     </div>
//                     <div className="form-check-inline">
//                         <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
//                         <label className="form-check-label" htmlFor="gridRadios2">
//                             Female
//                         </label>
//                     </div>
//                     <div className="form-check-inline">
//                         <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" />
//                         <label className="form-check-label" htmlFor="gridRadios3">
//                             Others
//                         </label>
//                     </div>
//                 </div>
//             </fieldset>
//         </div>
//     )
// }
// function College_Info() {
//     return (
//         <div className='container'>
//             <h3 className='display-6'>College Information</h3><br />

//             <fieldset className="row mb-3">
//                 <legend className="col-form-label col-sm-2 pt-0">College</legend>
//                 <div className='col-sm-10'>
//                     <select value={user.college} id='college_select' className="form-select" aria-label="College">
//                         <option selected>College</option>
//                         <option value={1} >Keshav Memorial Institute Of Technology</option>
//                         <option value={2}>Keshav Memorial Engineering College</option>
//                         <option value={3}>Neil Gogte Institute Of Technology</option>
//                     </select></div>
//             </fieldset>
//             <div className='row mb-3'>
//                 <label htmlFor="gradyear" className="col-sm-2 col-form-label">Graduation Year</label>

//                 <div className="col-sm-10">
//                     <input type="number" value={user.graduationyear} className="form-control" defaultValue={2011} placeholder="Graduation Year" aria-label="Graduation Year" id="gradyear" />
//                 </div>
//             </div>
//             <fieldset className="row mb-3">
//                 <legend htmlFor="college" className="col-form-label col-sm-2 pt-0">Course</legend>
//                 <div className='col-sm-10'>
//                     <select id="college" value={user.branch} className="form-select" aria-label="College">
//                         <option selected>Branch</option>
//                         <option value={1} >CSE</option>
//                         <option value={2}>CSM</option>
//                         <option value={3}>IT</option>
//                         <option value={4}>CSD</option>
//                         <option value={5}>ECE</option>
//                         <option value={6}>EIE</option>
//                     </select></div>
//             </fieldset>
//             <div className='row mb-3'>
//                 <label htmlFor="ID" className="col-sm-2 col-form-label">Student ID</label>

//                 <div className="col-sm-10">
//                     <input type="text" value={user.studentID} className="form-control" placeholder="Student ID" aria-label="Student ID" id="ID" />
//                 </div>
//             </div>
//         </div>
//     )
// }
// function Further_Details() {
//     return (
//         <div className='container'>
//             <h3 className='display-6'>Further Details</h3><br />

//             <div className='row mb-3'>
//                 <label htmlFor="occ" className="col-sm-2 col-form-label">Current Occupation</label>

//                 <div className="col-sm-10">
//                     <input type="text" value={user.occupation} className="form-control" placeholder="Current Occupation" aria-label="Current Occupation" id="occ" />
//                 </div>
//             </div>
//             <div className='row mb-3'>
//                 <label htmlFor="org" className="col-sm-2 col-form-label">Current Organization</label>

//                 <div className="col-sm-10">
//                     <input type="text" value={user.organization} className="form-control" placeholder="Current Organization" aria-label="Current Organization" id="org" />
//                 </div>
//             </div>
//             <div className='row mb-3'>
//                 <label htmlFor="furthercertifications" className="col-sm-2 col-form-label">Further Certifications (if any)</label>

//                 <div className="col-sm-10">
//                     <input class="form-control" type="file" id="furthercertification" multiple />

//                 </div>
//             </div>
//             <div className='row mb-3'>
//                 <label htmlFor="resume" className="col-sm-2 col-form-label">Resume</label>

//                 <div className="col-sm-10">
//                     <input class="form-control" type="file" id="resume" />

//                 </div>
//             </div>

//         </div>
//     )
// }
export default Alumni_Form;