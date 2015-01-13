angular.module("ZinnSite", ["ngAnimate"])
  .controller("PageCtrl", ["$scope", "$sce", function($scope, $sce) {
    //$scope.data = siteData;

    var pageList = ["about", "projects", "project/", "contact"];
    $scope.page = "about";
    $scope.animDir = "to-right";

    $scope.project = -1;

    function getPageIndex(page) {
      var index = pageList.indexOf(page);
      if(index === -1) {
        if(page.substring(0, 8) === "project/")
          return pageList.indexOf("project/");
      }
      return index;
    }

    $scope.setPage = function(page) {
      // Ensure hash is accurate; update hash first if needed
      if(location.hash.substring(1) !== page && page !== "about") {
        location.hash = "#" + page;
        return;
      }

      var targetIndex = getPageIndex(page);
      var currentIndex = getPageIndex($scope.page);
      if(targetIndex === -1)
        return;

      if(targetIndex > currentIndex) $scope.animDir = "to-right";
      else $scope.animDir = "to-left";

      if(page !== "projects")
        setTimeout(function() { $scope.project = -1; $scope.$apply(); }, 500);
      else
        $scope.project = -1;

      $scope.page = page;
      $scope.$apply();
    };

    $scope.setProject = function(project) {
      if(project < 0 || project >= 5)
        return;

      $scope.project = project;
    };

    window.onhashchange = function() {
      var page = location.hash.substring(1);
      if(page === "")
        page = "about";
      $scope.setPage(page);
    };
    window.onhashchange();
  }]);