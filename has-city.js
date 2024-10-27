function hasCity(Cu, md) {
    return function (city) {
        if (md.indexOf(city) === -1) {
            return city + " is not a city from " + Cu;
        }
        return city + " is a city from " + Cu;
    };
}