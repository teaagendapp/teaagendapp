$( document ).ready(function() {

    localStorage.clear();

    $('figure').draggable({
        containment: "parent",
        scroll: false,
        revert: function() {
            if ($(this).hasClass('drag-revert')) {
                $(this).removeClass('drag-revert');
                return true;
            }
        },
        snap: ".respuesta",
        snapMode: "inner",
        snapTolerance: 20,

        grid: [ 5, 5 ],

        start : function(e){
            $(this).css({'pointer-events': 'none'});
        },
        drag: function() {

            $(this).removeClass('zdepth-1');
            $(this).addClass('zdepth-5');
        },
        stop: function(){
            $(this).removeClass('zdepth-5');
            $(this).addClass('zdepth-1');
            $(this).css({'pointer-events': 'all'});
        },

    });

    //$('.respuesta').on("droppable", function () {
    $('.respuesta').droppable( {
        accept: 'figure',
        drop: function(event, ui) {//Triggered when an accepted draggable is dropped ON the droppable

            var sticker_id = $(ui.draggable)[0].children[0].alt;
            console.log(sticker_id);

            var respuesta_id = $(this).attr("id");

            if(!store.get(respuesta_id)){
                store.set(respuesta_id, { sticker: sticker_id })
            }else{
                return $(ui.draggable).addClass('drag-revert');

            }

        },
        out: function( event, ui ) {//Triggered when an accepted draggable is dragged OUT of the droppable

            var respuesta_id = $(this).attr("id");
            store.remove(respuesta_id);

        },

    } );
   
});
