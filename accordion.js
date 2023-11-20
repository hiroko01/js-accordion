(() => {
    const $elm =document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');

    const triggerLen = $trigger.length;
    //カウンター let index = 0;
    let index = 0;
    while (index < triggerLen) {
        $trigger[index].addEventListener('click',(e) => clickHandler (e) );
        index ++;
    }

    //クリックハンドラーの中身はここから書いていきます↓
    //クリックしたら実行される処理
    const clickHandler =  (e) => {
        e.preventDefault();

        const $target = e.currentTarget;

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