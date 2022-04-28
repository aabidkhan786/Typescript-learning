"use strict";
// Numeric Enum
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
    else if (mediaName === 'Times Of India') {
        return PrintMedia.Newspaper;
    }
}
let mediatype = getMedia('Forbes');
console.log("Media Code: " + mediatype);
mediatype = getMedia('Times Of India');
console.log("Media Code: " + mediatype);
