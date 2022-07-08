const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullName: "",
    };
  },
  computed: {
    fullNameComputed() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = this.name + " " + value;
      }
    },
  },
  methods: {
    outputFullName() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },

    resetInput() {
      this.name = "";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
});

app.mount("#events");
