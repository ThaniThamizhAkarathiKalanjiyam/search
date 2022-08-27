$(document).ready(function(){

 wordsearch = function (funcData) {
	 
		var searctTextVal = $("#txtSearch").val()
		debugger
		
        $.ajax({
            url: 'data/'+searctTextVal+'.md',
            type: 'GET',
            //dataType: 'json',
            data: {},
            success: function (ResponseJsonE) {
				
				var converter = new showdown.Converter(),
					text      = ResponseJsonE,
					html      = converter.makeHtml(text);

                if (ResponseJsonE != null) {
                    $("#meanings").html(html)
                } else {
                    
                }
            },
            error: function () {
                
            }
        });
    }

$("#btnSearch").click(function(){

wordsearch()
	
})


})