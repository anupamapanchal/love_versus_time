var choice1="aries";
var choice2="aries";

function getChoice1(txt){
choice1=txt;
//document.getElementById("new").innerHTML=choice1;
}

function getChoice2(txt){
choice2=txt;
//document.getElementById("new").innerHTML=choice2;
}

var graph;

// x=y graph
var data1 = {values:[
					{X:5, Y:5},
					{X:40, Y:40},
					{X:60, Y:60},
					{X:80, Y:80},
					{X:90, Y:90},
					]};
// y constant					
var data2 = {values:[
					{X:5, Y:40},
					{X:40, Y:40},
					{X:60, Y:40},
					{X:80, Y:40},
					{X:100, Y:40},
					]};
					
//					
var data3 = {values:[
					{X:5, Y:5},
					{X:30, Y:60},
					{X:90, Y:70},
					]};
					
var data4 = {values:[
					{X:5, Y:90},
					{X:40, Y:80},
					{X:60, Y:60},
					{X:80, Y:40},
					{X:90, Y:5},
					]};
					
var data5 = {values:[
					{X:5, Y:20},
					{X:20, Y:25},
					{X:50, Y:30},
					{X:70, Y:35},
					{X:90, Y:40},
					]};
					
var data6 = {values:[
					{X:5, Y:70},
					{X:30, Y:90},
					{X:90, Y:10},
					]};
					
var data7 = {values:[
					{X:5, Y:20},
					{X:20, Y:50},
					{X:50, Y:90},
					{X:70, Y:45},
					{X:90, Y:5},
					]};
					
var data8 = {values:[
					{X:5, Y:10},
					{X:20, Y:20},
					{X:50, Y:50},
					{X:70, Y:80},
					{X:90, Y:90},
					]};
					
var data9 = {values:[
					{X:5, Y:90},
					{X:20, Y:50},
					{X:50, Y:5},
					{X:70, Y:50},
					{X:90, Y:90},
					]};
					
var data10 = {values:[
					{X:5, Y:10},
					{X:20, Y:50},
					{X:50, Y:80},
					{X:70, Y:60},
					{X:90, Y:60},
					]};
//sine wave					
var data11 = {values:[
					{X:10, Y:30},
					{X:20, Y:70},
					{X:30, Y:30},
					{X:40, Y:70},
					{X:50, Y:30},
					{X:60, Y:70},
					{X:70, Y:30},
					{X:80, Y:70},
					{X:90, Y:30}
					]};
var data12 = {values:[
					{X:10, Y:60},
					{X:20, Y:40},
					{X:30, Y:70},
					{X:40, Y:20},
					{X:50, Y:50},
					{X:60, Y:40},
					{X:70, Y:65},
					{X:80, Y:25},
					{X:90, Y:55}
					]};
var data13 = {values:[
					{X:10, Y:20},
					{X:20, Y:40},
					{X:30, Y:25},
					{X:40, Y:60},
					{X:50, Y:35},
					{X:60, Y:80},
					{X:70, Y:40},
					{X:80, Y:90},
					{X:90, Y:50}
					]};
var data14 = {values:[
					{X:10, Y:90},
					{X:20, Y:60},
					{X:30, Y:70},
					{X:40, Y:50},
					{X:50, Y:65},
					{X:60, Y:30},
					{X:70, Y:55},
					{X:80, Y:10},
					{X:90, Y:40}
					]};
//naughty sine wave					
var data15 = {values:[
					{X:10, Y:90},
					{X:20, Y:10},
					{X:30, Y:90},
					{X:40, Y:10},
					{X:50, Y:90},
					{X:60, Y:10},
					{X:70, Y:90},
					{X:80, Y:10},
					{X:90, Y:90}
					]};

function selectGraph() 
{
	if (choice1==choice2)
		return data3;
	else if( (choice1=="aries" && choice2=="taurus")||(choice1=="taurus" && choice2=="aries" )||(choice1=="aries" && choice2=="leo" )||(choice1=="leo" && choice2=="aries")||(choice1=="gemini" && choice2=="libra" )||(choice1=="libra" && choice2=="gemini"))
		return data1;
	else if((choice1=="aries" && choice2=="libra")||(choice1=="libra" && choice2=="aries")||(choice1=="taurus" && choice2=="capricorn")||(choice1=="cancer" && choice2=="sagittarius")||(choice1=="sagittarius" && choice2=="cancer")||(choice1=="leo" && choice2=="capricorn")||(choice1=="capricorn" && choice2=="leo")||(choice1=="aries" && choice2=="sagittarius")||(choice1=="sagittarius" && choice2=="aries"))	
		return data2;
	else if((choice1=="gemini" && choice2=="virgo")||(choice1=="virgo" && choice2=="gemini")||(choice1=="cancer" && choice2=="aquarius")||(choice1=="aquarius" && choice2=="cancer"))	
		return data3;
	else if((choice1=="taurus" && choice2=="saggitarius")||(choice1=="taurus" && choice2=="sagittarius")||(choice1=="cancer" && choice2=="pisces")||(choice1=="pisces" && choice2=="cancer")||(choice1=="leo" && choice2=="pisces")||(choice1=="pisces" && choice2=="leo")||(choice1=="virgo" && choice2=="saggitarius")||(choice1=="saggitarius" && choice2=="virgo")||(choice1=="capricorn" && choice2=="libra")||(choice1=="libra" && choice2=="capricorn"))
		return data4;
	else if((choice1=="gemini" && choice2=="aries")||(choice1=="aries" && choice2=="gemini")||(choice1=="taurus" && choice2=="gemini")||(choice1=="gemini" && choice2=="taurus")||(choice1=="virgo" && choice2=="cancer")||(choice1=="cancer" && choice2=="virgo"))
		return data5;
	else if((choice1=="aries" && choice2=="cancer")||(choice1=="cancer" && choice2=="aries")||(choice1=="aries" && choice2=="capricorn")||(choice1=="capricorn" && choice2=="aries")||(choice1=="taurus" && choice2=="scorpio")||(choice1=="scorpio"&& choice2=="taurus")||(choice1=="pisces" && choice2=="capricorn")||(choice1=="capricorn" && choice2=="pisces"))
		return data6;
	else if((choice1=="taurus" && choice2=="virgo")||(choice1=="virgo" && choice2=="taurus")||(choice1=="libra" && choice2=="aquarius")||(choice1=="aquarius" && choice2=="libra")||(choice1=="capricorn" && choice2=="sagittarius")||(choice1=="sagittarius" && choice2=="capricorn"))
		return data7;
	else if((choice1=="aries" && choice2=="scorpio")||(choice1=="scorpio" && choice2=="aries")||(choice1=="libra" && choice2=="taurus")||(choice1=="taurus" && choice2=="libra")||(choice1=="gemini" && choice2=="capricorn")||(choice1=="capricorn" && choice2=="gemini")||(choice1=="cancer" && choice2=="scorpio")||(choice1=="scorpio" && choice2=="cancer"))
		return data8;
	else if((choice1=="capricorn" && choice2=="cancer")||(choice1=="cancer" && choice2=="capricorn")||(choice1=="virgo" && choice2=="leo")||(choice1=="leo" && choice2=="virgo")||(choice1=="scropio" && choice2=="virgo")||(choice1=="virgo" && choice2=="scorpio")||(choice1=="aquarius" && choice2=="sagittarius")||(choice1=="sagittarius" && choice2=="aquarius"))	
		return data9;
	else if((choice1=="aries" && choice2=="pisces")||(choice1=="pisces" && choice2=="aries")||(choice1=="taurus" && choice2=="aquarius")||(choice1=="aquarius" && choice2=="taurus")||(choice1=="gemini" && choice2=="leo")||(choice1=="leo" && choice2=="gemini"))
		return data10;
	else if((choice1=="taurus" && choice2=="cancer")||(choice1=="cancer" && choice2=="taurus")||(choice1=="leo" && choice2=="libra")||(choice1=="libra" && choice2=="leo")||(choice1=="virgo" && choice2=="pisces")||(choice1=="pisces" && choice2=="virgo")||(choice1=="sagittarius" && choice2=="scorpio")||(choice1=="scorpio" && choice2=="sagittarius"))
		return data11;
	else if((choice1=="taurus" && choice2=="pisces")||(choice1=="pisces" && choice2=="taurus")||(choice1=="gemini" && choice2=="aquarius")||(choice1=="aquarius" && choice2=="gemini")||(choice1=="leo" && choice2=="cancer")||(choice1=="cancer" && choice2=="leo")||(choice1=="virgo" && choice2=="libra")||(choice1=="libra" && choice2=="virgo"))
		return data13;
	else if((choice1=="cancer" && choice2=="libra")||(choice1=="libra" && choice2=="cancer")||(choice1=="leo" && choice2=="aquarius")||(choice1=="aquarius" && choice2=="leo")||(choice1=="sagittarius" && choice2=="pisces")||(choice1=="pisces" && choice2=="sagittarius")||(choice1=="scorpio" && choice2=="pisces")||(choice1=="pisces" && choice2=="scorpio"))
		return data14;
	else if((choice1=="aquarius" && choice2=="pisces")||(choice1=="pisces" && choice2=="aquarius")||(choice1=="scorpio" && choice2=="pisces")||(choice1=="pisces" && choice2=="scorpio")||(choice1=="libra" && choice2=="sagittarius")||(choice1=="sagittarius" && choice2=="libra")||(choice1=="leo" && choice2=="sagittarius")||(choice1=="sagittarius" && choice2=="leo")||(choice1=="pisces" && choice2=="gemini")||(choice1=="gemini" && choice2=="pisces"))
		return data15
	else return data12;
}

function toggle()
{
if(document.getElementById("wrap").style.display=="block")
{
	document.getElementById("wrap").style.display="none";
	document.getElementById("button1").style.display="block";
	document.getElementById("divGraph").style.display="block";
}
else 
{
document.getElementById("wrap").style.display="block";
document.getElementById("button1").style.display="none";
document.getElementById("divGraph").style.display="none";
}

}

function getXPixel(val)
{
	return (graph.width()/100)*val;
}

function getYPixel(val)
{
	return graph.height() - (graph.height()/100)*val;
}


//main function responsible for graph
function displayDiv() {

toggle();
data = selectGraph();
graph = $('#graph');
var c = graph[0].getContext('2d');
c.clearRect(0,0,graph.width(),graph.height());
c.lineWidth=4;
c.strokeStyle='#333';

//axises
c.beginPath();
c.moveTo(0,0);
c.lineTo(0,graph.height());
c.lineTo(graph.width(),graph.height());
c.stroke();

//drawing graph
c.strokeStyle='#f00';
c.beginPath();
c.moveTo(getXPixel(data.values[0].X) , getYPixel(data.values[0].Y ));

for(var i=1; i<data.values.length; i++)
{
c.lineTo(getXPixel(data.values[i].X) , getYPixel(data.values[i].Y ));
}
c.stroke();
}