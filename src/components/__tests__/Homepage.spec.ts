import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Homepage from '../Homepage.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Homepage)
    expect(wrapper.text()).toContain('hello')
  })
})
