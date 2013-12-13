function CmpItem(name, icon, cmpClazz){
    this.name = name;
    this.name = icon;
    this.cmpClazz = cmpClazz;
};


function LayerCmp(){
    this.name = "LayerCmp";
    this.clazz = "cc.Layer";
    this.pp = [
        { name : "x", type : "input" }
    ];
    this.target = null;
}

var __idCount = 0;
var __idPre = "__a"
var cmpPanel = $("#cmpPanel");
$("#cmpPanelParent").draggable({ cursor: "crosshair" });
$( "#gameCanvas" ).droppable({
    drop: function( event, ui ) {
    }
});
function createJqCmpItem(cmpItem){
    var item = $('<div class="ui-widget-conten"><img class="tt-cmp-item" src="../../res/Normal/studio/cmp1.png" /></div>')
    $("#cmpPanelContainer").append(item);
    item.css("z-index", 999999999999);
//    item.css("pointer-events", "none");
    item.draggable({
        cursor : "crosshair", opacity: 0.7, helper: function(){
            var a = $('<div>asdf</div>');
            return a;
        }, revert: "valid"
    });
    cmpPanel.accordion({
        collapsible: true,
        heightStyle: "fill"
    });
}

var layerItem = new CmpItem("layer", "", LayerCmp);

createJqCmpItem(layerItem);
