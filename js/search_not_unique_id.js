$(function(){
  $('#search_not_unique_id').on('click', funcion(){
    var ids = [];
    // 画面の全要素に対してループを回す（やや遅い可能性あり）
    $.each($("*"), function(){
      var id = $(this).attr("id");
      if(typeof(id) !== "undefined"){
        // undefined以外の全idを配列に保持
        ids.push(id);
      }
    });
    /**
     * 重複したもののみを検出する
     * @see http://qiita.com/cocottejs/items/7afe6d5f27ee7c36c61f
     */
    var not_unique = ids.filter(function (x, i, self) {
      return self.indexOf(x) === i && i !== self.lastIndexOf(x);
    });
    console.log(not_unique);
  });
});