function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultLabel = document.getElementById("result");

    if (isNaN(temperature)) {
        resultLabel.textContent = "Masukkan suhu yang valid.";
        return;
    }

    if (unit === "celsius") {
        var fahrenheit = (temperature * 9/5) + 32;
        resultLabel.textContent = temperature + "°C sama dengan " + fahrenheit + "°F";
    } else if (unit === "fahrenheit") {
        var celsius = (temperature - 32) * 5/9;
        resultLabel.textContent = temperature + "°F sama dengan " + celsius + "°C";
    }
}