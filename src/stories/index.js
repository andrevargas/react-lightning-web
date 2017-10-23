import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../components/Button';
import Badge from '../components/Badge';
import TextArea from '../components/TextArea';
import ButtonGroup from '../components/ButtonGroup';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('Example', () => <Button value="HELLO"/>)
  // .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Badge', module)
.add('Example', () => <Badge value="LOL" />);

storiesOf('Textarea', module)
.add('Example', () => <TextArea label="Label" placeholder="Default Placeholder" />);

storiesOf('ButtonGroup', module)
  .add('Default', () => (
      <ButtonGroup
        items={[
          { label: 'Refresh', value: 'refresh' },
          { label: 'Edit', value: 'edit' },
          { label: 'Save', value: 'save' }
        ]}
        onChange={action('onChange')}
      />
  ))
  .add('Disabled', () => (
      <ButtonGroup
        items={[
          { label: 'Refresh', value: 'refresh', disabled: true },
          { label: 'Edit', value: 'edit' },
          { label: 'Save', value: 'save' }
        ]}
        onChange={action('onChange')}
      />
  ))
  .add('Initial value', () => (
    <ButtonGroup
      selectedValue="edit"
      items={[
        { label: 'Refresh', value: 'refresh' },
        { label: 'Edit', value: 'edit' },
        { label: 'Save', value: 'save' }
      ]}
      onChange={action('onChange')}
    />
  ))



// storiesOf('Button', module)
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

// storiesOf('Button', module)
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
