 
$(document).ready(function(){
	// Load about content
	content_loader("about/about.html", "#about"); 
	$("#about-mobile").css("font-weight", "bold")

	// Initialize all the href
	// $('#about').click(function()
	// {
	// 	content_loader('about/about.html', this)
	// })
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
		content_loader('projects/projects.html', '#projetcs')
	})
	$('#projects-mobile').click(function()
	{
		content_loader('projects/projects.html', '#projetcs')
	})

	$('#education').click(function()
	{
		content_loader('education/education.html', '#education')
	})
	$('#education-mobile').click(function()
	{
		content_loader('education/education.html', '#education')
	})

	$(function(){
	    var hash = window.location.hash.replace('#','');
	    var pages = ['about','education','projects'];
	    if(pages.indexOf(hash) > 0){
	    	content_loader(hash + "/" + hash + ".html", "#" + hash)
	    }
	});
})

function content_loader(html, element)
{
	$(".link").css("font-weight", "normal")
	$(element).css("font-weight", "bold")
	$("#content-container").empty()
	$("#content-container").load(html)
	window.history.pushState(element, "Alessandro Sestini " + element, "/" + element)
}





        