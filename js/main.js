var app = (function(){
  function updateDownload(){
    // just in case...
    setTimeout(function(){
      html2canvas(picture, {
        allowTaint: true,
        useCORS: true,
        onrendered: function(canvas){
          dl.href = Canvas2Image.convertToPNG(canvas).src;
        }
      });
    }, 500);
  }

  function setImageFromFile(){
    var reader = new FileReader();

    reader.onload = function(e){
      picture.style.backgroundImage = "url(" + e.target.result + ")";
      updateDownload();
    }

    reader.readAsDataURL(filepick.files[0]);
  }

  function save(){
    // html2canvas(picture, {
    //   allowTaint: true,
    //   useCORS: true,
    //   onrendered: function(canvas){
    //     Canvas2Image.saveAsPNG(canvas);
    //   }
    // });
  }

  return {
    setImageFromFile: setImageFromFile,
    save: save
  };
}());
