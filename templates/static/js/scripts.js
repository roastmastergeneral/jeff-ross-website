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

    // db.unauth();

    if ($('#tour-dates').length) {
        db.child('tour-dates').once('value', function(snapshot) {
            for (var oid in snapshot.val()) {
                var obj = snapshot.val()[oid],
                    $tr = $('<tr/>'),
                    $a = $('<a/>').attr('href', obj.link);

                $a.append($('<i/>').addClass('fa fa-link'));

                $tr.append($('<td/>').addClass('date').text(obj.date));
                $tr.append($('<td/>').addClass('time').text(obj.time));
                $tr.append($('<td/>').addClass('show').text(obj.show));
                $tr.append($('<td/>').addClass('venue').text(obj.venue));
                $tr.append($('<td/>').addClass('city').text(obj.city));
                $tr.append($('<td/>').addClass('link').append($a));

                $('#tour-dates tbody').append($tr);
            }
        });
    }

    if ($('.press').length) {
        db.child('press').once('value', function(snapshot) {
            for (var oid in snapshot.val()) {
                var obj = snapshot.val()[oid],
                    $a = $('<a/>').attr('href', obj.href),
                    $li = $('<li/>').addClass('press-item'),
                    $div1 = $('<div/>').addClass('press-media m-text'),
                    $div2 = $('<div/>').addClass('press-content'),
                    $div3 = $('<div/>').addClass('press-meta');

                $div3.append($('<span/>').addClass('press-publisher').text(obj.publisher));
                $div3.append($('<span/>').addClass('press-date').text(obj.date));
                $div2.append($('<div/>').addClass('press-title').text(obj.title));
                $div2.append($div3);
                $div1.append($('<i/>').addClass('fa fa-file-text-o'));

                $('.press').append($li.append($a.append($div1).append($div2)));
            }
        });
    }

    $(document).foundation();
 });
