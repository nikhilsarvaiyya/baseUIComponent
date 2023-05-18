let codeData = [
    {
        type: "spinner",
        value: [
            {
                name: "Loader 1",
                html: "<ul class='ni-loader1'><li></li><li></li><li></li></ul>",
                css: "ul.ni-loader1{ list-style-type: none; display: inline-block; margin: 0; padding: 0;} ul.ni-loader1 li{ height: 20px; width: 20px; display: inline-block; margin:0 5px 5px 0;  float:left; border-radius: 500px; animation: ni-load-animate1 linear infinite alternate;} ul.ni-loader1 li:nth-child(n + 1){ background-color: red; animation-duration: 1s;} ul.ni-loader1 li:nth-child(n + 2){ background-color: green; animation-duration: 2s;} ul.ni-loader1 li:nth-child(n + 3){ background-color: blue; animation-duration: 3s;} @keyframes ni-load-animate1{ from{ background-color: orange} to{ background-color: yellow;}}"
            },
            {
                name: "Loader 2",
                html: "<ul class='ni-loader2'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>",
                css: "ul.ni-loader2{ list-style-type: none; display: inline-block; margin: 0; padding: 0; width:60px; height:60px} ul.ni-loader2 li{ height: 15px; width: 15px; margin:0px 5px 5px 0; float:left; display: inline-block; border-radius: 500em; animation: ni-load-animate2 linear infinite alternate;} ul.ni-loader2 li:nth-child(1){ animation-duration: 1s;} ul.ni-loader2 li:nth-child(2){ animation-duration: 2s;} ul.ni-loader2 li:nth-child(3){ animation-duration: 4s;}                ul.ni-loader2 li:nth-child(4){ animation-duration: 2s;} ul.ni-loader2 li:nth-child(5){ animation-duration: 1s;} ul.ni-loader2 li:nth-child(6){ animation-duration: 3s;} ul.ni-loader2 li:nth-child(7){ animation-duration: 1s;} ul.ni-loader2 li:nth-child(8){ animation-duration: 3s;} ul.ni-loader2 li:nth-child(9){ animation-duration: 2s;} @keyframes ni-load-animate2{ from{ background-color: orange} to{ background-color: yellow;}}"
            },
            {
                name: "Loader 3",
                html: "<ul class='ni-loader3'><li></li></ul>",
                css: "ul.ni-loader3{ list-style-type: none; display: inline-block; margin: 0; padding: 0; width: 60px;} ul.ni-loader3 li{ height: 15px; width: 15px; position: absolute; border-radius: 500em; animation: ni-load-animate linear infinite; background-color: orange; margin:50px 0 0 0 ;} ul.ni-loader3 li:nth-child(1){ animation-duration: 3s;} @keyframes ni-load-animate{ 0%{ top: 0; transform:scaleY(.6);} 5%{ transform:scaleY(1);} 45%{ transform:scaleY(1);} 50%{ top: 50px; transform:scaleY(.6);} 55%{ transform:scaleY(1);} 95%{ transform:scaleY(1);} 100%{ top: 0; transform:scaleY(.6);} from{ background-color: yellow} to{ background-color: orange}} "
            },
            {
                name: "Loader 4",
                html: " <ul class='ni-loader4'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>",
                css: "ul.ni-loader4 { list-style-type: none; display: inline-block; margin: 0; padding: 0; width: 90px; height: 90px; font-family: calibri;} ul.ni-loader4 li{ height: 24px; width: 24px; margin: 0px 5px 5px 0; float: left; border-radius: 500em; background-color: orange} ul.ni-loader4::after{ content: '----------------'; -webkit-transform: rotate(-44deg) translateY(-55%); -moz-transform: rotate(-44deg) translateY(-55%); -ms-transform: rotate(-44deg) translateY(-55%); -o-transform: rotate(-44deg) translateY(-55%); transform: rotate(-44deg) translateY(-55%); display: block; margin: 0px 0px 0px 4px; color: lightgray; opacity: 0; animation: ni-load-animate4-bar linear; animation-fill-mode: forwards;} ul.ni-loader4 li::before{ animation: ni-load-animate4 linear; animation-fill-mode: forwards; opacity: 0; color: gray; margin: -1px 0 0 0; text-align: center; display: block; font-size: 18px;} ul.ni-loader4 li:nth-child(1)::before{ content: 'o'; animation-duration: 1s; animation-delay: 4s;} ul.ni-loader4 li:nth-child(2)::before{ content: 'x'; animation-duration: 1s; animation-delay: 3s;} ul.ni-loader4 li:nth-child(3)::before{ content: 'x'; animation-duration: 1s; animation-delay: 1s;} ul.ni-loader4 li:nth-child(4)::before{ /* content: 'x'; animation-duration: 1s; animation-delay: 1s; */} ul.ni-loader4 li:nth-child(5)::before{ content: 'x'; animation-duration: 1s; animation-delay: 5s;} ul.ni-loader4 li:nth-child(6)::before{ /* content: 'o'; animation-duration: 1s; animation-delay: 1s; */} ul.ni-loader4 li:nth-child(7)::before{ content: 'x'; animation-duration: 1s; animation-delay: 7s;} ul.ni-loader4 li:nth-child(8)::before{ content: 'o'; animation-duration: 1s; animation-delay: 6s;} ul.ni-loader4 li:nth-child(9)::before{ content: 'o'; animation-duration: 1s; animation-delay: 2s;} ul.ni-loader4::after{ animation-delay: 8s; animation-duration: 3s;} @keyframes ni-load-animate4{ from{ opacity: 0;} to{ opacity: 1;}} @keyframes ni-load-animate4-bar{ from{ opacity: 0;} to{ opacity: 1;}}"
            },
            {
                name: "Loader 5",
                html: "<i class='loader --1'></i>",
                css: ".loader{--color:white;--size-mid:6vmin;--size-dot:1.5vmin;--size-bar:.4vmin;--size-square:3vmin;display: block;position: relative;width: 50%;}.loader::before,.loader::after{content:'';box-sizing:border-box;position:absolute}.loader.--1::before{width:var(--size-mid);height:var(--size-mid);border:4px solid var(--color);border-top-color:transparent;border-radius:50%;animation:loader-1 1s linear infinite}.loader.--1::after{width:calc(var(--size-mid) - 2px);height:calc(var(--size-mid) - 2px);border:2px solid transparent;border-top-color:var(--color);border-radius:50%;animation:loader-1 .6s linear reverse infinite}@keyframes loader-1{100%{transform:rotate(1turn)}}"
            },
            {
                name: "Loader 6",
                html: "<i class='loader --2'></i>",
                css: ".loader{--color:white;--size-mid:6vmin;--size-dot:1.5vmin;--size-bar:.4vmin;--size-square:3vmin;display: block;position: relative;width: 50%;}.loader::before,.loader::after{content:'';box-sizing:border-box;position:absolute}.loader.--2::before,.loader.--2::after{width:var(--size-dot);height:var(--size-dot);background-color:var(--color);border-radius:50%;opacity:0;animation:loader-2 .8s cubic-bezier(.2,.32,0,.87) infinite}.loader.--2::after{animation-delay:.3s}@keyframes loader-2{0%,80%,100%{opacity:0}33%{opacity:1}0%,100%{transform:translateX(-4vmin)}90%{transform:translateX(4vmin)}}"
            },
            {
                name: "Loader 7",
                html: "<i class='loader --3'></i>",
                css: ".loader{--color:white;--size-mid:6vmin;--size-dot:1.5vmin;--size-bar:.4vmin;--size-square:3vmin;display: block;position: relative;width: 50%;}.loader::before,.loader::after{content:'';box-sizing:border-box;position:absolute}.loader.--3::before,.loader.--3::after{width:var(--size-dot);height:var(--size-dot);background-color:var(--color);border-radius:50%;animation:loader-3 1.2s ease-in-out infinite}.loader.--3::before{left:calc(50% - 1.6vmin - var(--size-dot))}.loader.--3::after{left:calc(50% + 1.6vmin);animation-delay:-.4s}@keyframes loader-3{0%,100%{transform:translateY(-2.6vmin)}44%{transform:translateY(2.6vmin)}}"
            },
            {
                name: "Loader 8",
                html: "<i class='loader --4'></i>",
                css: ".loader{--color:white;--size-mid:6vmin;--size-dot:1.5vmin;--size-bar:.4vmin;--size-square:3vmin;display: block;position: relative;width: 50%;}.loader::before,.loader::after{content:'';box-sizing:border-box;position:absolute}.loader.--4::before{height:var(--size-bar);width:6vmin;background-color:var(--color);animation:loader-4 .8s cubic-bezier(0,0,.03,.9) infinite}@keyframes loader-4{0%,44%,88.1%,100%{transform-origin:left}0%,100%,88%{transform:scaleX(0)}44.1%,88%{transform-origin:right}33%,44%{transform:scaleX(1)}}"
            },
            {
                name: "Loader 9",
                html: "<i class='loader --5'></i>",
                css: ".loader{--color:white;--size-mid:6vmin;--size-dot:1.5vmin;--size-bar:.4vmin;--size-square:3vmin;display: block;position: relative;width: 50%;}.loader::before,.loader::after{content:'';box-sizing:border-box;position:absolute}.loader.--5::before,.loader.--5::after{height:3vmin;width:var(--size-bar);background-color:var(--color);animation:loader-5 .6s cubic-bezier(0,0,.03,.9) infinite}.loader.--5::before{left:calc(50% - 1vmin);top:calc(50% - 3vmin)}.loader.--5::after{left:calc(50% + 1vmin);top:calc(50% - 1vmin);animation-delay:.2s}@keyframes loader-5{0%,88%,100%{opacity:0}0%{transform:translateY(-6vmin)}33%{opacity:1}33%,88%{transform:translateY(3vmin)}}"
            },
            {
                name: "Loader 10",
                html: "<i class='loader --6'></i>",
                css: ".loader{--color:white;--size-mid:6vmin;--size-dot:1.5vmin;--size-bar:.4vmin;--size-square:3vmin;display: block;position: relative;width: 50%;}.loader::before,.loader::after{content:'';box-sizing:border-box;position:absolute}.loader.--6::before{width:var(--size-square);height:var(--size-square);background-color:var(--color);top:calc(50% - var(--size-square));left:calc(50% - var(--size-square));animation:loader-6 2.4s cubic-bezier(0,0,.24,1.21) infinite}@keyframes loader-6{0%,100%{transform:none}25%{transform:translateX(100%)}50%{transform:translateX(100%) translateY(100%)}75%{transform:translateY(100%)}}"
            },
            {
                name: "Loader 11",
                html: "<i class='loader --7'></i>",
                css: ".loader{--color:white;--size-mid:6vmin;--size-dot:1.5vmin;--size-bar:.4vmin;--size-square:3vmin;display: block;position: relative;width: 50%;}.loader::before,.loader::after{content:'';box-sizing:border-box;position:absolute}.loader.--7::before,.loader.--7::after{width:var(--size-square);height:var(--size-square);background-color:var(--color)}.loader.--7::before{top:calc(50% - var(--size-square));left:calc(50% - var(--size-square));animation:loader-6 2.4s cubic-bezier(0,0,.24,1.21) infinite}.loader.--7::after{top:50%;left:50%;animation:loader-7 2.4s cubic-bezier(0,0,.24,1.21) infinite}@keyframes loader-7{0%,100%{transform:none}25%{transform:translateX(-100%)}50%{transform:translateX(-100%) translateY(-100%)}75%{transform:translateY(-100%)}}"
            },
            {
                name: "Loader 12",
                html: "<div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
                css: " .lds-roller{display:inline-block;position:relative;width:80px;height:80px}.lds-roller div{animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:40px 40px}.lds-roller div:after{content:'';display:block;position:absolute;width:7px;height:7px;border-radius:50%;background:#ccc;margin:-4px 0 0 -4px}.lds-roller div:nth-child(1){animation-delay:-.036s}.lds-roller div:nth-child(1):after{top:63px;left:63px}.lds-roller div:nth-child(2){animation-delay:-.072s}.lds-roller div:nth-child(2):after{top:68px;left:56px}.lds-roller div:nth-child(3){animation-delay:-.108s}.lds-roller div:nth-child(3):after{top:71px;left:48px}.lds-roller div:nth-child(4){animation-delay:-.144s}.lds-roller div:nth-child(4):after{top:72px;left:40px}.lds-roller div:nth-child(5){animation-delay:-.18s}.lds-roller div:nth-child(5):after{top:71px;left:32px}.lds-roller div:nth-child(6){animation-delay:-.216s}.lds-roller div:nth-child(6):after{top:68px;left:24px}.lds-roller div:nth-child(7){animation-delay:-.252s}.lds-roller div:nth-child(7):after{top:63px;left:17px}.lds-roller div:nth-child(8){animation-delay:-.288s}.lds-roller div:nth-child(8):after{top:56px;left:12px}@keyframes lds-roller{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"
            },

           

        ]
    },
    {
        type: "card",
        value: [
            {
                name: "card 1",
                html: "<ul class='badge-list' id='1'><li>Engineering</li><li>Civil</li><li>Mechenical</li><li>Chemical</li><li>Electronic</li><li>Electrical</li><li>Architecture</li></ul>",
                css: ".badge-list{ width: 232px; list-style: none; margin: 0; padding: 0; overflow-y: hidden;} .badge-list li{ background-color: antiquewhite; padding: 2px 4px; border-radius: 4px; list-style: none; display: inline-block; margin: 0 5px 5px 0; text-transform: capitalize;} ",
                js:"var listItem=document.getElementById(1); var txt=document.createElement('div'); txt.innerHTML=`<div onclick='showmore()'>show more</div>`; if ( listItem.clientHeight >55){ if (listItem.nextSibling){ listItem.parentNode.insertBefore(txt, listItem.nextSibling); listItem.style.height='54px'; listItem.style.overflow='hidden';} else{ listItem.parentNode.appendChild(txt);}} function showmore(){ alert('show more')}"
            },
            {
                name: "card 2",
                html: "<div class='card text-white bg-primary mb-3' style='max-width: 18rem;'><div class='card-header'>Header</div><div class='card-body'><h5 class='card-title'>Primary card title</h5><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div></div>",
                css: "a{}br{text-decoration:none;color:inherit}"
            }
        ]
    },
    {
        type: "table",
        value: [
            {
                name: "Table 1",
                html: "<table class='customers'><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Berglunds snabbköp</td><td>Christina Berglund</td><td>Sweden</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr></table>",
                css: ".customers{border-collapse:collapse;width:100%}.customers td,.customers th{border:1px solid #ddd;padding:8px}.customers tr:nth-child(even){background-color:#f2f2f2;}.customers tr:hover{background-color:#ddd;}.customers th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#04AA6D;color:white}"
            }
        ]
    },
    {
        type: "inputs",
        value: [
            {
                name: "Search",
                html: "<input type='text' placeholder='Search'>",
                css: "input[type=text],select{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}input[type=submit]{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer}input[type=submit]:hover{background-color:#45a049}"
            }
        ]
    },
    {
        type: "select",
        value: [
            {
                name: "Search",
                html: "<select id='mounth'><option value='hide'>-- Month --</option><option value='january'>January</option><option value='february'>February</option><option value='march'>March</option><option value='april'>April</option><option value='may'>May</option><option value='june'>June</option><option value='july'>July</option><option value='august'>August</option><option value='september'>September</option><option value='october'>October</option><option value='november'>November</option><option value='december'>December</option></select>",
                css: ".select-hidden{display:none;visibility:hidden;padding-right:10px}.select{cursor:pointer;display:inline-block;position:relative;font-size:16px;color:#fff;width:220px;height:40px}.select-styled{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#c0392b;padding:8px 15px}.select-styled:after{content:'';width:0;height:0;border:7px solid transparent;border-color:#fff transparent transparent transparent;position:absolute;top:16px;right:10px}.select-styled:hover{background-color:#b83729}.select-styled:active,.select-styled.active{background-color:#ab3326}.select-styled:active:after,.select-styled.active:after{top:9px;border-color:transparent transparent #fff transparent}.select-options{display:none;position:absolute;top:100%;right:0;left:0;z-index:999;margin:0;padding:0;list-style:none;background-color:#ab3326}.select-options li{margin:0;padding:12px 0;text-indent:15px;border-top:1px solid #962d22}.select-options li:hover,.select-options li.is-selected{color:#c0392b;background:#fff}.select-options li[rel='hide']{display:none}",
                js:"$('select').each((function(){var e=$(this),t=$(this).children('option').length;e.addClass('select-hidden'),e.wrap(`<div class='select'></div>`),e.after(`<div class='select-styled'></div>`);var i=e.next('div.select-styled');i.text(e.children('option').eq(0).text());for(var s=$('<ul />',{class:'select-options'}).insertAfter(i),l=0;l<t;l++)$('<li />',{text:e.children('option').eq(l).text(),rel:e.children('option').eq(l).val()}).appendTo(s);var c=s.children('li');i.click((function(e){e.stopPropagation(),$('div.select-styled.active').not(this).each((function(){$(this).removeClass('active').next('ul.select-options').hide()})),$(this).toggleClass('active').next('ul.select-options').toggle()})),c.click((function(t){t.stopPropagation(),i.text($(this).text()).removeClass('active'),e.val($(this).attr('rel')),s.hide()})),$(document).click((function(){i.removeClass('active'),s.hide()}))}));"
            },
            {
                name: "Search",
                html: "<div class='dropdown'><span>Mouse over me</span><div class='dropdown-content'><p>Hello World!</p></div></div>",
                css: ".dropdown{position:relative;display:inline-block}.dropdown-content{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);padding:12px 16px;z-index:1}.dropdown:hover .dropdown-content{display:block}"
            }
        ]
    },
    {
        type: "pie",
        value: [
            {
                name: "normal ",
                html: "<ol class='pie'><li class='piece' data-start='0' data-value='30'>30</li><li class='piece highlight' data-start='30' data-value='30'>30</li><li class='piece' data-start='60' data-value='40'>40</li><li class='piece big' data-start='100' data-value='260'>260</li></ol>",
                css: " $width:250px;$col1:#f53342;$col2:#cd3456;$col3:#a20000;$col4:#fd8700;.pie{font-size:0;overflow:hidden}.piece{position:absolute;width:$width;height:$width*2;overflow:hidden;left:$width*1.5;@include transform-origin(left,center)}.piece.big{width:$width*2;height:$width*2;left:$width*.5;@include transform-origin(center,center)}.piece:before{content:'';position:absolute;width:$width;height:$width*2;left:-$width;border-radius:$width 0 0 $width;@include transform-origin(right,center)}.piece.big:before{left:0}.piece.big:after{content:'';position:absolute;width:$width;height:$width*2;left:$width;border-radius:0 $width $width 0}$colors-list:$col1 $col2 $col3 $col4;@each $current-color in $colors-list{$i:index($colors-list,$current-color);.piece:nth-of-type(#{$i}):before,.piece:nth-of-type(#{$i}):after{background-color:$current-color}}$rotate-list:30 60 100;@each $rotation in $rotate-list{$i:index($rotate-list,$rotation);.piece[data-start=''#{$rotation}'']{@include transform(rotate($rotation+deg))}}$rotate-list-2:30 40 260;@each $rotation2 in $rotate-list-2{$i:index($rotate-list-2,$rotation2);.piece[data-value=''#{$rotation2}'']:before{@include transform(rotate($rotation2+1+deg))}}"
            }
        ]
    },
    {
        type: "bar",
        value: [
            {
                name: "normal ",
                html: "<ul class='chart'><li><span style='height:5%' title='HTML'></span></li><li><span style='height:70%' title='CSS'></span></li><li><span style='height:50%' title='JS'></span></li></ul>",
                css: " .chart{display:table;table-layout:fixed;width:100%;max-width:700px;height:200px;margin:0 auto;background-image:linear-gradient(bottom,rgba(0,0,0,.1) 2%,transparent 2%);background-size:100% 50px;background-position:left top}.chart li{position:relative;display:table-cell;vertical-align:bottom;height:200px}.chart span{margin:0 1em;display:block;background:rgba(209,236,250,.75);animation:draw 1s ease-in-out}.chart span:before{position:absolute;left:0;right:0;top:85%;padding:5px 1em 0;display:block;text-align:center;content:attr(title);word-wrap:break-word}@keyframes draw{0%{height:0}}"
            }
        ]
    }


]

export default codeData
