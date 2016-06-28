let DataService = function($resource) {

  this.getAllTitles = getAllTitles;
  


  function getAllTitles () {
    return $resource('http://localhost:3000/titles');
  }

};

DataService.$inject = ['$resource'];

export default DataService;