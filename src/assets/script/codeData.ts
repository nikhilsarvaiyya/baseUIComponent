let codeData = [
    {
        type: "spinner",
        value: [
            {
                name: "Loader 1",
                html: "<div class='lds-default'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
                css: ".lds-default{display:inline-block;position:relative;width:80px;height:80px}.lds-default div{position:absolute;width:6px;height:6px;background:#fff;border-radius:50%;animation:lds-default 1.2s linear infinite}.lds-default div:nth-child(1){animation-delay:0s;top:37px;left:66px}.lds-default div:nth-child(2){animation-delay:-.1s;top:22px;left:62px}.lds-default div:nth-child(3){animation-delay:-.2s;top:11px;left:52px}.lds-default div:nth-child(4){animation-delay:-.3s;top:7px;left:37px}.lds-default div:nth-child(5){animation-delay:-.4s;top:11px;left:22px}.lds-default div:nth-child(6){animation-delay:-.5s;top:22px;left:11px}.lds-default div:nth-child(7){animation-delay:-.6s;top:37px;left:7px}.lds-default div:nth-child(8){animation-delay:-.7s;top:52px;left:11px}.lds-default div:nth-child(9){animation-delay:-.8s;top:62px;left:22px}.lds-default div:nth-child(10){animation-delay:-.9s;top:66px;left:37px}.lds-default div:nth-child(11){animation-delay:-1s;top:62px;left:52px}.lds-default div:nth-child(12){animation-delay:-1.1s;top:52px;left:62px}@keyframes lds-default{0%,20%,80%,100%{transform:scale(1)}50%{transform:scale(1.5)}}"
            },
            {
                name: "Loader 2",
                html: "<span class='circular-1'></span>",
                css: ".circular-1{width:48px;height:48px;border:5px solid #FFF;border-bottom-color:#FF3D00;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"
            },
            {
                name: "Loader 3",
                html: "<div class='lds-grid'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
                css: ".lds-grid{display:inline-block;position:relative;width:80px;height:80px}.lds-grid div{position:absolute;width:16px;height:16px;border-radius:50%;background:#fff;animation:lds-grid 1.2s linear infinite}.lds-grid div:nth-child(1){top:8px;left:8px;animation-delay:0s}.lds-grid div:nth-child(2){top:8px;left:32px;animation-delay:-.4s}.lds-grid div:nth-child(3){top:8px;left:56px;animation-delay:-.8s}.lds-grid div:nth-child(4){top:32px;left:8px;animation-delay:-.4s}.lds-grid div:nth-child(5){top:32px;left:32px;animation-delay:-.8s}.lds-grid div:nth-child(6){top:32px;left:56px;animation-delay:-1.2s}.lds-grid div:nth-child(7){top:56px;left:8px;animation-delay:-.8s}.lds-grid div:nth-child(8){top:56px;left:32px;animation-delay:-1.2s}.lds-grid div:nth-child(9){top:56px;left:56px;animation-delay:-1.6s}@keyframes lds-grid{0%,100%{opacity:1}50%{opacity:.5}}"
            },
            {
                name: "Loader 4",
                html: "<span class='circle-2'></span>",
                css: ".circle-2{width:48px;height:48px;border:5px solid #FFF;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"
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

        ]
    },
    {
        type: "card",
        value: [
            {
                name: "card 1",
                html: "<div class='w-full mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'><div class=' mx-auto' ><div class='h-[236px]' style='background-image:url(https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6);background-size:cover;background-position:center'></div><div class='p-4 sm:p-6'><p class='font-bold text-gray-700 text-[22px] leading-7 mb-1'>Spagetti with shrimp sauce</p><div class='flex flex-row'><p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>MVR 700</p><p class='text-[17px] font-bold text-[#0FB478]'>MVR 700</p></div><p class='text-[#7C7C80] font-[15px] mt-6'>Our shrimp sauce is made with mozarella, a creamy taste of shrimp with extra kick of spices.</p><a target='_blank' href='foodiesapp://food/1001' class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>View on foodies </a><a target='_blank' href='https://apps.apple.com/us/app/id1493631471' class='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>Download app </a></div></div></div>",
                css: "body{margin:0;}a{text-decoration:none;color:inherit}"
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
                html: "<select ><option>one</option></select>",
                css: ""
            },
            {
                name: "Search",
                html: "<select ><option>Two</option></select>",
                css: ""
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
