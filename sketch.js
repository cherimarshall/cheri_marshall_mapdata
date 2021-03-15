 const key = 'pk.eyJ1IjoiY21hcnNoYWxsOTkiLCJhIjoiY2ttMnN2OTFwMDFwajJ3bGMzNTN1ZTlkMCJ9.Ajd6MaHwloZw8HH0XFwLuQ';

 const options = {
   lat: 35.680,
   lng: 139.769,
   zoom: 10,
   style: 'mapbox://styles/cmarshall99/ckma2l0012pzc17n4mil5el8r',
   pitch: 0
 };

 const mappa = new Mappa('MapboxGL', key);
 let myMap;
 let canvas;

 function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
   myMap = mappa.tileMap(options);
   myMap.overlay(canvas);
   karaoke = loadTable('karaoke.csv','csv','header');
   //img = createImg('');
 }


 function draw() {
   clear();

   //noFill();
   stroke(255);
   strokeWeight(3);
   const zoom = myMap.zoom();
   const tokyo = myMap.latLngToPixel(35.680, 139.769);
   ellipse(tokyo.x,tokyo.y, 5 * zoom, 5 * zoom);
   if(dist(tokyo.x,tokyo.y,mouseX,mouseY)<(zoom *10)/2){
   fill(0,100); 
  }else{
    fill(200,50);
  }
 
 for(let i = 0; i < karaoke.getRowCount();i++) {
   const latitude = Number(karaoke.getString(i, 'latitude'));
   const longitude = Number(karaoke.getString(i, 'longitude'));
   const pos = myMap.latLngToPixel(latitude, longitude);
   
   let place = karaoke.getString(i, 'name');
   fill (0, 100);
   
   //var size = karaoke.getString(i, 'mass (g)');
   //size = map(size,558,60000000,1,25); + myMap.zoom();
   ellipse (pos.x, pos.y, 20, 20); 
   if(dist(pos.x, pos.y, mouseX, mouseY) <10){
     textSize(20)
     text("Midtown", tokyo.x, tokyo.y);
     //image (img, tokyo.x, tokyo.y, 200, 200);
     text(place, pos.x, pos.y);
   }
   
 }
   

   
 print(zoom);

}

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});


