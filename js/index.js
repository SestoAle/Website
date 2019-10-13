 
var pages = ['about','education','projects']

$(document).ready(function(){

	// Check if there's an hash in the link
	var hash = window.location.hash.replace('#','')
    if(pages.indexOf(hash) > 0)
    {
    	content_loader(hash + "/" + hash + ".html", "." + hash)
    } 
    else
    {
    	// Load about content
		content_loader("about/about.html", ".about") 
    }
	

	//Initialize all the href
	$('.about').click(function()
	{
		content_loader('about/about.html', ".about")
	})

	$('.projects').click(function()
	{
		content_loader('projects/projects.html', ".projects")
	})

	$('.education').click(function()
	{
		content_loader('education/education.html', ".education")
	})
})

function content_loader(html, element)
{
	$(".link").css("font-weight", "normal")
	$(element).css("font-weight", "bold")
	$(element).css("color", "rgb(100,100,100)")
	$("#content-container").empty()
	$("#content-container").load(html)
  	element = element.replace(".", "#");
	window.history.pushState(element, "Alessandro Sestini " + element, "/" + element)
}





        
