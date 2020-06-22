import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import Book from '../components/Book';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Book',
  component: Book,
};

export const book = () => <Book />;
