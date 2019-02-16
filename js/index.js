 
$(document).ready(function(){
	// Load about content
	content_loader("about/about.html", "#about"); 
	content_loader("about/about.html", "#about-mobile"); 

	// Initialize all the href
	$('#about').click(function()
	{
		content_loader('about/about.html', this)
	})
	$('#about-mobile').click(function()
	{
		content_loader('about/about.html', this)
	})

	$('#title-name').click(function()
	{
		content_loader('about/about.html', "#about")
	})
	$('#title-name-mobile').click(function()
	{
		content_loader('about/about.html', "#about-mobile")
	})

	$('#projects').click(function()
	{
		content_loader('projects/projects.html', this)
	})
	$('#projects-mobile').click(function()
	{
		content_loader('projects/projects.html', this)
	})

	$('#education').click(function()
	{
		content_loader('education/education.html', this)
	})
	$('#education-mobile').click(function()
	{
		content_loader('education/education.html', this)
	})
})

function content_loader(html, element)
{
	$(".link").css("font-weight", "normal")
	$(element).css("font-weight", "bold")
	$("#content-container").empty()
	$("#content-container").load(html)
}


        