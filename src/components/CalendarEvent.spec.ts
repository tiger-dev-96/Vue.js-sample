import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CalendarEvent from './CalendarEvent.vue';

describe('CalendarEvent.vue', () => {
  const mockProps = {
    start: '2023-08-15T14:00:00Z',
    end: '2023-08-15T16:30:00Z',
  };

  it('renders the component', () => {
    const wrapper = mount(CalendarEvent, {
      props: mockProps,
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the calendar icon', () => {
    const wrapper = mount(CalendarEvent, {
      props: mockProps,
    });
    expect(wrapper.find('.fas.fa-calendar-alt').exists()).toBe(true);
  });

  it('formats and displays the start date correctly', () => {
    const wrapper = mount(CalendarEvent, {
      props: mockProps,
    });
    expect(wrapper.text()).toContain('Aug 15, 2023');
  });

  it('formats and displays the start and end times correctly', () => {
    const wrapper = mount(CalendarEvent, {
      props: mockProps,
    });
    expect(wrapper.text()).toContain('14:00 to 16:30');
  });

  it('handles different timezones correctly', () => {
    const wrapper = mount(CalendarEvent, {
      props: {
        start: '2023-08-15T22:00:00Z',
        end: '2023-08-16T00:30:00Z',
      },
    });
    expect(wrapper.text()).toContain('Aug 15, 2023');
    expect(wrapper.text()).toContain('22:00 to 00:30');
  });
});
