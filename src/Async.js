/**
 * This class defines an asynchronous set up wherein multiple calls can be made and a final function will be run once the calls are completed.
 *
 * @namespace platypus
 * @class Async
 * @constructor
 * @param functions {Array} An array of functions where each function accepts a `callback` parameter and runs `callback()` on completion to notify the completion of the call.
 * @param callback {Function} The function to run once the list of functions has finished.
 * @return {platypus.Async} Returns the new Async object.
 * @since 0.10.0
 */
/*global clearTimeout, platypus, recycle, springroll, setTimeout */
platypus.Async = (function () {
    'use strict';
    
    var callback = function (finalCB) {
            this.increment -= 1;
            if (!this.increment) {
                this.resolve = finalCB;
                this.timeout = setTimeout(finalCB, 0); //ensure async to keep code flow consistent.
            }
        },
        final = function (callback) {
            this.resolve = null;
            callback();
            this.recycle();
        },
        Async = function (arr, finalCallback) {
            var finalCB = final.bind(this, finalCallback),
                cb = callback.bind(this, finalCB),
                i = arr.length;

            if (!i) {
                finalCB();
                this.recycle();
            } else {
                this.increment = i;
                this.resolve = null;

                while (i--) {
                    arr[i](cb);
                }
            }
        };

    Async.prototype.attemptResolution = function () {
        if (this.resolve) {
            clearTimeout(this.timeout);
            this.resolve();
            return true;
        } else {
            return false;
        }
    };
    
    /**
     * Returns an Async from cache or creates a new one if none are available.
     *
     * @method Async.setUp
     * @return {platypus.Async} The instantiated Async.
     */
    /**
     * Returns an Async back to the cache.
     *
     * @method Async.recycle
     * @param async {platypus.Async} The Async to be recycled.
     */
    /**
     * Relinquishes properties of the Async and recycles it.
     *
     * @method recycle
     */
    recycle.add(Async, !!springroll.Debug, 'Async', function () {
        this.increment = 0;
        this.resolve = null;
        this.timeout = 0;
    });

    return Async;
}());