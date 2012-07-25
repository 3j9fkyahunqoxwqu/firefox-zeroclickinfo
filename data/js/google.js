var options = [];
options.dev = true;

var ddgBox = new DuckDuckBox('q', ['isr_pps'], 'center_col', true);

ddgBox.search = function(query) {

    self.port.emit('load-results', {'query': query});
    self.port.on('results-loaded', function(data) {
        //console.log('got data for ', query,':', JSON.stringify(data));
        ddgBox.renderZeroClick(data.response, query);
    });

    if (options.dev)
        console.log("query:", query);
}


var ddg_timer;

function getQuery(direct) {
    var instant = document.getElementsByClassName("gssb_a");
    if (instant.length !== 0 && !direct){
        var selected_instant = instant[0];
        
        var query = selected_instant.childNodes[0].childNodes[0].childNodes[0].
                    childNodes[0].childNodes[0].childNodes[0].innerHTML;
        query = query.replace(/<\/?(?!\!)[^>]*>/gi, '');

        if(options.dev)
            console.log(query);

        return query;
    } else {
        return document.getElementsByName('q')[0].value;
    }
}

function qsearch(direct) {
    var query = getQuery(direct);
    ddgBox.lastQuery = query;
    ddgBox.search(query);
} 

// instant search
document.getElementsByName('q')[0].onkeyup = function(e){

    query = getQuery();
    if(ddgBox.lastQuery !== query && query !== '')
        ddgBox.hideZeroClick();

    if(options.dev)
        console.log(e.keyCode);

    var fn = function(){ qsearch(); };

    if(e.keyCode == 40 || e.keyCode == 38)
        fn = function(){ qsearch(true); };

    clearTimeout(ddg_timer);
    ddg_timer = setTimeout(fn, 700);

    // instant search suggestions box onclick
    document.getElementsByClassName("gssb_c")[0].onclick = function(){
        if(options.dev)
            console.log("clicked")

        ddgBox.hideZeroClick();
        qsearch(true);
    };
};

document.getElementsByName("btnG")[0].onclick = function(){
    qsearch();
};

ddgBox.init();

