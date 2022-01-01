var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array( "QIS Group","朱家骥老师", "李清旭老师","李健老师","张益老师","邱岳寅老师","陈江山老师","杨锦","孔展","刘可鉴","刘繁","孔建刚");
    var $i = $("<span/>").text(a[a_idx]);

    //过滤a标签
    if (e.target.tagName == 'A') {
         return;
    }

    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#ff7a45"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function() {
      $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});
