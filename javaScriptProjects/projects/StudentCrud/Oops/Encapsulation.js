class car {
    #name;
    #model

    getModel() {
        return this.#model
    }

    setModel(model) {
        this.#model = model
    }
    getName() {
        return this.#name
    }

    setName(name) {
        this.#name = name
    }

}

const newCar = new car();
newCar.setModel(20);
newCar.setName("maruti")

console.log(newCar.getModel());
console.log(newCar.getName());

