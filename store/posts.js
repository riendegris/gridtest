export const state = () => ({
  posts: [],
  post: {}
})

export const mutations = {
  add(state, name) {
    state.posts.push({
      name: name
    })
  },
  updatePosts(state, posts) {
    state.posts = posts
  },
  updatePost(state, post) {
    state.post = post
  }
}

export const actions = {
  loadPosts({ commit }, posts) {
    const sorted = posts.sort((a, b) => {
      if (a === b) {
        return 0
      }
      return a.published < b.published ? 1 : -1
    })
    commit('updatePosts', sorted)
  },
  loadPost({ commit }, slug) {
    const post = this.state.posts.posts.find(post => {
      return post.slug === slug
    })
    commit('updatePost', post)
  }
}
