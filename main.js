window.onload = function(){
    var _head = document.getElementsByTagName('head')
    var _script = document.createElement('script')
    _script.setAttribute('src','https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js')
    _head[0].insertBefore(_script,_head[0].firstChild)

    _script.onload = function(){
        $(document).ready(function(){
            function getFileName(){
                var pathname = window.location.pathname;
                var filename = pathname.substring(pathname.lastIndexOf('/') + 1);
                return filename
            }
            var dir = 'Kivy-CN-master/'
            
            if ($('title').text() == 'SUMMARY') {
                $('.up').hide()
                $('.down').click(function(){
                    var _href = $('a').attr('href')
                    window.location.href = _href
                })
            }else{
                $('a').each(function(){
                    var _href = $(this).attr('href')
                    console.log(_href)
                    if (_href == dir + getFileName()) {
                        window.location.href = $(this).parent().next().find().attr('href')
                    }
                })
            }

            
        })
        
    }
    
}
