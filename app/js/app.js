var index = angular.module('index', []);

index.filter('startFrom', function() {
    return function(input, start) {
    	if (!input || !input.length) return;
    	return input.slice(start);
  	};
});

index.controller('mainCtrl', function($scope, $http, $location) {
	$scope.loading = false;
	$scope.currentPage = 0;
	$scope.selectCategory = "all";
	$scope.titleSearch = false;
	$scope.strictSearch = false;

 	$scope.searchBtn = function(){
 		if (!$scope.query) return;
 		$scope.loading = true;
 		$scope.results = null;
 		var searchSite = $scope.selectCategory == "all" ? "" : "/" + $scope.selectCategory;
 		var searchTitle = $scope.titleSearch == true ? "allintitle:" : ""
 		var query = $scope.strictSearch == true ? '"'+$scope.query+'"' : $scope.query;
 		$http.get('search/' + searchTitle + query + searchSite).then(function(response) {
 			$scope.results = response.data;
 		}, function(err) {
 			console.log(err);
 		}).finally(function() {
 			$scope.loading = false;
 		});
 	};

 	$scope.getPageNum = function(results) {
 		if (results == undefined || results.length == 0) return;
 		return Math.floor((results.length-1)/10) + 1;
 	}

 	$scope.getNumber = function(num) {
 		return new Array(num);
 	};

 	$scope.changePage = function(page){
		$scope.currentPage = page;
	};

	$scope.pageClass = function(page){
		return page == $scope.currentPage ? 'active' : '';
	};

	$scope.category = {
		"all": "全部",
		"funny": "有趣",
		"bg": "男女",
		"trending": "時事",
		"talk": "閒聊",
		"girl": "女孩",
		"boy": "男孩",
		"mood": "心情",
		"music": "音樂",
		"movie": "電影",
		"literature": "詩文",
		"food": "美食",
		"job": "工作",
		"studyabroad": "留學",
		"marvel": "靈異",
		"sex": "西斯",
		"dcard": "Dcard",
		"delete": "刪文",
		"whysoserious": "廢文"
	};

	$scope.getCategory = function(link){
		var matches = (/www.dcard.tw\/f\/(\w+)\//g).exec(link);
		return typeof $scope.category[matches[1]] == undefined ? null : $scope.category[matches[1]];
	}	

});