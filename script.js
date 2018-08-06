

//--------------- Function Save

function save(){
  //----------- Capturando Inputs
  var materia = document.getElementById("campoMateria").value;
  var dia = document.getElementById("campoDia").value;
  var professor = document.getElementById("campoProf").value;
  var sala = document.getElementById("campoSala").value;
  var faltas = document.getElementById("campoFaltas").value;
  //----------- Botão que dispara a função
  let buttonSave = document.getElementById("buttonSave");
  
  db.collection("testeisys").add({
    materia: materia,
    dia: dia,
    professor: professor,
    sala: sala,
    faltas: faltas
  })
    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById("campoMateria").value = '';
    document.getElementById("campoDia").value = '';
    document.getElementById("campoProf").value = '';
    document.getElementById("campoSala").value = '';
    document.getElementById("campoFaltas").value = '';
  })
    .catch(function(error) {
    console.error("Error adding document: ", error);
  });
}


//--------------------- Lendo os Dados

var table = document.querySelector('#table');

table.innerHTML = "";

db.collection("testeisys").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    table.innerHTML +=`
<div class="tbody" onclick="show(this)">
      <div class="table-tr">
        <i class="fas fa-user-graduate fa-2x"></i>
        <div class="table-title"> ${doc.data().materia}</div>
      </div>
      <div class="table-more">
          <div class="table-td"> Faltas:  ${doc.data().faltas}</div>
          <div class="table-td"> Dia da Semana:  ${doc.data().dia}</div>
          <div class="table-td"> Professor:  ${doc.data().professor}</div>
          <div class="table-td"> Sala:  ${doc.data().sala}</div>
      </div>
</div>
`;
  });
});


//-------------------- Função Adicionar Materias

function add(){
  let addMateria = document.querySelector(".box").style;
  
  if(addMateria.display == "none"){
      addMateria.opacity = 1;
      addMateria.display = "block";
      } else{
        addMateria.opacity = 0;
        addMateria.display = "none";
      }
}


//-------------------- Função Mostar Detalhes

function show(tr){
  
  let tableMore = tr.children[1].style;
  
  if(tableMore.display == "none"){
    tableMore.opacity = "1";
    tableMore.display = "block";
  }else{
    tableMore.opacity = "0";
    tableMore.display = "none";
  }
  
}





