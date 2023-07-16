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

 $(document).ready(function() {
  $('#button4').click(function() {
    $('#document-input').val(''); // textarea의 값을 빈 문자열로 설정하여 내용을 지웁니다.
  });
});

$(document).ready(function() {
  $('#button4').hover(function() {
    // 마우스 커서가 버튼 위에 올라갔을 때 실행되는 코드
    $(this).addClass('active');
  }, function() {
    // 마우스 커서가 버튼을 벗어났을 때 실행되는 코드
    $(this).removeClass('active');
  });
});

$(document).ready(function() {
  var undoStack = []; // 작업 이력을 저장할 스택

  // 버튼5 클릭 이벤트 핸들러
  $('#button5').click(function() {
    if (undoStack.length > 0) {
      var previousContent = undoStack.pop(); // 이전 작업 가져오기
      $('#document-input').val(previousContent); // textarea 내용 설정
    }
  });

  // textarea 내용이 변경되었을 때 작업을 스택에 저장하는 로직
  $('#document-input').on('input', function() {
    var currentContent = $(this).val();
    undoStack.push(currentContent);
  });
});
$(document).ready(function() {
  $('#button5').hover(function() {
    // 마우스 커서가 버튼 위에 올라갔을 때 실행되는 코드
    $(this).addClass('active');
  }, function() {
    // 마우스 커서가 버튼을 벗어났을 때 실행되는 코드
    $(this).removeClass('active');
  });
});

$(document).ready(function() {
  var undoStack = []; // 작업 이력을 저장할 스택
  var redoStack = []; // 취소된 작업 이력을 저장할 스택

  // 버튼6 클릭 이벤트 핸들러
  $('#button6').click(function() {
    if (redoStack.length > 0) {
      var previousContent = redoStack.pop(); // 이전 작업 가져오기
      redoStack.push(previousContent); // undo 스택에 추가
      $('#document-input').val(previousContent); // textarea 내용 설정
    }
  });

  // textarea 내용이 변경되었을 때 작업을 스택에 저장하는 로직
  $('#document-input').on('input', function() {
    var currentContent = $(this).val();
    redoStack.push(currentContent); // undo 스택에 추가
    undoStack = []; // redo 스택 비우기
  });
});
$(document).ready(function() {
  $('#button6').hover(function() {
    // 마우스 커서가 버튼 위에 올라갔을 때 실행되는 코드
    $(this).addClass('active');
  }, function() {
    // 마우스 커서가 버튼을 벗어났을 때 실행되는 코드
    $(this).removeClass('active');
  });
});

$(document).ready(function() {
  var currentZoom = 100; // 현재 확대 비율 (%)

  // 버튼7 클릭 이벤트 핸들러
  $('#button7').click(function() {
    currentZoom += 5; // 확대 비율 5% 증가
    applyZoom();
  });

  // 버튼8 클릭 이벤트 핸들러
  $('#button8').click(function() {
    currentZoom -= 5; // 확대 비율 5% 감소
    applyZoom();
  });

  // 화면에 확대 비율 적용하는 함수
  function applyZoom() {
    $('#document-input').css('zoom', currentZoom + '%');
  }
  
  // 버튼7, 버튼8에 hover 클래스 추가 및 제거
  $('#button7, #button8').hover(function() {
    $(this).addClass('active');
  }, function() {
    $(this).removeClass('active');
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

/*흑백모드*/

$(document).ready(function() {
  const documentInput = $('#document-input');
  const darkButton = $('#dark-button');
  const body = $('body');
  const imageButtons = $('.image-button');

  // 다크 모드로 전환
  function enableDarkMode() {
    body.css('background-color', '#000000');
    body.css('color', '#ffffff');
    documentInput.css('background-color', '#000000');
    documentInput.css('color', '#fafcbd');
    darkButton.html('<i class="fas fa-eye"></i><span></span>');
    darkButton.addClass('active');

    // 이미지 버튼에 흑백 모드 적용
    imageButtons.find('img').css('filter', 'grayscale(100%)');
  }

  // 'Night' 버튼 클릭 이벤트
  darkButton.click(function() {
    if (darkButton.hasClass('active')) {
      body.css('background-color', '');
      body.css('color', '');
      documentInput.css('background-color', '');
      documentInput.css('color', '');
      darkButton.html('<i class="fas fa-eye"></i><span></span>');
      darkButton.removeClass('active');

      // 이미지 버튼의 흑백 모드 제거
      imageButtons.find('img').css('filter', 'none');
    } else {
      enableDarkMode();
    }
  });

  // 이미지 버튼 클릭 이벤트
  imageButtons.click(function() {
    // 이미지 버튼을 토글합니다
    $(this).toggleClass('active');

    // 흑백 모드 여부를 확인하여 이미지에 필터 효과를 적용합니다
    if ($(this).hasClass('active')) {
      $(this).find('img').css('filter', 'grayscale(100%)');
    } else {
      $(this).find('img').css('filter', 'none');
    }
  });
});

$(document).ready(function() {
  const imageButtons = $('.image-button');
  const body = $('body');

  imageButtons.click(function() {
    $(this).toggleClass('dark-mode');
    body.toggleClass('dark-mode');
  });
});

$(document).ready(function() {
  const imageButtons = $('.image-button');
  const body = $('body');

  // 이미지 버튼 클릭 이벤트
  imageButtons.click(function() {
    // 이미지 버튼을 토글합니다
    $(this).toggleClass('dark-mode');

    // 흑백 모드 여부를 확인하여 이미지에 필터 효과를 적용합니다
    if ($(this).hasClass('dark-mode')) {
      $(this).find('img').css('filter', 'grayscale(100%)');
    } else {
      $(this).find('img').css('filter', 'none');
    }

    // 다크 모드 전환
    body.toggleClass('dark-mode');
  });
});