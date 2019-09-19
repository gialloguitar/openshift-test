
function CreateWall() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   for ( var i = 0; i < 16; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   };

   var link = '/wall.php?initiator=yes&wall=' + result;
   console.log(link);
   window.location.replace(link); 
};

