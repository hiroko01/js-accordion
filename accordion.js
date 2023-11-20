(() => {
    const $elm =document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');

//0個目のトリガーに対してクリックイベントを持たせる、
//実行された時にクリックハンドラーという関数を呼びますよ
    $trigger[0].addEventListener('click',(e) => clickHandler (e) );

    //クリックハンドラーの中身はここから書いていきます↓
    //クリックしたら実行される処理
    const clickHandler =  (e) => {
        e.preventDefault();
        //console.log('Clicked!');

//「nextElementSibling」は＄triggerで<a>タブを取ってる、次の要素を取ってくる
//今回は「<div class="accordion-contents">」が「nextElementSibling」に当てはまる

        const $content = $trigger[0].nextElementSibling;
        if($content.style.display === 'block'){
            $content.style.display = 'none';
        } else {
            $content.style.display = 'block';
        }
    };
})();