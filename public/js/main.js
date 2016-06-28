// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';
import angular from 'angular';
import  'angular-ui-router';
import 'angular-ui-bootstrap';
import config from './config';
import 'angular-resource';

import SearchCtrl from './controllers/searchCtrl';
import DataService from './services/dataService';



angular
.module('tc', ['ui.bootstrap', 'ui.router', 'ngResource'])
.config(config)
.controller('SearchCtrl', SearchCtrl)
.service('DataService', DataService)



;