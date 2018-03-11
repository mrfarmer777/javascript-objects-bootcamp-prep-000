var playlist ={EttaJames:"At last"};

var updatePlaylist= function(obj, artist,title){
  return Object.assign({},obj,{[artist]:title});
};

var removeFromPlaylist=function(obj,artist){
  delete obj.artist.toString();
  return obj;
};