function consoleStyler(color,background,fontSize,txt) {
    let message="%c" + txt;
    let style=`color: ${color};`
    style+=`background: ${background};`
    style+=`font-size: ${fontSize};`
    console.log(message,style)
}
consoleStyler(`'red`,`'blue'`,`'40px'`,"hey")

// function celebrateStyler(reason) {
//     let fontStyle="color: tomato; font-size: 50px";
//     if(`reason == "birthday"`){
//         console.log(`%cHappy birthday`, fontStyle);
//     }
//     else if(reason == "champions"){
//         console.log(`%cCongrats on the title!`, fontStyle);
//     }
//     console.log("message", fontStyle);
// }
// celebrateStyler("champions")