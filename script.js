

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i=0; i<names.length ;i++) {
  var init= names[i].charAt(0);

  
  if ( init==="J" ){
    hellospeak.speakhello(names[i])
  } else {
     hellospeak.speakbye(names[i])
  }
};
