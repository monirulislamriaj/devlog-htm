// Passive event listeners
jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        'use strict';
        this.addEventListener('touchstart', handle, {
            passive: !ns.includes('noPreventDefault')
        });
    }
};
jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
        'use strict';
        this.addEventListener('touchmove', handle, {
            passive: !ns.includes('noPreventDefault')
        });
    }
};

// Preloader js
$(window).on('load', function () {
    'use strict';
    $('.preloader').fadeOut(0);
});



// on ready state
$(document).ready(function () {
    'use strict';

    $("#cat-li").on('click', 'li', function () {
        $("#cat-li li.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
    });

    // // Create variables for elements
    // var toggleButton = document.getElementById('toggle-button'),
    // body = document.getElementsByTagName('body')[0];

    // // Fire toggleClass function when toggleButton is clicked
    // toggleButton.onclick = toggleClass;

    // function toggleClass() {
    //   // If toggled is already a class, replace toggled with empty string
    //   if (-1 !== body.className.indexOf('-remove')) {
    //     body.className = body.className.replace('-remove',  '');
    //   } else {
    //     // Else add toggled to the class name. The space before is important -
    //     // it stops class names being invalid. class="footoggled" won't work, 
    //     // but class="foo toggled" will.
    //     body.className += '-remove';
    //   }
    // }

});




(function () {
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
    document.getElementById("theme").textContent =
        localStorage.getItem("theme") || "light";
})();

function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "dark");
    }
}