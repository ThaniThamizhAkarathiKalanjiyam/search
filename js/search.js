$(document).ready(function(){

 wordsearch = function (funcData) {
	 
	 $.getJSON('https://effervescent-babka-d3abb0.netlify.app/json/அகஞ்சேரனு', function(data) {
    console.log(data);
});
	 
		var searctTextVal = $.trim($("#txtSearch").val().toLowerCase())
		
		
        $.ajax({
            //url: 'data/'+searctTextVal,//+".md",
			url: 'https://effervescent-babka-d3abb0.netlify.app/json/'+searctTextVal,//+".md",
            type: 'GET',
            dataType: 'jsonp',
            data: {},
			headers:{
				"Access-Control-Allow-Origin": '*'
				
			},
            success: function (ResponseJsonE) {

var accordionParent = $("<div>")
$(accordionParent).addClass("accordion");
	var accordionItem = $("<div>")
	$(accordionItem).addClass("accordion-item");
		var accordionHeader = $("<h2>")
		$(accordionHeader).addClass("accordion-header");
			var accordionButton = $("<button>")
			$(accordionButton).addClass("accordion-button");
			$(accordionButton).html("Accordion Item #1");
			$(accordionHeader).html(accordionButton)
		$(accordionItem).html(accordionHeader)
		var accordionCollapse = $("<div>")
		$(accordionCollapse).addClass("accordion-collapse collapse show");
			var accordionBody = $("<div>")
			$(accordionBody).addClass("accordion-body");
			$(accordionBody).html("<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.")
		$(accordionItem).html(accordionCollapse)
		debugger
		  $("#meanings").html(accordionParent)
				
				// var converter = new showdown.Converter(),
					// text      = ResponseJsonE,
					// html      = converter.makeHtml(text);

                // if (ResponseJsonE != null) {
                    // $("#meanings").html(html)
                // } else {
                    
                // }
            },
            error: function (data) {
				debugger
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