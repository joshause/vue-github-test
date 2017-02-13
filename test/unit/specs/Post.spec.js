import Vue from 'vue'
import Router from 'vue-router'
import Post from 'src/components/Post'
import filter from 'src/utils/filter'

Vue.use(Router)
filter(Vue)

describe('Post.vue', () => {
  it('should render correct contents', () => {
    const router = new Router({
      routes: [
        {
          path: '/post/:hash',
          name: 'post',
          component: Post
        }
      ]
    })
    const Constructor = Vue.extend(Post)
    const vm = new Constructor({router: router}).$mount()
    expect(vm.$el.querySelector('.post-view div').textContent)
      .to.equal('loading...')
  })
})
