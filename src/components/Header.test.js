// Tests for Header component

import React from "react";
import {unmountComponentAtNode} from "react-dom";
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { act } from "react-dom/test-utils";
import Header from "./Header";

it("renders without any params", (done) => {
    const component =<Router>
        <Header />
    </Router>;
    const container = document.body.appendChild(document.createElement('div'));
    createRoot(container).render(component);
    setTimeout(() => {
        expect(document.body.textContent).toMatch(new RegExp('Default Site Name'));
        container.remove();
        done();
    });
});

it("renders with siteName", (done) => {
    const component =<Router>
        <Header siteName="Testing Site Name" />
    </Router>;
    const container = document.body.appendChild(document.createElement('div'));
    createRoot(container).render(component);
    setTimeout(() => {
        expect(document.body.textContent).toMatch(new RegExp('Testing Site Name'));
        container.remove();
        done();
    });
});
