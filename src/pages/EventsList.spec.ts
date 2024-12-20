import { mount, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import EventList from '@/pages/EventsList.vue';

// Mock the getEvents function
vi.mock('@/services/EventService', () => ({
  getEvents: vi.fn(() =>
    Promise.resolve([
      { id: 1, name: 'Event 1', price: 100 },
      { id: 2, name: 'Event 2', price: 150 },
    ]),
  ),
}));

describe('EventComponent', () => {
  let wrapper: VueWrapper<unknown>;

  beforeEach(async () => {
    wrapper = mount(EventList);
    await wrapper.vm.$nextTick();
  });

  it('renders the correct number of EventCard components', () => {
    const eventCards = wrapper.findAllComponents({ name: 'EventCard' });
    expect(eventCards.length).toBe(2);
  });
});
