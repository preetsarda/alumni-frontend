import React from "react";
import { ReactDOM } from "react";
function Create_Box() {
    return (
        <div>
        <div style={{display:'block'}} className="container">
          <h3>Create Event</h3>
          <div className="row">
            <label htmlFor="Eventname" className="col-sm-2 col-form-label">Event Name</label>
            <div className="col-8">
              <input type="text" id="Eventname" className="form-control" placeholder="First name" aria-label="First name" />
            </div>
          </div>
          <a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EventCreationModal" role="button">Create</a>
          <hr />
        </div>
        <div className="modal fade" id="EventCreationModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Event</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  {/* <i class="fas fa-envelope prefix grey-text"></i> */}
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="#Eventdes" style={{height: '100px'}} defaultValue={""} />
                    <label htmlFor="floatingTextarea2">Description</label>
                  </div>
                  <label data-error="wrong" data-success="right" htmlFor="#Eventdes">Event Description</label>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Form Url</span>
                  <div className="form-floating">
                    <input type="text" className="form-control" id="EventURL" placeholder="URL" />
                    <label htmlFor="#EventURL">URL</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-primary">Create</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Create_Box;