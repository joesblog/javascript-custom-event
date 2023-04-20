# javascript-custom-event
A very simple (maybe redundant) javascript event system
## What Am i?
This is a little library I used years ago before Promises and the like for javascript.
I've put this here mainly for me to be able to find it.
## How to use me:
Add the devent.js file to your head / after body for faster loading, it is only a few kb big though.


```javascript
//Instanciate an devent like this
var x = new devent();
//Set a function to occur on the event being fire
x.myEvent = function()
{
  alert('Hello World!');
  
}

//let's do some simple test

var countdown = 10;
var waitInverval = null;
function checkCountDown()
{
  if (--countDown == 0)
    {
      clearInterval(waitInterval);
      x.fire();
    }
}
//we don't need JQuery for devent (one of the reasons i wrote it)
$(document).ready(function()
{
  setInterval(checkCountDrawn, 1000);
});

```

## Other things
You can turn on *onEvent_runonce* to only allow this event to fire once.

You can set Data in *myEvent_Data*. Just access the object ie x.myEvent_Data;

## Finally

I know it's not the most amazing work of art, it's just something small and useful I use 
especially when i'm writing scripts for older systems.
