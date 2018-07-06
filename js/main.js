
var visionerApp = angular.module("visionerApp",["ui.bootstrap", "ngTagsInput"]);

visionerApp.controller("mainController", function($scope, $rootScope) {
    $scope.activeFilter = "all";

    $(window).on("click", function() {
        $rootScope.$broadcast('closeAllWindows', {});
    });
});

visionerApp.directive("filters", function() {
        return {
            link: function(scope, element, attributes) {
                scope.data = scope[attributes["filters"]];
                scope.data.activeFilter = scope.$parent.activeFilter;
                console.log(scope.$parent.activeFilter);
                scope.applyFilter();
            },
            restrict: "A",
            template: '<li ng-repeat="item in data"><input ng-click="applyFilter()" ng-model="data.activeFilter" ng-checked="item.value==data.activeFilter" type="radio" name="filters" value="{{item.value}}" id="{{item.value}}"><span class="circle"></span><label for="{{item.value}}">{{item.name}}</label></li>'
        };
    })
.controller("filtersCtrl", function($scope, $rootScope) {

    $scope.filtersList = [
        {
            value: "all",
            name: "Всi",
        },
        {
            value: "articles",
            name: "Статтi",
        },
        {
            value: "books",
            name: "Книги",
        },
        {
            value: "videos",
            name: "Фiльми/Вiдео",
        },
        {
            value: "statements",
            name: "Судження",
        },
        {
            value: "events",
            name: "Заходи",
        }
    ];

    $scope.applyFilter = function() {
        $scope.$parent.activeFilter = $scope.data.activeFilter;
        console.log($scope.$parent.activeFilter);
        $rootScope.$broadcast('filterChangeEvent', {

        });
    };
});
visionerApp.directive("recentposts", function() {
        return {
            link: function(scope, element, attributes) {
                scope.data = scope[attributes["recentposts"]];
                scope.currentFilter = scope.$parent.activeFilter;
            },
            restrict: "A",
            templateUrl: "templates/post-template.html"
        };
    })
    .directive("fullPostModal", function () {
        return {
            link: function (scope, element, attributes) {
                scope.post = scope.args[attributes["fullPostModal"]];
            },
            restrict: "A",
            templateUrl: "templates/full-post-modal.html"
        };
    })
.controller("commentsCtrl", function($scope, $rootScope, $http) {
    $scope.comments = [
        {
            id: '1',
            user_id: '1',
            user_pic_url: "../img/user.jpg",
            username: "Имя пользователя",
            comment_time: "1496680148",
            likes: "11",
            comment_text: "Страдания такого с было предпочел, превратное говорил, вами, действительно что отвергает умеет которое кто перед отвергает какими не картину возлюбил - человек, приносило.",
            subcomments: false
        },
        {
            id: '2',
            user_id: '2',
            user_pic_url: "../img/user.jpg",
            username: "Имя пользователя",
            comment_time: "1496680148",
            likes: "11",
            comment_text: "Страдания такого с было предпочел, превратное говорил, вами, действительно что отвергает умеет которое кто перед отвергает какими не картину возлюбил - человек, приносило.",
            subcomments: true
        },
        {
            id: '3',
            user_id: '3',
            user_pic_url: "../img/user.jpg",
            username: "Имя пользователя",
            comment_time: "1496680148",
            likes: "11",
            comment_text: "Страдания такого с было предпочел, превратное говорил, вами, действительно что отвергает умеет которое кто перед отвергает какими не картину возлюбил - человек, приносило.",
            subcomments: false
        }
    ];
    $scope.subcomments = [
        {
            id: '1',
            user_id: '4',
            user_pic_url: "../img/user.jpg",
            username: "Имя пользователя",
            comment_time: "1496680148",
            likes: "11",
            comment_text: "Страдания такого с было предпочел, превратное говорил, вами, действительно что отвергает умеет которое кто перед отвергает какими не картину возлюбил - человек, приносило.",
        },
        {
            id: '2',
            user_id: '5',
            user_pic_url: "../img/user.jpg",
            username: "Имя пользователя",
            comment_time: "1496680148",
            likes: "11",
            comment_text: "Страдания такого с было предпочел, превратное говорил, вами, действительно что отвергает умеет которое кто перед отвергает какими не картину возлюбил - человек, приносило.",
        },
        {
            id: '3',
            user_id: '6',
            user_pic_url: "../img/user.jpg",
            username: "Имя пользователя",
            comment_time: "1496680148",
            likes: "11",
            comment_text: "Страдания такого с было предпочел, превратное говорил, вами, действительно что отвергает умеет которое кто перед отвергает какими не картину возлюбил - человек, приносило.",
        }
    ];
    $scope.timeAgo = function(given_time) {
        var templates = {
            prefix: "",
            suffix: " тому",
            seconds: "менш ніж хвилину",
            minute: "хвилину",
            minutes: "близько %d хвилин",
            hour: "годину",
            hours: "близько %d годин",
            day: "день",
            days: "близько %d днів",
            month: "місяць",
            months: "близько %d місяців",
            year: "рік",
            years: "близько %d років"
        };
        var template = function(t, n) {
            return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
        };
        var timer = function(time) {
            if (!time)
                return;
            time = time.replace(/\.\d+/, ""); // remove milliseconds
            time = time.replace(/-/, "/").replace(/-/, "/");
            time = time.replace(/T/, " ").replace(/Z/, " UTC");
            time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
            time = new Date(time * 1000 || time);

            var now = new Date();
            var seconds = ((now.getTime() - time) * 0.001) >> 0;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            var years = days / 365;

            return templates.prefix + (
                    seconds < 45 && template('seconds', seconds) ||
                    seconds < 90 && template('minute', 1) ||
                    minutes < 45 && template('minutes', minutes) ||
                    minutes < 90 && template('hour', 1) ||
                    hours < 24 && template('hours', hours) ||
                    hours < 42 && template('day', 1) ||
                    days < 30 && template('days', days) ||
                    days < 45 && template('month', 1) ||
                    days < 365 && template('months', days / 30) ||
                    years < 1.5 && template('year', 1) ||
                    template('years', years)
                ) + templates.suffix;
        };
        for (var i in $scope.comments) {
            var $this = $scope.comments[i];
            if (typeof $this === 'object') {
                $this.time_ago = timer($this.comment_time);
            }
        }
        for (var j in $scope.subcomments) {
            var $this = $scope.subcomments[j];
            if (typeof $this === 'object') {
                $this.time_ago = timer($this.comment_time);
            }
        }
        // update time every minute
        // setTimeout($scope.timeAgo, 10000);
        // console.log($scope.posts);
    };
    $scope.timeAgo();
    setInterval(function() {
        $scope.timeAgo();
        $scope.$digest();
    }, 10000);
})
.controller("postsCtrl", function($scope, $rootScope) {
    $scope.posts = [
        {
            "post_id": "1",
            "user_id": "1",
            "post_type": "article",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1496680148",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "post_title": "От знаний к навыкам",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд"
        },
        {
            "post_id": "2",
            "user_id": "2",
            "post_type": "book",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494428048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "3",
            "user_id": "3",
            "post_type": "statement",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494316048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "4",
            "user_id": "4",
            "post_type": "book",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494316048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "5",
            "user_id": "5",
            "post_type": "event",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494416048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        }
    ];

    $scope.$on("filterChangeEvent", function (event, args) {
        $scope.currentFilter = $scope.$parent.activeFilter;
    });
    $scope.showFullPost = function(post) {
        $rootScope.$broadcast("openModal", {
            modalTemplateName: "full-post-modal",
            fullPost: post
        });
    }
    $scope.postsFilter = function(postType) {
        if ($scope.currentFilter == 'all') {
            return true;
        } else if ($scope.currentFilter.slice(0,-1) == postType) {
            return true;
        } else {
            return false;
        }
    };
    $scope.userpage = function(id) {
        console.log("user_id: " + id);
    }

    $scope.timeAgo = function(given_time) {
            var templates = {
                prefix: "",
                suffix: " тому",
                seconds: "менш ніж хвилину",
                minute: "хвилину",
                minutes: "близько %d хвилин",
                hour: "годину",
                hours: "близько %d годин",
                day: "день",
                days: "близько %d днів",
                month: "місяць",
                months: "близько %d місяців",
                year: "рік",
                years: "близько %d років"
            };
            var template = function(t, n) {
                return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
            };

            var timer = function(time) {
                if (!time)
                    return;
                time = time.replace(/\.\d+/, ""); // remove milliseconds
                time = time.replace(/-/, "/").replace(/-/, "/");
                time = time.replace(/T/, " ").replace(/Z/, " UTC");
                time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
                time = new Date(time * 1000 || time);

                var now = new Date();
                var seconds = ((now.getTime() - time) * 0.001) >> 0;
                var minutes = seconds / 60;
                var hours = minutes / 60;
                var days = hours / 24;
                var years = days / 365;

                return templates.prefix + (
                        seconds < 45 && template('seconds', seconds) ||
                        seconds < 90 && template('minute', 1) ||
                        minutes < 45 && template('minutes', minutes) ||
                        minutes < 90 && template('hour', 1) ||
                        hours < 24 && template('hours', hours) ||
                        hours < 42 && template('day', 1) ||
                        days < 30 && template('days', days) ||
                        days < 45 && template('month', 1) ||
                        days < 365 && template('months', days / 30) ||
                        years < 1.5 && template('year', 1) ||
                        template('years', years)
                        ) + templates.suffix;
            };

            for (var i in $scope.posts) {
                var $this = $scope.posts[i];
                if (typeof $this === 'object') {
                    $this.time_ago = timer($this.post_add_time);
                }
            }
            // update time every minute
            // setTimeout($scope.timeAgo, 10000);
            // console.log($scope.posts);
    };
    $scope.timeAgo();
    setInterval(function() {
        $scope.timeAgo();
        $scope.$digest();
    }, 10000);
});
/**
 * Created by lykhachov on 6/19/17.
 */
visionerApp
.directive("userpage", function() {
    return {
        link: function(scope, element, attributes) {
            scope.data = scope[attributes["userPage"]];
        },
        restrict: "A",
        templateUrl: "templates/userpage-template.html"
    }
})
.directive("usereditmodal", function() {
    return {
        link: function(scope, element, attributes) {
            scope.url = scope[attributes["usereditmodal"]];
            $('.edit-add-info').on('click', 'span', function() {
                $('.additional').slideToggle('slow').toggleClass("visible");
                $('.edit-add-info').css('visibility', 'hidden');
            });
            $("html, body").on("click", ".modal-close", function(e) {
                $('.additional').css('display','none').toggleClass("visible");
                $('.edit-add-info').css('visibility', 'visible');
            });
        },
        restrict: "A",
        templateUrl: "../templates/user-edit-modal.html"
    };
})
.controller("userpageCtrl", function($scope, $rootScope, $http) {
    $scope.form = {
        userPicUrl: "../img/user.jpg",
        name: "Имя",
        surname: "Фамилия",
        interestArea: "Сфера интересов",
        work: "Место работы",
        education: "Образование",
        credo: "Кредо",
        tel: {
            data: "0501231122",
            confident: true
        },
        birth: {
            data: "1234-12-12",
            confident: true
        },
        email: {
            data: "asfadf@adscf.com",
            confident: true
        },
        proInterests: [],
        personalInterests: [],
        country: "Страна",
        city: "Город",
        favoriteBooks: [],
        favoriteFilms: []
    };

    $scope.proTags = [];
    $scope.loadProTags = function (query) {
        return $http.get('http://server.dev/visioner/ajax.php?search-sample='+query).then(function(response) {
            return response;
        });
    }

    $scope.personalTags = [];
    $scope.loadPersonalTags = function (query) {
        return $http.get('http://server.dev/visioner/ajax.php?search-sample='+query).then(function(response) {
            return response;
        });
    }


    $scope.showUserInfo = function() {
        $('.user-info .hidden-block').slideToggle('slow').toggleClass("visible");
    }
    $scope.showModal = function () {
        console.log('show modal');
        $rootScope.$broadcast("openModal", {
            modalTemplateName: "user-edit-modal"
        });
    }
});
/**
 * Created by lykhachov on 6/19/17.
 */
visionerApp.controller("menuCtrl", function($scope, $rootScope) {
    $scope.menu = {};
    $scope.menu.active = '1';
    $scope.menu.data = [
        {
            id:'1',
            name: 'Головна',
            class: 'home-icon'
        },
        {
            id: '2',
            name: 'Моя сторінка',
            class: 'userpage-icon'
        },
        {
            id: '3',
            name: 'Мої візіонери',
            class: 'visioners-icon'
        },
        {
            id: '4',
            name: 'Мої фоловери',
            class: 'followers-icon'
        },
        {
            id: '5',
            name: 'Найбільш популярне',
            class: 'top-icon'
        },
        {
            id: '6',
            name: 'Номінації',
            class: 'nominations-icon'
        },
        {
            id: '7',
            name: 'Рекомендовані візіонери',
            class: 'recomended-icon'
        }
    ];
    $scope.menuActive = function(id) {
        $scope.menu.active = id;
    }
});
/**
 * Created by lykhachov on 6/26/17.
 */
visionerApp.controller("modalCtrl", function($scope, $rootScope, $templateCache) {
    //TEMPORARY DECISION
    $scope.userpage = function(id) {
        console.log("user_id: " + id);
    }
    modalListeners();
    $scope.template = '';
    $scope.$on("openModal", function(event, args) {
        $scope.template = args.modalTemplateName;
        $scope.args = args;
        showModal();
    })
    function showModal() {
        $("#modal-1").prop("checked", true).change();
    }
    function modalListeners() {
        console.log('modal listeners');
        $("#modal-1").on("change", function() {
            if ($(this).is(":checked")) {
                $("body").addClass("modal-open");
            } else {
                $("body").removeClass("modal-open");
            }
        });
        $("html, body").on("click", ".modal-close", function(e) {
            $(".modal-state:checked").prop("checked", false).change();
            $scope.template = "";
            $scope.$digest();
        });
        $(".modal-inner").on("click", function(e) {
            // e.stopPropagation();
        });
    }
});
/**
 * Created by lykhachov on 7/9/17.
 */
visionerApp.controller('TypeaheadCtrl', ['$scope', '$http', function ($scope, $http) {
    var _selected;
    $scope.selected = undefined;
    $scope.getLocation = function(val) {
        return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false,
                language: 'uk',
                components: ''
            }
        }).then(function(res){
            var addresses = [];
            angular.forEach(res.data.results, function(item){
                addresses.push({
                    formatted_address: item.formatted_address,
                    geometry: item.geometry
                });
            });
            return addresses;
        });
    };
}]);
visionerApp.directive("nominations", function() {
        return {
            link: function(scope, element, attributes) {
                scope.data = scope[attributes["nominations"]];
                scope.currentFilter = scope.$parent.activeFilter;
            },
            restrict: "A",
            templateUrl: "templates/post-template.html"
        };
    })
.controller("nominationsCtrl", function($scope, $rootScope) {
    $scope.posts = [
        {
            "post_id": "1",
            "post_type": "article",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1496680148",
            "views": "10",
            "likes": "12",
            "comments": "24",
            "top": "comments",
            "post_title": "От знаний к навыкам",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд"
        },
        {
            "post_id": "1",
            "post_type": "article",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1496680148",
            "views": "10",
            "likes": "12",
            "comments": "24",
            "top": "comments",
            "post_title": "От знаний к навыкам",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд"
        },
        {
            "post_id": "1",
            "post_type": "article",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1496680148",
            "views": "10",
            "likes": "12",
            "comments": "24",
            "top": "comments",
            "post_title": "От знаний к навыкам",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд"
        },
        {
            "post_id": "1",
            "post_type": "article",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1496680148",
            "views": "10",
            "likes": "12",
            "comments": "24",
            "top": "comments",
            "post_title": "От знаний к навыкам",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд"
        },
        {
            "post_id": "2",
            "post_type": "book",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494428048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "top": "likes",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "2",
            "post_type": "book",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494428048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "top": "likes",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "2",
            "post_type": "book",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494428048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "top": "likes",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "2",
            "post_type": "book",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494428048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "top": "likes",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "3",
            "post_type": "statement",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494316048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "top": "views",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "3",
            "post_type": "statement",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494316048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "top": "views",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "3",
            "post_type": "statement",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494316048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "top": "views",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
        {
            "post_id": "3",
            "post_type": "statement",
            "user_pic_url": "../img/user.jpg",
            "username": "Имя пользователя",
            "post_add_time": "1494316048",
            "views": "10",
            "likes": "11",
            "comments": "24",
            "top": "views",
            "post_title": "Название поста",
            "post_content": "Технологии и методы работы сегодня меняются очень быстро, и всем нам приходится постоянно учиться. Многие из нас обучают других, даже когда это напрямую не связано с профессией. Но если вы хоть раз засыпали над скучным учебником или перематывали утомительное упражнение в электронном курсе, вы понимаете, что создать хороший обучающий материал сложнее, чем кажется на первый взгляд 123"
        },
    ];

    //TEMPORARY DECISION
    $scope.userpage = function(id) {
        console.log("user_id: " + id);
    }

    $scope.$on("filterChangeEvent", function (event, args) {
        $scope.currentFilter = $scope.$parent.activeFilter;
    });
    $scope.postsFilter = function(postType) {
        if ($scope.currentFilter == 'all') {
            return true;
        } else if ($scope.currentFilter.slice(0,-1) == postType) {
            return true;
        } else {
            return false;
        }
    };
    $scope.timeAgo = function(given_time) {
            var templates = {
                prefix: "",
                suffix: " тому",
                seconds: "менш ніж хвилину",
                minute: "хвилину",
                minutes: "близько %d хвилин",
                hour: "годину",
                hours: "близько %d годин",
                day: "день",
                days: "близько %d днів",
                month: "місяць",
                months: "близько %d місяців",
                year: "рік",
                years: "близько %d років"
            };
            var template = function(t, n) {
                return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
            };

            var timer = function(time) {
                if (!time)
                    return;
                time = time.replace(/\.\d+/, ""); // remove milliseconds
                time = time.replace(/-/, "/").replace(/-/, "/");
                time = time.replace(/T/, " ").replace(/Z/, " UTC");
                time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
                time = new Date(time * 1000 || time);

                var now = new Date();
                var seconds = ((now.getTime() - time) * 0.001) >> 0;
                var minutes = seconds / 60;
                var hours = minutes / 60;
                var days = hours / 24;
                var years = days / 365;

                return templates.prefix + (
                        seconds < 45 && template('seconds', seconds) ||
                        seconds < 90 && template('minute', 1) ||
                        minutes < 45 && template('minutes', minutes) ||
                        minutes < 90 && template('hour', 1) ||
                        hours < 24 && template('hours', hours) ||
                        hours < 42 && template('day', 1) ||
                        days < 30 && template('days', days) ||
                        days < 45 && template('month', 1) ||
                        days < 365 && template('months', days / 30) ||
                        years < 1.5 && template('year', 1) ||
                        template('years', years)
                        ) + templates.suffix;
            };

            for (var i in $scope.posts) {
                var $this = $scope.posts[i];
                if (typeof $this === 'object') {
                    $this.time_ago = timer($this.post_add_time);
                }
            }
            // update time every minute
            // setTimeout($scope.timeAgo, 10000);
            // console.log($scope.posts);
    };
    $scope.timeAgo();
    setInterval(function() {
        $scope.timeAgo();
        $scope.$digest();
    }, 10000);

    $scope.showFullPost = function (currentPost) {
        $rootScope.$broadcast("openModal", {
            modalTemplateName: "full-post-modal",
            fullPost: currentPost
        });
    }
});
/**
 * Created by lykhachov on 6/19/17.
 */
visionerApp
.directive("followers", function() {
    return {
        link: function(scope, element, attributes) {
            scope.data = scope[attributes["followers"]];
        },
        restrict: "A",
        templateUrl: "templates/followers.html"
    }
})
.controller("followersCtrl", function($scope, $rootScope, $http) {
    $scope.form = {
        userPicUrl: "../img/user.jpg",
        name: "Имя",
        surname: "Фамилия",
        interestArea: "Сфера интересов",
        work: "Место работы",
        education: "Образование",
        credo: "Кредо",
        tel: {
            data: "0501231122",
            confident: true
        },
        birth: {
            data: "1234-12-12",
            confident: true
        },
        email: {
            data: "asfadf@adscf.com",
            confident: true
        },
        proInterests: [],
        personalInterests: [],
        country: "Страна",
        city: "Город",
        favoriteBooks: [],
        favoriteFilms: []
    };
    $scope.followers = [1,2,3];
    $scope.showUserInfo = function(i) {
        $('.user-info .hidden-block').eq(i).slideToggle('slow').toggleClass("visible");
    }
});
/**
 * Created by lykhachov on 8/6/17.
 */
visionerApp
.directive("addPostModal", function() {
    return {
        link: function(scope, element, attributes) {
            scope.url = scope[attributes["addPostModal"]];
            scope.categoriesList = [
                {
                    value: "articles",
                    name: "Статтi",
                },
                {
                    value: "books",
                    name: "Книги",
                },
                {
                    value: "videos",
                    name: "Фiльми/Вiдео",
                },
                {
                    value: "statements",
                    name: "Судження",
                },
                {
                    value: "events",
                    name: "Заходи",
                }
            ];
        },
        restrict: "A",
        templateUrl: "../templates/add-post-modal.html"
    };
})
.controller("addPostCtrl", function($scope, $rootScope, $http) {
    $scope.form = {

    };
    $scope.showModal = function () {
        console.log('show modal');
        $rootScope.$broadcast("openModal", {
            modalTemplateName: "add-post-modal"
        });
    }
});
/**
 * Created by lykhachov on 9/13/17.
 */
visionerApp.controller("userOptionsCtrl", function ($scope, $rootScope, $http) {
    $scope.items =  [
        {
            id:1,
            description: "Про Visioner"
        },
        {
            id:2,
            description: "Допомога"
        },
        {
            id:3,
            description: "Зворотній зв’язок"
        },
        {
            id:4,
            description: "Редагування профілю"
        },
        {
            id:5,
            description: "Вихід"
        }
    ]

    $scope.switcher = $(".user-options");
    $scope.optionsStatus = "closed";

    $scope.openSwitcher = function () {
        if ($scope.optionsStatus == "opened") {
            $scope.optionsStatus = "closed";
            $($scope.switcher).removeClass("opened");
        } else {
            $rootScope.$broadcast('closeAllWindows', {});
            $scope.optionsStatus = "opened";
            $($scope.switcher).addClass("opened");
        }
    }
    $rootScope.$on('closeAllWindows', function() {
        if ($scope.optionsStatus == "opened") {
            $scope.optionsStatus = "closed";
            $($scope.switcher).removeClass("opened");
            $rootScope.$digest();
        }
    });
    $scope.switchItem = function(item) {
        $scope.optionsStatus = "closed";
        console.log(item.description);
        $($scope.switcher).removeClass("opened");
    }
});

visionerApp.controller("languageSwitcherCtrl", function ($scope, $rootScope, $http) {
    $scope.languages =  [
       {
           id:1,
           name:"UK",
           description: "Українська"
       },
       {
           id:2,
           name:"EN",
           description: "English"
       },
       {
           id:3,
           name:"RU",
           description: "Русский"
       }
    ]
    $scope.switcher = $(".language-switcher-container");
    $scope.currentLanguage = {
        id:1,
        name:"UK",
        description: "Українська"
    }
    $scope.switcherStatus = "closed";

    $scope.openSwitcher = function () {
        if ($scope.switcherStatus == "opened") {
            $scope.switcherStatus = "closed";
            $($scope.switcher).removeClass("opened");
        } else {
            $rootScope.$broadcast('closeAllWindows', {});
            $scope.switcherStatus = "opened";
            $($scope.switcher).addClass("opened");
        }
    }

    $scope.changeLanguage = function (lang) {
        $scope.currentLanguage = lang;
        $scope.switcherStatus = "closed";
        $($scope.switcher).removeClass("opened");
    }

    $rootScope.$on('closeAllWindows', function() {
        if ($scope.switcherStatus == "opened") {
            $scope.switcherStatus = "closed";
            $($scope.switcher).removeClass("opened");
            $rootScope.$digest();
        }
    });
});

'use strict';
visionerApp.filter('crop', function(){
    return function(input, limit, respectWordBoundaries, suffix){
        if (input === null || input === undefined || limit === null || limit === undefined || limit === '') {
            return input;
        }
        if (angular.isUndefined(respectWordBoundaries)) {
            respectWordBoundaries = true;
        }
        if (angular.isUndefined(suffix)) {
            suffix = '...';
        }

        if (input.length <= limit) {
            return input;
        }

        limit = limit - suffix.length;

        var trimmedString = input.substr(0, limit);
        if (respectWordBoundaries) {
            return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + suffix;
        }
        return trimmedString + suffix;
    }
});
$(window).on('load', function() {
    $('#search-people').click(function() {
        console.log('click');
        $('#switcher-indicator').removeClass("bottom");
        $('#switcher-indicator').addClass("top");
    });
    $('#search-content').click(function() {
        console.log('click');
        $('#switcher-indicator').removeClass("top");
        $('#switcher-indicator').addClass("bottom");
    });

    // timeAgo();
});

// function timeAgo(selector) {
//
//     var templates = {
//         prefix: "",
//         suffix: " тому",
//         seconds: "менш ніж хвилину",
//         minute: "хвилину",
//         minutes: "%d хвилин",
//         hour: "годину",
//         hours: "близько %d годин",
//         day: "день",
//         days: "близько %d днів",
//         month: "місяць",
//         months: "близько %d місяців",
//         year: "рік",
//         years: "близько %d років"
//     };
//     var template = function(t, n) {
//         return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
//     };
//
//     var timer = function(time) {
//         if (!time)
//             return;
//         time = time.replace(/\.\d+/, ""); // remove milliseconds
//         time = time.replace(/-/, "/").replace(/-/, "/");
//         time = time.replace(/T/, " ").replace(/Z/, " UTC");
//         time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
//         time = new Date(time * 1000 || time);
//
//         var now = new Date();
//         var seconds = ((now.getTime() - time) * 0.001) >> 0;
//         var minutes = seconds / 60;
//         var hours = minutes / 60;
//         var days = hours / 24;
//         var years = days / 365;
//
//         return templates.prefix + (
//                 seconds < 45 && template('seconds', seconds) ||
//                 seconds < 90 && template('minute', 1) ||
//                 minutes < 45 && template('minutes', minutes) ||
//                 minutes < 90 && template('hour', 1) ||
//                 hours < 24 && template('hours', hours) ||
//                 hours < 42 && template('day', 1) ||
//                 days < 30 && template('days', days) ||
//                 days < 45 && template('month', 1) ||
//                 days < 365 && template('months', days / 30) ||
//                 years < 1.5 && template('year', 1) ||
//                 template('years', years)
//                 ) + templates.suffix;
//     };
//
    // var elements = document.getElementsByClassName('timeago');
    // for (var i in elements) {
    //     var $this = elements[i];
    //     if (typeof $this === 'object') {
    //         $this.innerHTML = timer($this.getAttribute('title') || $this.getAttribute('datetime'));
    //     }
    // }
    // // update time every minute
    // setTimeout(timeAgo, 1000);

// }

function citiesInit() {
    $('.cities input').on('keyup', function(e) {
        var array;
        if ($(this).val().length >= 2) {
            var data = 'search-sample='+$(this).val();
            var citiesList = $(this).parent().find('.cities-list');
            $.ajax({
                type:"POST",
                url:"https://maps.googleapis.com/maps/api/place/autocomplete/json",
                dataType: "jsonp",
                data:'key=AIzaSyAsFqz7nOmIJh7hki3-PT7eyD07kppB7Po&input='+$(this).val()+'&language=ua&types=(cities)',
                success: function(response) {
                    console.log(response);
                    // if (response !== '') {
                    //     showList(citiesList);
                    //     array = JSON.parse(response);
                    //     var i = 0;
                    //     var list = '';
                    //     array.forEach(function(item) {
                    //         list += '<li class="filter-tag">' + item.tag_name + '</li>';
                    //     });
                    //     $(citiesList).html(list);
                    // }
                }
            });
        } else {
            hideList();
        }
    });
    $('.cities-list').on('click', 'li', function(e) {
        console.log($(e.target).html());
        $(this).parent().parent().find('input').val($(e.target).html());
        console.log($(this).parent().find('input').val());
        hideList();
    });
    function hideList() {
        $('.cities-list').fadeOut();
    }
    function showList(list) {
        $(list).fadeIn();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIHZpc2lvbmVyQXBwID0gYW5ndWxhci5tb2R1bGUoXCJ2aXNpb25lckFwcFwiLFtcInVpLmJvb3RzdHJhcFwiLCBcIm5nVGFnc0lucHV0XCJdKTtcblxudmlzaW9uZXJBcHAuY29udHJvbGxlcihcIm1haW5Db250cm9sbGVyXCIsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSkge1xuICAgICRzY29wZS5hY3RpdmVGaWx0ZXIgPSBcImFsbFwiO1xuXG4gICAgJCh3aW5kb3cpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2xvc2VBbGxXaW5kb3dzJywge30pO1xuICAgIH0pO1xufSk7XG5cbnZpc2lvbmVyQXBwLmRpcmVjdGl2ZShcImZpbHRlcnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHNjb3BlLmRhdGEgPSBzY29wZVthdHRyaWJ1dGVzW1wiZmlsdGVyc1wiXV07XG4gICAgICAgICAgICAgICAgc2NvcGUuZGF0YS5hY3RpdmVGaWx0ZXIgPSBzY29wZS4kcGFyZW50LmFjdGl2ZUZpbHRlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY29wZS4kcGFyZW50LmFjdGl2ZUZpbHRlcik7XG4gICAgICAgICAgICAgICAgc2NvcGUuYXBwbHlGaWx0ZXIoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIGRhdGFcIj48aW5wdXQgbmctY2xpY2s9XCJhcHBseUZpbHRlcigpXCIgbmctbW9kZWw9XCJkYXRhLmFjdGl2ZUZpbHRlclwiIG5nLWNoZWNrZWQ9XCJpdGVtLnZhbHVlPT1kYXRhLmFjdGl2ZUZpbHRlclwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJzXCIgdmFsdWU9XCJ7e2l0ZW0udmFsdWV9fVwiIGlkPVwie3tpdGVtLnZhbHVlfX1cIj48c3BhbiBjbGFzcz1cImNpcmNsZVwiPjwvc3Bhbj48bGFiZWwgZm9yPVwie3tpdGVtLnZhbHVlfX1cIj57e2l0ZW0ubmFtZX19PC9sYWJlbD48L2xpPidcbiAgICAgICAgfTtcbiAgICB9KVxuLmNvbnRyb2xsZXIoXCJmaWx0ZXJzQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpIHtcblxuICAgICRzY29wZS5maWx0ZXJzTGlzdCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwiYWxsXCIsXG4gICAgICAgICAgICBuYW1lOiBcItCS0YFpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcImFydGljbGVzXCIsXG4gICAgICAgICAgICBuYW1lOiBcItCh0YLQsNGC0YJpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcImJvb2tzXCIsXG4gICAgICAgICAgICBuYW1lOiBcItCa0L3QuNCz0LhcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwidmlkZW9zXCIsXG4gICAgICAgICAgICBuYW1lOiBcItCkadC70YzQvNC4L9CSadC00LXQvlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJzdGF0ZW1lbnRzXCIsXG4gICAgICAgICAgICBuYW1lOiBcItCh0YPQtNC20LXQvdC90Y9cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICBuYW1lOiBcItCX0LDRhdC+0LTQuFwiLFxuICAgICAgICB9XG4gICAgXTtcblxuICAgICRzY29wZS5hcHBseUZpbHRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuJHBhcmVudC5hY3RpdmVGaWx0ZXIgPSAkc2NvcGUuZGF0YS5hY3RpdmVGaWx0ZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS4kcGFyZW50LmFjdGl2ZUZpbHRlcik7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZmlsdGVyQ2hhbmdlRXZlbnQnLCB7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcbn0pO1xudmlzaW9uZXJBcHAuZGlyZWN0aXZlKFwicmVjZW50cG9zdHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHNjb3BlLmRhdGEgPSBzY29wZVthdHRyaWJ1dGVzW1wicmVjZW50cG9zdHNcIl1dO1xuICAgICAgICAgICAgICAgIHNjb3BlLmN1cnJlbnRGaWx0ZXIgPSBzY29wZS4kcGFyZW50LmFjdGl2ZUZpbHRlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvcG9zdC10ZW1wbGF0ZS5odG1sXCJcbiAgICAgICAgfTtcbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJmdWxsUG9zdE1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHNjb3BlLnBvc3QgPSBzY29wZS5hcmdzW2F0dHJpYnV0ZXNbXCJmdWxsUG9zdE1vZGFsXCJdXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvZnVsbC1wb3N0LW1vZGFsLmh0bWxcIlxuICAgICAgICB9O1xuICAgIH0pXG4uY29udHJvbGxlcihcImNvbW1lbnRzQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRodHRwKSB7XG4gICAgJHNjb3BlLmNvbW1lbnRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgdXNlcl9pZDogJzEnLFxuICAgICAgICAgICAgdXNlcl9waWNfdXJsOiBcIi4uL2ltZy91c2VyLmpwZ1wiLFxuICAgICAgICAgICAgdXNlcm5hbWU6IFwi0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiLFxuICAgICAgICAgICAgY29tbWVudF90aW1lOiBcIjE0OTY2ODAxNDhcIixcbiAgICAgICAgICAgIGxpa2VzOiBcIjExXCIsXG4gICAgICAgICAgICBjb21tZW50X3RleHQ6IFwi0KHRgtGA0LDQtNCw0L3QuNGPINGC0LDQutC+0LPQviDRgSDQsdGL0LvQviDQv9GA0LXQtNC/0L7Rh9C10LssINC/0YDQtdCy0YDQsNGC0L3QvtC1INCz0L7QstC+0YDQuNC7LCDQstCw0LzQuCwg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YfRgtC+INC+0YLQstC10YDQs9Cw0LXRgiDRg9C80LXQtdGCINC60L7RgtC+0YDQvtC1INC60YLQviDQv9C10YDQtdC0INC+0YLQstC10YDQs9Cw0LXRgiDQutCw0LrQuNC80Lgg0L3QtSDQutCw0YDRgtC40L3RgyDQstC+0LfQu9GO0LHQuNC7IC0g0YfQtdC70L7QstC10LosINC/0YDQuNC90L7RgdC40LvQvi5cIixcbiAgICAgICAgICAgIHN1YmNvbW1lbnRzOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgdXNlcl9pZDogJzInLFxuICAgICAgICAgICAgdXNlcl9waWNfdXJsOiBcIi4uL2ltZy91c2VyLmpwZ1wiLFxuICAgICAgICAgICAgdXNlcm5hbWU6IFwi0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiLFxuICAgICAgICAgICAgY29tbWVudF90aW1lOiBcIjE0OTY2ODAxNDhcIixcbiAgICAgICAgICAgIGxpa2VzOiBcIjExXCIsXG4gICAgICAgICAgICBjb21tZW50X3RleHQ6IFwi0KHRgtGA0LDQtNCw0L3QuNGPINGC0LDQutC+0LPQviDRgSDQsdGL0LvQviDQv9GA0LXQtNC/0L7Rh9C10LssINC/0YDQtdCy0YDQsNGC0L3QvtC1INCz0L7QstC+0YDQuNC7LCDQstCw0LzQuCwg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YfRgtC+INC+0YLQstC10YDQs9Cw0LXRgiDRg9C80LXQtdGCINC60L7RgtC+0YDQvtC1INC60YLQviDQv9C10YDQtdC0INC+0YLQstC10YDQs9Cw0LXRgiDQutCw0LrQuNC80Lgg0L3QtSDQutCw0YDRgtC40L3RgyDQstC+0LfQu9GO0LHQuNC7IC0g0YfQtdC70L7QstC10LosINC/0YDQuNC90L7RgdC40LvQvi5cIixcbiAgICAgICAgICAgIHN1YmNvbW1lbnRzOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICB1c2VyX2lkOiAnMycsXG4gICAgICAgICAgICB1c2VyX3BpY191cmw6IFwiLi4vaW1nL3VzZXIuanBnXCIsXG4gICAgICAgICAgICB1c2VybmFtZTogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBjb21tZW50X3RpbWU6IFwiMTQ5NjY4MDE0OFwiLFxuICAgICAgICAgICAgbGlrZXM6IFwiMTFcIixcbiAgICAgICAgICAgIGNvbW1lbnRfdGV4dDogXCLQodGC0YDQsNC00LDQvdC40Y8g0YLQsNC60L7Qs9C+INGBINCx0YvQu9C+INC/0YDQtdC00L/QvtGH0LXQuywg0L/RgNC10LLRgNCw0YLQvdC+0LUg0LPQvtCy0L7RgNC40LssINCy0LDQvNC4LCDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRh9GC0L4g0L7RgtCy0LXRgNCz0LDQtdGCINGD0LzQtdC10YIg0LrQvtGC0L7RgNC+0LUg0LrRgtC+INC/0LXRgNC10LQg0L7RgtCy0LXRgNCz0LDQtdGCINC60LDQutC40LzQuCDQvdC1INC60LDRgNGC0LjQvdGDINCy0L7Qt9C70Y7QsdC40LsgLSDRh9C10LvQvtCy0LXQuiwg0L/RgNC40L3QvtGB0LjQu9C+LlwiLFxuICAgICAgICAgICAgc3ViY29tbWVudHM6IGZhbHNlXG4gICAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5zdWJjb21tZW50cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIHVzZXJfaWQ6ICc0JyxcbiAgICAgICAgICAgIHVzZXJfcGljX3VybDogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIixcbiAgICAgICAgICAgIGNvbW1lbnRfdGltZTogXCIxNDk2NjgwMTQ4XCIsXG4gICAgICAgICAgICBsaWtlczogXCIxMVwiLFxuICAgICAgICAgICAgY29tbWVudF90ZXh0OiBcItCh0YLRgNCw0LTQsNC90LjRjyDRgtCw0LrQvtCz0L4g0YEg0LHRi9C70L4g0L/RgNC10LTQv9C+0YfQtdC7LCDQv9GA0LXQstGA0LDRgtC90L7QtSDQs9C+0LLQvtGA0LjQuywg0LLQsNC80LgsINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGH0YLQviDQvtGC0LLQtdGA0LPQsNC10YIg0YPQvNC10LXRgiDQutC+0YLQvtGA0L7QtSDQutGC0L4g0L/QtdGA0LXQtCDQvtGC0LLQtdGA0LPQsNC10YIg0LrQsNC60LjQvNC4INC90LUg0LrQsNGA0YLQuNC90YMg0LLQvtC30LvRjtCx0LjQuyAtINGH0LXQu9C+0LLQtdC6LCDQv9GA0LjQvdC+0YHQuNC70L4uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICB1c2VyX2lkOiAnNScsXG4gICAgICAgICAgICB1c2VyX3BpY191cmw6IFwiLi4vaW1nL3VzZXIuanBnXCIsXG4gICAgICAgICAgICB1c2VybmFtZTogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBjb21tZW50X3RpbWU6IFwiMTQ5NjY4MDE0OFwiLFxuICAgICAgICAgICAgbGlrZXM6IFwiMTFcIixcbiAgICAgICAgICAgIGNvbW1lbnRfdGV4dDogXCLQodGC0YDQsNC00LDQvdC40Y8g0YLQsNC60L7Qs9C+INGBINCx0YvQu9C+INC/0YDQtdC00L/QvtGH0LXQuywg0L/RgNC10LLRgNCw0YLQvdC+0LUg0LPQvtCy0L7RgNC40LssINCy0LDQvNC4LCDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRh9GC0L4g0L7RgtCy0LXRgNCz0LDQtdGCINGD0LzQtdC10YIg0LrQvtGC0L7RgNC+0LUg0LrRgtC+INC/0LXRgNC10LQg0L7RgtCy0LXRgNCz0LDQtdGCINC60LDQutC40LzQuCDQvdC1INC60LDRgNGC0LjQvdGDINCy0L7Qt9C70Y7QsdC40LsgLSDRh9C10LvQvtCy0LXQuiwg0L/RgNC40L3QvtGB0LjQu9C+LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgdXNlcl9pZDogJzYnLFxuICAgICAgICAgICAgdXNlcl9waWNfdXJsOiBcIi4uL2ltZy91c2VyLmpwZ1wiLFxuICAgICAgICAgICAgdXNlcm5hbWU6IFwi0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiLFxuICAgICAgICAgICAgY29tbWVudF90aW1lOiBcIjE0OTY2ODAxNDhcIixcbiAgICAgICAgICAgIGxpa2VzOiBcIjExXCIsXG4gICAgICAgICAgICBjb21tZW50X3RleHQ6IFwi0KHRgtGA0LDQtNCw0L3QuNGPINGC0LDQutC+0LPQviDRgSDQsdGL0LvQviDQv9GA0LXQtNC/0L7Rh9C10LssINC/0YDQtdCy0YDQsNGC0L3QvtC1INCz0L7QstC+0YDQuNC7LCDQstCw0LzQuCwg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YfRgtC+INC+0YLQstC10YDQs9Cw0LXRgiDRg9C80LXQtdGCINC60L7RgtC+0YDQvtC1INC60YLQviDQv9C10YDQtdC0INC+0YLQstC10YDQs9Cw0LXRgiDQutCw0LrQuNC80Lgg0L3QtSDQutCw0YDRgtC40L3RgyDQstC+0LfQu9GO0LHQuNC7IC0g0YfQtdC70L7QstC10LosINC/0YDQuNC90L7RgdC40LvQvi5cIixcbiAgICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLnRpbWVBZ28gPSBmdW5jdGlvbihnaXZlbl90aW1lKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZXMgPSB7XG4gICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICBzdWZmaXg6IFwiINGC0L7QvNGDXCIsXG4gICAgICAgICAgICBzZWNvbmRzOiBcItC80LXQvdGIINC90ZbQtiDRhdCy0LjQu9C40L3Rg1wiLFxuICAgICAgICAgICAgbWludXRlOiBcItGF0LLQuNC70LjQvdGDXCIsXG4gICAgICAgICAgICBtaW51dGVzOiBcItCx0LvQuNC30YzQutC+ICVkINGF0LLQuNC70LjQvVwiLFxuICAgICAgICAgICAgaG91cjogXCLQs9C+0LTQuNC90YNcIixcbiAgICAgICAgICAgIGhvdXJzOiBcItCx0LvQuNC30YzQutC+ICVkINCz0L7QtNC40L1cIixcbiAgICAgICAgICAgIGRheTogXCLQtNC10L3RjFwiLFxuICAgICAgICAgICAgZGF5czogXCLQsdC70LjQt9GM0LrQviAlZCDQtNC90ZbQslwiLFxuICAgICAgICAgICAgbW9udGg6IFwi0LzRltGB0Y/RhtGMXCIsXG4gICAgICAgICAgICBtb250aHM6IFwi0LHQu9C40LfRjNC60L4gJWQg0LzRltGB0Y/RhtGW0LJcIixcbiAgICAgICAgICAgIHllYXI6IFwi0YDRltC6XCIsXG4gICAgICAgICAgICB5ZWFyczogXCLQsdC70LjQt9GM0LrQviAlZCDRgNC+0LrRltCyXCJcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlc1t0XSAmJiB0ZW1wbGF0ZXNbdF0ucmVwbGFjZSgvJWQvaSwgTWF0aC5hYnMoTWF0aC5yb3VuZChuKSkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdGltZXIgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRpbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGltZSA9IHRpbWUucmVwbGFjZSgvXFwuXFxkKy8sIFwiXCIpOyAvLyByZW1vdmUgbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKC8tLywgXCIvXCIpLnJlcGxhY2UoLy0vLCBcIi9cIik7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKC9ULywgXCIgXCIpLnJlcGxhY2UoL1ovLCBcIiBVVENcIik7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKC8oW1xcK1xcLV1cXGRcXGQpXFw6PyhcXGRcXGQpLywgXCIgJDEkMlwiKTsgLy8gLTA0OjAwIC0+IC0wNDAwXG4gICAgICAgICAgICB0aW1lID0gbmV3IERhdGUodGltZSAqIDEwMDAgfHwgdGltZSk7XG5cbiAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSAoKG5vdy5nZXRUaW1lKCkgLSB0aW1lKSAqIDAuMDAxKSA+PiAwO1xuICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBzZWNvbmRzIC8gNjA7XG4gICAgICAgICAgICB2YXIgaG91cnMgPSBtaW51dGVzIC8gNjA7XG4gICAgICAgICAgICB2YXIgZGF5cyA9IGhvdXJzIC8gMjQ7XG4gICAgICAgICAgICB2YXIgeWVhcnMgPSBkYXlzIC8gMzY1O1xuXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVzLnByZWZpeCArIChcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA8IDQ1ICYmIHRlbXBsYXRlKCdzZWNvbmRzJywgc2Vjb25kcykgfHxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA8IDkwICYmIHRlbXBsYXRlKCdtaW51dGUnLCAxKSB8fFxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzIDwgNDUgJiYgdGVtcGxhdGUoJ21pbnV0ZXMnLCBtaW51dGVzKSB8fFxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzIDwgOTAgJiYgdGVtcGxhdGUoJ2hvdXInLCAxKSB8fFxuICAgICAgICAgICAgICAgICAgICBob3VycyA8IDI0ICYmIHRlbXBsYXRlKCdob3VycycsIGhvdXJzKSB8fFxuICAgICAgICAgICAgICAgICAgICBob3VycyA8IDQyICYmIHRlbXBsYXRlKCdkYXknLCAxKSB8fFxuICAgICAgICAgICAgICAgICAgICBkYXlzIDwgMzAgJiYgdGVtcGxhdGUoJ2RheXMnLCBkYXlzKSB8fFxuICAgICAgICAgICAgICAgICAgICBkYXlzIDwgNDUgJiYgdGVtcGxhdGUoJ21vbnRoJywgMSkgfHxcbiAgICAgICAgICAgICAgICAgICAgZGF5cyA8IDM2NSAmJiB0ZW1wbGF0ZSgnbW9udGhzJywgZGF5cyAvIDMwKSB8fFxuICAgICAgICAgICAgICAgICAgICB5ZWFycyA8IDEuNSAmJiB0ZW1wbGF0ZSgneWVhcicsIDEpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlKCd5ZWFycycsIHllYXJzKVxuICAgICAgICAgICAgICAgICkgKyB0ZW1wbGF0ZXMuc3VmZml4O1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jb21tZW50cykge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJHNjb3BlLmNvbW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAkdGhpcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy50aW1lX2FnbyA9IHRpbWVyKCR0aGlzLmNvbW1lbnRfdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuc3ViY29tbWVudHMpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICRzY29wZS5zdWJjb21tZW50c1tqXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgJHRoaXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMudGltZV9hZ28gPSB0aW1lcigkdGhpcy5jb21tZW50X3RpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSB0aW1lIGV2ZXJ5IG1pbnV0ZVxuICAgICAgICAvLyBzZXRUaW1lb3V0KCRzY29wZS50aW1lQWdvLCAxMDAwMCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRzY29wZS5wb3N0cyk7XG4gICAgfTtcbiAgICAkc2NvcGUudGltZUFnbygpO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUudGltZUFnbygpO1xuICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgIH0sIDEwMDAwKTtcbn0pXG4uY29udHJvbGxlcihcInBvc3RzQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpIHtcbiAgICAkc2NvcGUucG9zdHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicG9zdF9pZFwiOiBcIjFcIixcbiAgICAgICAgICAgIFwidXNlcl9pZFwiOiBcIjFcIixcbiAgICAgICAgICAgIFwicG9zdF90eXBlXCI6IFwiYXJ0aWNsZVwiLFxuICAgICAgICAgICAgXCJ1c2VyX3BpY191cmxcIjogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBcInBvc3RfYWRkX3RpbWVcIjogXCIxNDk2NjgwMTQ4XCIsXG4gICAgICAgICAgICBcInZpZXdzXCI6IFwiMTBcIixcbiAgICAgICAgICAgIFwibGlrZXNcIjogXCIxMVwiLFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiBcIjI0XCIsXG4gICAgICAgICAgICBcInBvc3RfdGl0bGVcIjogXCLQntGCINC30L3QsNC90LjQuSDQuiDQvdCw0LLRi9C60LDQvFwiLFxuICAgICAgICAgICAgXCJwb3N0X2NvbnRlbnRcIjogXCLQotC10YXQvdC+0LvQvtCz0LjQuCDQuCDQvNC10YLQvtC00Ysg0YDQsNCx0L7RgtGLINGB0LXQs9C+0LTQvdGPINC80LXQvdGP0Y7RgtGB0Y8g0L7Rh9C10L3RjCDQsdGL0YHRgtGA0L4sINC4INCy0YHQtdC8INC90LDQvCDQv9GA0LjRhdC+0LTQuNGC0YHRjyDQv9C+0YHRgtC+0Y/QvdC90L4g0YPRh9C40YLRjNGB0Y8uINCc0L3QvtCz0LjQtSDQuNC3INC90LDRgSDQvtCx0YPRh9Cw0Y7RgiDQtNGA0YPQs9C40YUsINC00LDQttC1INC60L7Qs9C00LAg0Y3RgtC+INC90LDQv9GA0Y/QvNGD0Y4g0L3QtSDRgdCy0Y/Qt9Cw0L3QviDRgSDQv9GA0L7RhNC10YHRgdC40LXQuS4g0J3QviDQtdGB0LvQuCDQstGLINGF0L7RgtGMINGA0LDQtyDQt9Cw0YHRi9C/0LDQu9C4INC90LDQtCDRgdC60YPRh9C90YvQvCDRg9GH0LXQsdC90LjQutC+0Lwg0LjQu9C4INC/0LXRgNC10LzQsNGC0YvQstCw0LvQuCDRg9GC0L7QvNC40YLQtdC70YzQvdC+0LUg0YPQv9GA0LDQttC90LXQvdC40LUg0LIg0Y3Qu9C10LrRgtGA0L7QvdC90L7QvCDQutGD0YDRgdC1LCDQstGLINC/0L7QvdC40LzQsNC10YLQtSwg0YfRgtC+INGB0L7Qt9C00LDRgtGMINGF0L7RgNC+0YjQuNC5INC+0LHRg9GH0LDRjtGJ0LjQuSDQvNCw0YLQtdGA0LjQsNC7INGB0LvQvtC20L3QtdC1LCDRh9C10Lwg0LrQsNC20LXRgtGB0Y8g0L3QsCDQv9C10YDQstGL0Lkg0LLQt9Cz0LvRj9C0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwb3N0X2lkXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJwb3N0X3R5cGVcIjogXCJib29rXCIsXG4gICAgICAgICAgICBcInVzZXJfcGljX3VybFwiOiBcIi4uL2ltZy91c2VyLmpwZ1wiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIixcbiAgICAgICAgICAgIFwicG9zdF9hZGRfdGltZVwiOiBcIjE0OTQ0MjgwNDhcIixcbiAgICAgICAgICAgIFwidmlld3NcIjogXCIxMFwiLFxuICAgICAgICAgICAgXCJsaWtlc1wiOiBcIjExXCIsXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IFwiMjRcIixcbiAgICAgICAgICAgIFwicG9zdF90aXRsZVwiOiBcItCd0LDQt9Cy0LDQvdC40LUg0L/QvtGB0YLQsFwiLFxuICAgICAgICAgICAgXCJwb3N0X2NvbnRlbnRcIjogXCLQotC10YXQvdC+0LvQvtCz0LjQuCDQuCDQvNC10YLQvtC00Ysg0YDQsNCx0L7RgtGLINGB0LXQs9C+0LTQvdGPINC80LXQvdGP0Y7RgtGB0Y8g0L7Rh9C10L3RjCDQsdGL0YHRgtGA0L4sINC4INCy0YHQtdC8INC90LDQvCDQv9GA0LjRhdC+0LTQuNGC0YHRjyDQv9C+0YHRgtC+0Y/QvdC90L4g0YPRh9C40YLRjNGB0Y8uINCc0L3QvtCz0LjQtSDQuNC3INC90LDRgSDQvtCx0YPRh9Cw0Y7RgiDQtNGA0YPQs9C40YUsINC00LDQttC1INC60L7Qs9C00LAg0Y3RgtC+INC90LDQv9GA0Y/QvNGD0Y4g0L3QtSDRgdCy0Y/Qt9Cw0L3QviDRgSDQv9GA0L7RhNC10YHRgdC40LXQuS4g0J3QviDQtdGB0LvQuCDQstGLINGF0L7RgtGMINGA0LDQtyDQt9Cw0YHRi9C/0LDQu9C4INC90LDQtCDRgdC60YPRh9C90YvQvCDRg9GH0LXQsdC90LjQutC+0Lwg0LjQu9C4INC/0LXRgNC10LzQsNGC0YvQstCw0LvQuCDRg9GC0L7QvNC40YLQtdC70YzQvdC+0LUg0YPQv9GA0LDQttC90LXQvdC40LUg0LIg0Y3Qu9C10LrRgtGA0L7QvdC90L7QvCDQutGD0YDRgdC1LCDQstGLINC/0L7QvdC40LzQsNC10YLQtSwg0YfRgtC+INGB0L7Qt9C00LDRgtGMINGF0L7RgNC+0YjQuNC5INC+0LHRg9GH0LDRjtGJ0LjQuSDQvNCw0YLQtdGA0LjQsNC7INGB0LvQvtC20L3QtdC1LCDRh9C10Lwg0LrQsNC20LXRgtGB0Y8g0L3QsCDQv9C10YDQstGL0Lkg0LLQt9Cz0LvRj9C0IDEyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicG9zdF9pZFwiOiBcIjNcIixcbiAgICAgICAgICAgIFwidXNlcl9pZFwiOiBcIjNcIixcbiAgICAgICAgICAgIFwicG9zdF90eXBlXCI6IFwic3RhdGVtZW50XCIsXG4gICAgICAgICAgICBcInVzZXJfcGljX3VybFwiOiBcIi4uL2ltZy91c2VyLmpwZ1wiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIixcbiAgICAgICAgICAgIFwicG9zdF9hZGRfdGltZVwiOiBcIjE0OTQzMTYwNDhcIixcbiAgICAgICAgICAgIFwidmlld3NcIjogXCIxMFwiLFxuICAgICAgICAgICAgXCJsaWtlc1wiOiBcIjExXCIsXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IFwiMjRcIixcbiAgICAgICAgICAgIFwicG9zdF90aXRsZVwiOiBcItCd0LDQt9Cy0LDQvdC40LUg0L/QvtGB0YLQsFwiLFxuICAgICAgICAgICAgXCJwb3N0X2NvbnRlbnRcIjogXCLQotC10YXQvdC+0LvQvtCz0LjQuCDQuCDQvNC10YLQvtC00Ysg0YDQsNCx0L7RgtGLINGB0LXQs9C+0LTQvdGPINC80LXQvdGP0Y7RgtGB0Y8g0L7Rh9C10L3RjCDQsdGL0YHRgtGA0L4sINC4INCy0YHQtdC8INC90LDQvCDQv9GA0LjRhdC+0LTQuNGC0YHRjyDQv9C+0YHRgtC+0Y/QvdC90L4g0YPRh9C40YLRjNGB0Y8uINCc0L3QvtCz0LjQtSDQuNC3INC90LDRgSDQvtCx0YPRh9Cw0Y7RgiDQtNGA0YPQs9C40YUsINC00LDQttC1INC60L7Qs9C00LAg0Y3RgtC+INC90LDQv9GA0Y/QvNGD0Y4g0L3QtSDRgdCy0Y/Qt9Cw0L3QviDRgSDQv9GA0L7RhNC10YHRgdC40LXQuS4g0J3QviDQtdGB0LvQuCDQstGLINGF0L7RgtGMINGA0LDQtyDQt9Cw0YHRi9C/0LDQu9C4INC90LDQtCDRgdC60YPRh9C90YvQvCDRg9GH0LXQsdC90LjQutC+0Lwg0LjQu9C4INC/0LXRgNC10LzQsNGC0YvQstCw0LvQuCDRg9GC0L7QvNC40YLQtdC70YzQvdC+0LUg0YPQv9GA0LDQttC90LXQvdC40LUg0LIg0Y3Qu9C10LrRgtGA0L7QvdC90L7QvCDQutGD0YDRgdC1LCDQstGLINC/0L7QvdC40LzQsNC10YLQtSwg0YfRgtC+INGB0L7Qt9C00LDRgtGMINGF0L7RgNC+0YjQuNC5INC+0LHRg9GH0LDRjtGJ0LjQuSDQvNCw0YLQtdGA0LjQsNC7INGB0LvQvtC20L3QtdC1LCDRh9C10Lwg0LrQsNC20LXRgtGB0Y8g0L3QsCDQv9C10YDQstGL0Lkg0LLQt9Cz0LvRj9C0IDEyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicG9zdF9pZFwiOiBcIjRcIixcbiAgICAgICAgICAgIFwidXNlcl9pZFwiOiBcIjRcIixcbiAgICAgICAgICAgIFwicG9zdF90eXBlXCI6IFwiYm9va1wiLFxuICAgICAgICAgICAgXCJ1c2VyX3BpY191cmxcIjogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBcInBvc3RfYWRkX3RpbWVcIjogXCIxNDk0MzE2MDQ4XCIsXG4gICAgICAgICAgICBcInZpZXdzXCI6IFwiMTBcIixcbiAgICAgICAgICAgIFwibGlrZXNcIjogXCIxMVwiLFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiBcIjI0XCIsXG4gICAgICAgICAgICBcInBvc3RfdGl0bGVcIjogXCLQndCw0LfQstCw0L3QuNC1INC/0L7RgdGC0LBcIixcbiAgICAgICAgICAgIFwicG9zdF9jb250ZW50XCI6IFwi0KLQtdGF0L3QvtC70L7Qs9C40Lgg0Lgg0LzQtdGC0L7QtNGLINGA0LDQsdC+0YLRiyDRgdC10LPQvtC00L3RjyDQvNC10L3Rj9GO0YLRgdGPINC+0YfQtdC90Ywg0LHRi9GB0YLRgNC+LCDQuCDQstGB0LXQvCDQvdCw0Lwg0L/RgNC40YXQvtC00LjRgtGB0Y8g0L/QvtGB0YLQvtGP0L3QvdC+INGD0YfQuNGC0YzRgdGPLiDQnNC90L7Qs9C40LUg0LjQtyDQvdCw0YEg0L7QsdGD0YfQsNGO0YIg0LTRgNGD0LPQuNGFLCDQtNCw0LbQtSDQutC+0LPQtNCwINGN0YLQviDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YHQstGP0LfQsNC90L4g0YEg0L/RgNC+0YTQtdGB0YHQuNC10LkuINCd0L4g0LXRgdC70Lgg0LLRiyDRhdC+0YLRjCDRgNCw0Lcg0LfQsNGB0YvQv9Cw0LvQuCDQvdCw0LQg0YHQutGD0YfQvdGL0Lwg0YPRh9C10LHQvdC40LrQvtC8INC40LvQuCDQv9C10YDQtdC80LDRgtGL0LLQsNC70Lgg0YPRgtC+0LzQuNGC0LXQu9GM0L3QvtC1INGD0L/RgNCw0LbQvdC10L3QuNC1INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQv9C+0L3QuNC80LDQtdGC0LUsINGH0YLQviDRgdC+0LfQtNCw0YLRjCDRhdC+0YDQvtGI0LjQuSDQvtCx0YPRh9Cw0Y7RidC40Lkg0LzQsNGC0LXRgNC40LDQuyDRgdC70L7QttC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPINC90LAg0L/QtdGA0LLRi9C5INCy0LfQs9C70Y/QtCAxMjNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBvc3RfaWRcIjogXCI1XCIsXG4gICAgICAgICAgICBcInVzZXJfaWRcIjogXCI1XCIsXG4gICAgICAgICAgICBcInBvc3RfdHlwZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVzZXJfcGljX3VybFwiOiBcIi4uL2ltZy91c2VyLmpwZ1wiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIixcbiAgICAgICAgICAgIFwicG9zdF9hZGRfdGltZVwiOiBcIjE0OTQ0MTYwNDhcIixcbiAgICAgICAgICAgIFwidmlld3NcIjogXCIxMFwiLFxuICAgICAgICAgICAgXCJsaWtlc1wiOiBcIjExXCIsXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IFwiMjRcIixcbiAgICAgICAgICAgIFwicG9zdF90aXRsZVwiOiBcItCd0LDQt9Cy0LDQvdC40LUg0L/QvtGB0YLQsFwiLFxuICAgICAgICAgICAgXCJwb3N0X2NvbnRlbnRcIjogXCLQotC10YXQvdC+0LvQvtCz0LjQuCDQuCDQvNC10YLQvtC00Ysg0YDQsNCx0L7RgtGLINGB0LXQs9C+0LTQvdGPINC80LXQvdGP0Y7RgtGB0Y8g0L7Rh9C10L3RjCDQsdGL0YHRgtGA0L4sINC4INCy0YHQtdC8INC90LDQvCDQv9GA0LjRhdC+0LTQuNGC0YHRjyDQv9C+0YHRgtC+0Y/QvdC90L4g0YPRh9C40YLRjNGB0Y8uINCc0L3QvtCz0LjQtSDQuNC3INC90LDRgSDQvtCx0YPRh9Cw0Y7RgiDQtNGA0YPQs9C40YUsINC00LDQttC1INC60L7Qs9C00LAg0Y3RgtC+INC90LDQv9GA0Y/QvNGD0Y4g0L3QtSDRgdCy0Y/Qt9Cw0L3QviDRgSDQv9GA0L7RhNC10YHRgdC40LXQuS4g0J3QviDQtdGB0LvQuCDQstGLINGF0L7RgtGMINGA0LDQtyDQt9Cw0YHRi9C/0LDQu9C4INC90LDQtCDRgdC60YPRh9C90YvQvCDRg9GH0LXQsdC90LjQutC+0Lwg0LjQu9C4INC/0LXRgNC10LzQsNGC0YvQstCw0LvQuCDRg9GC0L7QvNC40YLQtdC70YzQvdC+0LUg0YPQv9GA0LDQttC90LXQvdC40LUg0LIg0Y3Qu9C10LrRgtGA0L7QvdC90L7QvCDQutGD0YDRgdC1LCDQstGLINC/0L7QvdC40LzQsNC10YLQtSwg0YfRgtC+INGB0L7Qt9C00LDRgtGMINGF0L7RgNC+0YjQuNC5INC+0LHRg9GH0LDRjtGJ0LjQuSDQvNCw0YLQtdGA0LjQsNC7INGB0LvQvtC20L3QtdC1LCDRh9C10Lwg0LrQsNC20LXRgtGB0Y8g0L3QsCDQv9C10YDQstGL0Lkg0LLQt9Cz0LvRj9C0IDEyM1wiXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgJHNjb3BlLiRvbihcImZpbHRlckNoYW5nZUV2ZW50XCIsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xuICAgICAgICAkc2NvcGUuY3VycmVudEZpbHRlciA9ICRzY29wZS4kcGFyZW50LmFjdGl2ZUZpbHRlcjtcbiAgICB9KTtcbiAgICAkc2NvcGUuc2hvd0Z1bGxQb3N0ID0gZnVuY3Rpb24ocG9zdCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoXCJvcGVuTW9kYWxcIiwge1xuICAgICAgICAgICAgbW9kYWxUZW1wbGF0ZU5hbWU6IFwiZnVsbC1wb3N0LW1vZGFsXCIsXG4gICAgICAgICAgICBmdWxsUG9zdDogcG9zdFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHNjb3BlLnBvc3RzRmlsdGVyID0gZnVuY3Rpb24ocG9zdFR5cGUpIHtcbiAgICAgICAgaWYgKCRzY29wZS5jdXJyZW50RmlsdGVyID09ICdhbGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuY3VycmVudEZpbHRlci5zbGljZSgwLC0xKSA9PSBwb3N0VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS51c2VycGFnZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcl9pZDogXCIgKyBpZCk7XG4gICAgfVxuXG4gICAgJHNjb3BlLnRpbWVBZ28gPSBmdW5jdGlvbihnaXZlbl90aW1lKSB7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVzID0ge1xuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiINGC0L7QvNGDXCIsXG4gICAgICAgICAgICAgICAgc2Vjb25kczogXCLQvNC10L3RiCDQvdGW0LYg0YXQstC40LvQuNC90YNcIixcbiAgICAgICAgICAgICAgICBtaW51dGU6IFwi0YXQstC40LvQuNC90YNcIixcbiAgICAgICAgICAgICAgICBtaW51dGVzOiBcItCx0LvQuNC30YzQutC+ICVkINGF0LLQuNC70LjQvVwiLFxuICAgICAgICAgICAgICAgIGhvdXI6IFwi0LPQvtC00LjQvdGDXCIsXG4gICAgICAgICAgICAgICAgaG91cnM6IFwi0LHQu9C40LfRjNC60L4gJWQg0LPQvtC00LjQvVwiLFxuICAgICAgICAgICAgICAgIGRheTogXCLQtNC10L3RjFwiLFxuICAgICAgICAgICAgICAgIGRheXM6IFwi0LHQu9C40LfRjNC60L4gJWQg0LTQvdGW0LJcIixcbiAgICAgICAgICAgICAgICBtb250aDogXCLQvNGW0YHRj9GG0YxcIixcbiAgICAgICAgICAgICAgICBtb250aHM6IFwi0LHQu9C40LfRjNC60L4gJWQg0LzRltGB0Y/RhtGW0LJcIixcbiAgICAgICAgICAgICAgICB5ZWFyOiBcItGA0ZbQulwiLFxuICAgICAgICAgICAgICAgIHllYXJzOiBcItCx0LvQuNC30YzQutC+ICVkINGA0L7QutGW0LJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVzW3RdICYmIHRlbXBsYXRlc1t0XS5yZXBsYWNlKC8lZC9pLCBNYXRoLmFicyhNYXRoLnJvdW5kKG4pKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgdGltZXIgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aW1lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGltZSA9IHRpbWUucmVwbGFjZSgvXFwuXFxkKy8sIFwiXCIpOyAvLyByZW1vdmUgbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICAgICAgdGltZSA9IHRpbWUucmVwbGFjZSgvLS8sIFwiL1wiKS5yZXBsYWNlKC8tLywgXCIvXCIpO1xuICAgICAgICAgICAgICAgIHRpbWUgPSB0aW1lLnJlcGxhY2UoL1QvLCBcIiBcIikucmVwbGFjZSgvWi8sIFwiIFVUQ1wiKTtcbiAgICAgICAgICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKC8oW1xcK1xcLV1cXGRcXGQpXFw6PyhcXGRcXGQpLywgXCIgJDEkMlwiKTsgLy8gLTA0OjAwIC0+IC0wNDAwXG4gICAgICAgICAgICAgICAgdGltZSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwIHx8IHRpbWUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHNlY29uZHMgPSAoKG5vdy5nZXRUaW1lKCkgLSB0aW1lKSAqIDAuMDAxKSA+PiAwO1xuICAgICAgICAgICAgICAgIHZhciBtaW51dGVzID0gc2Vjb25kcyAvIDYwO1xuICAgICAgICAgICAgICAgIHZhciBob3VycyA9IG1pbnV0ZXMgLyA2MDtcbiAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IGhvdXJzIC8gMjQ7XG4gICAgICAgICAgICAgICAgdmFyIHllYXJzID0gZGF5cyAvIDM2NTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXMucHJlZml4ICsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA8IDQ1ICYmIHRlbXBsYXRlKCdzZWNvbmRzJywgc2Vjb25kcykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPCA5MCAmJiB0ZW1wbGF0ZSgnbWludXRlJywgMSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPCA0NSAmJiB0ZW1wbGF0ZSgnbWludXRlcycsIG1pbnV0ZXMpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzIDwgOTAgJiYgdGVtcGxhdGUoJ2hvdXInLCAxKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPCAyNCAmJiB0ZW1wbGF0ZSgnaG91cnMnLCBob3VycykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzIDwgNDIgJiYgdGVtcGxhdGUoJ2RheScsIDEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzIDwgMzAgJiYgdGVtcGxhdGUoJ2RheXMnLCBkYXlzKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5cyA8IDQ1ICYmIHRlbXBsYXRlKCdtb250aCcsIDEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzIDwgMzY1ICYmIHRlbXBsYXRlKCdtb250aHMnLCBkYXlzIC8gMzApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFycyA8IDEuNSAmJiB0ZW1wbGF0ZSgneWVhcicsIDEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSgneWVhcnMnLCB5ZWFycylcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKyB0ZW1wbGF0ZXMuc3VmZml4O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucG9zdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkc2NvcGUucG9zdHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkdGhpcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudGltZV9hZ28gPSB0aW1lcigkdGhpcy5wb3N0X2FkZF90aW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGltZSBldmVyeSBtaW51dGVcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoJHNjb3BlLnRpbWVBZ28sIDEwMDAwKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCRzY29wZS5wb3N0cyk7XG4gICAgfTtcbiAgICAkc2NvcGUudGltZUFnbygpO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUudGltZUFnbygpO1xuICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgIH0sIDEwMDAwKTtcbn0pO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGx5a2hhY2hvdiBvbiA2LzE5LzE3LlxuICovXG52aXNpb25lckFwcFxuLmRpcmVjdGl2ZShcInVzZXJwYWdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBzY29wZS5kYXRhID0gc2NvcGVbYXR0cmlidXRlc1tcInVzZXJQYWdlXCJdXTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvdXNlcnBhZ2UtdGVtcGxhdGUuaHRtbFwiXG4gICAgfVxufSlcbi5kaXJlY3RpdmUoXCJ1c2VyZWRpdG1vZGFsXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBzY29wZS51cmwgPSBzY29wZVthdHRyaWJ1dGVzW1widXNlcmVkaXRtb2RhbFwiXV07XG4gICAgICAgICAgICAkKCcuZWRpdC1hZGQtaW5mbycpLm9uKCdjbGljaycsICdzcGFuJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLmFkZGl0aW9uYWwnKS5zbGlkZVRvZ2dsZSgnc2xvdycpLnRvZ2dsZUNsYXNzKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAkKCcuZWRpdC1hZGQtaW5mbycpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC1jbG9zZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgJCgnLmFkZGl0aW9uYWwnKS5jc3MoJ2Rpc3BsYXknLCdub25lJykudG9nZ2xlQ2xhc3MoXCJ2aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgICQoJy5lZGl0LWFkZC1pbmZvJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIi4uL3RlbXBsYXRlcy91c2VyLWVkaXQtbW9kYWwuaHRtbFwiXG4gICAgfTtcbn0pXG4uY29udHJvbGxlcihcInVzZXJwYWdlQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRodHRwKSB7XG4gICAgJHNjb3BlLmZvcm0gPSB7XG4gICAgICAgIHVzZXJQaWNVcmw6IFwiLi4vaW1nL3VzZXIuanBnXCIsXG4gICAgICAgIG5hbWU6IFwi0JjQvNGPXCIsXG4gICAgICAgIHN1cm5hbWU6IFwi0KTQsNC80LjQu9C40Y9cIixcbiAgICAgICAgaW50ZXJlc3RBcmVhOiBcItCh0YTQtdGA0LAg0LjQvdGC0LXRgNC10YHQvtCyXCIsXG4gICAgICAgIHdvcms6IFwi0JzQtdGB0YLQviDRgNCw0LHQvtGC0YtcIixcbiAgICAgICAgZWR1Y2F0aW9uOiBcItCe0LHRgNCw0LfQvtCy0LDQvdC40LVcIixcbiAgICAgICAgY3JlZG86IFwi0JrRgNC10LTQvlwiLFxuICAgICAgICB0ZWw6IHtcbiAgICAgICAgICAgIGRhdGE6IFwiMDUwMTIzMTEyMlwiLFxuICAgICAgICAgICAgY29uZmlkZW50OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGJpcnRoOiB7XG4gICAgICAgICAgICBkYXRhOiBcIjEyMzQtMTItMTJcIixcbiAgICAgICAgICAgIGNvbmZpZGVudDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgZGF0YTogXCJhc2ZhZGZAYWRzY2YuY29tXCIsXG4gICAgICAgICAgICBjb25maWRlbnQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcHJvSW50ZXJlc3RzOiBbXSxcbiAgICAgICAgcGVyc29uYWxJbnRlcmVzdHM6IFtdLFxuICAgICAgICBjb3VudHJ5OiBcItCh0YLRgNCw0L3QsFwiLFxuICAgICAgICBjaXR5OiBcItCT0L7RgNC+0LRcIixcbiAgICAgICAgZmF2b3JpdGVCb29rczogW10sXG4gICAgICAgIGZhdm9yaXRlRmlsbXM6IFtdXG4gICAgfTtcblxuICAgICRzY29wZS5wcm9UYWdzID0gW107XG4gICAgJHNjb3BlLmxvYWRQcm9UYWdzID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJ2h0dHA6Ly9zZXJ2ZXIuZGV2L3Zpc2lvbmVyL2FqYXgucGhwP3NlYXJjaC1zYW1wbGU9JytxdWVyeSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkc2NvcGUucGVyc29uYWxUYWdzID0gW107XG4gICAgJHNjb3BlLmxvYWRQZXJzb25hbFRhZ3MgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnaHR0cDovL3NlcnZlci5kZXYvdmlzaW9uZXIvYWpheC5waHA/c2VhcmNoLXNhbXBsZT0nK3F1ZXJ5KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgJHNjb3BlLnNob3dVc2VySW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcudXNlci1pbmZvIC5oaWRkZW4tYmxvY2snKS5zbGlkZVRvZ2dsZSgnc2xvdycpLnRvZ2dsZUNsYXNzKFwidmlzaWJsZVwiKTtcbiAgICB9XG4gICAgJHNjb3BlLnNob3dNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgbW9kYWwnKTtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KFwib3Blbk1vZGFsXCIsIHtcbiAgICAgICAgICAgIG1vZGFsVGVtcGxhdGVOYW1lOiBcInVzZXItZWRpdC1tb2RhbFwiXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGx5a2hhY2hvdiBvbiA2LzE5LzE3LlxuICovXG52aXNpb25lckFwcC5jb250cm9sbGVyKFwibWVudUN0cmxcIiwgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKSB7XG4gICAgJHNjb3BlLm1lbnUgPSB7fTtcbiAgICAkc2NvcGUubWVudS5hY3RpdmUgPSAnMSc7XG4gICAgJHNjb3BlLm1lbnUuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6JzEnLFxuICAgICAgICAgICAgbmFtZTogJ9CT0L7Qu9C+0LLQvdCwJyxcbiAgICAgICAgICAgIGNsYXNzOiAnaG9tZS1pY29uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgbmFtZTogJ9Cc0L7RjyDRgdGC0L7RgNGW0L3QutCwJyxcbiAgICAgICAgICAgIGNsYXNzOiAndXNlcnBhZ2UtaWNvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIG5hbWU6ICfQnNC+0Zcg0LLRltC30ZbQvtC90LXRgNC4JyxcbiAgICAgICAgICAgIGNsYXNzOiAndmlzaW9uZXJzLWljb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICBuYW1lOiAn0JzQvtGXINGE0L7Qu9C+0LLQtdGA0LgnLFxuICAgICAgICAgICAgY2xhc3M6ICdmb2xsb3dlcnMtaWNvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc1JyxcbiAgICAgICAgICAgIG5hbWU6ICfQndCw0LnQsdGW0LvRjNGIINC/0L7Qv9GD0LvRj9GA0L3QtScsXG4gICAgICAgICAgICBjbGFzczogJ3RvcC1pY29uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzYnLFxuICAgICAgICAgICAgbmFtZTogJ9Cd0L7QvNGW0L3QsNGG0ZbRlycsXG4gICAgICAgICAgICBjbGFzczogJ25vbWluYXRpb25zLWljb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNycsXG4gICAgICAgICAgICBuYW1lOiAn0KDQtdC60L7QvNC10L3QtNC+0LLQsNC90ZYg0LLRltC30ZbQvtC90LXRgNC4JyxcbiAgICAgICAgICAgIGNsYXNzOiAncmVjb21lbmRlZC1pY29uJ1xuICAgICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUubWVudUFjdGl2ZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICRzY29wZS5tZW51LmFjdGl2ZSA9IGlkO1xuICAgIH1cbn0pO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGx5a2hhY2hvdiBvbiA2LzI2LzE3LlxuICovXG52aXNpb25lckFwcC5jb250cm9sbGVyKFwibW9kYWxDdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHRlbXBsYXRlQ2FjaGUpIHtcbiAgICAvL1RFTVBPUkFSWSBERUNJU0lPTlxuICAgICRzY29wZS51c2VycGFnZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcl9pZDogXCIgKyBpZCk7XG4gICAgfVxuICAgIG1vZGFsTGlzdGVuZXJzKCk7XG4gICAgJHNjb3BlLnRlbXBsYXRlID0gJyc7XG4gICAgJHNjb3BlLiRvbihcIm9wZW5Nb2RhbFwiLCBmdW5jdGlvbihldmVudCwgYXJncykge1xuICAgICAgICAkc2NvcGUudGVtcGxhdGUgPSBhcmdzLm1vZGFsVGVtcGxhdGVOYW1lO1xuICAgICAgICAkc2NvcGUuYXJncyA9IGFyZ3M7XG4gICAgICAgIHNob3dNb2RhbCgpO1xuICAgIH0pXG4gICAgZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgICAgICAkKFwiI21vZGFsLTFcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSkuY2hhbmdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vZGFsTGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbW9kYWwgbGlzdGVuZXJzJyk7XG4gICAgICAgICQoXCIjbW9kYWwtMVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm1vZGFsLW9wZW5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibW9kYWwtb3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtY2xvc2VcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJChcIi5tb2RhbC1zdGF0ZTpjaGVja2VkXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICRzY29wZS50ZW1wbGF0ZSA9IFwiXCI7XG4gICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcIi5tb2RhbC1pbm5lclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGx5a2hhY2hvdiBvbiA3LzkvMTcuXG4gKi9cbnZpc2lvbmVyQXBwLmNvbnRyb2xsZXIoJ1R5cGVhaGVhZEN0cmwnLCBbJyRzY29wZScsICckaHR0cCcsIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwKSB7XG4gICAgdmFyIF9zZWxlY3RlZDtcbiAgICAkc2NvcGUuc2VsZWN0ZWQgPSB1bmRlZmluZWQ7XG4gICAgJHNjb3BlLmdldExvY2F0aW9uID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJ2h0dHA6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbicsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHZhbCxcbiAgICAgICAgICAgICAgICBzZW5zb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAndWsnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgIHZhciBhZGRyZXNzZXMgPSBbXTtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXMuZGF0YS5yZXN1bHRzLCBmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiBpdGVtLmZvcm1hdHRlZF9hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogaXRlbS5nZW9tZXRyeVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWRkcmVzc2VzO1xuICAgICAgICB9KTtcbiAgICB9O1xufV0pO1xudmlzaW9uZXJBcHAuZGlyZWN0aXZlKFwibm9taW5hdGlvbnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHNjb3BlLmRhdGEgPSBzY29wZVthdHRyaWJ1dGVzW1wibm9taW5hdGlvbnNcIl1dO1xuICAgICAgICAgICAgICAgIHNjb3BlLmN1cnJlbnRGaWx0ZXIgPSBzY29wZS4kcGFyZW50LmFjdGl2ZUZpbHRlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvcG9zdC10ZW1wbGF0ZS5odG1sXCJcbiAgICAgICAgfTtcbiAgICB9KVxuLmNvbnRyb2xsZXIoXCJub21pbmF0aW9uc0N0cmxcIiwgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKSB7XG4gICAgJHNjb3BlLnBvc3RzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBvc3RfaWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcInBvc3RfdHlwZVwiOiBcImFydGljbGVcIixcbiAgICAgICAgICAgIFwidXNlcl9waWNfdXJsXCI6IFwiLi4vaW1nL3VzZXIuanBnXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwi0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiLFxuICAgICAgICAgICAgXCJwb3N0X2FkZF90aW1lXCI6IFwiMTQ5NjY4MDE0OFwiLFxuICAgICAgICAgICAgXCJ2aWV3c1wiOiBcIjEwXCIsXG4gICAgICAgICAgICBcImxpa2VzXCI6IFwiMTJcIixcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjogXCIyNFwiLFxuICAgICAgICAgICAgXCJ0b3BcIjogXCJjb21tZW50c1wiLFxuICAgICAgICAgICAgXCJwb3N0X3RpdGxlXCI6IFwi0J7RgiDQt9C90LDQvdC40Lkg0Log0L3QsNCy0YvQutCw0LxcIixcbiAgICAgICAgICAgIFwicG9zdF9jb250ZW50XCI6IFwi0KLQtdGF0L3QvtC70L7Qs9C40Lgg0Lgg0LzQtdGC0L7QtNGLINGA0LDQsdC+0YLRiyDRgdC10LPQvtC00L3RjyDQvNC10L3Rj9GO0YLRgdGPINC+0YfQtdC90Ywg0LHRi9GB0YLRgNC+LCDQuCDQstGB0LXQvCDQvdCw0Lwg0L/RgNC40YXQvtC00LjRgtGB0Y8g0L/QvtGB0YLQvtGP0L3QvdC+INGD0YfQuNGC0YzRgdGPLiDQnNC90L7Qs9C40LUg0LjQtyDQvdCw0YEg0L7QsdGD0YfQsNGO0YIg0LTRgNGD0LPQuNGFLCDQtNCw0LbQtSDQutC+0LPQtNCwINGN0YLQviDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YHQstGP0LfQsNC90L4g0YEg0L/RgNC+0YTQtdGB0YHQuNC10LkuINCd0L4g0LXRgdC70Lgg0LLRiyDRhdC+0YLRjCDRgNCw0Lcg0LfQsNGB0YvQv9Cw0LvQuCDQvdCw0LQg0YHQutGD0YfQvdGL0Lwg0YPRh9C10LHQvdC40LrQvtC8INC40LvQuCDQv9C10YDQtdC80LDRgtGL0LLQsNC70Lgg0YPRgtC+0LzQuNGC0LXQu9GM0L3QvtC1INGD0L/RgNCw0LbQvdC10L3QuNC1INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQv9C+0L3QuNC80LDQtdGC0LUsINGH0YLQviDRgdC+0LfQtNCw0YLRjCDRhdC+0YDQvtGI0LjQuSDQvtCx0YPRh9Cw0Y7RidC40Lkg0LzQsNGC0LXRgNC40LDQuyDRgdC70L7QttC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPINC90LAg0L/QtdGA0LLRi9C5INCy0LfQs9C70Y/QtFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicG9zdF9pZFwiOiBcIjFcIixcbiAgICAgICAgICAgIFwicG9zdF90eXBlXCI6IFwiYXJ0aWNsZVwiLFxuICAgICAgICAgICAgXCJ1c2VyX3BpY191cmxcIjogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBcInBvc3RfYWRkX3RpbWVcIjogXCIxNDk2NjgwMTQ4XCIsXG4gICAgICAgICAgICBcInZpZXdzXCI6IFwiMTBcIixcbiAgICAgICAgICAgIFwibGlrZXNcIjogXCIxMlwiLFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiBcIjI0XCIsXG4gICAgICAgICAgICBcInRvcFwiOiBcImNvbW1lbnRzXCIsXG4gICAgICAgICAgICBcInBvc3RfdGl0bGVcIjogXCLQntGCINC30L3QsNC90LjQuSDQuiDQvdCw0LLRi9C60LDQvFwiLFxuICAgICAgICAgICAgXCJwb3N0X2NvbnRlbnRcIjogXCLQotC10YXQvdC+0LvQvtCz0LjQuCDQuCDQvNC10YLQvtC00Ysg0YDQsNCx0L7RgtGLINGB0LXQs9C+0LTQvdGPINC80LXQvdGP0Y7RgtGB0Y8g0L7Rh9C10L3RjCDQsdGL0YHRgtGA0L4sINC4INCy0YHQtdC8INC90LDQvCDQv9GA0LjRhdC+0LTQuNGC0YHRjyDQv9C+0YHRgtC+0Y/QvdC90L4g0YPRh9C40YLRjNGB0Y8uINCc0L3QvtCz0LjQtSDQuNC3INC90LDRgSDQvtCx0YPRh9Cw0Y7RgiDQtNGA0YPQs9C40YUsINC00LDQttC1INC60L7Qs9C00LAg0Y3RgtC+INC90LDQv9GA0Y/QvNGD0Y4g0L3QtSDRgdCy0Y/Qt9Cw0L3QviDRgSDQv9GA0L7RhNC10YHRgdC40LXQuS4g0J3QviDQtdGB0LvQuCDQstGLINGF0L7RgtGMINGA0LDQtyDQt9Cw0YHRi9C/0LDQu9C4INC90LDQtCDRgdC60YPRh9C90YvQvCDRg9GH0LXQsdC90LjQutC+0Lwg0LjQu9C4INC/0LXRgNC10LzQsNGC0YvQstCw0LvQuCDRg9GC0L7QvNC40YLQtdC70YzQvdC+0LUg0YPQv9GA0LDQttC90LXQvdC40LUg0LIg0Y3Qu9C10LrRgtGA0L7QvdC90L7QvCDQutGD0YDRgdC1LCDQstGLINC/0L7QvdC40LzQsNC10YLQtSwg0YfRgtC+INGB0L7Qt9C00LDRgtGMINGF0L7RgNC+0YjQuNC5INC+0LHRg9GH0LDRjtGJ0LjQuSDQvNCw0YLQtdGA0LjQsNC7INGB0LvQvtC20L3QtdC1LCDRh9C10Lwg0LrQsNC20LXRgtGB0Y8g0L3QsCDQv9C10YDQstGL0Lkg0LLQt9Cz0LvRj9C0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwb3N0X2lkXCI6IFwiMVwiLFxuICAgICAgICAgICAgXCJwb3N0X3R5cGVcIjogXCJhcnRpY2xlXCIsXG4gICAgICAgICAgICBcInVzZXJfcGljX3VybFwiOiBcIi4uL2ltZy91c2VyLmpwZ1wiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIixcbiAgICAgICAgICAgIFwicG9zdF9hZGRfdGltZVwiOiBcIjE0OTY2ODAxNDhcIixcbiAgICAgICAgICAgIFwidmlld3NcIjogXCIxMFwiLFxuICAgICAgICAgICAgXCJsaWtlc1wiOiBcIjEyXCIsXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IFwiMjRcIixcbiAgICAgICAgICAgIFwidG9wXCI6IFwiY29tbWVudHNcIixcbiAgICAgICAgICAgIFwicG9zdF90aXRsZVwiOiBcItCe0YIg0LfQvdCw0L3QuNC5INC6INC90LDQstGL0LrQsNC8XCIsXG4gICAgICAgICAgICBcInBvc3RfY29udGVudFwiOiBcItCi0LXRhdC90L7Qu9C+0LPQuNC4INC4INC80LXRgtC+0LTRiyDRgNCw0LHQvtGC0Ysg0YHQtdCz0L7QtNC90Y8g0LzQtdC90Y/RjtGC0YHRjyDQvtGH0LXQvdGMINCx0YvRgdGC0YDQviwg0Lgg0LLRgdC10Lwg0L3QsNC8INC/0YDQuNGF0L7QtNC40YLRgdGPINC/0L7RgdGC0L7Rj9C90L3QviDRg9GH0LjRgtGM0YHRjy4g0JzQvdC+0LPQuNC1INC40Lcg0L3QsNGBINC+0LHRg9GH0LDRjtGCINC00YDRg9Cz0LjRhSwg0LTQsNC20LUg0LrQvtCz0LTQsCDRjdGC0L4g0L3QsNC/0YDRj9C80YPRjiDQvdC1INGB0LLRj9C30LDQvdC+INGBINC/0YDQvtGE0LXRgdGB0LjQtdC5LiDQndC+INC10YHQu9C4INCy0Ysg0YXQvtGC0Ywg0YDQsNC3INC30LDRgdGL0L/QsNC70Lgg0L3QsNC0INGB0LrRg9GH0L3Ri9C8INGD0YfQtdCx0L3QuNC60L7QvCDQuNC70Lgg0L/QtdGA0LXQvNCw0YLRi9Cy0LDQu9C4INGD0YLQvtC80LjRgtC10LvRjNC90L7QtSDRg9C/0YDQsNC20L3QtdC90LjQtSDQsiDRjdC70LXQutGC0YDQvtC90L3QvtC8INC60YPRgNGB0LUsINCy0Ysg0L/QvtC90LjQvNCw0LXRgtC1LCDRh9GC0L4g0YHQvtC30LTQsNGC0Ywg0YXQvtGA0L7RiNC40Lkg0L7QsdGD0YfQsNGO0YnQuNC5INC80LDRgtC10YDQuNCw0Lsg0YHQu9C+0LbQvdC10LUsINGH0LXQvCDQutCw0LbQtdGC0YHRjyDQvdCwINC/0LXRgNCy0YvQuSDQstC30LPQu9GP0LRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBvc3RfaWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcInBvc3RfdHlwZVwiOiBcImFydGljbGVcIixcbiAgICAgICAgICAgIFwidXNlcl9waWNfdXJsXCI6IFwiLi4vaW1nL3VzZXIuanBnXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwi0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiLFxuICAgICAgICAgICAgXCJwb3N0X2FkZF90aW1lXCI6IFwiMTQ5NjY4MDE0OFwiLFxuICAgICAgICAgICAgXCJ2aWV3c1wiOiBcIjEwXCIsXG4gICAgICAgICAgICBcImxpa2VzXCI6IFwiMTJcIixcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjogXCIyNFwiLFxuICAgICAgICAgICAgXCJ0b3BcIjogXCJjb21tZW50c1wiLFxuICAgICAgICAgICAgXCJwb3N0X3RpdGxlXCI6IFwi0J7RgiDQt9C90LDQvdC40Lkg0Log0L3QsNCy0YvQutCw0LxcIixcbiAgICAgICAgICAgIFwicG9zdF9jb250ZW50XCI6IFwi0KLQtdGF0L3QvtC70L7Qs9C40Lgg0Lgg0LzQtdGC0L7QtNGLINGA0LDQsdC+0YLRiyDRgdC10LPQvtC00L3RjyDQvNC10L3Rj9GO0YLRgdGPINC+0YfQtdC90Ywg0LHRi9GB0YLRgNC+LCDQuCDQstGB0LXQvCDQvdCw0Lwg0L/RgNC40YXQvtC00LjRgtGB0Y8g0L/QvtGB0YLQvtGP0L3QvdC+INGD0YfQuNGC0YzRgdGPLiDQnNC90L7Qs9C40LUg0LjQtyDQvdCw0YEg0L7QsdGD0YfQsNGO0YIg0LTRgNGD0LPQuNGFLCDQtNCw0LbQtSDQutC+0LPQtNCwINGN0YLQviDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YHQstGP0LfQsNC90L4g0YEg0L/RgNC+0YTQtdGB0YHQuNC10LkuINCd0L4g0LXRgdC70Lgg0LLRiyDRhdC+0YLRjCDRgNCw0Lcg0LfQsNGB0YvQv9Cw0LvQuCDQvdCw0LQg0YHQutGD0YfQvdGL0Lwg0YPRh9C10LHQvdC40LrQvtC8INC40LvQuCDQv9C10YDQtdC80LDRgtGL0LLQsNC70Lgg0YPRgtC+0LzQuNGC0LXQu9GM0L3QvtC1INGD0L/RgNCw0LbQvdC10L3QuNC1INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQv9C+0L3QuNC80LDQtdGC0LUsINGH0YLQviDRgdC+0LfQtNCw0YLRjCDRhdC+0YDQvtGI0LjQuSDQvtCx0YPRh9Cw0Y7RidC40Lkg0LzQsNGC0LXRgNC40LDQuyDRgdC70L7QttC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPINC90LAg0L/QtdGA0LLRi9C5INCy0LfQs9C70Y/QtFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicG9zdF9pZFwiOiBcIjJcIixcbiAgICAgICAgICAgIFwicG9zdF90eXBlXCI6IFwiYm9va1wiLFxuICAgICAgICAgICAgXCJ1c2VyX3BpY191cmxcIjogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBcInBvc3RfYWRkX3RpbWVcIjogXCIxNDk0NDI4MDQ4XCIsXG4gICAgICAgICAgICBcInZpZXdzXCI6IFwiMTBcIixcbiAgICAgICAgICAgIFwibGlrZXNcIjogXCIxMVwiLFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiBcIjI0XCIsXG4gICAgICAgICAgICBcInRvcFwiOiBcImxpa2VzXCIsXG4gICAgICAgICAgICBcInBvc3RfdGl0bGVcIjogXCLQndCw0LfQstCw0L3QuNC1INC/0L7RgdGC0LBcIixcbiAgICAgICAgICAgIFwicG9zdF9jb250ZW50XCI6IFwi0KLQtdGF0L3QvtC70L7Qs9C40Lgg0Lgg0LzQtdGC0L7QtNGLINGA0LDQsdC+0YLRiyDRgdC10LPQvtC00L3RjyDQvNC10L3Rj9GO0YLRgdGPINC+0YfQtdC90Ywg0LHRi9GB0YLRgNC+LCDQuCDQstGB0LXQvCDQvdCw0Lwg0L/RgNC40YXQvtC00LjRgtGB0Y8g0L/QvtGB0YLQvtGP0L3QvdC+INGD0YfQuNGC0YzRgdGPLiDQnNC90L7Qs9C40LUg0LjQtyDQvdCw0YEg0L7QsdGD0YfQsNGO0YIg0LTRgNGD0LPQuNGFLCDQtNCw0LbQtSDQutC+0LPQtNCwINGN0YLQviDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YHQstGP0LfQsNC90L4g0YEg0L/RgNC+0YTQtdGB0YHQuNC10LkuINCd0L4g0LXRgdC70Lgg0LLRiyDRhdC+0YLRjCDRgNCw0Lcg0LfQsNGB0YvQv9Cw0LvQuCDQvdCw0LQg0YHQutGD0YfQvdGL0Lwg0YPRh9C10LHQvdC40LrQvtC8INC40LvQuCDQv9C10YDQtdC80LDRgtGL0LLQsNC70Lgg0YPRgtC+0LzQuNGC0LXQu9GM0L3QvtC1INGD0L/RgNCw0LbQvdC10L3QuNC1INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQv9C+0L3QuNC80LDQtdGC0LUsINGH0YLQviDRgdC+0LfQtNCw0YLRjCDRhdC+0YDQvtGI0LjQuSDQvtCx0YPRh9Cw0Y7RidC40Lkg0LzQsNGC0LXRgNC40LDQuyDRgdC70L7QttC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPINC90LAg0L/QtdGA0LLRi9C5INCy0LfQs9C70Y/QtCAxMjNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBvc3RfaWRcIjogXCIyXCIsXG4gICAgICAgICAgICBcInBvc3RfdHlwZVwiOiBcImJvb2tcIixcbiAgICAgICAgICAgIFwidXNlcl9waWNfdXJsXCI6IFwiLi4vaW1nL3VzZXIuanBnXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwi0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiLFxuICAgICAgICAgICAgXCJwb3N0X2FkZF90aW1lXCI6IFwiMTQ5NDQyODA0OFwiLFxuICAgICAgICAgICAgXCJ2aWV3c1wiOiBcIjEwXCIsXG4gICAgICAgICAgICBcImxpa2VzXCI6IFwiMTFcIixcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjogXCIyNFwiLFxuICAgICAgICAgICAgXCJ0b3BcIjogXCJsaWtlc1wiLFxuICAgICAgICAgICAgXCJwb3N0X3RpdGxlXCI6IFwi0J3QsNC30LLQsNC90LjQtSDQv9C+0YHRgtCwXCIsXG4gICAgICAgICAgICBcInBvc3RfY29udGVudFwiOiBcItCi0LXRhdC90L7Qu9C+0LPQuNC4INC4INC80LXRgtC+0LTRiyDRgNCw0LHQvtGC0Ysg0YHQtdCz0L7QtNC90Y8g0LzQtdC90Y/RjtGC0YHRjyDQvtGH0LXQvdGMINCx0YvRgdGC0YDQviwg0Lgg0LLRgdC10Lwg0L3QsNC8INC/0YDQuNGF0L7QtNC40YLRgdGPINC/0L7RgdGC0L7Rj9C90L3QviDRg9GH0LjRgtGM0YHRjy4g0JzQvdC+0LPQuNC1INC40Lcg0L3QsNGBINC+0LHRg9GH0LDRjtGCINC00YDRg9Cz0LjRhSwg0LTQsNC20LUg0LrQvtCz0LTQsCDRjdGC0L4g0L3QsNC/0YDRj9C80YPRjiDQvdC1INGB0LLRj9C30LDQvdC+INGBINC/0YDQvtGE0LXRgdGB0LjQtdC5LiDQndC+INC10YHQu9C4INCy0Ysg0YXQvtGC0Ywg0YDQsNC3INC30LDRgdGL0L/QsNC70Lgg0L3QsNC0INGB0LrRg9GH0L3Ri9C8INGD0YfQtdCx0L3QuNC60L7QvCDQuNC70Lgg0L/QtdGA0LXQvNCw0YLRi9Cy0LDQu9C4INGD0YLQvtC80LjRgtC10LvRjNC90L7QtSDRg9C/0YDQsNC20L3QtdC90LjQtSDQsiDRjdC70LXQutGC0YDQvtC90L3QvtC8INC60YPRgNGB0LUsINCy0Ysg0L/QvtC90LjQvNCw0LXRgtC1LCDRh9GC0L4g0YHQvtC30LTQsNGC0Ywg0YXQvtGA0L7RiNC40Lkg0L7QsdGD0YfQsNGO0YnQuNC5INC80LDRgtC10YDQuNCw0Lsg0YHQu9C+0LbQvdC10LUsINGH0LXQvCDQutCw0LbQtdGC0YHRjyDQvdCwINC/0LXRgNCy0YvQuSDQstC30LPQu9GP0LQgMTIzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwb3N0X2lkXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJwb3N0X3R5cGVcIjogXCJib29rXCIsXG4gICAgICAgICAgICBcInVzZXJfcGljX3VybFwiOiBcIi4uL2ltZy91c2VyLmpwZ1wiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIixcbiAgICAgICAgICAgIFwicG9zdF9hZGRfdGltZVwiOiBcIjE0OTQ0MjgwNDhcIixcbiAgICAgICAgICAgIFwidmlld3NcIjogXCIxMFwiLFxuICAgICAgICAgICAgXCJsaWtlc1wiOiBcIjExXCIsXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IFwiMjRcIixcbiAgICAgICAgICAgIFwidG9wXCI6IFwibGlrZXNcIixcbiAgICAgICAgICAgIFwicG9zdF90aXRsZVwiOiBcItCd0LDQt9Cy0LDQvdC40LUg0L/QvtGB0YLQsFwiLFxuICAgICAgICAgICAgXCJwb3N0X2NvbnRlbnRcIjogXCLQotC10YXQvdC+0LvQvtCz0LjQuCDQuCDQvNC10YLQvtC00Ysg0YDQsNCx0L7RgtGLINGB0LXQs9C+0LTQvdGPINC80LXQvdGP0Y7RgtGB0Y8g0L7Rh9C10L3RjCDQsdGL0YHRgtGA0L4sINC4INCy0YHQtdC8INC90LDQvCDQv9GA0LjRhdC+0LTQuNGC0YHRjyDQv9C+0YHRgtC+0Y/QvdC90L4g0YPRh9C40YLRjNGB0Y8uINCc0L3QvtCz0LjQtSDQuNC3INC90LDRgSDQvtCx0YPRh9Cw0Y7RgiDQtNGA0YPQs9C40YUsINC00LDQttC1INC60L7Qs9C00LAg0Y3RgtC+INC90LDQv9GA0Y/QvNGD0Y4g0L3QtSDRgdCy0Y/Qt9Cw0L3QviDRgSDQv9GA0L7RhNC10YHRgdC40LXQuS4g0J3QviDQtdGB0LvQuCDQstGLINGF0L7RgtGMINGA0LDQtyDQt9Cw0YHRi9C/0LDQu9C4INC90LDQtCDRgdC60YPRh9C90YvQvCDRg9GH0LXQsdC90LjQutC+0Lwg0LjQu9C4INC/0LXRgNC10LzQsNGC0YvQstCw0LvQuCDRg9GC0L7QvNC40YLQtdC70YzQvdC+0LUg0YPQv9GA0LDQttC90LXQvdC40LUg0LIg0Y3Qu9C10LrRgtGA0L7QvdC90L7QvCDQutGD0YDRgdC1LCDQstGLINC/0L7QvdC40LzQsNC10YLQtSwg0YfRgtC+INGB0L7Qt9C00LDRgtGMINGF0L7RgNC+0YjQuNC5INC+0LHRg9GH0LDRjtGJ0LjQuSDQvNCw0YLQtdGA0LjQsNC7INGB0LvQvtC20L3QtdC1LCDRh9C10Lwg0LrQsNC20LXRgtGB0Y8g0L3QsCDQv9C10YDQstGL0Lkg0LLQt9Cz0LvRj9C0IDEyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicG9zdF9pZFwiOiBcIjJcIixcbiAgICAgICAgICAgIFwicG9zdF90eXBlXCI6IFwiYm9va1wiLFxuICAgICAgICAgICAgXCJ1c2VyX3BpY191cmxcIjogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBcInBvc3RfYWRkX3RpbWVcIjogXCIxNDk0NDI4MDQ4XCIsXG4gICAgICAgICAgICBcInZpZXdzXCI6IFwiMTBcIixcbiAgICAgICAgICAgIFwibGlrZXNcIjogXCIxMVwiLFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiBcIjI0XCIsXG4gICAgICAgICAgICBcInRvcFwiOiBcImxpa2VzXCIsXG4gICAgICAgICAgICBcInBvc3RfdGl0bGVcIjogXCLQndCw0LfQstCw0L3QuNC1INC/0L7RgdGC0LBcIixcbiAgICAgICAgICAgIFwicG9zdF9jb250ZW50XCI6IFwi0KLQtdGF0L3QvtC70L7Qs9C40Lgg0Lgg0LzQtdGC0L7QtNGLINGA0LDQsdC+0YLRiyDRgdC10LPQvtC00L3RjyDQvNC10L3Rj9GO0YLRgdGPINC+0YfQtdC90Ywg0LHRi9GB0YLRgNC+LCDQuCDQstGB0LXQvCDQvdCw0Lwg0L/RgNC40YXQvtC00LjRgtGB0Y8g0L/QvtGB0YLQvtGP0L3QvdC+INGD0YfQuNGC0YzRgdGPLiDQnNC90L7Qs9C40LUg0LjQtyDQvdCw0YEg0L7QsdGD0YfQsNGO0YIg0LTRgNGD0LPQuNGFLCDQtNCw0LbQtSDQutC+0LPQtNCwINGN0YLQviDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YHQstGP0LfQsNC90L4g0YEg0L/RgNC+0YTQtdGB0YHQuNC10LkuINCd0L4g0LXRgdC70Lgg0LLRiyDRhdC+0YLRjCDRgNCw0Lcg0LfQsNGB0YvQv9Cw0LvQuCDQvdCw0LQg0YHQutGD0YfQvdGL0Lwg0YPRh9C10LHQvdC40LrQvtC8INC40LvQuCDQv9C10YDQtdC80LDRgtGL0LLQsNC70Lgg0YPRgtC+0LzQuNGC0LXQu9GM0L3QvtC1INGD0L/RgNCw0LbQvdC10L3QuNC1INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQv9C+0L3QuNC80LDQtdGC0LUsINGH0YLQviDRgdC+0LfQtNCw0YLRjCDRhdC+0YDQvtGI0LjQuSDQvtCx0YPRh9Cw0Y7RidC40Lkg0LzQsNGC0LXRgNC40LDQuyDRgdC70L7QttC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPINC90LAg0L/QtdGA0LLRi9C5INCy0LfQs9C70Y/QtCAxMjNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBvc3RfaWRcIjogXCIzXCIsXG4gICAgICAgICAgICBcInBvc3RfdHlwZVwiOiBcInN0YXRlbWVudFwiLFxuICAgICAgICAgICAgXCJ1c2VyX3BpY191cmxcIjogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBcInBvc3RfYWRkX3RpbWVcIjogXCIxNDk0MzE2MDQ4XCIsXG4gICAgICAgICAgICBcInZpZXdzXCI6IFwiMTBcIixcbiAgICAgICAgICAgIFwibGlrZXNcIjogXCIxMVwiLFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiBcIjI0XCIsXG4gICAgICAgICAgICBcInRvcFwiOiBcInZpZXdzXCIsXG4gICAgICAgICAgICBcInBvc3RfdGl0bGVcIjogXCLQndCw0LfQstCw0L3QuNC1INC/0L7RgdGC0LBcIixcbiAgICAgICAgICAgIFwicG9zdF9jb250ZW50XCI6IFwi0KLQtdGF0L3QvtC70L7Qs9C40Lgg0Lgg0LzQtdGC0L7QtNGLINGA0LDQsdC+0YLRiyDRgdC10LPQvtC00L3RjyDQvNC10L3Rj9GO0YLRgdGPINC+0YfQtdC90Ywg0LHRi9GB0YLRgNC+LCDQuCDQstGB0LXQvCDQvdCw0Lwg0L/RgNC40YXQvtC00LjRgtGB0Y8g0L/QvtGB0YLQvtGP0L3QvdC+INGD0YfQuNGC0YzRgdGPLiDQnNC90L7Qs9C40LUg0LjQtyDQvdCw0YEg0L7QsdGD0YfQsNGO0YIg0LTRgNGD0LPQuNGFLCDQtNCw0LbQtSDQutC+0LPQtNCwINGN0YLQviDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YHQstGP0LfQsNC90L4g0YEg0L/RgNC+0YTQtdGB0YHQuNC10LkuINCd0L4g0LXRgdC70Lgg0LLRiyDRhdC+0YLRjCDRgNCw0Lcg0LfQsNGB0YvQv9Cw0LvQuCDQvdCw0LQg0YHQutGD0YfQvdGL0Lwg0YPRh9C10LHQvdC40LrQvtC8INC40LvQuCDQv9C10YDQtdC80LDRgtGL0LLQsNC70Lgg0YPRgtC+0LzQuNGC0LXQu9GM0L3QvtC1INGD0L/RgNCw0LbQvdC10L3QuNC1INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQv9C+0L3QuNC80LDQtdGC0LUsINGH0YLQviDRgdC+0LfQtNCw0YLRjCDRhdC+0YDQvtGI0LjQuSDQvtCx0YPRh9Cw0Y7RidC40Lkg0LzQsNGC0LXRgNC40LDQuyDRgdC70L7QttC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPINC90LAg0L/QtdGA0LLRi9C5INCy0LfQs9C70Y/QtCAxMjNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBvc3RfaWRcIjogXCIzXCIsXG4gICAgICAgICAgICBcInBvc3RfdHlwZVwiOiBcInN0YXRlbWVudFwiLFxuICAgICAgICAgICAgXCJ1c2VyX3BpY191cmxcIjogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBcInBvc3RfYWRkX3RpbWVcIjogXCIxNDk0MzE2MDQ4XCIsXG4gICAgICAgICAgICBcInZpZXdzXCI6IFwiMTBcIixcbiAgICAgICAgICAgIFwibGlrZXNcIjogXCIxMVwiLFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiBcIjI0XCIsXG4gICAgICAgICAgICBcInRvcFwiOiBcInZpZXdzXCIsXG4gICAgICAgICAgICBcInBvc3RfdGl0bGVcIjogXCLQndCw0LfQstCw0L3QuNC1INC/0L7RgdGC0LBcIixcbiAgICAgICAgICAgIFwicG9zdF9jb250ZW50XCI6IFwi0KLQtdGF0L3QvtC70L7Qs9C40Lgg0Lgg0LzQtdGC0L7QtNGLINGA0LDQsdC+0YLRiyDRgdC10LPQvtC00L3RjyDQvNC10L3Rj9GO0YLRgdGPINC+0YfQtdC90Ywg0LHRi9GB0YLRgNC+LCDQuCDQstGB0LXQvCDQvdCw0Lwg0L/RgNC40YXQvtC00LjRgtGB0Y8g0L/QvtGB0YLQvtGP0L3QvdC+INGD0YfQuNGC0YzRgdGPLiDQnNC90L7Qs9C40LUg0LjQtyDQvdCw0YEg0L7QsdGD0YfQsNGO0YIg0LTRgNGD0LPQuNGFLCDQtNCw0LbQtSDQutC+0LPQtNCwINGN0YLQviDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YHQstGP0LfQsNC90L4g0YEg0L/RgNC+0YTQtdGB0YHQuNC10LkuINCd0L4g0LXRgdC70Lgg0LLRiyDRhdC+0YLRjCDRgNCw0Lcg0LfQsNGB0YvQv9Cw0LvQuCDQvdCw0LQg0YHQutGD0YfQvdGL0Lwg0YPRh9C10LHQvdC40LrQvtC8INC40LvQuCDQv9C10YDQtdC80LDRgtGL0LLQsNC70Lgg0YPRgtC+0LzQuNGC0LXQu9GM0L3QvtC1INGD0L/RgNCw0LbQvdC10L3QuNC1INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQv9C+0L3QuNC80LDQtdGC0LUsINGH0YLQviDRgdC+0LfQtNCw0YLRjCDRhdC+0YDQvtGI0LjQuSDQvtCx0YPRh9Cw0Y7RidC40Lkg0LzQsNGC0LXRgNC40LDQuyDRgdC70L7QttC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPINC90LAg0L/QtdGA0LLRi9C5INCy0LfQs9C70Y/QtCAxMjNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBvc3RfaWRcIjogXCIzXCIsXG4gICAgICAgICAgICBcInBvc3RfdHlwZVwiOiBcInN0YXRlbWVudFwiLFxuICAgICAgICAgICAgXCJ1c2VyX3BpY191cmxcIjogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBcInBvc3RfYWRkX3RpbWVcIjogXCIxNDk0MzE2MDQ4XCIsXG4gICAgICAgICAgICBcInZpZXdzXCI6IFwiMTBcIixcbiAgICAgICAgICAgIFwibGlrZXNcIjogXCIxMVwiLFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiBcIjI0XCIsXG4gICAgICAgICAgICBcInRvcFwiOiBcInZpZXdzXCIsXG4gICAgICAgICAgICBcInBvc3RfdGl0bGVcIjogXCLQndCw0LfQstCw0L3QuNC1INC/0L7RgdGC0LBcIixcbiAgICAgICAgICAgIFwicG9zdF9jb250ZW50XCI6IFwi0KLQtdGF0L3QvtC70L7Qs9C40Lgg0Lgg0LzQtdGC0L7QtNGLINGA0LDQsdC+0YLRiyDRgdC10LPQvtC00L3RjyDQvNC10L3Rj9GO0YLRgdGPINC+0YfQtdC90Ywg0LHRi9GB0YLRgNC+LCDQuCDQstGB0LXQvCDQvdCw0Lwg0L/RgNC40YXQvtC00LjRgtGB0Y8g0L/QvtGB0YLQvtGP0L3QvdC+INGD0YfQuNGC0YzRgdGPLiDQnNC90L7Qs9C40LUg0LjQtyDQvdCw0YEg0L7QsdGD0YfQsNGO0YIg0LTRgNGD0LPQuNGFLCDQtNCw0LbQtSDQutC+0LPQtNCwINGN0YLQviDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YHQstGP0LfQsNC90L4g0YEg0L/RgNC+0YTQtdGB0YHQuNC10LkuINCd0L4g0LXRgdC70Lgg0LLRiyDRhdC+0YLRjCDRgNCw0Lcg0LfQsNGB0YvQv9Cw0LvQuCDQvdCw0LQg0YHQutGD0YfQvdGL0Lwg0YPRh9C10LHQvdC40LrQvtC8INC40LvQuCDQv9C10YDQtdC80LDRgtGL0LLQsNC70Lgg0YPRgtC+0LzQuNGC0LXQu9GM0L3QvtC1INGD0L/RgNCw0LbQvdC10L3QuNC1INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQv9C+0L3QuNC80LDQtdGC0LUsINGH0YLQviDRgdC+0LfQtNCw0YLRjCDRhdC+0YDQvtGI0LjQuSDQvtCx0YPRh9Cw0Y7RidC40Lkg0LzQsNGC0LXRgNC40LDQuyDRgdC70L7QttC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPINC90LAg0L/QtdGA0LLRi9C5INCy0LfQs9C70Y/QtCAxMjNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBvc3RfaWRcIjogXCIzXCIsXG4gICAgICAgICAgICBcInBvc3RfdHlwZVwiOiBcInN0YXRlbWVudFwiLFxuICAgICAgICAgICAgXCJ1c2VyX3BpY191cmxcIjogXCIuLi9pbWcvdXNlci5qcGdcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIsXG4gICAgICAgICAgICBcInBvc3RfYWRkX3RpbWVcIjogXCIxNDk0MzE2MDQ4XCIsXG4gICAgICAgICAgICBcInZpZXdzXCI6IFwiMTBcIixcbiAgICAgICAgICAgIFwibGlrZXNcIjogXCIxMVwiLFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiBcIjI0XCIsXG4gICAgICAgICAgICBcInRvcFwiOiBcInZpZXdzXCIsXG4gICAgICAgICAgICBcInBvc3RfdGl0bGVcIjogXCLQndCw0LfQstCw0L3QuNC1INC/0L7RgdGC0LBcIixcbiAgICAgICAgICAgIFwicG9zdF9jb250ZW50XCI6IFwi0KLQtdGF0L3QvtC70L7Qs9C40Lgg0Lgg0LzQtdGC0L7QtNGLINGA0LDQsdC+0YLRiyDRgdC10LPQvtC00L3RjyDQvNC10L3Rj9GO0YLRgdGPINC+0YfQtdC90Ywg0LHRi9GB0YLRgNC+LCDQuCDQstGB0LXQvCDQvdCw0Lwg0L/RgNC40YXQvtC00LjRgtGB0Y8g0L/QvtGB0YLQvtGP0L3QvdC+INGD0YfQuNGC0YzRgdGPLiDQnNC90L7Qs9C40LUg0LjQtyDQvdCw0YEg0L7QsdGD0YfQsNGO0YIg0LTRgNGD0LPQuNGFLCDQtNCw0LbQtSDQutC+0LPQtNCwINGN0YLQviDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YHQstGP0LfQsNC90L4g0YEg0L/RgNC+0YTQtdGB0YHQuNC10LkuINCd0L4g0LXRgdC70Lgg0LLRiyDRhdC+0YLRjCDRgNCw0Lcg0LfQsNGB0YvQv9Cw0LvQuCDQvdCw0LQg0YHQutGD0YfQvdGL0Lwg0YPRh9C10LHQvdC40LrQvtC8INC40LvQuCDQv9C10YDQtdC80LDRgtGL0LLQsNC70Lgg0YPRgtC+0LzQuNGC0LXQu9GM0L3QvtC1INGD0L/RgNCw0LbQvdC10L3QuNC1INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQv9C+0L3QuNC80LDQtdGC0LUsINGH0YLQviDRgdC+0LfQtNCw0YLRjCDRhdC+0YDQvtGI0LjQuSDQvtCx0YPRh9Cw0Y7RidC40Lkg0LzQsNGC0LXRgNC40LDQuyDRgdC70L7QttC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPINC90LAg0L/QtdGA0LLRi9C5INCy0LfQs9C70Y/QtCAxMjNcIlxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICAvL1RFTVBPUkFSWSBERUNJU0lPTlxuICAgICRzY29wZS51c2VycGFnZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcl9pZDogXCIgKyBpZCk7XG4gICAgfVxuXG4gICAgJHNjb3BlLiRvbihcImZpbHRlckNoYW5nZUV2ZW50XCIsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xuICAgICAgICAkc2NvcGUuY3VycmVudEZpbHRlciA9ICRzY29wZS4kcGFyZW50LmFjdGl2ZUZpbHRlcjtcbiAgICB9KTtcbiAgICAkc2NvcGUucG9zdHNGaWx0ZXIgPSBmdW5jdGlvbihwb3N0VHlwZSkge1xuICAgICAgICBpZiAoJHNjb3BlLmN1cnJlbnRGaWx0ZXIgPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5jdXJyZW50RmlsdGVyLnNsaWNlKDAsLTEpID09IHBvc3RUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLnRpbWVBZ28gPSBmdW5jdGlvbihnaXZlbl90aW1lKSB7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVzID0ge1xuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiINGC0L7QvNGDXCIsXG4gICAgICAgICAgICAgICAgc2Vjb25kczogXCLQvNC10L3RiCDQvdGW0LYg0YXQstC40LvQuNC90YNcIixcbiAgICAgICAgICAgICAgICBtaW51dGU6IFwi0YXQstC40LvQuNC90YNcIixcbiAgICAgICAgICAgICAgICBtaW51dGVzOiBcItCx0LvQuNC30YzQutC+ICVkINGF0LLQuNC70LjQvVwiLFxuICAgICAgICAgICAgICAgIGhvdXI6IFwi0LPQvtC00LjQvdGDXCIsXG4gICAgICAgICAgICAgICAgaG91cnM6IFwi0LHQu9C40LfRjNC60L4gJWQg0LPQvtC00LjQvVwiLFxuICAgICAgICAgICAgICAgIGRheTogXCLQtNC10L3RjFwiLFxuICAgICAgICAgICAgICAgIGRheXM6IFwi0LHQu9C40LfRjNC60L4gJWQg0LTQvdGW0LJcIixcbiAgICAgICAgICAgICAgICBtb250aDogXCLQvNGW0YHRj9GG0YxcIixcbiAgICAgICAgICAgICAgICBtb250aHM6IFwi0LHQu9C40LfRjNC60L4gJWQg0LzRltGB0Y/RhtGW0LJcIixcbiAgICAgICAgICAgICAgICB5ZWFyOiBcItGA0ZbQulwiLFxuICAgICAgICAgICAgICAgIHllYXJzOiBcItCx0LvQuNC30YzQutC+ICVkINGA0L7QutGW0LJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVzW3RdICYmIHRlbXBsYXRlc1t0XS5yZXBsYWNlKC8lZC9pLCBNYXRoLmFicyhNYXRoLnJvdW5kKG4pKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgdGltZXIgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aW1lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGltZSA9IHRpbWUucmVwbGFjZSgvXFwuXFxkKy8sIFwiXCIpOyAvLyByZW1vdmUgbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICAgICAgdGltZSA9IHRpbWUucmVwbGFjZSgvLS8sIFwiL1wiKS5yZXBsYWNlKC8tLywgXCIvXCIpO1xuICAgICAgICAgICAgICAgIHRpbWUgPSB0aW1lLnJlcGxhY2UoL1QvLCBcIiBcIikucmVwbGFjZSgvWi8sIFwiIFVUQ1wiKTtcbiAgICAgICAgICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKC8oW1xcK1xcLV1cXGRcXGQpXFw6PyhcXGRcXGQpLywgXCIgJDEkMlwiKTsgLy8gLTA0OjAwIC0+IC0wNDAwXG4gICAgICAgICAgICAgICAgdGltZSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwIHx8IHRpbWUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHNlY29uZHMgPSAoKG5vdy5nZXRUaW1lKCkgLSB0aW1lKSAqIDAuMDAxKSA+PiAwO1xuICAgICAgICAgICAgICAgIHZhciBtaW51dGVzID0gc2Vjb25kcyAvIDYwO1xuICAgICAgICAgICAgICAgIHZhciBob3VycyA9IG1pbnV0ZXMgLyA2MDtcbiAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IGhvdXJzIC8gMjQ7XG4gICAgICAgICAgICAgICAgdmFyIHllYXJzID0gZGF5cyAvIDM2NTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXMucHJlZml4ICsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA8IDQ1ICYmIHRlbXBsYXRlKCdzZWNvbmRzJywgc2Vjb25kcykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPCA5MCAmJiB0ZW1wbGF0ZSgnbWludXRlJywgMSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPCA0NSAmJiB0ZW1wbGF0ZSgnbWludXRlcycsIG1pbnV0ZXMpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzIDwgOTAgJiYgdGVtcGxhdGUoJ2hvdXInLCAxKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPCAyNCAmJiB0ZW1wbGF0ZSgnaG91cnMnLCBob3VycykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzIDwgNDIgJiYgdGVtcGxhdGUoJ2RheScsIDEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzIDwgMzAgJiYgdGVtcGxhdGUoJ2RheXMnLCBkYXlzKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5cyA8IDQ1ICYmIHRlbXBsYXRlKCdtb250aCcsIDEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzIDwgMzY1ICYmIHRlbXBsYXRlKCdtb250aHMnLCBkYXlzIC8gMzApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFycyA8IDEuNSAmJiB0ZW1wbGF0ZSgneWVhcicsIDEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSgneWVhcnMnLCB5ZWFycylcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKyB0ZW1wbGF0ZXMuc3VmZml4O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucG9zdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkc2NvcGUucG9zdHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkdGhpcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudGltZV9hZ28gPSB0aW1lcigkdGhpcy5wb3N0X2FkZF90aW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGltZSBldmVyeSBtaW51dGVcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoJHNjb3BlLnRpbWVBZ28sIDEwMDAwKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCRzY29wZS5wb3N0cyk7XG4gICAgfTtcbiAgICAkc2NvcGUudGltZUFnbygpO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUudGltZUFnbygpO1xuICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgIH0sIDEwMDAwKTtcblxuICAgICRzY29wZS5zaG93RnVsbFBvc3QgPSBmdW5jdGlvbiAoY3VycmVudFBvc3QpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KFwib3Blbk1vZGFsXCIsIHtcbiAgICAgICAgICAgIG1vZGFsVGVtcGxhdGVOYW1lOiBcImZ1bGwtcG9zdC1tb2RhbFwiLFxuICAgICAgICAgICAgZnVsbFBvc3Q6IGN1cnJlbnRQb3N0XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGx5a2hhY2hvdiBvbiA2LzE5LzE3LlxuICovXG52aXNpb25lckFwcFxuLmRpcmVjdGl2ZShcImZvbGxvd2Vyc1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgc2NvcGUuZGF0YSA9IHNjb3BlW2F0dHJpYnV0ZXNbXCJmb2xsb3dlcnNcIl1dO1xuICAgICAgICB9LFxuICAgICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcInRlbXBsYXRlcy9mb2xsb3dlcnMuaHRtbFwiXG4gICAgfVxufSlcbi5jb250cm9sbGVyKFwiZm9sbG93ZXJzQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRodHRwKSB7XG4gICAgJHNjb3BlLmZvcm0gPSB7XG4gICAgICAgIHVzZXJQaWNVcmw6IFwiLi4vaW1nL3VzZXIuanBnXCIsXG4gICAgICAgIG5hbWU6IFwi0JjQvNGPXCIsXG4gICAgICAgIHN1cm5hbWU6IFwi0KTQsNC80LjQu9C40Y9cIixcbiAgICAgICAgaW50ZXJlc3RBcmVhOiBcItCh0YTQtdGA0LAg0LjQvdGC0LXRgNC10YHQvtCyXCIsXG4gICAgICAgIHdvcms6IFwi0JzQtdGB0YLQviDRgNCw0LHQvtGC0YtcIixcbiAgICAgICAgZWR1Y2F0aW9uOiBcItCe0LHRgNCw0LfQvtCy0LDQvdC40LVcIixcbiAgICAgICAgY3JlZG86IFwi0JrRgNC10LTQvlwiLFxuICAgICAgICB0ZWw6IHtcbiAgICAgICAgICAgIGRhdGE6IFwiMDUwMTIzMTEyMlwiLFxuICAgICAgICAgICAgY29uZmlkZW50OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGJpcnRoOiB7XG4gICAgICAgICAgICBkYXRhOiBcIjEyMzQtMTItMTJcIixcbiAgICAgICAgICAgIGNvbmZpZGVudDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgZGF0YTogXCJhc2ZhZGZAYWRzY2YuY29tXCIsXG4gICAgICAgICAgICBjb25maWRlbnQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcHJvSW50ZXJlc3RzOiBbXSxcbiAgICAgICAgcGVyc29uYWxJbnRlcmVzdHM6IFtdLFxuICAgICAgICBjb3VudHJ5OiBcItCh0YLRgNCw0L3QsFwiLFxuICAgICAgICBjaXR5OiBcItCT0L7RgNC+0LRcIixcbiAgICAgICAgZmF2b3JpdGVCb29rczogW10sXG4gICAgICAgIGZhdm9yaXRlRmlsbXM6IFtdXG4gICAgfTtcbiAgICAkc2NvcGUuZm9sbG93ZXJzID0gWzEsMiwzXTtcbiAgICAkc2NvcGUuc2hvd1VzZXJJbmZvID0gZnVuY3Rpb24oaSkge1xuICAgICAgICAkKCcudXNlci1pbmZvIC5oaWRkZW4tYmxvY2snKS5lcShpKS5zbGlkZVRvZ2dsZSgnc2xvdycpLnRvZ2dsZUNsYXNzKFwidmlzaWJsZVwiKTtcbiAgICB9XG59KTtcbi8qKlxuICogQ3JlYXRlZCBieSBseWtoYWNob3Ygb24gOC82LzE3LlxuICovXG52aXNpb25lckFwcFxuLmRpcmVjdGl2ZShcImFkZFBvc3RNb2RhbFwiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgc2NvcGUudXJsID0gc2NvcGVbYXR0cmlidXRlc1tcImFkZFBvc3RNb2RhbFwiXV07XG4gICAgICAgICAgICBzY29wZS5jYXRlZ29yaWVzTGlzdCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImFydGljbGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi0KHRgtCw0YLRgmlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiYm9va3NcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCLQmtC90LjQs9C4XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInZpZGVvc1wiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcItCkadC70YzQvNC4L9CSadC00LXQvlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJzdGF0ZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi0KHRg9C00LbQtdC90L3Rj1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJldmVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCLQl9Cw0YXQvtC00LhcIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICB9LFxuICAgICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIi4uL3RlbXBsYXRlcy9hZGQtcG9zdC1tb2RhbC5odG1sXCJcbiAgICB9O1xufSlcbi5jb250cm9sbGVyKFwiYWRkUG9zdEN0cmxcIiwgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkaHR0cCkge1xuICAgICRzY29wZS5mb3JtID0ge1xuXG4gICAgfTtcbiAgICAkc2NvcGUuc2hvd01vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvdyBtb2RhbCcpO1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoXCJvcGVuTW9kYWxcIiwge1xuICAgICAgICAgICAgbW9kYWxUZW1wbGF0ZU5hbWU6IFwiYWRkLXBvc3QtbW9kYWxcIlxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbi8qKlxuICogQ3JlYXRlZCBieSBseWtoYWNob3Ygb24gOS8xMy8xNy5cbiAqL1xudmlzaW9uZXJBcHAuY29udHJvbGxlcihcInVzZXJPcHRpb25zQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkaHR0cCkge1xuICAgICRzY29wZS5pdGVtcyA9ICBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOjEsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLQn9GA0L4gVmlzaW9uZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDoyLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi0JTQvtC/0L7QvNC+0LPQsFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOjMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLQl9Cy0L7RgNC+0YLQvdGW0Lkg0LfQsuKAmdGP0LfQvtC6XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6NCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcItCg0LXQtNCw0LPRg9Cy0LDQvdC90Y8g0L/RgNC+0YTRltC70Y5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDo1LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi0JLQuNGF0ZbQtFwiXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICAkc2NvcGUuc3dpdGNoZXIgPSAkKFwiLnVzZXItb3B0aW9uc1wiKTtcbiAgICAkc2NvcGUub3B0aW9uc1N0YXR1cyA9IFwiY2xvc2VkXCI7XG5cbiAgICAkc2NvcGUub3BlblN3aXRjaGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJHNjb3BlLm9wdGlvbnNTdGF0dXMgPT0gXCJvcGVuZWRcIikge1xuICAgICAgICAgICAgJHNjb3BlLm9wdGlvbnNTdGF0dXMgPSBcImNsb3NlZFwiO1xuICAgICAgICAgICAgJCgkc2NvcGUuc3dpdGNoZXIpLnJlbW92ZUNsYXNzKFwib3BlbmVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbG9zZUFsbFdpbmRvd3MnLCB7fSk7XG4gICAgICAgICAgICAkc2NvcGUub3B0aW9uc1N0YXR1cyA9IFwib3BlbmVkXCI7XG4gICAgICAgICAgICAkKCRzY29wZS5zd2l0Y2hlcikuYWRkQ2xhc3MoXCJvcGVuZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJHJvb3RTY29wZS4kb24oJ2Nsb3NlQWxsV2luZG93cycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJHNjb3BlLm9wdGlvbnNTdGF0dXMgPT0gXCJvcGVuZWRcIikge1xuICAgICAgICAgICAgJHNjb3BlLm9wdGlvbnNTdGF0dXMgPSBcImNsb3NlZFwiO1xuICAgICAgICAgICAgJCgkc2NvcGUuc3dpdGNoZXIpLnJlbW92ZUNsYXNzKFwib3BlbmVkXCIpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kZGlnZXN0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkc2NvcGUuc3dpdGNoSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgJHNjb3BlLm9wdGlvbnNTdGF0dXMgPSBcImNsb3NlZFwiO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgJCgkc2NvcGUuc3dpdGNoZXIpLnJlbW92ZUNsYXNzKFwib3BlbmVkXCIpO1xuICAgIH1cbn0pO1xuXG52aXNpb25lckFwcC5jb250cm9sbGVyKFwibGFuZ3VhZ2VTd2l0Y2hlckN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJGh0dHApIHtcbiAgICAkc2NvcGUubGFuZ3VhZ2VzID0gIFtcbiAgICAgICB7XG4gICAgICAgICAgIGlkOjEsXG4gICAgICAgICAgIG5hbWU6XCJVS1wiLFxuICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLQo9C60YDQsNGX0L3RgdGM0LrQsFwiXG4gICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgICAgIGlkOjIsXG4gICAgICAgICAgIG5hbWU6XCJFTlwiLFxuICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFbmdsaXNoXCJcbiAgICAgICB9LFxuICAgICAgIHtcbiAgICAgICAgICAgaWQ6MyxcbiAgICAgICAgICAgbmFtZTpcIlJVXCIsXG4gICAgICAgICAgIGRlc2NyaXB0aW9uOiBcItCg0YPRgdGB0LrQuNC5XCJcbiAgICAgICB9XG4gICAgXVxuICAgICRzY29wZS5zd2l0Y2hlciA9ICQoXCIubGFuZ3VhZ2Utc3dpdGNoZXItY29udGFpbmVyXCIpO1xuICAgICRzY29wZS5jdXJyZW50TGFuZ3VhZ2UgPSB7XG4gICAgICAgIGlkOjEsXG4gICAgICAgIG5hbWU6XCJVS1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCLQo9C60YDQsNGX0L3RgdGM0LrQsFwiXG4gICAgfVxuICAgICRzY29wZS5zd2l0Y2hlclN0YXR1cyA9IFwiY2xvc2VkXCI7XG5cbiAgICAkc2NvcGUub3BlblN3aXRjaGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJHNjb3BlLnN3aXRjaGVyU3RhdHVzID09IFwib3BlbmVkXCIpIHtcbiAgICAgICAgICAgICRzY29wZS5zd2l0Y2hlclN0YXR1cyA9IFwiY2xvc2VkXCI7XG4gICAgICAgICAgICAkKCRzY29wZS5zd2l0Y2hlcikucmVtb3ZlQ2xhc3MoXCJvcGVuZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2Nsb3NlQWxsV2luZG93cycsIHt9KTtcbiAgICAgICAgICAgICRzY29wZS5zd2l0Y2hlclN0YXR1cyA9IFwib3BlbmVkXCI7XG4gICAgICAgICAgICAkKCRzY29wZS5zd2l0Y2hlcikuYWRkQ2xhc3MoXCJvcGVuZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkc2NvcGUuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICAkc2NvcGUuY3VycmVudExhbmd1YWdlID0gbGFuZztcbiAgICAgICAgJHNjb3BlLnN3aXRjaGVyU3RhdHVzID0gXCJjbG9zZWRcIjtcbiAgICAgICAgJCgkc2NvcGUuc3dpdGNoZXIpLnJlbW92ZUNsYXNzKFwib3BlbmVkXCIpO1xuICAgIH1cblxuICAgICRyb290U2NvcGUuJG9uKCdjbG9zZUFsbFdpbmRvd3MnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCRzY29wZS5zd2l0Y2hlclN0YXR1cyA9PSBcIm9wZW5lZFwiKSB7XG4gICAgICAgICAgICAkc2NvcGUuc3dpdGNoZXJTdGF0dXMgPSBcImNsb3NlZFwiO1xuICAgICAgICAgICAgJCgkc2NvcGUuc3dpdGNoZXIpLnJlbW92ZUNsYXNzKFwib3BlbmVkXCIpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kZGlnZXN0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4ndXNlIHN0cmljdCc7XG52aXNpb25lckFwcC5maWx0ZXIoJ2Nyb3AnLCBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCwgbGltaXQsIHJlc3BlY3RXb3JkQm91bmRhcmllcywgc3VmZml4KXtcbiAgICAgICAgaWYgKGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB1bmRlZmluZWQgfHwgbGltaXQgPT09IG51bGwgfHwgbGltaXQgPT09IHVuZGVmaW5lZCB8fCBsaW1pdCA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5ndWxhci5pc1VuZGVmaW5lZChyZXNwZWN0V29yZEJvdW5kYXJpZXMpKSB7XG4gICAgICAgICAgICByZXNwZWN0V29yZEJvdW5kYXJpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbmd1bGFyLmlzVW5kZWZpbmVkKHN1ZmZpeCkpIHtcbiAgICAgICAgICAgIHN1ZmZpeCA9ICcuLi4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA8PSBsaW1pdCkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgbGltaXQgPSBsaW1pdCAtIHN1ZmZpeC5sZW5ndGg7XG5cbiAgICAgICAgdmFyIHRyaW1tZWRTdHJpbmcgPSBpbnB1dC5zdWJzdHIoMCwgbGltaXQpO1xuICAgICAgICBpZiAocmVzcGVjdFdvcmRCb3VuZGFyaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJpbW1lZFN0cmluZy5zdWJzdHIoMCwgTWF0aC5taW4odHJpbW1lZFN0cmluZy5sZW5ndGgsIHRyaW1tZWRTdHJpbmcubGFzdEluZGV4T2YoXCIgXCIpKSkgKyBzdWZmaXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyaW1tZWRTdHJpbmcgKyBzdWZmaXg7XG4gICAgfVxufSk7XG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcjc2VhcmNoLXBlb3BsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICAgICAgJCgnI3N3aXRjaGVyLWluZGljYXRvcicpLnJlbW92ZUNsYXNzKFwiYm90dG9tXCIpO1xuICAgICAgICAkKCcjc3dpdGNoZXItaW5kaWNhdG9yJykuYWRkQ2xhc3MoXCJ0b3BcIik7XG4gICAgfSk7XG4gICAgJCgnI3NlYXJjaC1jb250ZW50JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAkKCcjc3dpdGNoZXItaW5kaWNhdG9yJykucmVtb3ZlQ2xhc3MoXCJ0b3BcIik7XG4gICAgICAgICQoJyNzd2l0Y2hlci1pbmRpY2F0b3InKS5hZGRDbGFzcyhcImJvdHRvbVwiKTtcbiAgICB9KTtcblxuICAgIC8vIHRpbWVBZ28oKTtcbn0pO1xuXG4vLyBmdW5jdGlvbiB0aW1lQWdvKHNlbGVjdG9yKSB7XG4vL1xuLy8gICAgIHZhciB0ZW1wbGF0ZXMgPSB7XG4vLyAgICAgICAgIHByZWZpeDogXCJcIixcbi8vICAgICAgICAgc3VmZml4OiBcIiDRgtC+0LzRg1wiLFxuLy8gICAgICAgICBzZWNvbmRzOiBcItC80LXQvdGIINC90ZbQtiDRhdCy0LjQu9C40L3Rg1wiLFxuLy8gICAgICAgICBtaW51dGU6IFwi0YXQstC40LvQuNC90YNcIixcbi8vICAgICAgICAgbWludXRlczogXCIlZCDRhdCy0LjQu9C40L1cIixcbi8vICAgICAgICAgaG91cjogXCLQs9C+0LTQuNC90YNcIixcbi8vICAgICAgICAgaG91cnM6IFwi0LHQu9C40LfRjNC60L4gJWQg0LPQvtC00LjQvVwiLFxuLy8gICAgICAgICBkYXk6IFwi0LTQtdC90YxcIixcbi8vICAgICAgICAgZGF5czogXCLQsdC70LjQt9GM0LrQviAlZCDQtNC90ZbQslwiLFxuLy8gICAgICAgICBtb250aDogXCLQvNGW0YHRj9GG0YxcIixcbi8vICAgICAgICAgbW9udGhzOiBcItCx0LvQuNC30YzQutC+ICVkINC80ZbRgdGP0YbRltCyXCIsXG4vLyAgICAgICAgIHllYXI6IFwi0YDRltC6XCIsXG4vLyAgICAgICAgIHllYXJzOiBcItCx0LvQuNC30YzQutC+ICVkINGA0L7QutGW0LJcIlxuLy8gICAgIH07XG4vLyAgICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24odCwgbikge1xuLy8gICAgICAgICByZXR1cm4gdGVtcGxhdGVzW3RdICYmIHRlbXBsYXRlc1t0XS5yZXBsYWNlKC8lZC9pLCBNYXRoLmFicyhNYXRoLnJvdW5kKG4pKSk7XG4vLyAgICAgfTtcbi8vXG4vLyAgICAgdmFyIHRpbWVyID0gZnVuY3Rpb24odGltZSkge1xuLy8gICAgICAgICBpZiAoIXRpbWUpXG4vLyAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgIHRpbWUgPSB0aW1lLnJlcGxhY2UoL1xcLlxcZCsvLCBcIlwiKTsgLy8gcmVtb3ZlIG1pbGxpc2Vjb25kc1xuLy8gICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKC8tLywgXCIvXCIpLnJlcGxhY2UoLy0vLCBcIi9cIik7XG4vLyAgICAgICAgIHRpbWUgPSB0aW1lLnJlcGxhY2UoL1QvLCBcIiBcIikucmVwbGFjZSgvWi8sIFwiIFVUQ1wiKTtcbi8vICAgICAgICAgdGltZSA9IHRpbWUucmVwbGFjZSgvKFtcXCtcXC1dXFxkXFxkKVxcOj8oXFxkXFxkKS8sIFwiICQxJDJcIik7IC8vIC0wNDowMCAtPiAtMDQwMFxuLy8gICAgICAgICB0aW1lID0gbmV3IERhdGUodGltZSAqIDEwMDAgfHwgdGltZSk7XG4vL1xuLy8gICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbi8vICAgICAgICAgdmFyIHNlY29uZHMgPSAoKG5vdy5nZXRUaW1lKCkgLSB0aW1lKSAqIDAuMDAxKSA+PiAwO1xuLy8gICAgICAgICB2YXIgbWludXRlcyA9IHNlY29uZHMgLyA2MDtcbi8vICAgICAgICAgdmFyIGhvdXJzID0gbWludXRlcyAvIDYwO1xuLy8gICAgICAgICB2YXIgZGF5cyA9IGhvdXJzIC8gMjQ7XG4vLyAgICAgICAgIHZhciB5ZWFycyA9IGRheXMgLyAzNjU7XG4vL1xuLy8gICAgICAgICByZXR1cm4gdGVtcGxhdGVzLnByZWZpeCArIChcbi8vICAgICAgICAgICAgICAgICBzZWNvbmRzIDwgNDUgJiYgdGVtcGxhdGUoJ3NlY29uZHMnLCBzZWNvbmRzKSB8fFxuLy8gICAgICAgICAgICAgICAgIHNlY29uZHMgPCA5MCAmJiB0ZW1wbGF0ZSgnbWludXRlJywgMSkgfHxcbi8vICAgICAgICAgICAgICAgICBtaW51dGVzIDwgNDUgJiYgdGVtcGxhdGUoJ21pbnV0ZXMnLCBtaW51dGVzKSB8fFxuLy8gICAgICAgICAgICAgICAgIG1pbnV0ZXMgPCA5MCAmJiB0ZW1wbGF0ZSgnaG91cicsIDEpIHx8XG4vLyAgICAgICAgICAgICAgICAgaG91cnMgPCAyNCAmJiB0ZW1wbGF0ZSgnaG91cnMnLCBob3VycykgfHxcbi8vICAgICAgICAgICAgICAgICBob3VycyA8IDQyICYmIHRlbXBsYXRlKCdkYXknLCAxKSB8fFxuLy8gICAgICAgICAgICAgICAgIGRheXMgPCAzMCAmJiB0ZW1wbGF0ZSgnZGF5cycsIGRheXMpIHx8XG4vLyAgICAgICAgICAgICAgICAgZGF5cyA8IDQ1ICYmIHRlbXBsYXRlKCdtb250aCcsIDEpIHx8XG4vLyAgICAgICAgICAgICAgICAgZGF5cyA8IDM2NSAmJiB0ZW1wbGF0ZSgnbW9udGhzJywgZGF5cyAvIDMwKSB8fFxuLy8gICAgICAgICAgICAgICAgIHllYXJzIDwgMS41ICYmIHRlbXBsYXRlKCd5ZWFyJywgMSkgfHxcbi8vICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSgneWVhcnMnLCB5ZWFycylcbi8vICAgICAgICAgICAgICAgICApICsgdGVtcGxhdGVzLnN1ZmZpeDtcbi8vICAgICB9O1xuLy9cbiAgICAvLyB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lYWdvJyk7XG4gICAgLy8gZm9yICh2YXIgaSBpbiBlbGVtZW50cykge1xuICAgIC8vICAgICB2YXIgJHRoaXMgPSBlbGVtZW50c1tpXTtcbiAgICAvLyAgICAgaWYgKHR5cGVvZiAkdGhpcyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyAgICAgICAgICR0aGlzLmlubmVySFRNTCA9IHRpbWVyKCR0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAkdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGV0aW1lJykpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIC8vIHVwZGF0ZSB0aW1lIGV2ZXJ5IG1pbnV0ZVxuICAgIC8vIHNldFRpbWVvdXQodGltZUFnbywgMTAwMCk7XG5cbi8vIH1cblxuZnVuY3Rpb24gY2l0aWVzSW5pdCgpIHtcbiAgICAkKCcuY2l0aWVzIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgYXJyYXk7XG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9ICdzZWFyY2gtc2FtcGxlPScrJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIHZhciBjaXRpZXNMaXN0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuY2l0aWVzLWxpc3QnKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTpcIlBPU1RcIixcbiAgICAgICAgICAgICAgICB1cmw6XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvYXV0b2NvbXBsZXRlL2pzb25cIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29ucFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6J2tleT1BSXphU3lBc0ZxejduT21JSmg3aGtpMy1QVDdleUQwN2twcEI3UG8maW5wdXQ9JyskKHRoaXMpLnZhbCgpKycmbGFuZ3VhZ2U9dWEmdHlwZXM9KGNpdGllcyknLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHJlc3BvbnNlICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2hvd0xpc3QoY2l0aWVzTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhcnJheSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGxpc3QgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxpc3QgKz0gJzxsaSBjbGFzcz1cImZpbHRlci10YWdcIj4nICsgaXRlbS50YWdfbmFtZSArICc8L2xpPic7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICQoY2l0aWVzTGlzdCkuaHRtbChsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlkZUxpc3QoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5jaXRpZXMtbGlzdCcpLm9uKCdjbGljaycsICdsaScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJChlLnRhcmdldCkuaHRtbCgpKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdpbnB1dCcpLnZhbCgkKGUudGFyZ2V0KS5odG1sKCkpO1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2lucHV0JykudmFsKCkpO1xuICAgICAgICBoaWRlTGlzdCgpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGhpZGVMaXN0KCkge1xuICAgICAgICAkKCcuY2l0aWVzLWxpc3QnKS5mYWRlT3V0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dMaXN0KGxpc3QpIHtcbiAgICAgICAgJChsaXN0KS5mYWRlSW4oKTtcbiAgICB9XG59Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
