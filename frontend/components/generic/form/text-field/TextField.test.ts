import { describe, expect, it } from 'vitest'
import TextField from './TextField.vue'
import { mount } from '@vue/test-utils'

describe('Generic Text Field', () => {
    it('should render the component', () => {
        const wrapper = mount(TextField)
        expect(wrapper.find('[data-test="generic-text-field"]').exists()).toBe(true)
    })

    it('should render icons', () => {
        const wrapper = mount(TextField, {
            props: {
                prependInnerIcon: {
                    name: 'bi:plus',
                    color: 'rgb(255, 0, 0)'
                },
                appendInnerIcon: {
                    name: 'bi:plus',
                    color: 'rgb(255, 0, 0)'
                },
                prependOuterIcon: {
                    name: 'bi:plus',
                    color: 'rgb(255, 0, 0)'
                },
                appendOuterIcon: {
                    name: 'bi:plus',
                    color: 'rgb(255, 0, 0)'
                },
            }
        })
        expect(wrapper.find('[data-test="prepend-inner-icon"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="append-inner-icon"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="prepend-outer-icon"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="append-outer-icon"]').exists()).toBe(true)
    })

    it('should update model-value when input change', async () => {
        const wrapper = mount(TextField)
        expect(wrapper.find('[data-test="text-field-input"]').exists()).toBe(true)
        await wrapper.setValue('new value')
        expect(wrapper.emitted()).toHaveProperty('update:modelValue')

        const emittedEvent = wrapper.emitted('update:modelValue')
        expect(emittedEvent).toBeDefined()
        expect(emittedEvent![0]).toEqual(['new value'])
    })

    it.todo('should make borders red while showError prop is true', async () => {
        const wrapper = mount(TextField, {
            props: {
                showError: true
            }
        })
        expect(wrapper.find('[data-test="text-field-label"]').exists()).toBe(true)
        const element = wrapper.find('[data-test="text-field-label"]').element as HTMLElement
        element.focus()
        await wrapper.vm.$nextTick()
        const style = window.getComputedStyle(element)
        expect(style.borderColor).toBe('white')
    })

    it.todo('should render error message while showError prop is true', () => {

    })
})