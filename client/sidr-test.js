  Template.header.greeting = function () {
    return "Welcome to sidr-test.";
  };

  Template.header.rendered = function () {
    $(document).ready(function() {

      $('.btn-navbar').sidr({
         name: 'respNav',
         source: '.navbar-collapse',
     });

    });

    //this code is close sidr menu if clicked outside  {optional}
    $(document).bind("click", function () {
        $.sidr('close', 'respNav');
    });

  };

  Template.header.events({
    'click #simple-menu': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");

      //$('#simple-menu').sidr();
    }
  });
