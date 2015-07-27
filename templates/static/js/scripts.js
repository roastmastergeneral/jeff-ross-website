$(document).ready(function() {
    var db = null;

    // if (location.hostname == 'govlabacademy.org') {
    //     if (location.pathname == '/canvas/') {
    //         db = new Firebase('https://lean-canvas.firebaseio.com/');

    //     } else if (location.pathname == '/public-canvas/') {
    //         db = new Firebase('https://lean-canvas-public.firebaseio.com/');
    //     }

    // } else {
        db = new Firebase('https://jeff-ross.firebaseio.com/');
    // }

    if (db.getAuth()) {
        $('#admin .b-login').addClass('m-display-none');
        $('#admin .b-main').removeClass('m-display-none');
        $('#admin .b-header').removeClass('m-display-none');
    }

    // db.unauth();

    if ($('.tour-dates').length) {
        db.child('tour-dates').once('value', function(snapshot) {
            var today = Date.parse(new Date().toJSON().slice(0, 10));

            for (var oid in snapshot.val()) {
                var obj = snapshot.val()[oid],
                    $tr = $('<tr/>'),
                    $a = $('<a/>').attr('href', obj.link);

                if (today < Date.parse(obj.date)) {
                    $a.append($('<i/>').addClass('fa fa-link'));

                    $tr.append($('<td/>').addClass('date').text(obj.date));
                    $tr.append($('<td/>').addClass('time').text(obj.time));
                    $tr.append($('<td/>').addClass('tour').text(obj.show));
                    $tr.append($('<td/>').addClass('venue').text(obj.venue));
                    $tr.append($('<td/>').addClass('location').text(obj.city));
                    $tr.append($('<td/>').addClass('link').append($a));

                    $('.tour-dates tbody').append($tr);
                }
            }
        });
    }

    if ($('.press').length) {
        db.child('press').once('value', function(snapshot) {
            var today = Date.parse(new Date().toJSON().slice(0, 10));

            for (var oid in snapshot.val()) {
                var obj = snapshot.val()[oid],
                    $a = $('<a/>').attr('href', obj.link),
                    $li = $('<li/>').addClass('press-item'),
                    $div1 = $('<div/>').addClass('press-media m-text'),
                    $div2 = $('<div/>').addClass('press-content'),
                    $div3 = $('<div/>').addClass('press-meta');

                if (today < Date.parse(obj.date)) {
                    $div3.append($('<span/>').addClass('press-publisher').text(obj.publisher));
                    $div3.append($('<span/>').addClass('press-date').text(obj.date));
                    $div2.append($('<div/>').addClass('press-title').text(obj.title));
                    $div2.append($div3);
                    $div1.append($('<i/>').addClass('fa fa-file-text-o'));

                    $('.press').append($li.append($a.append($div1).append($div2)));
                }
            }
        });
    }

    if ($('#admin-tour').length) {
        db.child('tour-dates').on('child_added', function(snapshot) {
            var obj = snapshot.val(),
                $tr = $('<tr/>');

            $tr.append($('<td/>').text(obj.date));
            $tr.append($('<td/>').addClass('m-ellipsis').text(obj.tour));
            $tr.append($('<td/>').addClass('m-ellipsis').text(obj.venue));
            $tr.append($('<td/>').addClass('m-ellipsis').text(obj.location));
            $tr.append($('<td/>').addClass('m-ellipsis').text(obj.time));
            $tr.append($('<td/>').text(obj.link));
            $tr.append($('<td/>').html($('<i/>').addClass('fa fa-times').data('oid', snapshot.key())));

            $('#admin-tour tbody').prepend($tr);
        });
    }

    if ($('#admin-press').length) {
        db.child('press').on('child_added', function(snapshot) {
            var obj = snapshot.val(),
                $tr = $('<tr/>');

            $tr.append($('<td/>').text(obj.date));
            $tr.append($('<td/>').addClass('m-ellipsis').text(obj.title));
            $tr.append($('<td/>').addClass('m-ellipsis').text(obj.publisher));
            $tr.append($('<td/>').addClass('m-ellipsis').text(obj.link));
            $tr.append($('<td/>').html($('<i/>').addClass('fa fa-times').data('oid', snapshot.key())));

            $('#admin-press tbody').prepend($tr);
        });
    }

    $('#admin .e-tab').click(function() {
        var $sel = $($(this).attr('href'));

        $(this).siblings().removeClass('m-selected');
        $(this).addClass('m-selected');

        $sel.siblings().addClass('m-display-none');
        $sel.removeClass('m-display-none');

        return false;
    });

    $('#admin .modal-add-press .add').click(function() {
        var doc = {};

        doc.date = $('.modal-add-press input[name="date"]').val();
        doc.title = $('.modal-add-press input[name="title"]').val();
        doc.publisher = $('.modal-add-press input[name="publisher"]').val();
        doc.link = $('.modal-add-press input[name="link"]').val();

        db.child('press').push(doc);

        $('.modal-add-press').addClass('m-display-none');
        $('.modal-add-press input').val('');
    });

    $('#admin .modal-add-tour .add').click(function() {
        var doc = {};

        doc.date = $('.modal-add-tour input[name="date"]').val();
        doc.tour = $('.modal-add-tour input[name="tour"]').val();
        doc.venue = $('.modal-add-tour input[name="venue"]').val();
        doc.location = $('.modal-add-tour input[name="location"]').val();
        doc.time = $('.modal-add-tour input[name="time"]').val();
        doc.link = $('.modal-add-tour input[name="link"]').val();

        db.child('tour-dates').push(doc);

        $('.modal-add-tour').addClass('m-display-none');
        $('.modal-add-tour input').val('');
    });

    $('#admin .add-button.add-press').click(function() {
        $('.modal-add-press').removeClass('m-display-none');
    });

    $('#admin .add-button.add-tour').click(function() {
        $('.modal-add-tour').removeClass('m-display-none');
    });

    $('#admin-tour').on('click', '.fa.fa-times', function() {
        db.child('tour-dates').child($(this).data('oid')).set(null);

        $(this).parents('tr').remove();
    });

    $('#admin-press').on('click', '.fa.fa-times', function() {
        db.child('press').child($(this).data('oid')).set(null);

        $(this).parents('tr').remove();
    });

    $('#admin .b-login .e-submit').click(function(event) {
        var id = $('.b-login input[name="email"]').val(),
            pwd = $('.b-login input[name="password"]').val();

        db.authWithPassword({email: id, password: pwd},
            function(error, authData) {
                if (!error) {
                    $('#admin .b-login').addClass('m-display-none');
                    $('#admin .b-main').removeClass('m-display-none');
                    $('#admin .b-header').removeClass('m-display-none');

                } else {
                    $('.b-login input[name="email"]').css('border-color', 'red'),
                    $('.b-login input[name="password"]').css('border-color', 'red');
                }

            }
        );

        return false;
    });
    $(document).foundation();
 });
