var element = document.getElementsByClassName("orderdish");
function update(){
    var upd = prompt("enter price");
    event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText = upd;
}
function delrow(e){

  var d = e.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(d);                                //deleteRow is a pre-defined function in javascript
}
function add(){
    var t = prompt("enter dish name");
    var p = prompt("enter price");
    mytable.innerHTML += '  <tr  class="text-center text-white">\
    <td><input type="checkbox" class="orderdish" value="mango" data-price="200"></td>\
    <td>'+t+'</td>\
    <td>'+p+'</td>\
    <td><input type="text"></td>\
    <td><input type="text"></td>\
    <td><button class="btn-danger"  onclick="delrow(this)">DElete row</button></td>\
    <td><button class="btn-danger"  onclick="update()">UPdate price</button></td></tr>'
}
function order(){
    let total = 0;
    for(let item of element){    
        if(item.checked){
         var empt = item.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstChild;
        if(empt.value == ""){
               empt.style.backgroundColor = "red";
        }

   
         var quant = item.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.value;
         let subtotal = +item.parentNode.nextElementSibling.nextElementSibling.innerText * quant; // is sy ham nay kud price update kar kay jo new price ha us ko access di hoi total ma new price show ho.
        //  let subtotal = +item.getAttribute("data-price") * quant; //ya data-price kay hisab say ha,is say ham data-price kay attribute kay hisab say//
    //kar sktay hain yani custom made ham nay khud price set ki hoti is ma aor total ma voi price show hoti jo custm made ho ham nay khud select li hoto data-price attribute ma.
            total += subtotal;
            console.log(item.value + " is checked");
            item.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.value = subtotal;
        }
    }

    var dis  =0;
   
    if(total > 350){
        
     dis = total * 0.9;
     console.log(dis+ " =after discount");
      
    
    }else{
        dis = total;
    }                                                     
    console.log(total+" =Befor discount");
    
    tbill.value = total;
    dbill.value = dis;
    
    return dis;
    return total;
    

}