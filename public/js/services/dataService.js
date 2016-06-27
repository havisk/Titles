let DataService = function($http) {

  this.getAllTitles = getAllTitles;


  function getAllTitles () {
    return $http.get('data/db.json');
  }

};

DataService.$inject = ['$http'];

export default DataService;