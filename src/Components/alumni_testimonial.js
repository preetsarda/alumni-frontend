import React from "react";
import { ReactDOM } from "react";
function Testimonial() {
    async function ab() {
        const Response = await fetch("http://localhost:5000/testimonials", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        })
        const dat=await Response.json();
        console.log(dat);
        document.getElementById("name_1").innerHTML=dat[2].name;
        document.getElementById("name_2").innerHTML=dat[1].name;
        document.getElementById("name_3").innerHTML=dat[0].name;
        document.getElementById("names_1").innerHTML=dat[2].content;
        document.getElementById("names_2").innerHTML=dat[1].content;
        document.getElementById("names_3").innerHTML=dat[0].content;
    }
    ab();
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 id="name_1"className="card-title">Name</h5>
                        <p id="names_1" className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum
                            beatae optio soluta, qui incidunt fuga earum numquam in? Blanditiis ad sit odio consectetur
                            ipsam nobis voluptatibus saepe eveniet quo.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 id="name_2" className="card-title">Name</h5>
                        <p id="names_2" className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum
                            beatae optio soluta, qui incidunt fuga earum numquam in? Blanditiis ad sit odio consectetur
                            ipsam nobis voluptatibus saepe eveniet quo.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 id="name_3" className="card-title">Name</h5>
                        <p id="names_3" className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum
                            beatae optio soluta, qui incidunt fuga earum numquam in? Blanditiis ad sit odio consectetur
                            ipsam nobis voluptatibus saepe eveniet quo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;