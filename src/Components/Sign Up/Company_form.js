import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
function Company_Form() {
    const [user, setUser] = useState({
        pwd: "",
        access_code: 3,
        email: "",
        description: "",
        name: "",
        phone: "",
        typeOfOrganization: "",
        streetad1: "",
        streetad2: "",
        city: "",
        state: ""

    });

    // const navigate = useNavigate();
    function updateUser(value) {
        return setUser((prev) => {
            return { ...prev, ...value };
        });
    }
    async function onSubmit() {
        const newPerson = { ...user };
        console.log(JSON.stringify(newPerson));
        await fetch("http://localhost:5000/user/add/co", {
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
                pwd: "",
                access_code: 3,
                email: "",
                description: "",
                name: "",
                phone: "",
                typeOfOrganization: "",
                streetad1: "",
                streetad2: "",
                city: "",
                state: ""
            })
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
                            <h3 className='display-6'>Company Information</h3><br />
                            <div className='row mb-3'>
                                <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label><div className='col'>
                                    <input type="text" id="Name" value={user.name} onChange={(e) => updateUser({ name: e.target.value })} className="form-control" placeholder="Name" aria-label="Name" />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor="Cphone" className="col-sm-2 col-form-label">Phone Number</label>
                                <div className="col-sm-10">
                                    <input type="text" value={user.phone} onChange={(e) => updateUser({ phone: e.target.value })} className="form-control" placeholder="Phone Number" aria-label="Phone Number" id="Cphone" />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor="Address" className="col-sm-2 col-form-label">Address</label>
                                <div className='col-sm-10'>
                                    <input type="text" value={user.streetad1} onChange={(e) => updateUser({ streetad1: e.target.value })} className="form-control" placeholder="Street Address 1" aria-label="Street Address 1" id="Address" />

                                    <input type="text" value={user.streetad2} onChange={(e) => updateUser({ streetad2: e.target.value })} className="form-control" placeholder="Street Address 2" aria-label="Street Address 2" id="Address" />
                                    <div className='row mb-3'>
                                        <div class="col-6">
                                            <input type="text" value={user.city} onChange={(e) => updateUser({ city: e.target.value })} id="city" className="form-control" placeholder="City" aria-label="City" />
                                        </div>
                                        <div class="col-6">
                                            <input type="text" value={user.state} onChange={(e) => updateUser({ state: e.target.value })} id="state/prov" className="form-control" placeholder="State/Province" aria-label="State/Province" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form >
                </div>
                <div className="col-md-6">
                    <br />
                    <form>
                        <fieldset className="row mb-3">
                            <legend className="col-form-label col-sm-2 pt-0">Type of Organisation</legend>
                            <div className='col-sm-10'>
                                <select id='Type' value={user.typeOfOrganization} onChange={(e) => updateUser({ typeOfOrganization: e.target.value })} className="form-select" aria-label="Type">
                                    <option selected>Select</option>
                                    <option value={1}>XYZZ</option>
                                    <option value={2}>XYZZ</option>
                                    <option value={3}>XYZZ</option>
                                </select></div>
                        </fieldset>
                        <div className='container'>
                            <label className="col-sm-2 col-form-label" htmlFor="Companydes">Description</label>
                            <textarea className="form-control" value={user.description} onChange={(e) => updateUser({ description: e.target.value })} placeholder="Type here..." id="Companydes" style={{ height: '100px' }} defaultValue={""} />
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
export default Company_Form;