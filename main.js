(function() {
  var questions = [{
    question: "DOM respresents:",
    choices: ['Document Oriented Model', 'Document Object Menu', 'Document Object Master', 'Document Object Model'],
    correctAnswer: 3
  }, {
    question: "var Name ; console.log(Name) returns",
    choices: ['NaN', 'Undefined', 'Null', 'Throws an an Error'],
    correctAnswer: 1
  }, {
    question: 'Type of NaN is?',
    choices: ['Object', 'Array', 'Special Character', 'Number'],
    correctAnswer: 3
  }, {
    question: 'Conversion of a string to number returns',
    choices: ['Throws an Error', 'Not Possible', 'Coverts Into ASCII values',' Returns NaN'],
    correctAnswer: 3
  }, {
    question: 'Infinity is of type:',
    choices: ['Undefined', 'Math', 'Number', 'NaN'],
    correctAnswer: 2
  }, {
    question: 'Typeof Null returns:',
    choices: ['Object', 'Number', 'Null', 'Undefined or Throws an error'],
    correctAnswer: 0
  }, {
    question: 'let a = 1, b = 1; let c = ++a; let d = b++; console.log(c, d) return',
    choices: ['2, 1', '1, 2', '2, 2', '1, 1'],
    correctAnswer: 0
  }, {
    question: 'console.log((0 || "0"),(0  && "0")) will return',
    choices: ['True, False', 'False, True', 'True, True', 'False, False' ],
    correctAnswer: 0
  }, {
    question: 'result = (0 || "0" || 10)',
    choices: ['10', '0', '"0"', 'Undefined'],
    correctAnswer: 0
  }, {
    question: 'result = (0 && "0" && 10)',
    choices: ['10', '0', '"0"', 'Undefined'],
    correctAnswer: 1
  }, {
    question: 'result = ( 0 || false || undefined)',
    choices: ['0', 'false', 'undefined', 'Retuns nothing since all are false'],
    correctAnswer: 2
  }, {
    question: 'result = ( 10  && 12 && 15):',
    choices: ['10', '12', '15', 'Nothing'],
    correctAnswer: 2
  }, {
    question: 'Continue in the loop:',
    choices: ['Continues the iteration', 'Skips the present iteration', 'Breaks the iteration', 'Checks the condition'],
    correctAnswer: 1
  }, {
    question: 'for in loop:',
    choices: ['iterate over the properties of an object', 'iterate over the values of an object', 'Same as For Loop or For in Loop', 'None Of the above'],
    correctAnswer: 0
  }, {
    question: 'for of loop:',
    choices: ['iterate over the properties of an object', 'iterate over the values of an object', 'Same as For Loop or For in Loop', 'None Of the above'],
    correctAnswer: 1
  }, {
    question: 'Which Loop has high performance',
    choices: ['while', 'Do While', 'for', 'For of'],
    correctAnswer: 2
  }, {
    question: 'JavaScript Recognises :',
    choices: ['Binary System', 'Binary , Octal', 'Binary, Octal, Hexa', 'All number Systems'],
    correctAnswer: 2 // No answer-Done
  }, {
    question: '(0.1 + 0.2)==( 0.3), (0.1 + 0.2)===( 0.3):',
    choices: ['True ,true', 'False ,True', 'False, False', 'True, False'],
    correctAnswer: 2
  }, {
    question: 'slice and splice :',
    choices: ['Both are mutable', 'Both are immutable', 'slice Immutable splice mutable', 'slice mutable splice Immutable'],
    correctAnswer: 2
  }, {
    question: 'Which is fastest?',
    choices: ['Push', 'shift', 'Both', 'None'],
    correctAnswer: 0
  }, {
    question: 'var y = 1, x = y = typeof x; x;',
    choices: ['1', 'undefined', 'number',  '”undefined”'],
    correctAnswer: 1
  }, {
    question: 'with (function(x, undefined){}) length;',
    choices: ['1', '2', 'undefined', 'Error'],
    correctAnswer: 1
  }, {
    question: 'Operator for Exponent:',
    choices: ['X pow 2', 'X exp 2', 'X ** 2', 'X ^ 2'],
    correctAnswer: 2
  }, {
    question: '-25/0 returns',
    choices: ['0', '-25', 'infinity', '-infinity'],
    correctAnswer: 3
  }, {
    question: 'var number = (5 == "5" && 5 === "5" && 5 == 6):',
    choices: ['false', 'true', 'undefined', 'null'],
    correctAnswer: 0 // No answer-done
  }, {
    question: 'What does addClass do in jQuery:',
    choices: ['Adds object to class', 'adds a class to element', 'adds an element to class', 'Error:no function exists'],
    correctAnswer: 1 // No answer-done
  }, {
    question: 'Javascript was developed by :',
    choices: ['Microsoft', 'Apple', 'NetScape',  'Net Gear'],
    correctAnswer: 2 // No answer-done
  }, {
    question: 'with (function(x){}) length ?',
    choices: ['1', '2', 'undefined', 'Error'],
    correctAnswer: 0
  }, {
    question: 'Which event is fired when a document and all of its external resources are fully loaded and displayed to the user?',
    choices: ['Window', 'Load',  'Element', 'Handler'],
    correctAnswer: 1
  }, {
    question: 'Which are the events that have default actions that can be canceled by event handlers?',
    choices: ['Submit and form-related events', 'Reset and form-related events', 'Submit and reset events', 'None of the mentioned'],
    correctAnswer: 2
  }];
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object

  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions and
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();
