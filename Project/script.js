$(document).ready(function() {
   $('#button1').click(function() {
         var userDocument = $('#document-input').val();

      if (userDocument) {
         // 문서 저장 기능 수행
         var blob = new Blob([userDocument], { type: 'text/plain' });
         var url = URL.createObjectURL(blob);
         var a = document.createElement('a');
         a.href = url;
         a.download = 'saved_document.txt'; 
         a.click();
         URL.revokeObjectURL(url);
       } else {
         alert('Please enter a document to save.');
       }
      });
   });

   $(document).ready(function() {
      $('#button1').hover(function() {
        // 마우스 커서가 버튼 위에 올라갔을 때 실행되는 코드
        $(this).addClass('active');
      }, function() {
        // 마우스 커서가 버튼을 벗어났을 때 실행되는 코드
        $(this).removeClass('active');
      });
    });
 
   $(document).ready(function() {
      $('#button2').click(function() {
        alert('공유되었습니다')
      });
   });

 $(document).ready(function() {
   $('#button3').click(function() {
     alert('공유되었습니다')
   });
});
$(document).ready(function(){
   $('#button4').click(function(){
      alert('오렸습니다')
   });
});
$(document).ready(function(){
   $('#button5').click(function(){
      alert('복사했습니다')
   })
})
$(document).ready(function(){
   $('#button6').click(function(){
      alert('붙여넣기했습니다')
   })
})
$(document).ready(function(){
   $('#button7').click(function(){  
      alert('뒤로갔습니다')
   });
});
$(document).ready(function(){
   $('#button8').click(function(){  
      alert('앞으로갔습니다')
   });
});
$(document).ready(function(){
   $('#button9').click(function(){
      alert('삭제했습니다')
   });
});
$(document).ready(function(){
   $('#button10').click(function(){
   alert('확대되었습니다')
   });
});
$(document).ready(function(){
   $('#button11').click(function(){
      alrert('축소되었습니다')
   });
});





 
 
 
 
 
 
 
 
   
