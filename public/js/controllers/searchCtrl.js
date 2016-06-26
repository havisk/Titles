let SearchCtrl = function($scope, DataService) {

  $scope.name = "Movie Titles";

  
  DataService.getAllTitles().then ((res) => {
    $scope.titles = res.data;
    console.log(res);
  });
};


SearchCtrl.$inject = ['$scope','DataService'];

export default SearchCtrl;