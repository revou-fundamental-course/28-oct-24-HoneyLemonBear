// function
// get values
// calculate
// output
// bmi formula: weight / height squared * 703


function hitungBMI(){
    let berat = document.getElementById("beratbadan").value
    let tinggi = document.getElementById("tinggibadan").value

    let bmi = (beratbadan / (tinggibadan/100)^2)

    console.log(bmi)
}