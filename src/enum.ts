// Numeric Enum
enum PrintMedia{
    Newspaper = 0,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia{
    if( mediaName === 'Forbes' || mediaName === 'Outlook' ){
        return PrintMedia.Magazine;
    }
    else if( mediaName === 'Times Of India'){
        return PrintMedia.Newspaper;
    }
}

let mediatype: PrintMedia = getMedia('Forbes');
console.log("Media Code: " + mediatype);
mediatype = getMedia('Times Of India');
console.log("Media Code: " + mediatype);

