import React from 'react';
import Counter from '../counter';
import { Meta } from '@storybook/addon-docs/blocks';

export default {
  title: 'Counter',
  component: Counter,
  parameters:{
    docs: {
      description: {
        component: 'A description of your component',
      }
    }
  }
};

export const Default = (args) => <Counter {...args}/>;
Default.args ={
    Primary:true,
    initialvalue:5
}
