//your JS code here. If required.
let para=document.getElementById("status")
let btn=document.getElementById("enterBtn")

btn.addEventListener("click",()=>{
	let head=document.createElement("h1")

	head.innerText=para.innerText

	para.replaceWith(head)
})
