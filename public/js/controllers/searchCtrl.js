let SearchCtrl = function($scope, DataService, $uibModal, $log) {

  $scope.name = "Movie Titles";

  
  DataService.getAllTitles().then ((res) => {
    $scope.titles = res.data;
    console.log(res);
  });

  //open modal window to get info
  $scope.singleModal = function (size, selectedTitle) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'templates/singleTitle.tpl.html',
      controller: function ($scope, $uibModalInstance, title){
        $scope.title = title;
      },
      size: size,
      resolve: {
        title: function () {
          return $scope.selectedTitle;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};


SearchCtrl.$inject = ['$scope','DataService', '$uibModal', '$log',];

export default SearchCtrl;