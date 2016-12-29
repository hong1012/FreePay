/**
 * Created by hong on 2016/12/28.
 */


import  Api from './utils/Api'


const baseUrl = 'http://localhost:8080/'
//const baseUrl='http://ebx.youshang.com/'

let eid=4016572
let appId='001'


let feeTypeList = []
let appParam = {}
let authorstr=''



function getFee(fnCall) {
    Api.get({
        'url': 'consumption/type?'+authorstr,
        'fnSuccess': function (data) {
           /*             "dbid": "12345678",
            "exptypeid": 1,
            "name": "长途",
            "isdelete": 0,
            "imgname": "longdistance",
            "status": 1*/
            console.log(data);
            feeTypeList=data;
            fnCall && fnCall();
        },
        'fnFail':function (msg) {
            alert(msg);
        },
        'fnError':function (msg) {
            alert(msg);
        },
        'fnDone':function () {
        }
    });
}


function getParam(fnCall) {
    Api.get({
        'url': baseUrl+'api/kis/bind?eid='+eid+'&appId='+appId,
        'fnSuccess': function (data) {
            //alert(JSON.stringify(data));
            console.log(data);
            //appParam=_.extend(appParam,data);
            appParam=data;
            /*"dbid":"4016572","appid":"12345678","secret":"8512f7fa","time":1482752024000,"appname":"kis"*/
            authorstr='eid='+eid+'&appid='+appParam.appid+'&secret='+appParam.secret;
            getFee(fnCall);
        },
        'fnFail':function (msg) {
            alert(msg);
        },
        'fnError':function (msg) {
            alert(msg);
        },
        'fnDone':function () {
        }
    });
}

/*function getFee(list,keyid) {
    var len=list.length;
    for(var i=0;i<len;i++){
        //list[i]=get
    }

    return list;
}*/

function  initApp(fnCall) {

    getParam(fnCall);

}

function  getData() {
    return {
        author:authorstr,
        feeList:feeTypeList
    }
}


export default {initApp,getData}