
var dark = "--body-color: rgb(56,56,56);--all-color: rgb(23,23,29);--text-color: white;--color-primary:hsl(201,65%,62%);--color-primary-h:201;--color-primary-s:65%;--color-primary-l:62%;--color-bg:hsl(231,14%,10%);--color-bg-h:231;--color-bg-s:14%;--color-bg-l:10%;--color-contrast-lower:hsl(230,12%,18%);--color-contrast-lower-h:230;--color-contrast-lower-s:12%;--color-contrast-lower-l:18%;--color-contrast-low:hsl(240,2%,37%);--color-contrast-low-h:240;--color-contrast-low-s:2%;--color-contrast-low-l:37%;--color-contrast-medium:hsl(80,2%,69%);--color-contrast-medium-h:80;--color-contrast-medium-s:2%;--color-contrast-medium-l:69%;--color-contrast-high:hsl(69,9%,84%);--color-contrast-high-h:69;--color-contrast-high-s:9%;--color-contrast-high-l:84%;--color-contrast-higher:hsl(60,6%,90%);--color-contrast-higher-h:60;--color-contrast-higher-s:6%;--color-contrast-higher-l:90%;--chroma-line-numbers-background:#ffc;--chroma-line-numbers-color:#7f7f7f;--chroma-keyword-color:#ff79c6;--chroma-name-color:#8be9fd;--chroma-attribute-color:#50fa7b;--chroma-literal-color:#f1fa8c;--chroma-number-color:#bd93f9;--chroma-comment-color:#6272a4;--chroma-deleted-color:#8b080b;--chroma-output-color:#44475a;";

var light = "--all-color: #fff;--body-color: rgb(249,249,249);--text-color: black;";
if(localStorage.state == null){
	localStorage.state = 'sun'
}else if(localStorage.state == 'night'){
	document.documentElement.style.cssText = dark;
	document.getElementById('theme-switcher-text').innerHTML = '🌙';
}else{
	document.documentElement.style.cssText = light;
	document.getElementById('theme-switcher-text').innerHTML = '🌞';
};
document.getElementById("theme-switcher").onclick = function () {
	var now_theme = document.getElementById('theme-switcher-text').innerHTML
	if(localStorage.state == 'sun'){
		document.documentElement.style.cssText = dark;
		document.getElementById('theme-switcher-text').innerHTML = '🌙';
		localStorage.state = 'night';
		return false;
	}else if(localStorage.state == 'night'){
		document.documentElement.style.cssText = light;
		document.getElementById('theme-switcher-text').innerHTML = '🌞';
		localStorage.state = 'sun';
		return false;
	}
};

