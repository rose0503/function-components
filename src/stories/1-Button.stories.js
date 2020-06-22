import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Buttonlight = () => (<div className="contaniner-10 justifile-center"> <a  className="ml-3 btn btn-light text-info" href="#">Xem sách</a>
                                  <a className="btn btn-info ml-2"  href="#">Hoàn thành</a>
                                   </div> );

export const Buttonprimary = () => <a className="btn btn-primary" href="#">Thuê sách</a>;


export const ButtonLink = () =><a href="#">Quản lý shop</a>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
