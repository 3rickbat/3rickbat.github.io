// Add smooth scrolling navigation
$(document).on("scroll", function(){
    if($(document).scrollTop() > 86)
    {
      $("#navbar").addClass("sticky");
      $("#nav-logo").addClass("color-white");
      $(".nav-custom-link").addClass("color-white");
      $(".navbar-btn").addClass("nav-btn-icon");
    }
    else
    {
        $("#navbar").removeClass("sticky");
        $("#nav-logo").removeClass("color-white");
        $(".nav-custom-link").removeClass("color-white");
        $(".navbar-btn").removeClass("nav-btn-icon");
    }
}); 

// Populate Socials Section
socialSection = document.getElementById("social-section")

let socials = [
    {'icon': 'facebook', 'link': 'https://www.facebook.com/profile.php?id=100015739901257'},
    // {'icon': 'twitter', 'link': '#'}, //TODO: Add back when Ray creates a Twitter (or X, or whatever it is called at that point)
    {'icon': 'linkedin', 'link': 'https://www.linkedin.com/in/rinaldo-del-gallo/'},
]

var html = ""
socials.forEach(social => {
    html += "<a href=\"" + social.link + "\" class=\"social-icons\">"
        + "<i class=\"icons bi bi-" + social.icon + "\"></i>"
        + "</a>"
})
socialSection.innerHTML = html
