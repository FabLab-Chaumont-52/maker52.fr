---
layout: null
---

// cookie agreement
$(function() {
  if ( Cookies.get('cookiesAgreement') == undefined ){
    $('.cookiesAgreement').show();
    $('.agreeCockies').click(
      function(){
        Cookies.set('cookiesAgreement', 'http://www.youtube.com/watch?v=MMb3fd7fwec', { expires: 365, path: '/' });
        $('.cookiesAgreement').hide();
      }
    );
  }
});



