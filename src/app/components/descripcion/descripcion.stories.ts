import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DescripcionComponent } from './descripcion.component';


export default {
    component:DescripcionComponent,
    decorators:[
        moduleMetadata({
            declarations:[DescripcionComponent],
            imports:[CommonModule],
        }),
    ],
    excludeStories:/.*Data$/,
    title:'Descripcion',
} as Meta;

const Template: Story<DescripcionComponent> = args =>({
    component:DescripcionComponent,
    props:{
        ...args,
    }
});

export const Default=Template.bind({});
Default.args={
    descripcion:'Lista de regalos para el grupo crew'
};
export const Empty=Template.bind({});
Empty.args={
    descripcion:''
};
