var fs = require("fs");
var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.PUBLICKEYIMAGEKIT,
    privateKey : process.env.PRIVATEKEYIMAGEKIT,
    urlEndpoint : "https://ik.imagekit.io/uniro"
  });
  
  async function generatePhotoLink(photo){
    var photoLink = await imagekit.upload({
      file : photo, 
      fileName : "uniPhoto.jpg", 
    });
  return photoLink;
}

  async function getLink(photo) {
    return new Promise(async resolve => {
    await fs.readFile("./public/uploads/"+ photo.filename, await async function(err, data) {
      var photoFile;
      if (err) throw err // Fail if the file can't be read.
      else{
        photoFile = data;
      }
      link =  await generatePhotoLink(photoFile);
      resolve(link.url)
    });
   
  });
  }

module.exports = {
    generatePhotoLink : generatePhotoLink ,
    getLink: getLink,
    
  };
  