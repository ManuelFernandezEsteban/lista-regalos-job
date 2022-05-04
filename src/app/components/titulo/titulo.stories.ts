import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { TituloComponent } from './titulo.component';

export default {
    component:TituloComponent,
    decorators:[
        moduleMetadata({
            declarations:[TituloComponent],
            imports:[CommonModule],
        }),
    ],
    excludeStories:/.*Data$/,
    title:'Titulo',
} as Meta;

const Template: Story<TituloComponent> = args =>({
    component:TituloComponent,
    props:{
        ...args,
    }
});

export const Default=Template.bind({});
Default.args={
    titulo:'Crew'
};
export const Empty=Template.bind({});
Empty.args={
    titulo:''
};
