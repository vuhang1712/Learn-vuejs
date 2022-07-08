const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      step: 1,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },

    submitForm() {
      alert("Submitted");
    },

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
