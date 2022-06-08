const tamogotchi = {
  name: "egg",
  meal: 3,
  energy: -2,
  mood: 4,
  getStatus: function () {
    const eda = "Я голоден";
    const neEda = "Я не голоден";
    const energiya = "Я хочу спать";
    const neEnergiya = "Я не хочу спать";
    const moooood = "Мне скучно";
    const neMoooood = "Мне весело";
    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
      console.log(`${this.name} Умер :(`);
    }
    return console.log(`Имя: ${this.name}, Еда: ${
      this.meal < 3 ? eda : neEda
    } (${this.meal}),
        Энергия: ${this.energy < 3 ? energiya : neEnergiya} (${this.energy}),
        Настроения: ${this.mood < 3 ? moooood : neMoooood} (${this.mood}).`);
  },
  setName: function (name) {
    return (this.name = name);
  },
  eat: function () {
    if (this.meal < 5) {
      this.meal++;
    }
    this.mood--;
  },
  sleep: function () {
    if (this.energy < 5) {
      this.energy++;
    }
    this.meal--;
  },
  play: function () {
    if (this.mood < 5) {
      this.mood++;
    }
    this.energy--;
  },
};
tamogotchi.setName("Борз");
// console.log(tamogotchi.name)
// console.log(tamogotchi.getStatus())
// tamogotchi.play()
tamogotchi.getStatus();
