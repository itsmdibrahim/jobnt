
    $(document).ready(function () {
        // Append images to the container
        $('#company-logo .link-list a').each(function () {
            $('#comPanies').append($('<img loading="lazy" class="comPnaiusLogo">').attr({ 'src': $(this).attr('href'), 'alt': $(this).text(), 'title': $(this).text(), 'width': '100px', 'height': 'auto' }));
        });


var mySompanySecTitle = $('#company-logo .widget-title .title').text();
$('.mySompanySecTitle').text(mySompanySecTitle);






$(document).ready(function(){tns({container:".comPanies",items:1,gutter:0,slideBy:1,lazyload: true,mouseDrag:!0,swipeAngle:!1,speed:400,controlsPosition:"bottom",navPosition:"bottom",mouseDrag:!0,autoplay:!0,autoplayButtonOutput:!1,

responsive:{


    0: {
      items: 3,
    },
    768: {
      items: 3,
    },
    950: {
      items: 4,
    },
    1050: {
      items: 6
    }



}
}
)});




    });
