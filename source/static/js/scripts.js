$(document).ready(function() {
    var today = parseInt(moment.utc().startOf('day').format('x'));
    var config = {
        apiKey: "AIzaSyDhPvuuQNHkVrgm7_OAAiQ6OVlCr05li68",
        authDomain: "jeff-ross-prd.firebaseapp.com",
        databaseURL: "https://jeff-ross-prd.firebaseio.com",
        projectId: "jeff-ross-prd",
        storageBucket: "jeff-ross-prd.appspot.com",
        messagingSenderId: "672260888927"
    };
    firebase.initializeApp(config);

    // if (location.hostname == 'roastmastergeneral.com' || location.hostname == 'jeffreyross.com' || location.hostname == 'jeffreyrosshomemovie.com') {
    //     db = new Firebase('https://jeff-ross-prd.firebaseio.com/');

    // } else {
    //     db = new Firebase('https://jeff-ross-dev.firebaseio.com/');
    // }

    if ($('.bg-carousel').length > 1) {
        setInterval(function() {
            var curr = $('.bg-carousel.m-visible'),
                next = curr.is('.bg-carousel:last') ? $('.bg-carousel').eq(0) : curr.next();

            curr.removeClass('m-visible');
            next.addClass('m-visible');
        }, 6500);
    }

    //
    // Pages.
    //

    $('.header .fa-bars').click(function() {
       $('#overlay').addClass('m-active');

       $('.header nav ul').addClass('active');
    });

    $('#overlay').click(function() {
       $(this).removeClass('m-active');
       $('.header nav ul').removeClass('active');
    });

    if ($('.b-upcoming-show').length) {
        firebase.database().ref('/tour-dates').orderByChild('date').startAt(today).limitToFirst(100).once('value', function(snapshot) {
            var tours = [];
            snapshot.forEach(function(data) {
                var obj = data.val(),
                    txt = '';

                txt += moment.utc(parseInt(obj.date)).format('MMM Do') + ' ';
                txt += obj.time + ' | ';
                txt += obj.venue + ' - ';
                txt += obj.location;
                tours.push({ link: obj.link, txt: txt });
            });
            $a = $('.b-upcoming-show a');
            var toursAmount = tours.length
            var currentTour = -1
            function rotateTour () {
                if (toursAmount == 0) {
                    return;
                } else if (++currentTour >= toursAmount) {
                    currentTour = 0
                }
                var obj = tours[currentTour]
                if (obj.link) {
                    if (obj.link.indexOf('//') > -1) {
                        $a.attr('href', obj.link);
                    } else {
                        $a.attr('href', '//' + obj.link);
                    }
                }
                $a.html((currentTour === 0 ? 'next show: ' : 'upcoming show: ') + obj.txt);
                $a.removeClass('fade');
                setTimeout(function () {
                    $a.addClass('fade')
                    setTimeout(rotateTour, 330)
                }, 4850)
            }
            rotateTour()
        });
    }

    if ($('.press').length) {
        firebase.database().ref('/press').orderByChild('date').limitToLast(50).once('value', function(snapshot) {
            snapshot.forEach(function(data) {
                var obj = data.val(),
                    $li = $('<li/>').addClass('press-item'),
                    $d1 = $('<div/>').addClass('press-media m-text'),
                    $d2 = $('<div/>').addClass('press-content'),
                    $d3 = $('<div/>').addClass('press-meta'),
                    $a = $('<a/>').attr('target', '_blank');

                if (obj.link) {
                    if (obj.link.indexOf('//') > -1) {
                        $a.attr('href', obj.link);

                    } else {
                        $a.attr('href', '//' + obj.link);
                    }
                }

                $d3.append($('<span/>').addClass('press-publisher').text(obj.publisher));
                $d3.append($('<span/>').addClass('press-date').text(moment.utc(parseInt(obj.date)).format('MM/DD/YYYY')));
                $d2.append($('<div>').addClass('press-title').text(obj.title));
                $d2.append($d3);

                if (obj.type == 'article') {
                    $d1.append($('<i/>').addClass('fa fa-file-text-o'));

                } else if (obj.type == 'video') {
                    $d1.append($('<i/>').addClass('fa fa-video-camera'));

                } else if (obj.type == 'audio') {
                    $d1.append($('<i/>').addClass('fa fa-volume-up'));
                }

                $('.press').prepend($li.append($a.append($d1).append($d2)));
            });
        });
    }

    if ($('.tour-dates').length) {
        firebase.database().ref('/tour-dates').orderByChild('date').startAt(today).limitToFirst(50).once('value', function(snapshot) {
            snapshot.forEach(function(data) {
                var obj = data.val(),
                    $tr = $('<tr/>'),
                    $a = $('<a/>').attr('target', '_blank');

                if (obj.link) {
                    if (obj.link.indexOf('//') > -1) {
                        $a.attr('href', obj.link);

                    } else {
                        $a.attr('href', '//' + obj.link);
                    }
                }

                // $a.append($('<i/>').addClass('fa fa-shopping-cart'));
                $a.append('BUY');

                $tr.append($('<td/>').addClass('date').text(moment.utc(parseInt(obj.date)).format('MM/DD/YYYY')));
                $tr.append($('<td/>').addClass('time').text(obj.time));
                $tr.append($('<td/>').addClass('tour').text(obj.tour));
                $tr.append($('<td/>').addClass('venue').text(obj.venue));
                $tr.append($('<td/>').addClass('location').text(obj.location));
                $tr.append($('<td/>').addClass('link').append($a));

                $('.tour-dates tbody').append($tr);
            });
        });
    }

    // if ($('.tour-dates tbody').length > 1) {
    //     $('.tour-dates').addClass('m-show');
    //     console.log($('.tour-dates tbody').length)
    // }

    if ($('.videos').length) {
        $.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            key: 'AIzaSyBnpHRDUZhCruzPnmNrN6U_KikY_28-61Q',
            part: 'snippet',
            playlistId: 'UUvCmIDV0kb0CXez4xjNdE_w'},
            function(data) {
                $.each(data.items, function(i, item) {
                    var html = '<li class="b-video-wrapper"><iframe src="//www.youtube.com/embed/';

                    html += item.snippet.resourceId.videoId;
                    html += '"></iframe></li>';

                    $('.videos').append(html);
                });
            }
        );
    }

    //
    // Admin.
    //

    if ($('#admin').length) {
        if (firebase.auth().currentUser) {
            $('#admin .b-login').addClass('m-display-none');
            $('#admin .b-main').removeClass('m-display-none');
            $('#admin .b-header').removeClass('m-display-none');
        } else {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    $('#admin .b-login').addClass('m-display-none');
                    $('#admin .b-main').removeClass('m-display-none');
                    $('#admin .b-header').removeClass('m-display-none');
                }
            })
        }

        $('.datepicker').each(function() {
            new Pikaday({ field: this, format: 'MM/DD/YYYY' });
        });

        $('#admin .b-login').submit(function() {
            var id = $('.b-login .email').val(),
                pwd = $('.b-login .password').val();

            firebase.auth().signInWithEmailAndPassword(id, pwd).then(function (result) {
                $('#admin .b-login').addClass('m-display-none');
                $('#admin .b-main').removeClass('m-display-none');
                $('#admin .b-header').removeClass('m-display-none');
            }).catch(function (err) {
                console.error(err)
                $('.b-login .email').css('border-color', 'red');
                $('.b-login .password').css('border-color', 'red');
            });

            return false;
        });
    }

    $('#admin .e-tab:not(.e-logout)').click(function() {
        var $sel = $($(this).attr('href'));

        $(this).siblings().removeClass('m-selected');
        $(this).addClass('m-selected');

        $sel.siblings().addClass('m-display-none');
        $sel.removeClass('m-display-none');

        return false;
    });

    $('#admin .e-tab.e-logout').click(function() {
        firebase.auth().signOut().then(function () {
            window.location.reload();
        }).catch(function (err) {
            console.error(err)
        });
    });

    $('#admin .modal .close, #admin .e-overlay').click(function() {
        $('.modal').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
    });

    // Press.
    //
    if ($('#admin-press').length) {
        firebase.database().ref('/press').orderByChild('date').on('child_added', function(snapshot) {
            var obj = snapshot.val(),
                $tr = $('<tr/>');
            $tr.append($('<td>').addClass('m-ellipsis date').text(moment.utc(parseInt(obj.date)).format('MM/DD/YYYY')));
            $tr.append($('<td>').addClass('m-ellipsis type m-capitalize').text(obj.type));
            $tr.append($('<td>').addClass('m-ellipsis title').text(obj.title));
            $tr.append($('<td>').addClass('m-ellipsis publisher').text(obj.publisher));
            $tr.append($('<td>').addClass('m-ellipsis link').text(obj.link));
            $tr.append($('<td>').html($('<i/>').addClass('fa fa-pencil').data('oid', snapshot.key)));
            $tr.children(':last-child').append($('<i/>').addClass('fa fa-times').data('oid', snapshot.key));

            $('#admin-press tbody').prepend($tr);
        });
    }

    $('#admin .add-button.add-press').click(function() {
        $('.modal-add-press').removeClass('m-display-none');
        $('.e-overlay').removeClass('m-display-none');
    });

    $('#admin-press').on('click', '.fa.fa-times', function() {
        firebase.database().ref('/press/' + $(this).data('oid')).set(null);

        $(this).parents('tr').remove();
    });

    $('#admin-press').on('click', '.fa.fa-pencil', function() {
        var $tds = $(this).parents('tr').children(),
            $mod = $('.modal-edit-press');

        $mod.find('.date').val($tds.eq(0).text());
        $mod.find('.type').val($tds.eq(1).text());
        $mod.find('.title').val($tds.eq(2).text());
        $mod.find('.publisher').val($tds.eq(3).text());
        $mod.find('.link').val($tds.eq(4).text());

        $('.modal-edit-press').data('tr', $(this).parents('tr'));
        $('.modal-edit-press').data('oid', $(this).data('oid'));
        $('.modal-edit-press').removeClass('m-display-none');
        $('.e-overlay').removeClass('m-display-none');
    });

    $('#admin .modal-add-press').submit(function() {
        var doc = {};

        $(this).find(':input').each(function() {
            var val = $(this).val();

            if ($(this).attr('name') == 'date') {
                val = val.split('/');
                val = [val[2], val[0], val[1]].join('-');
                val = parseInt(moment.utc(val).format('x'));
            }

            doc[$(this).attr('name')] = val;
        });

        firebase.database().ref('/press').push(doc);

        $('.modal-add-press').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
        $('.modal-add-press input').val('');

        return false;
    });

    $('#admin .modal-edit-press').submit(function() {
        var $mod = $('.modal-edit-press'),
            $tr = $(this).data('tr'),
            aux = $('.modal-edit-press .date').val(),
            doc = {};

        aux = aux.split('/');
        aux = [aux[2], aux[0], aux[1]].join('-');
        aux = parseInt(moment.utc(aux).format('x'));

        doc.date = aux;
        doc.type = $('.modal-edit-press .type').val();
        doc.title = $('.modal-edit-press .title').val();
        doc.publisher = $('.modal-edit-press .publisher').val();
        doc.link = $('.modal-edit-press .link').val();

        firebase.database().ref('/press/' + $(this).data('oid')).set(doc);

        $tr.children().eq(0).text($('.modal-edit-press .date').val());
        $tr.children().eq(1).text(doc.type);
        $tr.children().eq(2).text(doc.title);
        $tr.children().eq(3).text(doc.publisher);
        $tr.children().eq(4).text(doc.link);

        $('.modal-edit-press').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
        $('.modal-edit-press input').val('');

        return false;
    });

    // Tour.
    //
    if ($('#admin-tour').length) {
        firebase.database().ref('/tour-dates').orderByChild('date').on('child_added', function(snapshot) {
            var obj = snapshot.val(),
                $tr = $('<tr/>');

            $tr.append($('<td>').addClass('m-ellipsis date').text(moment.utc(parseInt(obj.date)).format('MM/DD/YYYY')));
            $tr.append($('<td>').addClass('m-ellipsis tour').text(obj.tour));
            $tr.append($('<td>').addClass('m-ellipsis venue').text(obj.venue));
            $tr.append($('<td>').addClass('m-ellipsis location').text(obj.location));
            $tr.append($('<td>').addClass('m-ellipsis time').text(obj.time));
            $tr.append($('<td>').addClass('m-ellipsis link').text(obj.link));
            $tr.append($('<td>').html($('<i/>').addClass('fa fa-pencil').data('oid', snapshot.key)));
            $tr.children(':last-child').append($('<i/>').addClass('fa fa-times').data('oid', snapshot.key));

            $('#admin-tour tbody').prepend($tr);
        });
    }

    $('#admin .add-button.add-tour').click(function() {
        $('.modal-add-tour').removeClass('m-display-none');
        $('.e-overlay').removeClass('m-display-none');
    });

    $('#admin-tour').on('click', '.fa.fa-times', function() {
        firebase.database().ref('/tour-dates/' + $(this).data('oid')).set(null);

        $(this).parents('tr').remove();
    });

    $('#admin-tour').on('click', '.fa.fa-pencil', function() {
        var $tds = $(this).parents('tr').children(),
            $mod = $('.modal-edit-tour');

        $mod.find('.date').val($tds.eq(0).text());
        $mod.find('.tour').val($tds.eq(1).text());
        $mod.find('.venue').val($tds.eq(2).text());
        $mod.find('.location').val($tds.eq(3).text());
        $mod.find('.time').val($tds.eq(4).text());
        $mod.find('.link').val($tds.eq(5).text());

        $('.modal-edit-tour').data('tr', $(this).parents('tr'));
        $('.modal-edit-tour').data('oid', $(this).data('oid'));
        $('.modal-edit-tour').removeClass('m-display-none');
        $('.e-overlay').removeClass('m-display-none');
    });

    $('#admin .modal-add-tour').submit(function() {
        var doc = {};

        $(this).find(':input').each(function() {
            var val = $(this).val();

            if ($(this).attr('name') == 'date') {
                val = val.split('/');
                val = [val[2], val[0], val[1]].join('-');
                val = parseInt(moment.utc(val).format('x'));
            }

            doc[$(this).attr('name')] = val;
        });

        firebase.database().ref('/tour-dates').push(doc);

        $('.modal-add-tour').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
        $('.modal-add-tour input').val('');

        return false;
    });

    $('#admin .modal-edit-tour').submit(function() {
        var $mod = $('.modal-edit-tour'),
            $tr = $(this).data('tr'),
            aux = $('.modal-edit-tour .date').val(),
            doc = {};

        aux = aux.split('/');
        aux = [aux[2], aux[0], aux[1]].join('-');
        aux = parseInt(moment.utc(aux).format('x'));

        doc.date = aux;
        doc.tour = $('.modal-edit-tour .tour').val();
        doc.venue = $('.modal-edit-tour .venue').val();
        doc.location = $('.modal-edit-tour .location').val();
        doc.time = $('.modal-edit-tour .time').val();
        doc.link = $('.modal-edit-tour .link').val();

        firebase.database().ref('/tour-dates/' + $(this).data('oid')).set(doc);

        $tr.children().eq(0).text($('.modal-edit-tour .date').val());
        $tr.children().eq(1).text(doc.tour);
        $tr.children().eq(2).text(doc.venue);
        $tr.children().eq(3).text(doc.location);
        $tr.children().eq(4).text(doc.time);
        $tr.children().eq(5).text(doc.link);

        $('.modal-edit-tour').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
        $('.modal-edit-tour input').val('');

        return false;
    });
 });
