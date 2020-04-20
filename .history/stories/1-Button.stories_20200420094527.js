import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import LoginButton from '../comps/Buttons/LoginButtons';
// import HardButton from '../comps/Buttons/WhiteBgButtons';
// import IconButton from '../comps/Buttons/IconButtons';
// import MiniRounds from '../comps/Buttons/MiniRoundButtons';
// import ListDiv from '../comps/NewListDiv';
// import SettingsBtn from '../comps/Buttons/SettingsButtons';

export default {
  title: 'Button',
  component: Button,
};

export const LoginButton = () => (
  <LoginButton />
);

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
