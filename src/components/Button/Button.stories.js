import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';



storiesOf('Button', module)
    .add('Primary', () => <Button type = 'primary' label="Primary" />) 
    .add('Success', () => <Button type="success"  label="Success" />) 
    .add('Danger', () => <Button type='danger' label="Danger" />) 
    .add('Warning', () => <Button type='warning' label="Warning" />) 
    .add('Default', () => <Button type='default' label="Default" />)
    
    // I had some very detailed notes here at one point but I deleted them and forgot to command Z them :/ ... hate to see it 


    .add('Primary Large', () => <Button type ='primary' large label="Primary Large" />) 
    .add('Success Large', () => <Button type = 'success' large label ='Success Large' />)
    .add('Danger Large', () => <Button type = 'danger' large label ='Danger Large' />)
    .add('Warning Large', () => <Button type = 'warning' large label ='Warning Large' />)
    .add('Default Large', () => <Button type = 'default' large label ='Default Large' />)


    .add('Primary Outline', () => <Button type = 'primary' outline label ='Primary Outline' />)
    .add('Success Outline', () => <Button type = 'success' outline label ='Success Outline' />)
    .add('Danger Outline', () => <Button type = 'danger' outline label ='Danger Outline' />)
    .add('Warning Outline', () => <Button type = 'warning' outline label ='Warning Outline' />)
    .add('Default Outline', () => <Button type = 'default' outline label ='Default Outline' />)

    .add('Primary Light', () => <Button type = 'primary' light label="Primary Light" />)
    .add('Success Light', () => <Button type = 'success' light label="Success Light" />)
    .add('Danger Light', () => <Button type = 'danger' light label="Danger Light" />)
    .add('Warning Light', () => <Button type = 'warning' light label="Warning Light" />)
    .add('Default Light', () => <Button type = 'default' light label="Default Light" />)

    .add('Primary Large Outline', () => <Button type = 'primary' large outline label = 'Primary Large Outline'/>)
    .add('Success Large Outline', () => <Button type = 'success' large outline label = 'Success Large Outline'/>)
    .add('Danger Large Outline', () => <Button type = 'danger' large outline label = 'Danger Large Outline'/>)
    .add('Warning Large Outline', () => <Button type = 'warning' large outline label = 'Warning Large Outline'/>)
    .add('Default Large Outline', () => <Button type = 'default' large outline label = 'Default Large Outline'/>)

    .add('Primary Large Light', () => <Button type = 'primary' large light label = "Primary Large Light"/>)
    .add('Success Large Light', () => <Button type = 'success' large light label = "Success Large Light"/>)
    .add('Danger Large Light', () => <Button type = 'danger' large light label = "Danger Large Light"/>)
    .add('Warning Large Light', () => <Button type = 'warning' large light label = "Warning Large Light"/>)
    .add('Default Large Light', () => <Button type = 'default' large light label = "Default Large Light"/>)    