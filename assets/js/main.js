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

// // ///
// project day 4
// // //

let dataProjects = [];

function addProject(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let startDate = document.getElementById("start").value;
  let endDate = document.getElementById("end").value;
  let description = document.getElementById("content").value;
  let technologies = [];
  let checkboxes = document.querySelectorAll('input[name="tekno"]:checked');
  checkboxes.forEach((checkbox) => {
    technologies.push(checkbox.value);
  });
  let image = document.getElementById("file").files[0];

  // Untuk membuat URL gambar agar dapat ditampilkan
  let imageUrl = URL.createObjectURL(image);

  let project = {
    name,
    startDate,
    endDate,
    description,
    technologies,
    imageUrl,
  };

  dataProjects.push(project);
  console.log(dataProjects);

  // Kosongkan form setelah data dikirim
  document.getElementById("name").value = "";
  document.getElementById("start").value = "";
  document.getElementById("end").value = "";
  document.getElementById("content").value = "";
  document.querySelectorAll('input[name="tekno"]:checked').forEach((checkbox) => {
    checkbox.checked = false;
  });
  document.getElementById("file").value = "";

  renderProjects();
}

function renderProjects() {
    let mainCard = document.querySelector(".card-project main");
    mainCard.innerHTML = "";
  
    dataProjects.forEach((project) => {
      let newBox = document.createElement("div");
      newBox.classList.add("box");
      newBox.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.name}" />
        <h5>${project.name}</h5>
        <p class="durasi">${project.startDate} - ${project.endDate}</p>
        <p class="detail">${project.description}</p>
        <div class="icon">
            ${project.technologies
              .map(
                (technology) =>
                  `<a href="#"><i class='bx bxl-play-store bx-sm' style="color:black;"></i></a>`
              )
              .join(" ")}
        </div>
        <div class="tombol">
            <button>Edit</button>
            <button>Delete</button>
        </div>
    `;
  
      mainCard.appendChild(newBox);
    });
}







