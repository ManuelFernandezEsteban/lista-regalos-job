import { CommonModule } from '@angular/common';
import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { Tag } from 'src/app/models/tag.models';
import { TagListComponent } from '../tag-list/tag-list.component';
import { TagComponent } from '../tag/tag.component';
import { BoxComponent } from './box.component';
import { TituloComponent } from '../titulo/titulo.component';
import { DescripcionComponent } from '../descripcion/descripcion.component';



export default {
    component:BoxComponent,
    decorators:[
        moduleMetadata({
            declarations:[TagComponent,TagListComponent,TituloComponent,DescripcionComponent],
            imports:[CommonModule],
        }),
        componentWrapperDecorator(story=>`<div style="margin: 3em">${story}</div>`)
    ],
    excludeStories:/.*Data$/,    
    title:'Box',
} as Meta;

const Template: Story<BoxComponent> = args =>({
    component:BoxComponent,
    props:{
        ...args,
    }
});

export const Default=Template.bind({});
Default.args={

    grupo:{
       titulo:'Crew',
        descripcion:'Lista de regalos para el grupo crew',
        tags:[
            {
                tag:'Deporte de riesgo'
            },
            {
                tag:'Libros'
            }
        ]
    }
}
export const Empty=Template.bind({});
Empty.args={
    grupo:{
        titulo:'',
         descripcion:'',
         tags:[              
         ]
     }
};