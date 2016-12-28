/**
 * Created by Administrator on 2016/12/23.
 */


const baseUrl = 'http://localhost:8080/thirdapi/'
//const baseUrl='http://ebx.youshang.com/thirdapi/'

function get(caller) {
    //url,  fnSuccess, fnFail,fnError
    var xhr = new window.XMLHttpRequest();
    var url = caller.url || '';
    url = (url.indexOf('http') >= 0 ? url : baseUrl + url);
    xhr.open('get', url, true);
    xhr.onreadystatechange = function () {
        deal(xhr, caller);
    };
    xhr.send(null);
}

function post(caller) {
    try {
        var xhr = new window.XMLHttpRequest();
        var url = caller.url || '';
        url = (url.indexOf('http') >= 0 ? url : baseUrl + url);
        xhr.open('post', url, true);
        xhr.onreadystatechange = function () {
            deal(xhr, caller);
        };
        xhr.setRequestHeader('Content-Type', 'application/json');
        var paramStr = JSON.stringify(caller.param);
        xhr.send(paramStr);
    } catch (e) {
        console.log(e.message);
    }
}


function deal(xhr, caller) {
    if (xhr.readyState == 4) {
        caller.fnDone && caller.fnDone();
        if (xhr.status == 200) {
            var data = xhr.responseText;
            var json = (new Function('return ' + data))();
            if (json.status == 200) {
                caller.fnSuccess && caller.fnSuccess(json.data);
            } else {
                caller.fnFail && caller.fnFail(json.msg);
            }
        }
        else {
            caller.fnError && caller.fnError("调用接口出错Error");
        }
    }
}


function getmob(caller) {
    //url,  fnSuccess, fnFail,fnError
    var xhr = new window.XMLHttpRequest();
    xhr.open('GET', caller.url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            caller.fnDone && caller.fnDone();
            if (xhr.status == 200) {
                var data = xhr.responseText;
                var json = (new Function('return ' + data))();
                if (json.code == 200) {
                    caller.fnSuccess && caller.fnSuccess(json.data);
                } else {
                    caller.fnFail && caller.fnFail(json.msg);
                }
            }
            else {
                caller.fnError && caller.fnError("调用接口出错Error");
            }
        }
    };
    xhr.send(null);
}


function toQueryStr(obj) {
    if (obj == null) {
        return String(obj);
    }
    var fn = toQueryStr;
    switch (typeof obj) {
        case 'string':
        case 'number':
        case 'boolean':
            return obj;
    }
    if (obj instanceof String || obj instanceof Number || obj instanceof Boolean || obj instanceof Date) {
        return obj.valueOf();
    }
    if (obj instanceof Array) {
        return '[' + obj.join(', ') + ']';
    }

    var pairs = [];
    for (var name in obj) {
        pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(fn(obj[name])));
    }
    return pairs.join('&');
}


export default {
    get, post, toQueryStr, getmob
}