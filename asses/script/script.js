let _main = document.getElementsByTagName('main')[0]
let _div = document.querySelector('main>div>div')
_main.addEventListener('scroll',(e)=>{
    let _scrollTop = e.target.scrollTop
    _div.style.top = -(_scrollTop * 1.2) + 'px'
})

