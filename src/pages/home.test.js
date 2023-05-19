/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home';
import '@testing-library/jest-dom/extend-expect'


it ('renders home page message', () => {

    //Arrange
    const {getByText, asFragment} = render(<Home />,
    );

    //Act
    //...nothing

    //Assert
    // const homeElement = screen.getByText("Shop Collection", { exact: false });
    expect(getByText('Summer styles are finally here')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot(
        `<h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>`, {exact: false}
    );
}
);


