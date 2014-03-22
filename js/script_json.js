$(function() {


    function showToast() {
        var t     = toastsJson[i];
        var pos   = toastsJson[i].pos;
        delay     = toastsJson[i].delay;
        toastr.options.positionClass = toastsJson[i].pos;
        // console.log(delay)
        toastr[t.type](t.msg);
        simToasts();
        // console.log(pos,i)
    }
    function simToasts() {
        if (i === toastsJson.length) { return; }
         // console.log(delay)
        var FuncDelay = i === 0 ? 0 : delay;
        setTimeout(function () { showToast(); }, FuncDelay);

        // re-enable the button        
        if (i === toastsJson.length-1) {
            setTimeout(function () {
                $('#tryMe').prop('disabled', false);
                i = 0;
            }, delay + 1000);
        }
        i++;
    }

    var i          = 0;
    var delay      = 0;
    var toastsJson = [
        {"type": "error",   "delay": 3000, "pos":"toast-bottom-right",   "msg":"You need to take your medicine!!"},
        {"type": "info",    "delay": 5000, "pos":"toast-top-right",     "msg":"You will need a bigger boat"},
        {"type": "warning", "delay": 6000, "pos":"toast-top-left",       "msg":"What?! "},
        {"type": "info",    "delay": 5000, "pos":"toast-bottom-right",   "msg":"You will need a bigger boat!!!!!!!"},
        {"type": "warning", "delay": 4000, "pos":"toast-top-right",      "msg":"Let me introduce you to my lil friend"},
        {"type": "info",    "delay": 2020, "pos":"toast-bottom-right",   "msg":"Thanks for Submitting"},
        {"type": "success", "delay": 2200, "pos":"toast-bottom-right",    "msg":"Received your Submission"}
    ];
    
    var toastsJson = [
        {"type": "info",    "delay": 2020, "pos":"toast-bottom-right",   "msg":"Thanks for Submitting"},
        {"type": "success", "delay": 2200, "pos":"toast-bottom-right",    "msg":"Received your Submission"}
    ];


    toastr.options.timeOut      = 2500;
    toastr.options.showEasing   = "linear";
    toastr.options.positionClass= 'toast-top-right';



    $('#tryMe2').click(function () {
        setTimeout(function() {toastr['info']("Thank You for letting us know");}, 0);
        setTimeout(function() {toastr['success']("NYP has Submission");}, 1200);
        // setTimeout(function() {ToastPush();}, 1000*7);
    });

    $('#tryMe3').click(function () {
        setTimeout(function() {toastr['info']("Thank You for letting us know");}, 0);
        setTimeout(function() {toastr['success']("NYP has Submission");}, 1200);
        // setTimeout(function() {ToastPush();}, 1000*7);
    });


})
