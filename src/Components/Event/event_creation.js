import React from "react";
import { useState, ReactDOM } from "react";
function Create_Box() {
  const [Events, setEvents] = useState({
    name: "",
    organiser: "",
    registrationlink: "",
    date: Date.now(),
    description: ""
  });
  function updateEvents(value) {
    return setEvents((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onSubmit() {
    const newEvent = { ...Events };
    console.log(JSON.stringify(newEvent));
    await fetch("http://localhost:5000/events/add", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .catch(error => {
        window.alert(error);
      });

    setEvents({
      name: "",
      organiser: "",
      registrationlink: "",
      date: Date.now(),
      description: ""
    });
  }
  return (
    <div>
      <div style={{ display: 'block' }} className="container">
        <h3>Create Event</h3>
        <div className="row">
          <label htmlFor="Eventname" className="col-sm-2 col-form-label">Event Name</label>
          <div className="col-8">
            <input type="text" id="Eventname" value={Events.name} onChange={(e) => updateEvents({ name: e.target.value })} className="form-control" placeholder="First name" aria-label="First name" />
          </div>
        </div>
        <a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EventCreationModal" role="button">Create</a>
        <hr />
      </div>
      <div className="modal fade" id="EventCreationModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 defaultValue={Events.name} className="modal-title w-100 font-weight-bold">Event</h4>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text"></i>
                <div className="form-floating">
                  <textarea value={Events.description} onChange={(e) => updateEvents({ description: e.target.value })} className="form-control" placeholder="Leave a comment here" id="#Eventdes" style={{ height: '100px' }} />
                  <label htmlFor="floatingTextarea2">Description</label>
                </div>
                <label data-error="wrong" data-success="right" htmlFor="#Eventdes">Event Description</label>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Url</span>
                <div className="form-floating">
                  <input type="text" onChange={(e) => updateEvents({ registrationlink: e.target.value })} className="form-control" id="EventURL" placeholder="URL" />
                </div>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Date</span>
                <div className="form-floating">
                  <input type="date" value={Events.date} onChange={(e) => updateEvents({ date: e.target.value })} class="form-control" name="date-field" />
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button onClick={onSubmit} className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Create_Box;