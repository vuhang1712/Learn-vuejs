const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      step: 1,
      name: "",
    };
  },
  methods: {
    setStep(event) {
      this.step = +event.target.value;
    },
    setName(event) {
      this.name = event.target.value;
    },
    plus() {
      this.counter += this.step;
    },
    reduce() {
      this.counter -= this.step;
    },
  },
});

app.mount("#events");
