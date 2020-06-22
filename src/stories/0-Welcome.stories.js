import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => (<div>
                                    <h1>Welcom to Manage Book</h1>
                                    <p>Storybook is an open source tool for developing UI components in isolation for React</p>
                                  </div>
                                  );

