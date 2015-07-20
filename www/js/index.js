document.addEventListener("deviceready", init, false);
function init() {

  function onCameraSuccess(imageData) {
    var $image = $('#se-photo');
    $image.attr('src', imageData).show();
  }

  function onGallerySuccess(imageData) {
    var $image = $('#se-photo');
    $image.attr('src', "data:image/jpeg;base64," + imageData).show();
  }


  function onFail(message) {
    alert('Failed because: ' + message);
  } 

  //Use from Camera
  $("#se-take-photo").on("touchend", function() {
    navigator.camera.getPicture(onCameraSuccess, onFail, { 
      quality: 80,
      sourceType: Camera.PictureSourceType.CAMERA,
      destinationType: Camera.DestinationType.FILE_URI
    });

  });

  //Use from Library
  $("#se-use-photo").on("touchend", function() {
    navigator.camera.getPicture(onGallerySuccess, onFail, { 
      quality: 80,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL
    });

  });

}