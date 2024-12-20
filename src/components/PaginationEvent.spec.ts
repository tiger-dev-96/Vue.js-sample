import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PaginationEvent from '@/components/PaginationEvent.vue';

describe('PaginationComponent', () => {
  it('emits the correct page number when a button is clicked', async () => {
    const wrapper = mount(PaginationEvent, {
      props: {
        totalPages: 5,
        currentPage: 1,
      },
    });

    // Find the button for page 3 and click it
    const pageButton = wrapper.findAll('button').at(2);
    if (pageButton) {
      await pageButton.trigger('click');
    }

    // Check if the correct event is emitted
    expect(wrapper.emitted('change-page')).toBeTruthy();
    expect(wrapper.emitted('change-page')?.[0]).toEqual([3]);
  });
});
