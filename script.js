
function calculateBMI() {
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    if (height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid height and weight.";
        return;
    }

    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal Weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>" + category;
}
