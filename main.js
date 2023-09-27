function submitData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let pilihan = document.getElementById("perlu").value;
    let pesan = document.getElementById("pesan").value;

    if (name === "" || email === "" || number === "" || pilihan === "" || pesan === "") {
        alert("Semua kolom harus diisi!");
        } else {
        // Mengganti alamat email penerima dengan alamat yang sesuai
        let emailReceiver = "saputra02ageng1003wa@gmail.com";

        // Membuat link email dengan isi pesan
        let mailtoLink = `mailto:${emailReceiver}?subject=${pilihan}&body=Halo, nama saya ${name}, ${pesan}. Tolong hubungi saya di nomor ${number} atau email saya di ${email}`;

        // Membuka email client default untuk mengirim email
        window.open(mailtoLink);
    }


    // if (name === ""){
    //     return alert('Name is required');
    // } else if (email === ""){
    //     return alert ('Email address field cannot be empty!');
    // } else if (number === ""){
    //     return alert ('Phone field cannot be empty!');
    // } else if (pilihan === ""){
    //     return alert ('Pilihan field cannot be empty!');
    // } else if (pesan === ""){
    //     return alert ('pesan field cannot be empty!');
    // }

    // let emailReceiver = "saputra02ageng1003@gmail.com";

    // // <a href="mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Tolong kontak saya di nomor ${number} atau email saya di ${email}"></a>

    // let a = document.createElement("a");
    // a.href = `mailto:${emailReceiver}?subject=${pilihan}&body=Halo, saya ${name},
    // ${pesan}. Tolong hubungi ${number}, atau ke email saya ${email}`;

    // a.click();

    // optional
     // https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}

    // let message = {
    //     nama: name,
    //     email: email,
    //     phone_number: number,
    //     pilihan: pilihan,
    //     pesan: pesan,
    // // };

    // console.log(mailtoLink);
}



