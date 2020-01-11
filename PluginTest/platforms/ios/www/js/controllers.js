angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('DashCtrl', function($scope, $ionicPopup) {
  $scope.showBrowser= function() {
    console.log("window.videoUpload = ", window.VideoUpload);
    window.VideoUpload.init(
      {
        poolID: 'us-east-1:68d37f98-98e6-4c06-85f6-2c31fcd38608',
        region: 'us-east-1',
        bucket: 'birdiefire-cv',
        folder: 'testLocation/',
      }
    );
    window.VideoUpload.startUpload(
      function(res) { // Upload Success
          console.log("File Path = ", res.Location);
          var alertPopup = $ionicPopup.alert({
            title: 'Upload Success',
            template: res.Location,
          });
          alertPopup.then(function(res) {
            console.log('Thanks');
          });
      }, function(e) { // Upload failed
        console.error(e);
        var alertPopup = $ionicPopup.alert({
          title: 'Upload Failed',
          template: e,
        });
        alertPopup.then(function(res) {
          console.log('Thanks');
        });
      }
    );
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
