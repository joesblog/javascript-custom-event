
        function devent(runonce)
        {

            /******************
            * Javascript Dynamic Events
            * (c) joesblog.me.uk 2011
            *******************/

            // event has run
            this.onEvent_hasrun = false;

            // only allow running once
            this.onEvent_runonce = runonce;

            // event function
            this.myEvent = function () { };

            // now obsolete
            this.myCallback = null;

            //data to be passed to event
            this.myEvent_Data = null;

            // how many times the event has been fired
            this.myEventCount = 0;

            //fire the event , in other words execute the function assigned in myEvent
            this.fire = function ()
            {
                if (this.myEvent != null)
                {
                    if (!this.onEvent_runonce)
                    {
                        this.onEvent_hasrun = true;
                        this.myEventCount++;
                        this.myEvent();
                        return;
                    }
                    else
                    {
                        if (!this.onEvent_hasrun)
                        {
                            this.onEvent_hasrun = true;
                            this.myEventCount++;
                            this.myEvent();
                        } else
                        { return; }
                    }
                }
            }
        }

    
