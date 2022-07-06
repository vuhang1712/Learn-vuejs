const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "<h2>Finish the course and learn Vue!</h2>",
      courseGoalB: "Finish the course and learn Vue B !",
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
    outputGoal1() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
