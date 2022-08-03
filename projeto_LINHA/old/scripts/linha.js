const log = console.log;


function linha(n) {
    location.href='../pages/linha-01.html';
    localStorage.setItem('line-number', n)
}


date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML =
  year + "/" + month + "/" + day;
console.log(year + "/" + month + "/" + day);
/*funcão para pegar dados*/
function getItem() {
    //var valor = prompt("valor: ");
let lineNumber = localStorage.getItem('line-number');
const caminho = "http://localhost:4841/clientes/" + "'" + lineNumber + "'";
console.log(caminho);
axios
  .get(caminho)
  .then(function (response) {
    // manipula o sucesso da requisição
    //console.log(response.data);
    let arr = response.data;
    console.log(arr);
    document.querySelectorAll("td")[0].innerHTML = arr[0].LINE_NAME;
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  });
/*mapear tds*/
var td = document.querySelectorAll("td");
log(td);


}
getItem();