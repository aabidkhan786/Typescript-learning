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
// Another Num Enum
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
console.log(StatusCodes.Accepted);
console.log(StatusCodes.BadRequest);
// String Enum
var Print_Media;
(function (Print_Media) {
    Print_Media["Newspaper"] = "NEWSPAPER";
    Print_Media["Newsletter"] = "NEWSLETTER";
    Print_Media["Magazine"] = "MAGAZINE";
    Print_Media["Book"] = "BOOK";
})(Print_Media || (Print_Media = {}));
// Access String Enum 
console.log(Print_Media.Newspaper);
console.log(Print_Media['Magazine']);
