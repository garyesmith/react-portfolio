// Tests for Footer component

import React from "react";
import {unmountComponentAtNode} from "react-dom";
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { act } from "react-dom/test-utils";

import Footer from "./Footer";

it("renders without any params", (done) => {
    const component =<Router>
        <Footer />
    </Router>;
    const container = document.body.appendChild(document.createElement('div'));
    createRoot(container).render(component);
    setTimeout(() => {
        expect(document.body.textContent).toBe("© "+new Date().getFullYear()+" View source");
        container.remove();
        done();
    });
});

it("renders with footerText", (done) => {
    const component =<Router>
        <Footer footerText="Testing Co." />
    </Router>;
    const container = document.body.appendChild(document.createElement('div'));
    createRoot(container).render(component);
    setTimeout(() => {
        expect(document.body.textContent).toBe("© "+new Date().getFullYear()+" Testing Co.View source");
        container.remove();
        done();
    });
});


/*
  act(() => {
    render(<Hello name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
*/

//});