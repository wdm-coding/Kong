const Mock=require('mockjs');
// Mock.mock('接口路径','请求方式',require('要请求的数据地址'))
Mock.mock('data/nowplaylist','get',require('./db/nowplaying.json'))