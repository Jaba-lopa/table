$('[data-nav]').click(function(el){
    const elTarget = el.target.dataset.nav.toLowerCase();
    $(`section`).css({display: "none"});
    $(`.section-${elTarget}`).css({display: "block"});
})