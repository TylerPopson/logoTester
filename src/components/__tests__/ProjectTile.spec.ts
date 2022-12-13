import { mount } from '@vue/test-utils';
import { test, expect } from 'vitest';
import ProjectTile from '../UserDashboard/ProjectTile.vue';

test("Check Props",async () => {
    expect(ProjectTile).toBeTruthy();
    const wrapper = mount(ProjectTile, {
        props: {
            title: "Test Title",
            description: "This is a description.",
            image: "",
        }
    });

    expect(wrapper.text()).toContain("Test Title");
    expect(wrapper.text()).toContain("This is a description.");
})

test("Check Image", async ()=>{
    expect(ProjectTile).toBeTruthy();
    const wrapper = mount(ProjectTile, {
        props: {
            title: "Vie",
            description: "This is a the logo for Vie Graphic Design Tool",
            image: "https://via.placeholder.com/150",
        }
    });

    expect(wrapper.text()).toContain("Vie");
    expect(wrapper.text()).toContain("This is a the logo for Vie Graphic Design Tool");
})