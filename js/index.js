function submitForm(){
    /*mengambil value dari form ke dalam variable*/
    var jenisKelamin = document.getElementById("jenis-kelamin1").value;
    var beratBadan = document.getElementById("berat-badan1").value;
    var usia = document.getElementById("usia1").value;
    var tinggiBadan = document.getElementById("tinggi-badan1").value;

    /*rumus hitung BMI. parseint untuk merubah variable menjadi tipe data integer*/
    var hasilIdeal = parseInt(beratBadan) / ((parseInt(tinggiBadan)/100) ** 2); 

    if (hasilIdeal.toFixed(1) < 18.5){ /*code yang akan dijalankan ketika hasil kalkulasi dibawah 18.5. tofixed(1) untuk membulatkan desimal menjadi 1 angka dibelakang koma */
        document.getElementById("hasil-text").innerHTML = "Berat Badan Kurang";
        document.getElementById("hasil-berat").innerHTML = hasilIdeal.toFixed(1);
        document.getElementById("desk-berat").innerHTML = "Anda Memiliki Berat Badan yang Kurang";

        document.getElementById("range-hasil").innerHTML = "Hasil BMI diantara 0 dan 18";
        
        document.getElementById("desk-hasil").innerHTML = "Anda berada dalam kategori Underweight atau berat badan kurang dari yang seharusnya.";
        document.getElementById("desk-hasil1").innerHTML = "Ini bisa disebabkan oleh berbagai faktor, seperti kurangnya asupan nutrisi atau masalah kesehatan tertentu.";
        document.getElementById("desk-hasil2").innerHTML = "Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk berkonsultasi dengan dokter untuk mengetahui penyebabnya dan memperoleh saran tentang cara meningkatkan berat badan secara sehat.";

        document.getElementById("penyakit-hasil").innerHTML = "Beberapa penyakit yang berasal dari kekurangan berat badan";
        document.getElementById("penyakit1").innerHTML = "Diabetes";
        document.getElementById("penyakit2").innerHTML = "Penyakit Paru-Paru";
        document.getElementById("penyakit3").innerHTML = "Penyakit Jantung";
        document.getElementById("penyakit4").innerHTML = "Tekanan Darah Tinggi";

    } else if (hasilIdeal.toFixed(1) >= 18.5 && hasilIdeal.toFixed(1) <= 24.9){ /*code yang akan dijalankan jika hasil kalkulasi antara 18.5 dan 24.9 */
        document.getElementById("hasil-text").innerHTML = "Berat Badan Ideal";
        document.getElementById("hasil-berat").innerHTML = hasilIdeal.toFixed(1);
        document.getElementById("desk-berat").innerHTML = "Anda Memiliki Berat Badan yang Ideal";

        document.getElementById("range-hasil").innerHTML = "Hasil BMI diantara 18 dan 25";
        
        document.getElementById("desk-hasil").innerHTML = "Anda berada dalam kategori berat badan ideal.";
        document.getElementById("desk-hasil1").innerHTML = "Hasil perhitungan ini menunjukkan kategori ideal yang berarti berat badan Anda seimbang dengan tinggi badan Anda.";
        document.getElementById("desk-hasil2").innerHTML = "ini adalah kategori yang diinginkan untuk kesehatan yang baik. Namun, tetap perlu menjaga pola makan dan gaya hidup yang sehat untuk menjaga berat badan tetap stabil.";

    } else if (hasilIdeal.toFixed(1) >= 25.0 && hasilIdeal.toFixed(1) <= 29.9){ /*code yang akan dijalankan jika hasil kalkulasi antara 25 dan 29.9 */
        document.getElementById("hasil-text").innerHTML = "Berat Badan Lebih";
        document.getElementById("hasil-berat").innerHTML = hasilIdeal.toFixed(1);
        document.getElementById("desk-berat").innerHTML = "Anda Memiliki Berat Badan yang Berlebih";

        document.getElementById("range-hasil").innerHTML = "Hasil BMI diantara 25 dan 29";
        
        document.getElementById("desk-hasil").innerHTML = "Anda berada dalam kategori Overweight atau berat badan berlebih.";
        document.getElementById("desk-hasil1").innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
        document.getElementById("desk-hasil2").innerHTML = "Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        
        document.getElementById("penyakit-hasil").innerHTML = "Beberapa penyakit yang berasal dari kegemukan";
        document.getElementById("penyakit1").innerHTML = "Diabetes";
        document.getElementById("penyakit2").innerHTML = "Hipertensi";
        document.getElementById("penyakit3").innerHTML = "Sakit Jantung";
        document.getElementById("penyakit4").innerHTML = "Osteoarthritis";

    } else if (hasilIdeal.toFixed(1) >= 30){ /*code yang akan dijalankan jika hasil kalkulasi lebih dari 30 */
        document.getElementById("hasil-text").innerHTML = "Berat Badan Obesitas";
        document.getElementById("hasil-berat").innerHTML = hasilIdeal.toFixed(1);
        document.getElementById("desk-berat").innerHTML = "Anda Memiliki Berat Badan yang Obesitas";

        document.getElementById("range-hasil").innerHTML = "Hasil BMI lebih dari 30";
        
        document.getElementById("desk-hasil").innerHTML = "Anda berada dalam kategori Obesitas atau berat badan sangat berlebih.";
        document.getElementById("desk-hasil1").innerHTML = "Hasil perhitungan ini menunjukkan kategori obesitas yang berarti berat badan Anda sangat berlebihan dan dapat menyebabkan risiko kesehatan yang serius.";
        document.getElementById("desk-hasil2").innerHTML = "Jika BMI Anda berada dalam kategori ini, sebaiknya Anda berkonsultasi dengan dokter untuk mengetahui penyebabnya dan memperoleh saran tentang menurunkan berat badan secara sehat dan mengurangi risiko penyakit.";

        document.getElementById("penyakit-hasil").innerHTML = "Beberapa penyakit yang berasal dari obesitas";
        document.getElementById("penyakit1").innerHTML = "Stroke";
        document.getElementById("penyakit2").innerHTML = "Sakit Jantung";
        document.getElementById("penyakit3").innerHTML = "Diabetes";
        document.getElementById("penyakit4").innerHTML = "Osteoarthritis";

    } else { /*code yang akan dijalankan jika hasil tidak ditemukan. atau dengan kata lain pengisian form kurang atau tidak benar */
        alert("Mohon isi data dengan lengkap & benar.")
    }


}

function downloadHasil(){
    var beratBadan = document.getElementById("berat-badan1").value;
    var usia = document.getElementById("usia1").value;
    var tinggiBadan = document.getElementById("tinggi-badan1").value;

    if (beratBadan == 0 || usia == 0 || tinggiBadan == 0){ /*code untuk tombol download ketika ditekan namun data yang dimasukkan belum lengkap */
        alert("Silakan isi data terlebih dahulu.");
    } else {
        alert("Hasil sedang didownload.");
    }
    
}

function konsultasi(){
    alert("Membuka aplikasi untuk berkonsultasi.");
}

function registrasi(){
    alert("Registrasi melalui Web.")
}

function playstore(){
    alert("Downloading from Playstore.")
}

function appstore(){
    alert("Downloading from Apple Store")
}

