let staffsContainer = document.querySelector(".staffs-con-body");
let hodsContainer = document.querySelector(".hods-con-body");

let skeleton = `<div class="skeleton-card">
                <div class="skeleton-img"></div>
                <div class="staff-info">
                  <h4 class="skeleton-name"></h4>
                  <p class="skeletonposition"></p>
                </div>
              </div>`;
for (let i = 0; i < 10; i++) {
  hodsContainer.innerHTML += `<div class="hod-card">
            <div class="skeleton-img-hod" style="border: 2px solid ${getRandomColor()}"></div>
                <small></small>
              </div>`;
}
for (let i = 0; i < 21; i++) {
  staffsContainer.innerHTML += skeleton;
}
// let skeletonElements = document.querySelectorAll('[class^="skeleton"]');
// skeletonElements.forEach((ele) => (ele.style.backgorundColor = "red"));
loadData();
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
async function loadData() {
  let req = await fetch("https://staffsstatus.onrender.com/api/v1/staffs/");
  let res = await req.json();
  if (res.status == "success") {
    staffsContainer.innerHTML = " ";
    hodsContainer.innerHTML = ' '
  }
  let { data } = res;
  data.forEach((staff) => {
    if (staff.position == "HOD") {
      let template = `<div class="hod-card">
                <img src="https://staffsstatus.onrender.com/uploads/${
                  staff.image
                }" style="border: 2px solid ${getRandomColor()}"  alt="">
                <small style="background-color: inherit !important">ECE</small>
              </div>`;
      hodsContainer.innerHTML += template;
    }
    let card = `<div class="card">
            <img src="https://staffsstatus.onrender.com/uploads/${staff.image}"alt="">
            <div class="staff-info">
              <h4 style="background-color: inherit !important" class="name">${staff.name}</h4>
              <p style="background-color: inherit !important" class="position">${staff.position}</p>
              
            </div>
          </div>`;
    staffsContainer.innerHTML += card;
  });
}
