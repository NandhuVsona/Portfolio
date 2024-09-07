
let staffsContainer = document.querySelector(".staffs-container")
loadData();
async function loadData() {
  let req = await fetch("https://staffsstatus.onrender.com/api/v1/staffs/");
  let res = await req.json();
  let {data} = res;
  data.forEach(staff =>{
    let card = `<div class="card">
            <img src="https://staffsstatus.onrender.com/uploads/${staff.image}" alt="">
            <div class="staff-info">
              <b class="name">${staff.name}</b>
              <small class="position">${staff.position}</small>
            </div>
            <button>View</button>
          </div>`
    staffsContainer.innerHTML += card
  })
  console.log(res);
}
