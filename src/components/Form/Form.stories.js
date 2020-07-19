import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module)
.add('Email', () => <Form form type ='text' label = 'Email' placeholder = 'Email'/>)
.add('Email Small', () => <Form  form type ='text' label = 'Email' small placeholder = 'Email'/>)
.add('Email Large', () => <Form  form type ='text' label = 'Email' large placeholder = 'Email'/>)

.add('Dropdown', () => <Form  select type ='select' placeholder = "Select" />)
.add('Dropdown Small', () => <Form  select type ='select' small placeholder = "Select" />)
.add('Dropdown Large', () => <Form  select type ='select' large placeholder = "Select" />)

.add('Dropdown Dark', () => <Form  select dark type ='select' placeholder = "Select" />)
.add('Dropdown Dark Small', () => <Form  select dark type ='select' small placeholder = "Select" />)
.add('Dropdown Dark Large', () => <Form  select dark type ='select' large placeholder = "Select" />)

