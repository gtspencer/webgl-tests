mergeInto(LibraryManager.library, {

  Hello: function () {
    window.alert("Hello, world!");
  },

  HelloString: function (str) {
    window.alert(Pointer_stringify(str));
  },

  PrintFloatArray: function (array, size) {
    for(var i = 0; i < size; i++)
    console.log(HEAPF32[(array >> 2) + i]);
  },

  AddNumbers: function (x, y) {
    return x + y;
  },

  StringReturnValueFunction: function () {
    var returnStr = "bla";
    var bufferSize = lengthBytesUTF8(returnStr) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(returnStr, buffer, bufferSize);
    return buffer;
  },

  BindWebGLTexture: function (texture) {
    GLctx.bindTexture(GLctx.TEXTURE_2D, GL.textures[texture]);
  },

  DLTexture: function () {
    var canvas = document.createElement('canvas');

    canvas.id = "CursorLayer";
    canvas.width = 1224;
    canvas.height = 768;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";

    document.body.appendChild(canvas);
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = "https://meta.sadgirlsbar.io/images/07175_3YFrCvm1m7c7F1btFYaCRwGvDZCH.png";

    img.onload = function() {
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 5, 5);

      return canvas.toDataURL();
    }
    
  }

});