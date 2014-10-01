var div1 = $("#div1"),
    dragBar = $(".drag-bar"),
    dragElem = $(".drag-elem"),
    dragContainer = $("#drag-container"),
    dragLimit = dragContainer.width() - dragElem.width(),
    logDiv = $("#log-div span"),
    tn = TweenLite.to(div1, 1, {left:300, rotation:360, paused:true, ease:Linear.easeNone, onUpdate:upFn}),
    tnProgress;

Draggable.create(dragElem,
{
  type:'x',
  bounds:dragContainer,
  edgeResistance:1,
  onDrag:function()
  {
    tnProgress = ( Math.round( (this.x / dragLimit) * 1000) ) /1000;
    logDiv.html(tnProgress);
    tn.progress(tnProgress);
    TweenLite.set(dragBar, {width:this.x + 10});
  },
  onPress:function()
  {
    tn.pause();
  }
});

function upFn()
{
  var xPos = tn.progress() * dragLimit;

  tnProgress = ( Math.round( tn.progress() * 1000) ) /1000;
  logDiv.html(tnProgress);

  TweenLite.set(dragElem, {x:xPos});
  TweenLite.set(dragBar, {width:xPos+10});
}

div1.click(function()
{
  tn.play();
});
