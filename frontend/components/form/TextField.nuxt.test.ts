import { describe, expect, it } from 'vitest'
import TextField from '../form/TextField.vue'
import { mount } from '@vue/test-utils'

describe('Generic Text Field', () => {
    it('should render the component', () => {
        const wrapper = mount(TextField)
        expect(wrapper.find('[data-test="generic-text-field"]').exists()).toBe(true)
    })
})