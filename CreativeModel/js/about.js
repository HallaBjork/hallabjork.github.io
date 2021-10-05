// Adapted from https://github.com/mrdoob/harmony

function About()
{
	this.init();	
}

About.prototype = 
{
	container: null,

	init: function()
	{
		var text, containerText;
		
		this.container = document.createElement("div");
		this.container.className = 'about';
		this.container.style.position = 'absolute';
		this.container.style.top = '0px';
		this.container.style.visibility = 'hidden';
		
		containerText = document.createElement("div");
		containerText.style.margin = '20px 20px';
		containerText.style.textAlign = 'centre';
		this.container.appendChild(containerText);

		text = document.createElement("p");
		text.style.textAlign = 'center';		
		text.innerHTML = '<strong>ABOUT THE PROJECT</strong> <a href="changelog.txt" target="_blank">';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.innerHTML = 'This creative application is a part of a research project for the MSc Data Science & AI for the Creative Industries, Autumn 2021.';
		containerText.appendChild(text);

		text = document.createElement("hr");
		containerText.appendChild(text);

		text = document.createElement("p");
		text.innerHTML = 'The interactive model was inspired by <a href="https://nbenko1.github.io/#/" target="_blank">Picbreeder</a> and adapted from the source code of <a href="https://blog.otoro.net/2015/07/31/neurogram/" target="_blank">Neurogram</a>. The drawing board was adapted from <a href="https://github.com/mrdoob/harmony" target="_blank">Harmony</a>’s source code and the brushes <em>Sketchy</em>, <em>Shaded</em>, <em>Chrome</em>, <em>Fur</em>, <em>LongFur</em> and <em>Web</em> were first implemented in <a href="http://www.zefrank.com/scribbler/" target="_blank">The Scribbler.</a>.';
		containerText.appendChild(text);

		text = document.createElement("hr");
		containerText.appendChild(text);
		
		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = 'For further information please visit the project`s <a href="https://github.com/HallaBjork/hallabjork.github.io/tree/main/CreativeModel" target="_blank">Github page</a>.';
		containerText.appendChild(text);
	},
	
	show: function()
	{
		this.container.style.visibility = 'visible';		
	},
	
	hide: function()
	{
		this.container.style.visibility = 'hidden';
	}
}
