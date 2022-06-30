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
        this.text = "Learn Vue!";
      } else {
        this.text = "Master Vue!";
      }
    },
  },
});

app.mount("#user-goal");
