$(document).ready(function () {
    var modal = $('.modal');
    var btn = $('.btn');
    var span = $('.close');
  
    btn.click(function () {
      modal.show();
    });
  
    span.click(function () {
      modal.hide();
    });
  
    $(window).on('click', function (e) {
      if ($(e.target).is('.modal')) {
        modal.hide();
      }
    });
  });

new Vue({
    el: '#tongquan',
    data: {
        message123 : ''
    },
    // định nghĩa phương thức trong object `methods`
    methods: {
      gui: function () {
        var fileInput = document.getElementById('myanh');
        var modal = $('.modal');
        var d = document.getElementById('ngay').value;
        var date = d.slice(0,4);
        var nam = parseInt(date);
        var file = document.getElementById("myfile");
        var filePath = file.value;
        var tenbaihat = document.getElementById("tenbaihat").value;
        var allowedExtensions =/(\.mp3)$/i;
        if (!allowedExtensions.exec(filePath)) {
          alert("File không hợp lệ");
            return false;
        }
        else if (nam<2000){
            alert("Năm sinh không hợp lệ");
            return false;
        }
        else{
            this.message123 = tenbaihat;
            modal.hide();
            if (fileInput.files && fileInput.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                document.getElementById('anhbaimoi').innerHTML = '<img src="'+e.target.result+'"/>';
                };
                reader.readAsDataURL(fileInput.files[0]);
                }
            return true;
            
        }
      }
    }
  })
  function fileValidation(){
    var fileInput = document.getElementById('myanh');
    var filePath = fileInput.value;//lấy giá trị input theo id
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;//các tập tin cho phép
    //Kiểm tra định dạng
    if(!allowedExtensions.exec(filePath)){
    alert('Vui lòng upload các file có định dạng: .jpeg/.jpg/.png/.gif');
    fileInput.value = '';
    return false;
    }else{
    //Image preview
    if (fileInput.files && fileInput.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
    document.getElementById('imagePreview').innerHTML = '<br><img style="width:200px;height:200px;" src="'+e.target.result+'"/>';
    };
    reader.readAsDataURL(fileInput.files[0]);
    }
    }
    }