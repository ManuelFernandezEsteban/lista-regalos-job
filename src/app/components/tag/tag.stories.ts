import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TagComponent } from './tag.component';



export default {
    component:TagComponent,
    decorators:[
        moduleMetadata({
            declarations:[TagComponent],
            imports:[CommonModule],
        }),
    ],
    excludeStories:/.*Data$/,
    title:'Tag',
} as Meta;

const Template: Story<TagComponent> = args =>({
    component:TagComponent,
    props:{
        ...args,
    }
});

export const Default=Template.bind({});
Default.args={
    tag:'Deportes'
};
export const Empty=Template.bind({});
Empty.args={
    tag:''
};
