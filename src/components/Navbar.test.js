// Tests for Navbar component

import React from "react";
import {unmountComponentAtNode} from "react-dom";
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { act } from "react-dom/test-utils";
import Navbar from "./Navbar";

it("renders without any params", (done) => {
    const component =<Router>
        <Navbar />
    </Router>;
    const container = document.body.appendChild(document.createElement('div'));
    createRoot(container).render(component);
    setTimeout(() => {
        expect(document.body.textContent).toMatch(new RegExp('Home'));
        container.remove();
        done();
    });
});

jest.setTimeout(10000);

it("renders with categories", (done) => {
    const testCategory=[{"id":"1", "name":"Test Category", "tag": "test-category"}];
    const component =<Router>
        <Navbar categories={testCategory} />
    </Router>;
    const container = document.body.appendChild(document.createElement('div'));
    createRoot(container).render(component);
    setTimeout(() => {
        expect(document.body.textContent).toMatch(new RegExp('HomeTest Category'));
        container.remove();
        done();
    });
});
