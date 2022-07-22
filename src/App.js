import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Interweave } from 'interweave';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginButton from "./components/admin/LoginButton";
import AdminContainer from "./components/admin/AdminContainer";
import ProjectCategory from "./components/ProjectCategory";
import ProjectDetails from "./components/ProjectDetails";
import './App.css';

function App() {

  const [config, setConfig] = useState([]);
  const [projects, setProjects] = useState([]);
  const [categories, setProjectCategories] = useState([]);

  // read site configuration values from endpoint
  useEffect(() => {
    fetch("./data/config.json").then((response) =>
      response
        .json()
        .then((config) => {
          setConfig(config);
        })
    );
  }, []);

  // read project categories from endpointn
  useEffect(() => {
    fetch("./data/categories.json").then((response) =>
      response
        .json()
        .then((categories) => {
          setProjectCategories(categories);
        })
    );
  }, []);
  
  // read project details from endpoint
  useEffect(() => {
    fetch("./data/projects.json").then((response) =>
      response
        .json()
        .then((projects) => {
          setProjects(projects);
        })
    );
  }, []); 

  let introduction="";
  if (config.siteIntroduction !== "") {
    introduction = <section className="intro">
                      <article>
                        <h3><Interweave content={config.siteIntroduction}></Interweave></h3>
                      </article>
                    </section>;
  }

  const basename = document.querySelector('base')?.getAttribute('href') ?? '/' 
  
  return (
    <>
      <Header siteName={config.siteName} siteDescription={config.siteDescription} />
      <Switch>
        <Router basename={basename}>
          <Route exact path="/">
            <Navbar categories={categories} />
            {introduction}
            <section className="categories">
              {categories.map((projectCategory) => (
                <ProjectCategory key={projectCategory.tag} id={projectCategory.id} tag={projectCategory.tag} name={projectCategory.name} projects={projects} categories={categories} />
              ))}
            </section>
          </Route>
          <Route path="/project/:tag">
            <Navbar categories={categories} />
            <ProjectDetails projects={projects} />
          </Route>
          <Route path="/admin">
            <LoginButton></LoginButton>
            <AdminContainer></AdminContainer>
          </Route>
        </Router>
      </Switch>
      <Footer currYear={new Date().getFullYear()} footerText={config.footerText} showSourceCodeLink={config.showSourceCodeLink} />    
    </>
  );
}

export default App;
