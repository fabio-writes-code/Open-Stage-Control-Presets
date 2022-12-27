//define the variables for the track name function
var trackName = ""
var pos = 72
var rootPosLCD = 72
var keepStringVal = 0
var trackNameJoined = ""
var bufferTrackName = ""
var posBuffer = 72

const fs = nativeRequire('fs');
const xml2js = nativeRequire('xml2js');
const glob = nativeRequire('glob');
// const Excel = nativeRequire('exceljs')

//set a variable for the midi port of your generic remote

var genericRemoteMIDIport = 'OSCMIDICONTROL'; //BASE MIDI PORT FOR showing all tracks in cubase
var midiPort_MCU_From_OSC = 'MCU_from_OSC' //this is the MCU port you've set up in cubase to send and recieve MCU messages
var midiPort_MCU_To_OSC = 'MCU_to_OSC' //this is the MCU port you've set up in cubase to send and recieve MCU messages

//Create variables for each of the OSC watchers in the articulation buttons you have created on your template

//Set the path to your expression Maps
var mapFiles = glob.sync('M:/Z-Cubase Presets & Content/Y-Expression Maps/STR/Long/*.expressionmap')

//Set the address of the library buttons
var artButtons = {
    'b1': '/b1/show', 'b2': '/b2/show', 'b3': '/b3/show', 'b4': '/b4/show', 'b5': '/b5/show',
    'b6': '/b6/show', 'b7': '/b7/show', 'b8': '/b8/show', 'b9': '/b9/show', 'b10': '/b10/show',
    'b11': '/b11/show', 'b12': '/b12/show', 'b13': '/b13/show', 'b14': '/b14/show', 'b15': '/b15/show',
    'b16': '/b16/show', 'b17': '/b17/show', 'b18': '/b18/show', 'b19': '/b19/show', 'b20': '/b20/show',
    'b21': '/b21/show', 'b22': '/b22/show', 'b23': '/b23/show', 'b24': '/b24/show', 'b25': '/b25/show',
    'b26': '/b26/show', 'b27': '/b27/show', 'b28': '/b28/show', 'b29': '/b29/show', 'b30': '/b30/show',
    'b31': '/b31/show', 'b32': '/b32/show', 'b33': '/b33/show', 'b34': '/b34/show', 'b35': '/b35/show',
    'b36': '/b36/show', 'b37': '/b37/show', 'b38': '/b38/show', 'b39': '/b39/show', 'b40': '/b40/show',
    'b41': '/b41/show', 'b42': '/b42/show', 'b43': '/b43/show', 'b44': '/b44/show', 'b45': '/b45/show',
    'b46': '/b46/show', 'b47': '/b47/show', 'b48': '/b48/show', 'b49': '/b49/show', 'b50': '/b50/show',
    'b51': '/b51/show', 'b52': '/b52/show', 'b53': '/b53/show', 'b54': '/b54/show', 'b55': '/b55/show',
    'b56': '/b56/show', 'b57': '/b57/show', 'b58': '/b58/show', 'b59': '/b59/show', 'b60': '/b60/show'
}

// These correspond to the label within OSC #{OSC{/b1/label, , false}}

// Set The variable when populated is the actual text on the button
var artLabels = {
    'b1': '/b1/label', 'b2': '/b2/label', 'b3': '/b3/label', 'b4': '/b4/label', 'b5': '/b5/label',
    'b6': '/b6/label', 'b7': '/b7/label', 'b8': '/b8/label', 'b9': '/b9/label', 'b10': '/b10/label',
    'b11': '/b11/label', 'b12': '/b12/label', 'b13': '/b13/label', 'b14': '/b14/label', 'b15': '/b15/label',
    'b16': '/b16/label', 'b17': '/b17/label', 'b18': '/b18/label', 'b19': '/b19/label', 'b20': '/b20/label',
    'b21': '/b21/label', 'b22': '/b22/label', 'b23': '/b23/label', 'b24': '/b24/label', 'b25': '/b25/label',
    'b26': '/b26/label', 'b27': '/b27/label', 'b28': '/b28/label', 'b29': '/b29/label', 'b30': '/b30/label',
    'b31': '/b31/label', 'b32': '/b32/label', 'b33': '/b33/label', 'b34': '/b34/label', 'b35': '/b35/label',
    'b36': '/b36/label', 'b37': '/b37/label', 'b38': '/b38/label', 'b39': '/b39/label', 'b40': '/b40/label',
    'b41': '/b41/label', 'b42': '/b42/label', 'b43': '/b43/label', 'b44': '/b44/label', 'b45': '/b45/label',
    'b46': '/b46/label', 'b47': '/b47/label', 'b48': '/b48/label', 'b49': '/b49/label', 'b50': '/b50/label',
    'b51': '/b51/label', 'b52': '/b52/label', 'b53': '/b53/label', 'b54': '/b54/label', 'b55': '/b55/label',
    'b56': '/b56/label', 'b57': '/b57/label', 'b58': '/b58/label', 'b59': '/b59/label', 'b60': '/b60/label',

}

// const fileName = 'M:/A-To make music with/Open Stage Control Presets/template-tracks.xlsx'
// const wb = new Excel.Workbook();
// const ws = wb.addWorksheet('track-names');
// const trackNames = []

send('midi', midiPort_MCU_From_OSC, '/note', 1, 44, 127);  //Send MCU command to swicth to track name sending


module.exports = {
    oscInFilter: function (data) {   // this filters data from Cubase or midi device into OSC
        var { address, args, host, port } = data
        mcuToOsc(host, port, address, args)
        return { address, args, host, port }
    },

    oscOutFilter: function (data) {         // Filter incomming osc messages from OSC and gets them out to Cubase
        var { address, args, host, port } = data
        console.log(port);

        if (address == '/testAddress') console.log('You have sent a message to custom module from OSC')

        // if (address == '/write') {
        //     console.log('writting');
        //     for (let i = 1; i < trackNames.length; i++) {
        //         ws.getCell(i, 2).value = trackNames[i]
        //     }
        //     wb.xlsx
        //         .writeFile(fileName)
        //         .then(() => {
        //             console.log('File created')
        //         })
        //         .catch(err => {
        //             console.log(err.message);
        //         })
        // }

        if (address == '/resetMCU') {
            console.log('MCU Reset message sent')
            send('midi', midiPort_MCU_From_OSC, '/note', 1, 44, 127);  //Send MCU command to swicth to track name sending
        }

        // console.log('trackNames: ' + trackNames);
        return data  //End of OSC out Filter here
    }
}


//These are your functions that do the work in JS

function mcuToOsc(host, port, address, args) {

    if (host !== 'midi' || port !== midiPort_MCU_To_OSC) return
    var inArgs = args.map(x => x.value),
        outArgs = [],
        action = ''
    // SYSEX
    if (address === '/sysex') {

        var [value] = inArgs
        if (value.includes("f0 00 00 66 14 12")) { // mackie lcd text < this is the sysex identifier for the track name
            // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>sysex value recieved")
            let sysExVal = args[0].value

            //Use the function getTrackName to do all the cool stuff to get the fullTrackName
            let fullTrackName = getTrackName(sysExVal)

            // console.log("You have Grabbed the track Name using the function getTrackName   = " + fullTrackName)

            //now you need to Send the Full Track Name to OSC Panel using another function
            sendTrackName(fullTrackName)

            //Populate the Map using the below but make sure your track names follow the rules on expression map tagging
            //limitatation - track tag has to be in the last 6 characters of the name and must be bounded by []

            //Strip out the trackMapTag from the full name
            //To avoid complications also strip off the square brackets after you've pulled them into the OSC world

            trackMapTag = (fullTrackName.substring(fullTrackName.length - 6));
            trackMapTag = trackMapTag.replace('[', '')
            trackMapTag = trackMapTag.replace(']', '')
            console.log("Track TAG = " + trackMapTag)

            // Build the articulation map and populate the buttons on the expression map
            buildMap(trackMapTag)
        }
    }


}

function getTrackName(sysExVal) {
    var nameDone = false
    var d = sysExVal.split(" ").slice(6).map(x => parseInt(x, 16)) //this divides up using, slices off the front 6 elements,  and x => parseInt(x, 16) converts the rest from Hex to Int then .map creates the array d[]
    pos = d[0] // first byte -> position // hex to int

    text = d.slice(1).map(x => String.fromCharCode(x))// these are the new characters which are updated on the console, the rest -> updated characters
    if (pos < 29) {
        return trackNameJoined
    }
    console.log('text: ' + text);

    text.pop() // drop sysex closing byte                
    trackName = text.join('')



    //MCU only sends what it needs so you need to buffer the previous name and use parts of that
    //Check the length of the new name vs the buffer
    nameLengthCheck = bufferTrackName.length - trackName.length

    //MCU sends some sysex data to tell the screen where to start showing the new characters
    //This is related to the root position on the screen which is 72

    //Check if root position matches the position where the characters are to be placed
    charFromStart = pos - rootPosLCD
    var lengthCheck = charFromStart + trackName.length

    if (lengthCheck < 29) {
        let newEndLength = 29 - charFromStart - trackName.length
        newEnd = bufferTrackName.substring(bufferTrackName.length - newEndLength)
    } else { newEnd = "" }


    if (pos == 72) {       //Full length name recieved
        trackNameJoined = trackName + newEnd
        bufferTrackName = trackNameJoined
        posBuffer = pos
        // console.log('TrackName Joined = ' + trackNameJoined)
        nameDone = true

    } else if (pos > posBuffer && posBuffer == 72 && nameDone == false) {
        keepStringVal = pos - posBuffer  //new name follows a full string text
        var prevTrackKeep = bufferTrackName.substring(0, keepStringVal)
        trackNameJoined = prevTrackKeep + trackName + newEnd
        bufferTrackName = trackNameJoined
        posBuffer = pos
        nameDone = true
    } else {
        keepStringVal = pos - rootPosLCD  //new name follows a full string text
        var prevTrackKeep = bufferTrackName.substring(0, keepStringVal)
        trackNameJoined = prevTrackKeep + trackName + newEnd
        bufferTrackName = trackNameJoined
        posBuffer = pos
        nameDone = true
    }


    //MCU will sometimes send the characters (MIDI) as part of the track name
    //so you need to strip these out
    const findMidiTag = '(';
    var posMidiTag = trackNameJoined.search("\\(M");
    var posBrackTag = trackNameJoined.search("\\(");
    var trackNameJoinedTrim = ""

    if (posBrackTag == trackNameJoined.length - 1) {
        trackNameJoinedTrim = trackNameJoined.substring(0, (posBrackTag - 1))
        trackNameJoined = trackNameJoinedTrim
    }

    if (posMidiTag > -1) {
        trackNameJoinedTrim = trackNameJoined.substring(0, (posMidiTag - 1))
        trackNameJoined = trackNameJoinedTrim
    }
    //trim off all the spaces at the end
    trackNameJoined = trackNameJoined.trimEnd();

    // trackNames.push(trackNameJoined)

    return trackNameJoined
}

function sendTrackName(fullTrackName) {
    //set the address in OSC of the full Name Label
    var trackNameLabel = { 'trackName': '/trackName/Label' }

    console.log("full trackName = " + fullTrackName)
    receiveOsc({
        address: Object.values(trackNameLabel), //this populates the labels on the buttons based on the array
        args: [
            { type: 's', value: fullTrackName }
        ]
    })
    return
}

// Get the articulations from the *.xml expression maps in cubase
async function buildMap(trackMapTag) {
    const artArr = [];
    const artColor = [];
    for (const mapFile of mapFiles) {

        let mapName = "Not Defined"

        //console.log('Selected Map:  ' + mapFile);

        if (mapFile.includes(trackMapTag)) { //trackID comes from sysex track naming routine  

            const parser = new xml2js.Parser({
                explicitArray: false,
                mergeAttrs: true
            }); // 'mergeAttrs: true' was essential

            const data = await fs.promises.readFile(mapFile);
            const result = await parser.parseStringPromise(data);
            //let art = await result.InstrumentMap.member[1].list.obj;
            //


            mapName = result.InstrumentMap.string.value
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>Map Name = ' + mapName)
            const art = result.InstrumentMap.member[1].list.obj;

            // console.log(art);
            // NOTE: this code assumes that this part only ever runs for
            // one mapFile, that all the others don't match the trackID test
            // because if you run this more than once, it will just
            // overwrite the members of artArr and artColor

            //Add label to Expression Map Label

            // addExpMapLabel(mapName)  //TODO Missing Function

            for (let i = 0, len = art.length; i < len; i++) {

                artArr[i] = art[i].member[1].string.value
                artColor[i] = art[i].int.value
            }

            //Now call the function to label the map template you have created in OSC

            addExpBtnLabels(artArr)

            break;
        }
    }
    return { artArr, artColor };
}

//Adds Label to the expression map buttons called from function labelMap - this is set up to have a grid of 64 buttons

function addExpBtnLabels(artArr) {
    console.log(artArr)
    var artButtonGrid = artArr.length //number of buttons based on number of articulations in the map
    //Populate the lables on the grid
    for (i = 0; i < artButtonGrid; i++) {
        var artText = artArr[i] //collects each label from the object labeltexts that has just been created at position [i]
        receiveOsc({
            address: Object.values(artButtons)[i], //this controls the visibility of the buttons
            args: [
                { type: 'i', value: 1 }
            ]
        })

        receiveOsc({
            address: Object.values(artLabels)[i], //this populates the labels on the buttons based on the array
            args: [
                { type: 's', value: artText }
            ]
        })


    }

    //Remove remaining buttons on articulation grid
    for (i = artButtonGrid; i < 64; i++) { // amend the 64 to the number of buttons you have in total on your grid
        receiveOsc({
            address: Object.values(artButtons)[i], //continues through the remaining buttons and hides them
            args: [
                { type: 'i', value: 0 }
            ]
        })

    }

}
