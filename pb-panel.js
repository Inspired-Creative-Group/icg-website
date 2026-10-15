/* The Production Brain panel: hover on desktop, tap to open on phones */
(function() {
    var navItem = document.querySelector('.nav-item--brain');
    var footItem = document.querySelector('.footer-brain');
    var items = [navItem, footItem].filter(Boolean);
    if (!items.length) return;

    function close(el) {
        el.classList.remove('is-open');
        var t = el.querySelector('button');
        if (t) t.setAttribute('aria-expanded', 'false');
    }

    items.forEach(function(el) {
        var trigger = el.querySelector('button');
        if (!trigger) return;
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            var open = el.classList.toggle('is-open');
            trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    });

    document.addEventListener('click', function(e) {
        items.forEach(function(el) {
            if (el.classList.contains('is-open') && !el.contains(e.target)) close(el);
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') items.forEach(close);
    });
})();
