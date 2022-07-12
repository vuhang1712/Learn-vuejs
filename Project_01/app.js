function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHeath: 100,
      monsterHeath: 100,
    };
  },
  methods: {
    attackMonster() {
      if (this.monsterHeath < 6) {
        this.monsterHeath = 0;
        console.log("Player win!");
      } else {
        attackValue = getRandomValue(5, 12);
        this.monsterHeath -= attackValue;
        this.attackPlayer();
      }
    },
    attackPlayer() {
      if (this.playerHeath < 9) {
        this.playerHeath = 0;
        console.log("Monster win!");
      } else {
        attackValue = getRandomValue(8, 15);
        this.playerHeath -= attackValue;
      }
    },
  },
});

app.mount("#game");
