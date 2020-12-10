$(function() {

    $("form[name='forma']").validate({
      
      rules: {
      
        imeprezime:{
            required: true,
            minlength: 5
        },

        mejl: {
          required: true,
          email:true
        }
      },
    
      messages: {
        imeprezime: {
           required: "Molimo Vas unesite Vaše ime",
           minlength: "Ime i prezime mora biti minimum 5 karaktera"
        },
        mejl : "Molimo Vas unesite Vašu email adresu u formatu name@domain.com "

      },
    
      submitHandler: function(form) {
        alert("Poslali ste poruku!");
        form.submit();
        
      }
    });

    
  });
 