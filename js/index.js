 
$(document).ready(function(){
	// Load about content
	content_loader("about/about.html", "#about"); 

	// Initialize all the href
	$('#about').click(function()
	{
		content_loader('about/about.html', this)
	})

	$('#title-name').click(function()
	{
		content_loader('about/about.html', this)
	})

	$('#projects').click(function()
	{
		content_loader('projects/projects.html', this)
	})
})

function content_loader(html, element)
{
	$(".link").css("font-weight", "normal")
	$(element).css("font-weight", "bold")
	$("#content-container").empty()
	$("#content-container").load(html)
}


        