import '@testing-library/jest-dom'
import React from 'react'
import {render, waitFor, cleanup, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
// import axiosMock from 'axios';
import People from '../pages/people';
import * as Service from "../pages/service";

afterEach(cleanup);

test('show the Loading Data...', async () => {
    const { getByTestId } = render(<People />);
    expect(getByTestId('loading')).toHaveTextContent('Loading Data...');
});

test('fetches and displays data', async() => {
    const mockPossiblePeople = {
        count: 82,
        next: "http://swapi.dev/api/people/?page=2",
        previous: null,
        results: [
            {name: "Luke Skywalker"},
            {name: "C-3PO"}
        ]
    };

    const fetchPossiblePeople = jest.spyOn(Service, 'getPeopleList').mockResolvedValue(mockPossiblePeople);
    expect(fetchPossiblePeople).not.toHaveBeenCalled();
})