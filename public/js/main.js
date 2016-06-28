// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';
import angular from 'angular';
import  'angular-ui-router';
import 'angular-ui-bootstrap';
import config from './config';

import SearchCtrl from './controllers/searchCtrl';
// import SingleCtrl from './controllers/singleCtrl';
import DataService from './services/dataService';



angular
.module('tc', ['ui.bootstrap', 'ui.router'])
.config(config)
.controller('SearchCtrl', SearchCtrl)
// .controller('SingleCtrl', SingleCtrl)
.service('DataService', DataService)



;