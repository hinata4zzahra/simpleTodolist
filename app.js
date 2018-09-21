
let todos= [];
const listDom= document.getElementById("list");
const addDom = document.getElementById("add_button");
const todoDom = document.getElementById("todo");
var jumlahTodo = document.getElementById('jumlah')

todos =  JSON.parse(localStorage.getItem('todos'));


if (todos==null){
    todos=[]
}

function render(){
    let x =0;
    listDom.innerHTML="";
    while(x<todos.length){
        if(todos[x].status==true){
            listDom.innerHTML += '<li class="list-group-item"><input checked onchange="statusBerubah('+x+')" class="form-check-input" type="checkbox" value="" id="defaultCheck1"><strike>'+ todos[x].nama+'</strike><button type="button" class="btn btn-outline-danger btn-sm ml-3" onclick="hapus('+x+')">delete</button></li>';  
        }else{
            listDom.innerHTML += '<li class="list-group-item"><input onchange="statusBerubah('+x+')" class="form-check-input" type="checkbox" value="" id="defaultCheck1">'+ todos[x].nama+'<button type="button" class="btn btn-outline-danger btn-sm ml-3" onclick="hapus('+x+')">delete</button></li>';
        }
        
        x += 1;
        
    }
}

function hapus(p){
    todos.splice(p,1);
    render();
    localStorage.setItem('todos',JSON.stringify(todos))
    localStorage.setItem('jml',todos.length)
    jumlahTodo.innerHTML= localStorage.getItem('jml') + " Todos";
}

function statusBerubah(index){
    
    if(todos[index].status==true){
        todos[index].status=false
    }else{
        todos[index].status=true
    }
    render();
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log(index);
}

addDom.addEventListener("click",function(){
    if (todoDom.value){
        var input = {
            nama : todoDom.value,
            status:false
        };
       
        todos.push(input);
        render();
        localStorage.setItem('jml',todos.length)
        jumlahTodo.innerHTML= localStorage.getItem('jml') + " Todos";
        todoDom.value = ""
        localStorage.setItem('todos',JSON.stringify(todos))
        console.log(todos)
      
       
       
    }else{
        alert('please write your todo first')
    }
   
}
)

jumlahTodo.innerHTML= localStorage.getItem('jml') + " Todos";
render();


var nama = prompt("Siapa Nama Anda?");
if (nama != null) {
   
    document.getElementById("welcome").innerHTML =
    "Hello " + nama + ", Lets try to make your life more productive for me... " ;
}

var d = new Date();


var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();

   
    var x =  d.toLocaleTimeString();
    document.getElementById('hour').innerHTML = x
}