$(document).ready(function() {
    var db = new Firebase('https://jeff-ross.firebaseio.com/');

    //
    // Page.
    //

    $('.header .fa-bars').click(function() {
       $('.header nav ul').addClass('active');
    });

    if ($('.press').length) {
        db.child('press').orderByChild('date').limitToLast(50).once('value', function(snapshot) {
            for (var oid in snapshot.val()) {
                var obj = snapshot.val()[oid],
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
                $d3.append($('<span/>').addClass('press-date').text(obj.date));
                $d2.append($('<div>').addClass('press-title').text(obj.title));
                $d2.append($d3);
                $d1.append($('<i/>').addClass('fa fa-file-text-o'));

                $('.press').append($li.append($a.append($div1).append($div2)));
            }
        });
    }

    if ($('.tour-dates').length) {
        db.child('tour-dates').once('value', function(snapshot) {
            var today = Date.parse(new Date().toJSON().slice(0, 10));

            for (var oid in snapshot.val()) {
                var obj = snapshot.val()[oid],
                    $tr = $('<tr/>'),
                    $a = $('<a/>').attr('target', '_blank');

                if (obj.link) {
                    if (obj.link.indexOf('//') > -1) {
                        $a.attr('href', obj.link);

                    } else {
                        $a.attr('href', '//' + obj.link);
                    }
                }

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

    //
    // Admin.
    //

    if ($('#admin').length) {
        if (db.getAuth()) {
            $('#admin .b-login').addClass('m-display-none');
            $('#admin .b-main').removeClass('m-display-none');
            $('#admin .b-header').removeClass('m-display-none');
        }

        $('.datepicker').each(function() {
            new Pikaday({ field: this, format: 'DD/MM/YYYY' });
        });

        $('#admin .b-login .e-submit').click(function(event) {
            var id = $('.b-login .email').val(),
                pwd = $('.b-login .password').val();

            db.authWithPassword({email: id, password: pwd},
                function(error, authData) {
                    if (!error) {
                        $('#admin .b-login').addClass('m-display-none');
                        $('#admin .b-main').removeClass('m-display-none');
                        $('#admin .b-header').removeClass('m-display-none');

                    } else {
                        $('.b-login .email').css('border-color', 'red');
                        $('.b-login .password').css('border-color', 'red');
                    }

                }
            );

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
       db.unauth();
       window.location.reload();
    });

    $('#admin .modal .close, #admin .e-overlay').click(function() {
        $('.modal').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
    });

    // Press.
    //
    $('#admin .add-button.add-press').click(function() {
        $('.modal-add-press').removeClass('m-display-none');
        $('.e-overlay').removeClass('m-display-none');
    });

    if ($('#admin-press').length) {
        db.child('press').orderByChild('date').on('child_added', function(ss) {
            var obj = ss.val(),
                $tr = $('<tr/>');

            $tr.append($('<td>').addClass('m-ellipsis date').text(obj.date));
            $tr.append($('<td>').addClass('m-ellipsis type m-capitalize').text(obj.type));
            $tr.append($('<td>').addClass('m-ellipsis title').text(obj.title));
            $tr.append($('<td>').addClass('m-ellipsis publisher').text(obj.publisher));
            $tr.append($('<td>').addClass('m-ellipsis link').text(obj.link));
            $tr.append($('<td>').html($('<i/>').addClass('fa fa-pencil').data('oid', snapshot.key())));
            $tr.children(':last-child').append($('<i/>').addClass('fa fa-times').data('oid', snapshot.key()));

            $('#admin-press tbody').prepend($tr);
        });
    }

    $('#admin-press').on('click', '.fa.fa-times', function() {
        db.child('press').child($(this).data('oid')).set(null);

        $(this).parents('tr').remove();
    });

    $('#admin .modal-add-press .add').click(function() {
        var doc = {};

        $(this).parents('.modal').find(':input').each(function() {
            doc[$(this).attr('name')] = $(this).val();
        });

        db.child('press').push(doc);

        $('.modal-add-press').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
        $('.modal-add-press input').val('');
    });

    $('#admin-press').on('click', '.fa.fa-pencil', function() {
        var $tds = $(this).parents('tr').children(),
            $mod = $('.modal-edit-press');

        $mod.find('.date').val($tds.eq(0).text());
        $mod.find('.type').val($tds.eq(1).text());
        $mod.find('.title').val($tds.eq(2).text());
        $mod.find('.publisher').val($tds.eq(3).text());
        $mod.find('.link').val($tds.eq(4).text());

        $('.modal-edit-press .edit').data('tr', $(this).parents('tr'));
        $('.modal-edit-press .edit').data('oid', $(this).data('oid'));
        $('.modal-edit-press').removeClass('m-display-none');
        $('.e-overlay').removeClass('m-display-none');
    });

    $('#admin .modal-edit-press .edit').click(function() {
        var $mod = $('.modal-edit-press'),
            $tr = $(this).data('tr'),
            doc = {};

        doc.date = $('.modal-edit-press .date').val();
        doc.type = $('.modal-edit-press .type').val();
        doc.title = $('.modal-edit-press .title').val();
        doc.publisher = $('.modal-edit-press .publisher').val();
        doc.link = $('.modal-edit-press .link').val();

        db.child('press').child($(this).data('oid')).set(doc);

        $tr.children().eq(0).text(doc.date);
        $tr.children().eq(1).text(doc.type);
        $tr.children().eq(2).text(doc.title);
        $tr.children().eq(3).text(doc.publisher);
        $tr.children().eq(4).text(doc.link);

        $('.modal-edit-press').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
        $('.modal-edit-press input').val('');
    });

    // Tour.
    //
    $('#admin .add-button.add-tour').click(function() {
        $('.modal-add-tour').removeClass('m-display-none');
        $('.e-overlay').removeClass('m-display-none');
    });

    if ($('#admin-tour').length) {
        db.child('tour-dates').on('child_added', function(snapshot) {
            var obj = snapshot.val(),
                $tr = $('<tr/>');

            $tr.append($('<td>').addClass('m-ellipsis date').text(obj.date));
            $tr.append($('<td>').addClass('m-ellipsis tour').text(obj.tour));
            $tr.append($('<td>').addClass('m-ellipsis venue').text(obj.venue));
            $tr.append($('<td>').addClass('m-ellipsis location').text(obj.location));
            $tr.append($('<td>').addClass('m-ellipsis time').text(obj.time));
            $tr.append($('<td>').addClass('m-ellipsis link').text(obj.link));
            $tr.append($('<td>').html($('<i/>').addClass('fa fa-pencil').data('oid', snapshot.key())));
            $tr.children(':last-child').append($('<i/>').addClass('fa fa-times').data('oid', snapshot.key()));

            $('#admin-tour tbody').prepend($tr);
        });
    }

    $('#admin-tour').on('click', '.fa.fa-times', function() {
        db.child('tour-dates').child($(this).data('oid')).set(null);

        $(this).parents('tr').remove();
    });

    $('#admin .modal-add-tour .add').click(function() {
        var doc = {};

        $(this).parents('.modal').find(':input').each(function() {
            doc[$(this).attr('name')] = $(this).val();
        });

        db.child('tour-dates').push(doc);

        $('.modal-add-tour').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
        $('.modal-add-tour input').val('');
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

        $('.modal-edit-tour .edit').data('tr', $(this).parents('tr'));
        $('.modal-edit-tour .edit').data('oid', $(this).data('oid'));
        $('.modal-edit-tour').removeClass('m-display-none');
        $('.e-overlay').removeClass('m-display-none');
    });

    $('#admin .modal-edit-tour .edit').click(function() {
        var $mod = $('.modal-edit-tour'),
            $tr = $(this).data('tr'),
            doc = {};

        doc.date = $('.modal-edit-tour .date').val();
        doc.tour = $('.modal-edit-tour .tour').val();
        doc.venue = $('.modal-edit-tour .venue').val();
        doc.location = $('.modal-edit-tour .location').val();
        doc.time = $('.modal-edit-tour .time').val();
        doc.link = $('.modal-edit-tour .link').val();

        db.child('tour-dates').child($(this).data('oid')).set(doc);

        $tr.children().eq(0).text(doc.date);
        $tr.children().eq(1).text(doc.tour);
        $tr.children().eq(2).text(doc.venue);
        $tr.children().eq(3).text(doc.location);
        $tr.children().eq(4).text(doc.time);
        $tr.children().eq(5).text(doc.link);

        $('.modal-edit-tour').addClass('m-display-none');
        $('.e-overlay').addClass('m-display-none');
        $('.modal-edit-tour input').val('');
    });
 });
