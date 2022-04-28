// Numeric Enum
enum PrintMedia {
    Newspaper = 0,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
    else if (mediaName === 'Times Of India') {
        return PrintMedia.Newspaper;
    }
}

let mediatype: PrintMedia = getMedia('Forbes');
console.log("Media Code: " + mediatype);
mediatype = getMedia('Times Of India');
console.log("Media Code: " + mediatype);

// Another Num Enum
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};

console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
console.log(StatusCodes.Accepted);
console.log(StatusCodes.BadRequest);

// String Enum
enum Print_Media {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
console.log(Print_Media.Newspaper);
console.log(Print_Media['Magazine']);


