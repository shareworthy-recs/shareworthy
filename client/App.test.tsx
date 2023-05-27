import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

describe('this test should fail', () => {
    test('2 + 2 ≠ 5', () => {
      const fail = 2 + 2;
      expect(fail).toBe(5);
    });
  });

describe('this test should pass', () => {
    test('2 + 2 = 4', () => {
    const pass = 2 + 2;
    expect(pass).toBe(4);
    });
});

//// ** example syntax **
// test('renders the landing page', () => {
//   render(<App />);
//   expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
// });
