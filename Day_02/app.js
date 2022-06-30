const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org/",
      text: "Follow this text",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        this.text = `[${randomNumber.toFixed(2)}] - Learn Vue!`;
      } else {
        this.text = `[${randomNumber.toFixed(2)}] - Learn PHP!`;
      }
    },
  },
});

app.mount("#user-goal");
