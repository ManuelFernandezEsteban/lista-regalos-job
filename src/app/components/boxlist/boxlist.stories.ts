import { CommonModule } from '@angular/common';
import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { TagListComponent } from '../tag-list/tag-list.component';
import { TagComponent } from '../tag/tag.component';
import { TituloComponent } from '../titulo/titulo.component';
import { DescripcionComponent } from '../descripcion/descripcion.component';
import { BoxlistComponent } from './boxlist.component';
import { BoxComponent } from '../box/box.component';
import { action } from '@storybook/addon-actions';



export default {
    component:BoxlistComponent,
    decorators:[
        moduleMetadata({
            declarations:[TagComponent,TagListComponent,TituloComponent,DescripcionComponent,BoxComponent],
            imports:[CommonModule],
        }),
        componentWrapperDecorator(story=>`<div style="margin: 3em">${story}</div>`)
    ],
    excludeStories:/.*Data$/,    
    title:'BoxList',
} as Meta;

export const actionsData = {
    onSelect: action('onPinTask'),    
};

const Template: Story<BoxlistComponent> = args =>({
    component:BoxlistComponent,
    props:{
        ...args,
        onSelect:actionsData.onSelect
    }
});

export const Default=Template.bind({});
Default.args={

    lista:[
        {
            titulo:'Crew',
            descripcion:'Lista de regalos para el grupo crew',
            tags:[
                {
                    tag:'Deporte de riesgo'
                },
                {
                    tag:'Libros'
                }
            ],
            icono:"./assets/icons/navy24px.png",
            iconoDescripcion:"icono tripulacion"
        },
        {
            titulo:'Family',
            descripcion:'Lista de regalos para el grupo family',
            tags:[
                {
                    tag:'Family'
                },
                {
                    tag:'sport'
                }
            ],
            icono:"./assets/icons/family24px.png",
            iconoDescripcion:"icono familia"
        },

    ]
    
}
export const Empty=Template.bind({});
Empty.args={
    lista:[]
};