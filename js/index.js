 
$(document).ready(function(){
	// Load about content
	content_loader("about/about.html"); 

	// Initialize all the href
	// $('#about').click(content_loader('about/about.html'))
	// $('#research').click(content_loader('research/research.html'))
})

function content_loader(html)
{
	$("#content-container").empty();
	$("#content-container").load(html);
}


        