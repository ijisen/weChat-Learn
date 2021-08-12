module.exports = Behavior({
  data: {
    shareText: 'global Behaviors'
  },
  methods: {
    shareGlobalMessage() {
      console.log(this.data.shareText)
    }
  }
})