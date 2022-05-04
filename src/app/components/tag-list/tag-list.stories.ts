import { CommonModule } from '@angular/common';
import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { Tag } from 'src/app/models/tag.models';
import { TagComponent } from '../tag/tag.component';
import { TagListComponent } from './tag-list.component';


export default {
    component:TagListComponent,
    decorators:[
        moduleMetadata({
            declarations:[TagComponent,TagListComponent],
            imports:[CommonModule],
        }),
        componentWrapperDecorator(story=>`<div style="margin: 3em">${story}</div>`)
    ],
    excludeStories:/.*Data$/,    
    title:'TagList',
} as Meta;

const Template: Story<TagListComponent> = args =>({
    component:TagListComponent,
    props:{
        ...args,
    }
});

export const Default=Template.bind({});
Default.args={
    tags:[
        {tag:"Deportes de riesgo"},
        {tag:"Libros"},
    ]
};
export const Empty=Template.bind({});
Empty.args={
    tags:[]
};