import React from 'react';
import ReactDOM from 'react-dom';
function Notices() {
    return (
        <div>
            <div className="display-2">Notices</div>
            <hr style={{ height: '4px', backgroundColor: 'black' }} />
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                <p id="Notice-1">
                </p><h3>Notice-1</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minus unde harum dolore eum
                quasi illum labore necessitatibus neque pariatur quae, ullam iure perspiciatis a eius id et
                blanditiis ut.
                <p />
                <hr />
                <p id="Notice-2">
                </p><h3>Notice-2</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minus unde harum dolore eum
                quasi illum labore necessitatibus neque pariatur quae, ullam iure perspiciatis a eius id et
                blanditiis ut.
                <p />
                <hr />
                <p id="Notice-3">
                </p><h3>Notice-3</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minus unde harum dolore eum
                quasi illum labore necessitatibus neque pariatur quae, ullam iure perspiciatis a eius id et
                blanditiis ut.
                <p />
                <hr />
                <p id="Notice-4">
                </p><h3>Notice-4</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minus unde harum dolore eum
                quasi illum labore necessitatibus neque pariatur quae, ullam iure perspiciatis a eius id et
                blanditiis ut.
                <p />
            </div>
        </div>

    )
}
export default Notices;