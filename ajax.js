/**
 * Created by John on 2016/5/5.
 */
function ajax(url,fnSucc,fnFaild){

        var XHR;
        if(window.XMLHttpRequest){
            XHR = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            XHR = new ActiveXObject('MicroSoft','XMLHttp');
        }else {
            alert('错误');
        }
        //2.链接服务福
        //open(方法，文件名，异步传输)
        //'?t='+new Date(0.getTime()阻止缓存
        XHR.open('GET',url,true);
        //3.发送请求
        XHR.send();
        //4.接收返回
        XHR.onreadystatechange=function(){
            if(XHR.readyState==4){//读取完成
                if(XHR.status==200){//成功
                    fnSucc(XHR.responseText);
                }else {
                    if(fnFaild){
                        fnFaild(XHR.status);
                    }

                }
            }
        }
}