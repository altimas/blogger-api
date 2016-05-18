//Creating an AJAX App in jQuery to pull JSON data from Blog URL
// (http://beardedsquid.blogspot.com/feeds/posts/default?alt=json-in-script)
//And add into a certain DIV. 

var blogHTML = "";
var titleHTML;
var entryHTML;
var jsonData;
$(document).ready(function () {

	$.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "https://www.blogger.com/feeds/750937790597107727/posts/default/2043922394621214678?alt=json-in-script",
    success: function(data) {
        jsonData = data;
        entryHTML = jsonData.entry.content.$t;
		titleHTML = jsonData.entry.title.$t;
		blogHTML += '<h1>' + titleHTML + '</h2><p>' + entryHTML + '</p>';
		$('#blog-post').html(blogHTML);
    }
}); //end AJAX


}); //end Document Ready