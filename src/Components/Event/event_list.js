import React from 'react';
import ReactDOM from 'react-dom';
import { useState,useEffect } from 'react';
import { setInternalBufferSize } from 'bson';
function Events() {
    const [events, setevents] = useState([])
  useEffect(() => {
    getEvents();
  }, []);
  const getEvents = () => {

    fetch("http://localhost:5000/events/get", {
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        })
      .then(res => res.json())
      .then(
        (events) => {
          setevents(events)
        },
        (error) => {
          alert(error);
        }
      );
  }
  const eventss=events.slice(0,5);
  return(
    <div>
        {eventss.map(event=>
        <div key={event._id} className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 id="eventname5"  className="card-title">{event.name}</h5>
                    <p style={{"font-size":12}}>{String(event.date).slice(0,10)}</p>
                    <p style={{"font-size":13}}>{(event.organiser)}</p>
                    <p id="eventdes5" className="card-text">{event.description}</p>
                    <a href={"https://"+event.registrationlink} id="eventur5" className="card-link btn btn-primary">
                        Join/Register
                    </a>
                </div>
            </div>
            )}
            </div>
    )
}
export default Events;