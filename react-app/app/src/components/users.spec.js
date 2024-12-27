import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './users.component';
import nock from 'nock';

beforeEach(() => {
  nock('http://localhost:4000')
    .get('/users')
    .reply(200, {
      users: [{ _id: '1', name: 'mock', email: 'mock@nock.com' }]
    }, { 'Access-Control-Allow-Origin': '*' });
});

it('renders list of users', async () => {
  render(<Users />);

  // Busca y verifica elementos específicos
  const userIdCell = await screen.findByText('1');
  const userNameCell = await screen.findByText('mock');
  const userEmailCell = await screen.findByText('mock@nock.com');

  expect(userIdCell).toBeInTheDocument();
  expect(userNameCell).toBeInTheDocument();
  expect(userEmailCell).toBeInTheDocument();
});
