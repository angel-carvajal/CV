angular.module("global",[])
.factory("globalVariables",function(){
	//Local variables declaration
	var data={};
	var DS = "/";
	var URL =window.location.protocol+DS+DS+window.location.hostname + (window.location.port ? ':' + window.location.port: '');
	//var ROOT = DS+"CV"+DS+"app"+DS; //root for local work
	var ROOT = DS+"CV"+DS; //root for github.io pages


	
	//Complex object to return declaration
	data.hostname=URL+ROOT;

	return data;
})