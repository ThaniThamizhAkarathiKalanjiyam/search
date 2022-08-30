$(document).ready(function(){

 wordsearch = function (funcData) {
	 
		var searctTextVal = $("#txtSearch").val().toLowerCase()
		
		
        $.ajax({
            url: 'https://effervescent-babka-d3abb0.netlify.app/data/'+searctTextVal,
            type: 'POST',
            //dataType: 'jsonp',
			headers: {
				// "Access-Control-Allow-Origin": "*"
			},
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
                $("#meanings").html("This word is not available at TTAK. Pls add at request page.")
            }
        });
    
		updateSearchWords(searctTextVal)
	}

 updateSearchWords = function (txtsearchLow) {
		 
		 if(txtsearchLow !== undefined){
			 
		 var utf_txtsearchLow = decodeURIComponent(txtsearchLow);
		 
        $.ajax({
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSfHQVgPZRpRq2Fegi9LFoibfNtCjLzufxCdqQYqlhL81VnkVA/formResponse',
            type: 'POST',
            dataType: 'jsonp',
            data: {
				"entry.891892085":utf_txtsearchLow,
				"entry.1113699608":utf_txtsearchLow,
				"submit":"Submit",
				"origin":"*"
			},
            success: function (ResponseJsonE) {
                
            },
            error: function () {
                
            }
        });
    
		 }
	
	};
	
	
	
$("#btnSearch").click(function(){

wordsearch()
	
})


})