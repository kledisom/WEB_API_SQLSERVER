const log = console.log;


function linha(n) {
    location.href='../projeto_LINHA/pages/linha-01.html';
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
const caminho = "http://localhost:81/clientes/" + "'" + lineNumber + "'";
console.log(caminho);
axios
  .get(caminho)
  .then(function (response) {
    // manipula o sucesso da requisição
    //console.log(response.data);
    let arr = response.data;
    console.log(arr);
    document.querySelectorAll("td")[0].innerHTML = arr[0].LINE_NAME;
    document.querySelectorAll("td")[4].innerHTML = arr[0].MC_QUANTITY;
    document.querySelectorAll("td")[8].innerHTML = arr[0].MOKUHYOU_CT;
    document.querySelectorAll("td")[14].innerHTML = arr[0].PLAN_QUANTITY;
    document.querySelectorAll("td")[20].innerHTML = arr[0].MC_QUANTITY;
    document.querySelectorAll("td")[6].innerHTML = arr[0].ALARM_COUNT;
    document.querySelectorAll("td")[10].innerHTML = arr[0].ALARM_HOUR;
    document.querySelectorAll("td")[12].innerHTML = arr[0].CHANGE_OVER_COUNT;
    document.querySelectorAll("td")[16].innerHTML = arr[0].CHANGE_OVER_HOUR;
    document.querySelectorAll("td")[18].innerHTML = arr[0].SAVE_TIME;
    document.querySelectorAll("td")[22].innerHTML = arr[0].PRODUCT_KUBUN;
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

function autoRefresh() {
    getItem();
}
setInterval('autoRefresh()', 5000);