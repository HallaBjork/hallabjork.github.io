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
		this.container.className = 'gui';
		this.container.style.position = 'absolute';
		this.container.style.top = '0px';
		this.container.style.visibility = 'hidden';
		
		containerText = document.createElement("div");
		containerText.style.margin = '20px 20px';
		containerText.style.textAlign = 'centre';
		this.container.appendChild(containerText);

		text = document.createElement("p");
		text.style.textAlign = 'center';		
		text.innerHTML = '<strong>ABOUT THE CREATIVE AI TOOL</strong> <a href="changelog.txt" target="_blank">';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.innerHTML = 'This creative tool was made as a part of a research project for the MSc Data Science & AI in the Creative Inductries 2021.';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = '<a href="https://github.com/HallaBjork/CreativeAITool" target="_blank">Source Code</a>';
		containerText.appendChild(text);

		text = document.createElement("hr");
		containerText.appendChild(text);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = 'Brush Size: <span class="key">d</span><span class="key">f</span>, <span class="key">r</span> reset<br />Color Wheel: <span class="key">shift</span>, <span class="key">alt</span> picker<br />';
		containerText.appendChild(text);

		text = document.createElement("hr");
		containerText.appendChild(text);

		text = document.createElement("p");
		text.innerHTML = '<em>Sketchy</em>, <em>Shaded</em>, <em>Chrome</em>, <em>Fur</em>, <em>LongFur</em> and <em>Web</em> are all variations of the neighbour points connection concept. First implemented in <a href="http://www.zefrank.com/scribbler/" target="_blank">The Scribbler</a>.';
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
