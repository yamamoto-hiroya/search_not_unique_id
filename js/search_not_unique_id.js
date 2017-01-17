$(function(){
  /**
   * @param object message backgroundからポストされた値
   * オブジェクトになっていてmessage.trigger = 'on'のような形になっている
   * @param sender
   * @sendResponse
   * これらは2つとも宣言してないとsendResponseが最後に返せなかったので設定した
   *
   * backgroundからメッセージが送られてきた時（ブラウザボタンをクリックされた時）に発火する
   */
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // 意図したbackground.jsからの送信でない場合は弾く
    if(message.trigger !== 'on'){
      return false;
    }

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

    if(ids.length === 0){
      console.log('重複したID要素はありませんでした');
    } else {
      console.log('重複したID要素: '+not_unique.join());
    }

    sendResponse('Done');
  });
});