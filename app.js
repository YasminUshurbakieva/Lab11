var chr = -1;
var txt = 'Hello,user, good luck!'
var l = txt.length
var p = "_"
function changetext()
{
chr++;
t = document.all["text"].innerHTML
tt = t.substring(0,t.length-p.length)
if(txt.charAt(chr)!="<")
{
document.all["text"].innerHTML= tt + txt.charAt(chr) + p
}
else {
document.all["text"].innerHTML= tt + txt.substring(chr, chr+4) + p
chr=chr+3
}
setTimeout("changetext()", 40)
}
function str(num) {
var s = ""
for(i=0; i<num; i++)
{ s = s + " " }
return s }