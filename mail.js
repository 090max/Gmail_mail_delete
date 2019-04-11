
function click1()
{var button=document.getElementsByClassName("T-I J-J5-Ji nX T-I-ax7 T-I-Js-Gs mA");

	var down = new MouseEvent('mousedown');
            var up = new MouseEvent('mouseup');
          
            button[0].dispatchEvent(down);
            button[0].dispatchEvent(up);
}

var final_arr=new Array();
var final_not=new Array();

var times=prompt("Enter the number of pages to scan",1);
while(times--)
{ 
	var cb=document.getElementsByClassName('oZ-jc T-Jo J-J5-Ji');
var name1=document.querySelectorAll('.zF,.yP'); 
var name_new=new Array();
for(var i=0;i<name1.length;i++)
{

	name_new.push(name1[i].getAttribute("name"));
	i=i+1;
}
for(var i=0;i<name_new.length;i++)
{
	var loc1=final_arr.indexOf(name_new[i]);
	if(loc1==-1)
	var loc2=final_not.indexOf(name_new[i]);
	if(loc1==-1 && loc2==-1)
	{
		//alert("GOT IT");
		if (confirm(name_new[i])){
			final_arr.push(name_new[i])
			//cb[i].setAttribute("aria-checked","true");
			cb[i].click();
			click1();
      }
     else
     {
     	final_not.push(name_new[i]);
     }
}
else if(loc1!=-1 && loc2==-1)
{
	//alert("hello")
	//cb[i].setAttribute("aria-checked","true");
	         cb[i].click();
  	click1();
  	}


}
}
