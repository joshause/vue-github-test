import Vue from 'vue'
import List from 'src/components/List'

describe('List.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(List)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.list-view div').textContent)
      .to.equal('loading...')
  })
})
