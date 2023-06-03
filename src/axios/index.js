import axios from "axios";

const edgeAxios = axios.create();

function initialInstance (instance, ip, port){
    //设置默认url
    instance.defaults.baseURL =  'http://' + ip + ':' + port + '/auto-market-system/';
}

const ip = "192.168.137.179";

initialInstance(edgeAxios, ip, 8080);

export {edgeAxios}
