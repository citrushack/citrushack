(function() {
    'use strict';

    /**
     * Schedule days
     */

    var friday=[{
	badgeClass: 'succes',
	badgeIconClass: 'glyphicon-th-list',
	title: 'Check In!',
	content: '5:00 PM - 7:00 PM @ Bytes Patio'
    },{
	badgeClass: 'warning',
	badgeIconClass: 'glyphicon-cutlery',
	title: 'Dinner',
	content: '7:00 PM - 8:00 PM @ Bytes Patio.'
    },{
	badgeClass: 'success',
	badgeIconClass: 'glyphicon-star',
	title: 'Opening Ceremony',
	content: '8:00 PM - 9:00 PM @ UNLH'
    },{
	badgeClass: 'success',
	badgeIconClass: 'glyphicon-flash',
	title: 'HACKING BEGINS!',
	content: '9:00 PM @ BCOE',
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-education',
	title: 'Github Workhop',
	content: '10:00 PM - 11:00 PM @ WCH 205'
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-education',
	title: 'Game Development Workshop',
	content: '11:00 PM - 12:00 AM @ WCH 205'
    }];

    var saturday=[{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-education',
	title: 'Sharpen Your Skills Workshop',
	content: '3:00 AM - 4:00 AM @ WCH 205'
    },{
	badgeClass: 'warning',
	badgeIconClass: 'glyphicon-cutlery',
	title: 'Breakfast',
	content: '8:00 AM - 9:00 AM @ Bytes'
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-education',
	title: 'Ruby on Rails Workshop',
	content: '9:00 AM - 10:00 AM @ WCH 205'
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-education',
	title: 'Node-RED Talk',
	content: '10:00 AM - 11:00 AM @ WCH 205'
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-bullhorn',
	title: 'Denis "The YESMAN" Nurmela Talk',
	content: '12:00 PM - 1:00 PM'
    },{
	badgeClass: 'warning',
	badgeIconClass: 'glyphicon-cutlery',
	title: 'Lunch!',
	content: '1:00 PM - 2:00 PM @ Bytes',
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-flag',
	title: 'MLH Capture The Flag',
	content: '4:00 PM - 5:00 PM @ A265',
    },{
	badgeClass: 'warning',
	badgeIconClass: 'glyphicon-cutlery',
	title: 'Dinner',
	content: '6:00 PM - 7:00 PM @ Bytes'
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-glass',
	title: 'MLH Cupstacking Tournament',
	content: '10:00 PM - 11:00 PM @ Bytes'
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-road',
	title: 'Pokemon GO UCR Tour',
	content: '11:00 PM - 12:00 AM @ Bytes',
    }];

    var sunday=[{
	badgeClass: 'danger',
	badgeIconClass: 'glyphicon-exclamation-sign',
	title: 'Hacking Ends!!!',
	content: '9:00 AM'
    },{
	badgeClass: 'warning',
	badgeIconClass: 'glyphicon-cutlery',
	title: 'Breakfast',
	content: '9:00 AM - 10:00 AM @ Bytes'
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-eye-open',
	title: 'Expo Demos',
	content: '10:00 AM - 12:00 PM @ WCH Courtyard'
    },{
	badgeClass: 'warning',
	badgeIconClass: 'glyphicon-cutlery',
	title: 'Lunch',
	content: '12:00 PM - 1:00 PM @ Bytes',
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-user',
	title: 'Closing Ceremony',
	content: '1:00 PM - 3:00 PM @ UNLH'
    },{
	badgeClass: 'info',
	badgeIconClass: 'glyphicon-plane',
	title: 'Pack Up and Begin Leaving',
	content: '3:00 PM'
    },{
	badgeClass: 'success',
	badgeIconClass: 'glyphicon-time',
	title: 'Official Event End',
	content: '4:00 PM'
    }];

    angular.module('CitrusHack.constants')
	.constant('TIMELINE_DAYS', {friday, saturday, sunday});
})();

















