const API = "/api/students";
let editId = null;

// LOAD STUDENTS
async function loadStudents(){
  const res = await fetch(API);
  const data = await res.json();

  const table = document.querySelector("#studentsTable tbody");
  table.innerHTML = "";

  data.forEach(student => {
    table.innerHTML += `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.course}</td>
        <td>
          <button onclick="deleteStudent(${student.id})">Delete</button>
          <button onclick="editStudent(${student.id}, '${student.name}', '${student.email}', '${student.course}')">Edit</button>
        </td>
      </tr>
    `;
  });
}

// ADD STUDENT
async function addStudent(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  if(!name || !email || !course){
    alert("Fill all fields");
    return;
  }

  await fetch(API,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,course})
  });

  clearForm();
  loadStudents();
}

// DELETE STUDENT
async function deleteStudent(id){
  await fetch(API + "/" + id,{
    method:"DELETE"
  });

  loadStudents();
}

// EDIT STUDENT (fill form)
function editStudent(id,name,email,course){
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("course").value = course;

  editId = id;

  const button = document.getElementById("submitBtn");
  button.textContent = "Update Student";
  button.onclick = function(){
    updateStudent(id);
  };
}

// UPDATE STUDENT
async function updateStudent(id){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  await fetch(API + "/" + id,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,course})
  });

  clearForm();

  const button = document.getElementById("submitBtn");
  button.textContent = "Add Student";
  button.onclick = addStudent;

  editId = null;

  loadStudents();
}

// CLEAR FORM
function clearForm(){
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("course").value = "";
}

// LOAD ON PAGE OPEN
loadStudents();

