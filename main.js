var array=[1,2,3,4,5,6]
var sum=0;
	for(i=0 ; i<array.length; i++)
		{
		sum+=array[i];
		}
	document.write(sum);
	document.write("<br>");
	
	
var array=[1,2,3,4,5,6,7,8,9,10]
var sum=0;
function sumNum(array)
	{
	for (i=0; i<array.length; i++)
		{
		sum+=array[i];
		}
		return sum;
	}
	document.write(sumNum(array));
	document.write("<br>");
	
	
var array1=[1,2,3,4,5]
for(i=array1.length-1;i>=0;i--)
	{
	document.write(array1[i]);
	document.write("<br>");
	}
	
var array1=[1,2,3,4,5,6]
function numRev(array)
	{
	for(i=array1.length-1;i>=0;i--)
		{
		document.write(array1[i]);
		document.write("<br>");
		}
	}
	numRev(array);
	
	
var array=[1,2,3,4,5,6,7,8,9]
for(i=0; i<=8; i++)
	{
	document.write(array[i]);
	document.write("<br>");
	}
	
var array=[1,2,3,4,5,6,7,8,9,10,11,12]	
function numOrder(array)
	{
	for(i=0; i<=11; i++)
		{
		document.write(array[i]);
		document.write("<br>");
		}
	}
	numOrder(array);
	
	
	
	