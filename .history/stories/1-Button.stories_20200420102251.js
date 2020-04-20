import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import LoginButton from '../comps/Buttons/LoginButtons';
import NextButton from '../comps/Buttons/NextButtons';
import GameButton from '../comps/Buttons/GameButtons';
// import MiniRounds from '../comps/Buttons/MiniRoundButtons';
// import ListDiv from '../comps/NewListDiv';
// import SettingsBtn from '../comps/Buttons/SettingsButtons';

export default {
  title: 'Buttons',
  component: Button,
};

export const DefaultButton = () => (
  <LoginButton />
);

export const ContinueButton = () => (
  <NextButton />
);

export const MiniGameButton = () => (
  <GameButton />
);

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
