let SingleCtrl = function ($scope, DataService, $stateParams) {

  DataService.getAllTitles($stateParams.TitleId).then ((res) => {
    $scope.single = res.data;
    console.log(res);
  });


};

SingleCtrl.$inject = ['$scope','DataService', '$stateParams'];

export default SingleCtrl;