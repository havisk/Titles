let SearchCtrl = function($scope, DataService) {

  $scope.name = "Movie Titles";

  $scope.toggle = false;
 
  $scope.titles = DataService.getAllTitles().query();
  // DataService.getAllTitles().then ((res) => {
  //   $scope.titles = res.data;
  //   // console.log(res);
  // });

};


SearchCtrl.$inject = ['$scope','DataService'];

export default SearchCtrl;