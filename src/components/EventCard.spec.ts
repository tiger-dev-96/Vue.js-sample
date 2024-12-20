import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import EventCard from './EventCard.vue';
import type { Event } from '@/types/Event';

describe('EventCard.vue', () => {
  const mockEvent: Event = {
    id: 1,
    description: 'Sample event description',
    title: 'Sample Event',
    image: 'sample.jpg',
    start: new Date('2023-01-01T10:00:00').toISOString(),
    end: new Date('2023-01-01T12:00:00').toISOString(),
    price: 20,
  };

  it('renders event title and price', () => {
    const wrapper = mount(EventCard, {
      props: { event: mockEvent },
    });

    expect(wrapper.text()).toContain('Sample Event');
    expect(wrapper.text()).toContain('From £20');
  });

  it('emits "view" event when button is clicked', async () => {
    const wrapper = mount(EventCard, {
      props: { event: mockEvent },
    });

    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('view');
  });

  it('renders the CalendarEvent component', () => {
    const wrapper = mount(EventCard, {
      props: { event: mockEvent },
    });

    expect(wrapper.findComponent({ name: 'CalendarEvent' }).exists()).toBe(
      true,
    );
  });

  it('displays the correct category', () => {
    const wrapper = shallowMount(EventCard, {
      props: { event: mockEvent },
    });

    expect(wrapper.find('.absolute').text()).toBe('Music');
  });
});
