document.getElementById('bmiForm').addEventListener('submit', function(event) {
    console.log("Form submission prevented")
    event.preventDefault();
    hitungBMI();
});

//fungsi untuk hitung BMI
function hitungBMI(){   
    let berat = document.getElementById('beratbadan').value;
    let tinggi = document.getElementById('tinggibadan').value;
    let usia = document.getElementById('usiabadan').value;
    
    if(berat==="" || tinggi==="" || usia===""){ //validasi tidak ada input
        alert("Tolong lengkapi formulir!");
        return;
    }

    if(isNaN(berat) || isNaN(tinggi) || isNaN(usia) || berat<=0 || tinggi<=0 || usia<=0){   //validasi input apabila bukan angka dan angka negatif
        alert("Tolong input angka yang benar!");
        return;
    } 

    let bmi = (berat / ((tinggi / 100)*(tinggi / 100)));    //rumus hitung BMI
    let bmiRounded = bmi.toFixed(1);    //membulatkan hasil
    console.log(bmiRounded)
    document.getElementById('hasilbmi').innerHTML = bmiRounded; //menampilkan hasil perhitungan BMI

    //menentukan kategori berat badan berdasarkan hasil perhitungan BMI
    let kategori;
    let imgSrc; //tambahan image untuk masing2 kategori
    if(bmi < 18.5){
        kategori = "underweight";
        imgSrc="https://i.pinimg.com/originals/d6/db/80/d6db80ea53abfa5cfc407188cad53258.gif";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        kategori = "normal/ideal weight";
        imgSrc="https://i.pinimg.com/originals/83/ab/17/83ab17a99d63a5f2b91d39146dfd60d8.gif";
    }
    else if(bmi>=25 && bmi<=29.9){
        kategori = "overweight";
        imgSrc="https://media1.tenor.com/m/1F0IiaZR5ckAAAAC/edp-i-mean-its-all-right.gif";
    }
    else{
        kategori = "obesitas"
        imgSrc="https://media.tenor.com/HE2tAIVf76wAAAAM/nikocado-avocado-meltdown-nikocado-avocado.gif";
    }
    console.log(kategori)

    let bmiImage = document.getElementById('bmiimage2');
    bmiImage.src = imgSrc;
    bmiImage.style.display = "block";

    document.getElementById('pernyataan1').innerHTML = `Kategori berat Anda: ${kategori}`; //menampilkan kategori berat badan

    if(kategori==="underweight"){
        document.getElementById('artikel1').innerHTML = `Anda berada dalam kategori ${kategori}. Konsumsilah lebih banyak kalori daripada yang dibakar tubuh. Bangun diet yang kaya akan nutrisi, terlebih lagi protein karena protein membantu membangun massa otot.`
        document.getElementById('artikel2').innerHTML = "Jika Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal."
    }
    else if(kategori==="normal/ideal weight"){
        document.getElementById('artikel1').innerHTML = `Anda berada dalam kategori ${kategori}. Selamat Anda sudah memiliki berat badan yang ideal. Terus pertahankan berat badan Anda dengan asupan gizi yang cukup dan olahraga yang teratur.`
        document.getElementById('artikel2').innerHTML = "Jika Anda berada dalam kategori ini maka berat badan Anda sudah di batas normal."
    }
    else if(kategori==="overweight"){
        document.getElementById('artikel1').innerHTML = `Anda berada dalam kategori ${kategori}. Cara terbaik untuk menurunkan berat badan adalah dengan mengurangi asupan kalori dan fokus berolahraga dengan teratur.`
        document.getElementById('artikel2').innerHTML = "Jika Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
    }
    else if(kategori==="obesitas"){
        document.getElementById('artikel1').innerHTML = `Anda berada dalam kategori ${kategori}. Berat badan Anda terlalu berlebihan dan kondisi ini mengancam nyawa. Segera turunkan berat badan Anda dengan mengurangi asupan kalori dan fokus berolahraga dengan teratur.`
        document.getElementById('artikel2').innerHTML = "Jika Anda berada dalam kategori ini maka Anda sangat dianjurkan untuk segera menurunkan berat badan hingga batas normal."
        document.getElementById('gambarhasil').innerHTML = "https://media.tenor.com/HE2tAIVf76wAAAAM/nikocado-avocado-meltdown-nikocado-avocado.gif"
    }

}

//function untuk button reset
function resetForm(){
    document.getElementById('beratbadan').value = '';
    document.getElementById('usiabadan').value = '';
    document.getElementById('tinggibadan').value = '';
    document.getElementById('hasilbmi').innerHTML = '';
    document.getElementById('pernyataan1').innerHTML = '';
    document.getElementById('artikel1').innerHTML = ''
    document.getElementById('artikel2').innerHTML = ''

    //reset image
    const bmiImage = document.getElementById('bmiimage');
    bmiImage.src = '';
    bmiImage.style.display = "none";

    //reset radio button
    const genderRadios = document.getElementsByName('gender');
    for(let i=0; i<genderRadios.length; i++){
        genderRadios[i].checked = false;
    }
}