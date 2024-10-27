function dogYears(name, ageOfDog) {
    const earth = 31557600;
    const mercury = 0.2408467 * earth;
    const venus = 0.61519726 * earth;
    const mars = 1.8808158 * earth;
    const jupiter = 11.862615 * earth;
    const saturn = 29.447498 * earth;
    const uranus = 84.016846 * earth;
    const neptune = 164.79132 * earth;

    if (name === "earth") {
        return +(7 * ageOfDog / earth).toFixed(2);
    }
    if (name === "mercury") {
        return +(7 * ageOfDog / mercury).toFixed(2);
    }
    if (name === "venus") {
        return +(7 * ageOfDog / venus).toFixed(2);
    }
    if (name === "mars") {
        return +(7 * ageOfDog / mars).toFixed(2);
    }
    if (name === "jupiter") {
        return +(7 * ageOfDog / jupiter).toFixed(2);
    }
    if (name === "saturn") {
        return +(7 * ageOfDog / saturn).toFixed(2);
    }
    if (name === "uranus") {
        return +(7 * ageOfDog / uranus).toFixed(2);
    }
    if (name === "neptune") {
        return +(7 * ageOfDog / neptune).toFixed(2);
    }
}