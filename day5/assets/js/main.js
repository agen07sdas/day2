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
// mengembalikan input data form ke card
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
  let projectDurationInDays = getDurationInDays(startDate, endDate);

  // Untuk membuat URL gambar agar dapat ditampilkan
  let imageUrl = URL.createObjectURL(image);
  
  // durasi
  let projectDuration = getDurationInMonth(projectDurationInDays);

  let project = {
    name,
    startDate,
    endDate,
    projectDuration,
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
        <p class="durasi">${project.projectDuration}</p>
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

// // //
// day5
// menghitung jarak pembuatan car dangn waktu skrng ( star and )
// // //
function  getDurationInDays(startDate, endDate) {
  // let time = new Date();
  // console.log(time);

//   let monthName = [
//     'Jan', 
//     'Feb', 
//     'Mar', 
//     'Apr', 
//     'Mar', 
//     'Apr', 
//     'May', 
//     'Jun', 
//     'Jun', 
//     'Jul', 
//     'Aug', 
//     'Sep', 
//     'Oct', 
//     'Oct', 
//     'Nov', 
//     'Dec',
//   ];

//   // return console.log (monthName[3]);

//   let date = time.getDate();

//   let monthIndex = time.getMonth();

//   let yearIndex = time.getFullYear();

//   let hours = time.getHours();

//   let miutes = time.getMinutes();

//   if (hours <= 9) {
//     hours = "0" + hours ;
//   } else if ( minutes <=9) {
//     minutes = "0"+ minutes;
//   }


//  return `${date} ${monthName[monthIndex]} ${year} : ${hours} ${minutes} WIB`;

  let Day = 1000*60*60*24; // Ini adalah jumlah milisekon dalam satu hari

  let startDayInMiliseconds =new Date(startDate).getTime(); // Mengambil waktu dalam milisekon untuk tanggal mulai
  let endDayInMiliseconds = new Date(endDate).getTime(); // Mengambil waktu dalam milisekon untuk tanggal selesai
  let durationInMiliseconds = endDayInMiliseconds - startDayInMiliseconds; // Menghitung selisih waktu dalam milisekon antara tanggal selesai dan tanggal mulai

  return Math.floor(durationInMiliseconds / Day) + 1; // Menghitung durasi dalam hari dan menambahkan 1 (karena hari mulai juga dihitung)
}

function getDurationInMonth(days) {
  monthDuration = Math.floor(days/30); // Menghitung durasi dalam bulan (asumsi 30 hari per bulan)
  dayDuration = days % 30; // Menghitung sisa hari setelah menghitung bulan

  if (monthDuration == 0){
    return `durasi : ${dayDuration} Day`; // Jika durasi kurang dari 1 bulan, kembalikan dalam hari
  }
  if (dayDuration >20){
    monthDuration++; // Jika sisa hari lebih dari 20, tambahkan 1 bulan ke durasi
  } else if(dayDuration <= 20 && dayDuration > 10){
    monthDuration += 0.5; // Jika sisa hari antara 11-20, tambahkan 0.5 bulan ke durasi
  }

    return `durasi : ${monthDuration} bulan`


  // let timeNow = new date;
  // let timePost = time;

  // let distance = timeNow - timePost;
  // console.log(distance);

  // let milisecond = 1000;
  // let seconInHour = 3600;
  // let hourInDay = 24;

  // let distanceDay = math.floor(
  //   distance / (milisecond * seconInHour * hourInDay)
  //   );

  // let dintanceHour = math.floor(dintance / (milisecond * 60 * 60));
  // let distanceMinutes = math.floor(distance / (milisecon * 60));
  // let distanceSeconds = math.floor(distance / (milisecon));

  // if (distanceDay > 0){
  //   return `${distanceDay} day ago`;
  // } else if (distanceHour > 0){
  //   return `${distanceHour} hour ago`;
  // } else if (distanceMinute > 0){
  //   return `${distanceminute} minute ago`;
  // } else {
  //   return `${distanceSeconds} second ago`;
  // }

  // setInterval(function (){
  //   randerBlog();
  // }, 3000);

}


