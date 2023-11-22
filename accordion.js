(() => {
    class Accordion {
        //初期化 最初に実行したいもの入れる
        constructor(obj){

            console.log('obj', obj.hookName);

            const $elm =document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener('click',(e) => this.clickHandler(e));
                index++;
            }
            this.actionU();
        }

        actionU(){
            console.log('Hello World!');
        };


        //クリックしたら実行される処理　classの中に書く命令はconstいらない
        clickHandler(e){
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            if($content.style.display === 'block'){
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        }
    }

    const fuckingAccordion = new Accordion({
        hookName: '#js-faq',
        tagName:'p'
    });


    const dummyAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName:'a'
    });

    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName:'dt'
    });


})();



