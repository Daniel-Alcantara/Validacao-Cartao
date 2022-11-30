
$( document ).ready(function() {

    $( ".button_confirm" ).click(function() {
        var name = $("#full_name").val()
        var card_number = $("#card_number").val()
        var mes = $("#mes").val()
        var ano = $("#ano").val()
        var cvv = $("#cvv").val()

        var fullmes = mes+"/"+ano

        console.log(card_number)
        $(".numbers p").text(card_number)
        $(".name p").text(name)
        $(".mes_ano p").text(fullmes)
        $(".cvv_cartao_costas p").text(cvv)
      });

});