//-----------------------------------------------------------------------------
// 1. DRIVER SETUP - create driver object, midi ports and detection information
//-----------------------------------------------------------------------------

// get the api's entry point
var midiremote_api = require('midiremote_api_v1')

// create the device driver main object
var deviceDriver = midiremote_api.makeDeviceDriver('Doublings', 'DoublingDevice', 'Steinberg Media Technologies GmbH')

// create objects representing the hardware's MIDI ports
var midiInput = deviceDriver.mPorts.makeMidiInput()
var midiOutput = deviceDriver.mPorts.makeMidiOutput()

// define all possible namings the devices MIDI ports could have
// NOTE: Windows and MacOS handle port naming differently
deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
	.expectInputNameEquals('OSCDoublings')
	.expectOutputNameEquals('OSCDoublings')

//-----------------------------------------------------------------------------
// 2. SURFACE LAYOUT - create control elements and midi bindings
//-----------------------------------------------------------------------------

// create control element representing your hardware's surface
var page = deviceDriver.mMapping.makePage('page')




