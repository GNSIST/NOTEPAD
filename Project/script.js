$(document).ready(function() {
   $('#button1').click(function(e) {
     e.preventDefault();

     var fileInput = $('<input type="file">');
     fileInput.on('change', function() {
       var selectedFile = fileInput[0].files[0];
       alert('Selected file: ' + selectedFile.name);
     });

     fileInput.click();
   });
 })

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
      $('#button2').hover(function() {
        // 마우스 커서가 버튼 위에 올라갔을 때 실행되는 코드
        $(this).addClass('active');
      }, function() {
        // 마우스 커서가 버튼을 벗어났을 때 실행되는 코드
        $(this).removeClass('active');
      });
    });
         
$(document).ready(function() {
   $('#button3').click(function() {
     shareContent(); // 공유 기능을 실행하는 함수를 호출합니다.
   });

   function shareContent() {
     if (navigator.share) {
       navigator.share({
         title: document.title,
         url: window.location.href
       }).then(function() {
         console.log("공유 성공");
       }).catch(function(error) {
         console.error("공유 실패:", error);
       });
     } else {
       console.log("Web Share API가 지원되지 않습니다.");
     }
   }
 });

 $(document).ready(function() {
   $('#button3').hover(function() {
     // 마우스 커서가 버튼 위에 올라갔을 때 실행되는 코드
     $(this).addClass('active');
   }, function() {
     // 마우스 커서가 버튼을 벗어났을 때 실행되는 코드
     $(this).removeClass('active');
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


/*File ▼/
/*Open클릭시 파일불러오기*/
$(document).ready(function() {
   $('#open-link').click(function(e) {
     e.preventDefault();

     var fileInput = $('<input type="file">');
     fileInput.on('change', function() {
       var selectedFile = fileInput[0].files[0];
       alert('Selected file: ' + selectedFile.name);
     });

     fileInput.click();
   });
 })

 /*Save 클릭시 파일저장*/
 $(document).ready(function() {
   $('#save-link').click(function(e) {
     e.preventDefault(); // 링크의 기본 동작을 중지합니다.

     // 파일 저장 로직을 구현합니다.
     var content = "Hello, World!"; // 파일에 저장될 내용
     var filename = "example.txt"; // 저장될 파일 이름

     var element = document.createElement('a');
     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
     element.setAttribute('download', filename);
     element.style.display = 'none';

     $(element).appendTo('body');
     element.click();
     $(element).remove();
   });
 });

/*프린트 기능*/
 $(document).ready(function() {
   $('#print-link').click(function(e) {
     e.preventDefault(); // 링크의 기본 동작을 중지합니다.

     // 프린트 기능을 동작시킵니다.
     window.print();
   });
 });

 /*Edit*/
 $(document).ready(function() {
   // Undo 링크 클릭 이벤트 핸들러 등록
   $('#undo-link').click(function(e) {
     e.preventDefault(); // 링크의 기본 동작을 중지합니다.
     undoAction(); // Undo 동작을 실행하는 함수를 호출합니다.
   });

   // 키보드 이벤트 핸들러 등록
   $(document).on('keydown', function(e) {
     if (e.ctrlKey & e.key === 'z') {
       e.preventDefault(); // 기본 동작인 브라우저의 뒤로가기를 중지합니다.
       undoAction(); // Undo 동작을 실행하는 함수를 호출합니다.
     }
   });

   // Undo 동작을 실행하는 함수
   function undoAction() {
     console.log("Undo"); // 여기에 실제 Undo 동작을 구현하는 코드를 작성하세요.
   }
 });

 $(document).ready(function() {
  $('#fullscreen-link').click(function(e) {
    e.preventDefault(); // 링크의 기본 동작을 중지합니다.
    toggleFullScreen(); // 전체 화면 모드를 토글하는 함수를 호출합니다.
  });

  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }
});


/*폰트리스트*/
$(document).ready(function() {
  $('#text-button').click(function() {
    $('.dropdown-content').toggleClass('show');
  });

  var fontList = [
    { fontFamily: 'Arial', style: 'Arial, sans-serif' },
    { fontFamily: 'Verdana', style: 'Verdana, sans-serif' },
    { fontFamily: 'Helvetica', style: 'Helvetica, sans-serif' },
    { fontFamily: 'Tahoma', style: 'Tahoma, sans-serif' },
    { fontFamily: 'Trebuchet MS', style: 'Trebuchet MS, sans-serif' },
    { fontFamily: 'Georgia', style: 'Georgia, serif' },
    { fontFamily: 'Times New Roman', style: 'Times New Roman, serif' },
    { fontFamily: 'Courier New', style: 'Courier New, monospace' },
    { fontFamily: 'Arial Narrow', style: 'Arial Narrow, sans-serif' },
    { fontFamily: 'Verdana Pro', style: 'Verdana Pro, sans-serif' },
    { fontFamily: 'Roboto', style: 'Roboto, sans-serif' },
    { fontFamily: 'Open Sans', style: 'Open Sans, sans-serif' },
    { fontFamily: 'Lato', style: 'Lato, sans-serif' },
    { fontFamily: 'Montserrat', style: 'Montserrat, sans-serif' },
    { fontFamily: 'Roboto Condensed', style: 'Roboto Condensed, sans-serif' },
    { fontFamily: 'Noto Sans', style: 'Noto Sans, sans-serif' },
    { fontFamily: 'Oswald', style: 'Oswald, sans-serif' },
    { fontFamily: 'Raleway', style: 'Raleway, sans-serif' },
    { fontFamily: 'Ubuntu', style: 'Ubuntu, sans-serif' },
    { fontFamily: 'Poppins', style: 'Poppins, sans-serif' },
    { fontFamily: 'Cutive Mono', style: 'Cutive Mono, monospace' },
    { fontFamily: 'Goblin One', style: 'Goblin One, cursive' },
    { fontFamily: 'ZCOOL QingKe HuangYou', style: 'ZCOOL QingKe HuangYou, cursive' },
    { fontFamily: 'Press Start 2P', style: 'Press Start 2P, cursive' },
    { fontFamily: 'Bungee Inline', style: 'Bungee Inline, cursive' },
    { fontFamily: 'Bangers', style: 'Bangers, cursive' },
    { fontFamily: 'Baloo Bhai 2', style: 'Baloo Bhai 2, cursive' },
    { fontFamily: 'Audiowide', style: 'Audiowide, cursive' },
    { fontFamily: 'Shojumaru', style: 'Shojumaru, cursive' },
    { fontFamily: 'Big Shoulders Inline Display', style: 'Big Shoulders Inline Display, cursive' }
    // 추가적인 폰트를 여기에 추가
  ];

  var fontListHTML = fontList.map(font => `
    <a href="#" data-font="${font.fontFamily}">
      <span style="font-family: ${font.style}">${font.fontFamily}</span>
    </a>
  `).join('');

  $('#font-list').html(fontListHTML);

  $('.dropdown-content a').click(function() {
    var selectedFont = $(this).data('font');
    changeFontFamily(selectedFont);
  });
});

function changeFontFamily(fontFamily) {
  $('#document-input').css('font-family', fontFamily);
  $('.dropdown-content').removeClass('show');
}

/*스크롤기능*/
$('.dropdown-content').scroll(function() {
  var scrollPos = $(this).scrollTop();
  if (scrollPos > 0) {
    $('.dropdown-content').addClass('scroll-active');
  } else {
    $('.dropdown-content').removeClass('scroll-active');
  }
});

function changeFontFamily(fontFamily) {
$('#document-input').css('font-family', fontFamily);
$('.dropdown-content').removeClass('show');
}

function changeFontFamily(fontFamily) {
  $('#document-input').css('font-family', fontFamily);
  $('.dropdown-content').removeClass('show');
}

/*폰트크기*/
$(document).ready(function() {
  $("#font-size").click(function(e) {
    e.preventDefault();
    var size = $(this).data("size");
    $(".textarea").css("font-size", size + "px");
  });
});

$(document).ready(function() {
  $("#font-size a").click(function(e) {
    e.preventDefault();
    var size = $(this).data("size");
    $("#document-input").css("font-size", size + "px");
  });
});

/*전체삭제*/

