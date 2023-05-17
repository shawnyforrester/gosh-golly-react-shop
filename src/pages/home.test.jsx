import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import{ act} from "react-dom/test-utils";
import pretty from "pretty";
//import component
import Home from './home';

let container = null;
//setup a DOM element as a render target
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    //cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("it should render an image", () => {
    act(() => {
        render(<Home />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); //gets filled automatically by jest

    
});