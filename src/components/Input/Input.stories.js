import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Password', () => (
          <Input
            type="password"
            placeholder="&#9679; &#9679; &#9679; &#9679; &#9679;"
            required
          />
  )); 
