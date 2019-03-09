var NUMBER_OF_DRIVERS_THAT_WIIL_BE_ADDED=70000

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};

function getInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFirstName() {
    return [
        "Paweł", "Ania", "Michał", "Józef", "Emi", "Korneliusz", "Aneta",
        "Julia", "Zofia", "Hanna", "Oliwia", "Rita", "Justyna", "Filip",
        "Wojciech", "Szymon", "Jakub", "Antoni", "Jan", "Brajan", "Diana",
        "Marta", "Juri", "Bartosz", "Tymoteusz", "Grzegorz", "Robert",
        "Katarzyna", "Michał", "Stanisław", "Paweł", "Dariusz", "Bogumił",
        "Marek", "Kamil", "Leszek", "Rafał"
    ].random();
}

function getLastName() {
    return [
        "Nowak", "Miller", "Marcinkiewicz", "Krakus", "Michalik", "Koza",
        "Kuzera", "Adamek", "Kocur", "Dzban", "Smok", "Trajs", "Machoń",
        "Prako", "Bral", "Galak", "Kaszkowiak", "Niśkiewicz", "Mrok",
        "Wron", "Fiołek", "Nak", "Antokowiak", "Orłoś", "Trój", "Góra",
        "Zawodnik", "Gajos", "Pazura", "Lars"
    ].random()
}

function getRegistrationNumber() {
    var areaCodeParts = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
        "L", "M", "N", "O", "P", "R", "S", "T", "U", "W", "Z", "X"
    ];
    var areaCode = "";
    for (var i = 1; i <= getInteger(2, 5); i++) {
        areaCode += areaCodeParts.random();
    }
    return areaCode 
        + new Date().getMinutes() 
        + new Date().getSeconds() 
        + new Date().getMilliseconds() 
        + getInteger(0, 999999);
}

function getVehicles() {
    var colors = ["blue", "red", "pink", "black", "yellow", "green", "white"];
    var seats = [2, 4, 5];
    var result = [];
    for (var i = 0; i <= getInteger(0, 4); i++) {
        result.push({"number": getRegistrationNumber(), "color": colors.random(), "seats": seats.random()})
    }
    return result;
}

function getAge() {
    return getInteger(18, 100);
}

function getPoints() {
    return (getInteger(0, 1) === 0)
        ? 0
        : (getInteger(0, 2) === 0)
            ? getInteger(31, 60)
            : getInteger(0, 30)
}

for (var i = 0; i < NUMBER_OF_DRIVERS_THAT_WIIL_BE_ADDED; i++) {
    var driver = {
        "first_name": getFirstName(),
        "last_name": getLastName(),
        "age": getAge(),
        "vehicles": getVehicles(),
        "points": getPoints()

    };
    db.drivers.save(driver);
}