import React from 'react';
import ReactDOM from 'react-dom';
function Events() {
    async function ab() {
        const Response = await fetch("http://localhost:5000/events/get", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        })
        const dat = await Response.json();
        console.log(dat);
        for (let i = 0; i < dat.length; i++) {
            console.log(dat[i].name)
            document.getElementById("eventname"+(i+1)).innerHTML = dat[i].name;
            document.getElementById("eventdes"+(i+1)).innerHTML = dat[i].description;
            document.getElementById("eventur"+(i+1)).href=dat[i].resgistrationlink;
        }
    }
    ab();
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 id="eventname1" className="card-title">Event Name</h5>
                    <p id="eventdes1" className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" id="eventur1" className="card-link btn btn-primary">
                        Join/Register
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 id="eventname2" className="card-title">Event Name</h5>
                    <p id="eventdes2" className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" id="eventur2" className="card-link btn btn-primary">
                        Join/Register
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 id="eventname3" className="card-title">Event Name</h5>
                    <p id="eventdes3" className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" id="eventur3" className="card-link btn btn-primary">
                        Join/Register
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 id="eventname4" className="card-title">Event Name</h5>
                    <p id="eventdes4" className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" id="eventur4" className="card-link btn btn-primary">
                        Join/Register
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 id="eventname5" className="card-title">Event Name</h5>
                    <p id="eventdes5" className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" id="eventur5" className="card-link btn btn-primary">
                        Join/Register
                    </a>
                </div>
            </div>

        </div>

    )
}
export default Events;