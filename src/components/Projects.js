import React from "react";

function Projects() {
  return (
    <section className="py-5">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Nxt Trenz(Ecommerce Clone- Flipkart)</h5>
                <p className="card-text"><b>Description of Project: </b><li>Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart.</li>
                    <li>Built pages for Login, Products and Product details with React Router, React components, form inputs, and event handlers.</li>
                    <li>Enabled secure authentication and autherization with JWT tokens and REST API class.</li>
                    <b>Technologies used: </b> ReactJS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authentication, Autherization.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Emoji Game</h5>
                <p className="card-text"><b>Description of Project: </b>
                <li>Designed a fun Challenging memory game with randomized emoji clicks.</li>
                <li>Utilized React components, props, conditional rendering, and state updates to create dynamic gameplay.</li>
                <li>Enhanced with CSS for a visually appearing design.</li>
                <li>Updated different games states suych as emojis list, winning state and losing state by using game state variable and conditional rendering.</li>
                <b>Technologies used: </b>React JS, CSS.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Todos Application</h5>
                <p className="card-text"><b>Description of Project:</b><li>
                    a robust task tracking system with CRUD capabilities, crafted to simplify task management.</li>
                    <li>Designed with HTML, CSS and Bootstrap to ensure a user-friendly interface for managing tasks.</li>
                    <li>Dynamic UI updates through Javacript event Listeners and DOM operations for seamless CRUD operations.</li>
                    <li>Secure task persitance through local storage methods, ensuring that tasks are never lost.</li>
                    <b>Technlogies used: </b>HTML, CSS, Javascript, Bootstrap.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
