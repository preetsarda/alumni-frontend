import React from 'react';
import ReactDOM from 'react-dom';
import { useState,useEffect } from 'react';

function Notices() {
    const [notices, setnotices] = useState([])
    useEffect(() => {
        getNotices();
    }, []);
    const getNotices = () => {

        fetch("http://localhost:5000/notices/get", {
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(
                (notices) => {
                    setnotices(notices)
                },
                (error) => {
                    alert(error);
                }
            );
    }
    const noticess = notices.slice(0, 5);
    return (
        <div>
            <div className="display-2">Notices</div>
            <hr style={{ height: '4px', backgroundColor: 'black' }} />
            {noticess.map(notice =>
                <div key={notice._id} className="card">
                    <h3 id='Noticehead-1'>{notice.title}</h3>
                    <p style={{"font-size":12}}id="by-1">{notice.by}</p>
                    <p style={{"font-size":10}} id="on-1">{String(notice.date).slice(0,10)}</p>
                    <p id="Notice-1">
                        {notice.body}
                    </p>
                    <hr />
                </div>
            )}
        </div>
    )
    return (
        <div>
            <div className="display-2">Notices</div>
            <hr style={{ height: '4px', backgroundColor: 'black' }} />
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                <h3 id='Noticehead-1'>Notice-1</h3>
                <p id="by-1"></p>
                <p id="on-1"></p>
                <p id="Notice-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minus unde harum dolore eum
                    quasi illum labore necessitatibus neque pariatur quae, ullam iure perspiciatis a eius id et
                    blanditiis ut.
                </p>
                <hr />
                <h3 id='Noticehead-2'>Notice-2</h3>
                <p id="by-2"></p>
                <p id="on-2"></p>
                <p id="Notice-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minus unde harum dolore eum
                    quasi illum labore necessitatibus neque pariatur quae, ullam iure perspiciatis a eius id et
                    blanditiis ut.
                </p>
                <hr />
                <h3 id='Noticehead-3'>Notice-3</h3>
                <p id="by-3"></p>
                <p id="on-3"></p>
                <p id="Notice-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minus unde harum dolore eum
                    quasi illum labore necessitatibus neque pariatur quae, ullam iure perspiciatis a eius id et
                    blanditiis ut.
                </p>
                <hr />
                <h3 id='Noticehead-4'>Notice-4</h3>
                <p id="by-4"></p>
                <p id="on-4"></p>
                <p id="Notice-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minus unde harum dolore eum
                    quasi illum labore necessitatibus neque pariatur quae, ullam iure perspiciatis a eius id et
                    blanditiis ut.
                </p>
            </div>
        </div>

    )
}
export default Notices;