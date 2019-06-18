import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import Table from '../Table';
import 'jest-axe/extend-expect';

it('has no programmatically detectable a11y issues', async () => {
  // pass anything that outputs html to axe
  const html = ReactDOMServer.renderToString(<Table />);
  const results = await axe(html);
  expect(results).toHaveNoViolations();
});
