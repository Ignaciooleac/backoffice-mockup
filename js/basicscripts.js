$(document).ready(function(){
    $("input[type='checkbox']").change(function(e) {
      if($(this).is(":checked")){ 
        $(this).closest('tr').addClass("highlight");
      }else{
        $(this).closest('tr').removeClass("highlight");
      }
    });
  });
  
  // Funcion "Seleccionados" de prueba
  
  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }