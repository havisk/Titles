let DataService = function($http) {

  this.getAllTitles = getAllTitles;
  


  function getAllTitles () {
    return $http.get('/titles');
  }

};

DataService.$inject = ['$http'];

export default DataService;