app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Upcoming Programs'; 
  $scope.programs = [ 
  { 
    name: 'Register for Summer Camps', 
    description: 'We have nearly 130 different ways for your kids to get the most out of summer! Whether you\'re in Laurel, Wilmington or anyplace in between, you\'ll find a Delaware State Park summer camp nearby. Popular camps are already starting to fill, so ', 
    date: new Date('2014', '03', '08'), 
    photo: 'KPSP_Kids_AAA-2080.jpg',
	page: 'http://destateparks.com/programs/summer-camps/index.asp',
	pageText: 'get your applications in today!'
  }, 
  { 
    name: 'Lifeguard Tryouts Scheduled', 
    description: 'Ocean rescue is a demanding job, and our experienced staff will prepare you to meet every challenge. Tryouts  begin in March! ', 
    date: new Date('2013', '08', '01'), 
    photo: 'lifeguards.JPG',
	page: 'http://www.destateparks.com/lifeguard/',
	pageText: 'Learn More...'
  }, 
  { 
    name: 'Get Your Business Noticed at the Beach', 
    description: 'Delaware State Parks is offering local business owners the opportunity to advertise on lifeguard stands for the 2017 summer season. ', 
    date: new Date('2013', '08', '01'), 
    photo: 'CHSPKiteFestival.jpg',
	page: 'http://destateparks.com/lifeguard/beachads.asp',
	pageText: 'Apply Now'
  } 
]
}]);
