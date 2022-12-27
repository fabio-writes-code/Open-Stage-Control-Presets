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

var V1_V2 = deviceDriver.mSurface.makeButton(0, 0, 1, 1)
var V1_V2_Flutea2 = deviceDriver.mSurface.makeButton(1, 0, 1, 1)
var Clli_TboneEns = deviceDriver.mSurface.makeButton(2, 0, 1, 1)
var CSBBrassUnison = deviceDriver.mSurface.makeButton(3, 0, 1, 1)

V1_V2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 1)
V1_V2_Flutea2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 2)
Clli_TboneEns.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 3)
CSBBrassUnison.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 4)

page.makeCommandBinding(V1_V2.mSurfaceValue, 'Process Project Logical Editor','V1-V2')
page.makeCommandBinding(V1_V2_Flutea2.mSurfaceValue, 'Process Project Logical Editor','V1-V2-Flute a2')
page.makeCommandBinding(Clli_TboneEns.mSurfaceValue, 'Process Project Logical Editor','Clli-Tbone Ens')
page.makeCommandBinding(CSBBrassUnison.mSurfaceValue, 'Process Project Logical Editor','CSB Brass Unison')

