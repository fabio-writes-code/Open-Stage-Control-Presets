//-----------------------------------------------------------------------------
// 1. DRIVER SETUP - create driver object, midi ports and detection information
//-----------------------------------------------------------------------------

// get the api's entry point
var midiremote_api = require('midiremote_api_v1')

// create the device driver main object
var deviceDriver = midiremote_api.makeDeviceDriver('ExampleCompany', 'SimpleDevice', 'Steinberg Media Technologies GmbH')

// create objects representing the hardware's MIDI ports
var midiInput = deviceDriver.mPorts.makeMidiInput()
var midiOutput = deviceDriver.mPorts.makeMidiOutput()

// define all possible namings the devices MIDI ports could have
// NOTE: Windows and MacOS handle port naming differently
deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
	.expectInputNameEquals('OSC')
	.expectOutputNameEquals('OSC')

//-----------------------------------------------------------------------------
// 2. SURFACE LAYOUT - create control elements and midi bindings
//-----------------------------------------------------------------------------

// create control element representing your hardware's surface
var page = deviceDriver.mMapping.makePage('page')

var CSWPiccoloLng = deviceDriver.mSurface.makeButton(0, 0, 1, 1)
var CSWflute1lng = deviceDriver.mSurface.makeButton(1, 0, 1, 1)
var CSWflute2lng = deviceDriver.mSurface.makeButton(2, 0, 1, 1)
var CSWflutea2lng = deviceDriver.mSurface.makeButton(3, 0, 1, 1)
var CSWpiccoloshrt = deviceDriver.mSurface.makeButton(4, 0, 1, 1)
var CSWfluteshrt = deviceDriver.mSurface.makeButton(5, 0, 1, 1)
var CSWflutesa2shrt = deviceDriver.mSurface.makeButton(6, 0, 1, 1)
var CSWoboe1lng = deviceDriver.mSurface.makeButton(7, 0, 1, 1)
var CSWoboe2lng = deviceDriver.mSurface.makeButton(8, 0, 1, 1)
var CSWoboesa2lng = deviceDriver.mSurface.makeButton(9, 0, 1, 1)
var CSWCorlng = deviceDriver.mSurface.makeButton(10, 0, 1, 1)
var CSWoboeshrt = deviceDriver.mSurface.makeButton(11, 0, 1, 1)
var CSWoboesa2shrt = deviceDriver.mSurface.makeButton(12, 0, 1, 1)
var CSWcorshrt = deviceDriver.mSurface.makeButton(13, 0, 1, 1)
var CSWclarinet1lng = deviceDriver.mSurface.makeButton(14, 0, 1, 1)
var CSWclarinet2lng = deviceDriver.mSurface.makeButton(15, 0, 1, 1)
var CSWclarineta2lng = deviceDriver.mSurface.makeButton(16, 0, 1, 1)
var CSWclarinetshrt = deviceDriver.mSurface.makeButton(17, 0, 1, 1)
var CSWclarinetsa2shrt = deviceDriver.mSurface.makeButton(18, 0, 1, 1)
var CSWclarinetsa2Lng = deviceDriver.mSurface.makeButton(19, 0, 1, 1)
var CSWbassoon1lng = deviceDriver.mSurface.makeButton(20, 0, 1, 1)
var CSWbassoon2lng = deviceDriver.mSurface.makeButton(0, 1, 1, 1)
var CSWbassoonsa2lng = deviceDriver.mSurface.makeButton(1, 1, 1, 1)
var CSWbassoonshrt = deviceDriver.mSurface.makeButton(2, 1, 1, 1)
var CSWbassoonsa2shrt = deviceDriver.mSurface.makeButton(3, 1, 1, 1)
var CSWbassclarinetlng = deviceDriver.mSurface.makeButton(4, 1, 1, 1)
var CSWcontrabassoonlng = deviceDriver.mSurface.makeButton(5, 1, 1, 1)
var CSWbassclarinetshrt = deviceDriver.mSurface.makeButton(6, 1, 1, 1)
var CSWcontrabassoonshrt = deviceDriver.mSurface.makeButton(7, 1, 1, 1)
var OTGDAltoSax1 = deviceDriver.mSurface.makeButton(8, 1, 1, 1)
var OTGDAltoSax2 = deviceDriver.mSurface.makeButton(9, 1, 1, 1)
var OTGDTenorSax1 = deviceDriver.mSurface.makeButton(10, 1, 1, 1)
var OTGDTenorSax2 = deviceDriver.mSurface.makeButton(11, 1, 1, 1)
var OTGDBariSaxStacc = deviceDriver.mSurface.makeButton(12, 1, 1, 1)
var OTGDBariSaxLeg = deviceDriver.mSurface.makeButton(13, 1, 1, 1)
var OTGDBariSaxSfz = deviceDriver.mSurface.makeButton(14, 1, 1, 1)
var OTGDAltoTrill = deviceDriver.mSurface.makeButton(15, 1, 1, 1)
var OTGDTenorTrill = deviceDriver.mSurface.makeButton(16, 1, 1, 1)
var OTGDAltoSaxStacc = deviceDriver.mSurface.makeButton(17, 1, 1, 1)
var OTGDTenorSaxStacc = deviceDriver.mSurface.makeButton(18, 1, 1, 1)
var MIDI02 = deviceDriver.mSurface.makeButton(19, 1, 1, 1)
var AB1LngEnsHigh = deviceDriver.mSurface.makeButton(20, 1, 1, 1)
var AB1LngEnsLow = deviceDriver.mSurface.makeButton(0, 2, 1, 1)
var AB1ShrtEnsHigh = deviceDriver.mSurface.makeButton(1, 2, 1, 1)
var AB1ShrtEnsLow = deviceDriver.mSurface.makeButton(2, 2, 1, 1)
var HollyWoodwindsEns = deviceDriver.mSurface.makeButton(3, 2, 1, 1)
var UllieanPipes = deviceDriver.mSurface.makeButton(4, 2, 1, 1)
var Bagpipes = deviceDriver.mSurface.makeButton(5, 2, 1, 1)
var CBHrnSoloLeg = deviceDriver.mSurface.makeButton(6, 2, 1, 1)
var CBHrna2Leg = deviceDriver.mSurface.makeButton(7, 2, 1, 1)
var CBHrnsa6Leg = deviceDriver.mSurface.makeButton(8, 2, 1, 1)
var CBHrna12Leg = deviceDriver.mSurface.makeButton(9, 2, 1, 1)
var CBHrnsa2Sus = deviceDriver.mSurface.makeButton(10, 2, 1, 1)
var CBHrnsa6Sus = deviceDriver.mSurface.makeButton(11, 2, 1, 1)
var CBHrna2Shrt = deviceDriver.mSurface.makeButton(12, 2, 1, 1)
var CBHrna6Shrt = deviceDriver.mSurface.makeButton(13, 2, 1, 1)
var CBHrna12Shrt = deviceDriver.mSurface.makeButton(14, 2, 1, 1)
var CBHrnsRips = deviceDriver.mSurface.makeButton(15, 2, 1, 1)
var CSBHrnSoloLng = deviceDriver.mSurface.makeButton(16, 2, 1, 1)
var CSBHrna4Lng = deviceDriver.mSurface.makeButton(17, 2, 1, 1)
var CSBHrnSoloShrt = deviceDriver.mSurface.makeButton(18, 2, 1, 1)
var CSBHrna4Shrt = deviceDriver.mSurface.makeButton(19, 2, 1, 1)
var CBTrpSoloLeg = deviceDriver.mSurface.makeButton(20, 2, 1, 1)
var CBTrpEnsLeg = deviceDriver.mSurface.makeButton(0, 3, 1, 1)
var CBTrpEnsSus = deviceDriver.mSurface.makeButton(1, 3, 1, 1)
var CBTrpEnsShorts = deviceDriver.mSurface.makeButton(2, 3, 1, 1)
var CSBTrpSoloLeg = deviceDriver.mSurface.makeButton(3, 3, 1, 1)
var CSBTrpEnsLeg = deviceDriver.mSurface.makeButton(4, 3, 1, 1)
var CSBTrpSoloShrts = deviceDriver.mSurface.makeButton(5, 3, 1, 1)
var CSBTrpEnsShrts = deviceDriver.mSurface.makeButton(6, 3, 1, 1)
var CBTrbMlwLeg = deviceDriver.mSurface.makeButton(7, 3, 1, 1)
var CBTrbMlwSus = deviceDriver.mSurface.makeButton(8, 3, 1, 1)
var CBTrbBrassyLeg = deviceDriver.mSurface.makeButton(9, 3, 1, 1)
var CBTrbBrassySus = deviceDriver.mSurface.makeButton(10, 3, 1, 1)
var CBTrbEnsShrt = deviceDriver.mSurface.makeButton(11, 3, 1, 1)
var CSBTrbSoloLng = deviceDriver.mSurface.makeButton(12, 3, 1, 1)
var CSBTrbEnsLng = deviceDriver.mSurface.makeButton(13, 3, 1, 1)
var CSBBassTrbLng = deviceDriver.mSurface.makeButton(14, 3, 1, 1)
var CSBTrbShrt = deviceDriver.mSurface.makeButton(15, 3, 1, 1)
var CSBTrbEnsShrt = deviceDriver.mSurface.makeButton(16, 3, 1, 1)
var CSBBassTrnShrt = deviceDriver.mSurface.makeButton(17, 3, 1, 1)
var CSBTubaLeg = deviceDriver.mSurface.makeButton(18, 3, 1, 1)
var CSBTubaShrts = deviceDriver.mSurface.makeButton(19, 3, 1, 1)
var CSSViolin1Lng = deviceDriver.mSurface.makeButton(20, 3, 1, 1)
var CSSViolin1Shrt = deviceDriver.mSurface.makeButton(0, 4, 1, 1)
var CSSViolin1ShrtAttr = deviceDriver.mSurface.makeButton(1, 4, 1, 1)
var CSSViolin2Lng = deviceDriver.mSurface.makeButton(2, 4, 1, 1)
var CSSViolin2Lng = deviceDriver.mSurface.makeButton(3, 4, 1, 1)
var CSSViolin2Shrt = deviceDriver.mSurface.makeButton(4, 4, 1, 1)
var CSSViolin2ShrtsAttr = deviceDriver.mSurface.makeButton(5, 4, 1, 1)
var SFCHViolin2 = deviceDriver.mSurface.makeButton(6, 4, 1, 1)
var CSSViolaLng = deviceDriver.mSurface.makeButton(7, 4, 1, 1)
var CSSViolaShrt = deviceDriver.mSurface.makeButton(8, 4, 1, 1)
var CSSViolaShrt2 = deviceDriver.mSurface.makeButton(9, 4, 1, 1)
var CSSCelliLeg = deviceDriver.mSurface.makeButton(10, 4, 1, 1)
var CSSCelliShrt = deviceDriver.mSurface.makeButton(11, 4, 1, 1)
var CSSCelliShrtAttr = deviceDriver.mSurface.makeButton(12, 4, 1, 1)
var CSSBassesLeg = deviceDriver.mSurface.makeButton(13, 4, 1, 1)
var CSSBassesShrt = deviceDriver.mSurface.makeButton(14, 4, 1, 1)
var CSSBassesShrtAttr = deviceDriver.mSurface.makeButton(15, 4, 1, 1)
var CSSEnsLng1 = deviceDriver.mSurface.makeButton(16, 4, 1, 1)
var CSSEnsLng2 = deviceDriver.mSurface.makeButton(17, 4, 1, 1)
var CSSEnsLng3 = deviceDriver.mSurface.makeButton(18, 4, 1, 1)
var SFCHLongEns1 = deviceDriver.mSurface.makeButton(19, 4, 1, 1)
var SFCHLongEns2 = deviceDriver.mSurface.makeButton(20, 4, 1, 1)
var SFCHLongEns3 = deviceDriver.mSurface.makeButton(0, 5, 1, 1)
var SFSYLongEns3 = deviceDriver.mSurface.makeButton(1, 5, 1, 1)
var SFSYLongEns1 = deviceDriver.mSurface.makeButton(2, 5, 1, 1)
var SFSYLongEns2 = deviceDriver.mSurface.makeButton(3, 5, 1, 1)
var SFOAChamberGrd = deviceDriver.mSurface.makeButton(4, 5, 1, 1)
var SFOAChamberWves = deviceDriver.mSurface.makeButton(5, 5, 1, 1)
var MA1StrHigh = deviceDriver.mSurface.makeButton(6, 5, 1, 1)
var MA1StrLow = deviceDriver.mSurface.makeButton(7, 5, 1, 1)
var AB1Ensemble = deviceDriver.mSurface.makeButton(8, 5, 1, 1)
var CSSEnsShrt1 = deviceDriver.mSurface.makeButton(9, 5, 1, 1)
var CSSEnsShrt2 = deviceDriver.mSurface.makeButton(10, 5, 1, 1)
var CSSShrt2Pizz = deviceDriver.mSurface.makeButton(11, 5, 1, 1)
var SFCHShrtEns1 = deviceDriver.mSurface.makeButton(12, 5, 1, 1)
var SFCHShrtEnsTM = deviceDriver.mSurface.makeButton(13, 5, 1, 1)
var SFCHShrtEnsPizz = deviceDriver.mSurface.makeButton(14, 5, 1, 1)
var SFSYShrtEnsPizz = deviceDriver.mSurface.makeButton(15, 5, 1, 1)
var SFSYShrtEns1 = deviceDriver.mSurface.makeButton(16, 5, 1, 1)
var SFSYShrtEnsTM = deviceDriver.mSurface.makeButton(17, 5, 1, 1)
var MA1StrHigh = deviceDriver.mSurface.makeButton(18, 5, 1, 1)
var MA1StrLow = deviceDriver.mSurface.makeButton(19, 5, 1, 1)
var CPTimpSoft = deviceDriver.mSurface.makeButton(20, 5, 1, 1)
var CPTimpMedium = deviceDriver.mSurface.makeButton(0, 6, 1, 1)
var CPTimpHard = deviceDriver.mSurface.makeButton(1, 6, 1, 1)
var CPTimpFX = deviceDriver.mSurface.makeButton(2, 6, 1, 1)
var HZTimpHard = deviceDriver.mSurface.makeButton(3, 6, 1, 1)
var HZTimpRods = deviceDriver.mSurface.makeButton(4, 6, 1, 1)
var HZTimpSoft = deviceDriver.mSurface.makeButton(5, 6, 1, 1)
var CPBassDrum2_in = deviceDriver.mSurface.makeButton(6, 6, 1, 1)
var CPBassDrum36in = deviceDriver.mSurface.makeButton(7, 6, 1, 1)
var HZBassDrum36in = deviceDriver.mSurface.makeButton(8, 6, 1, 1)
var HZBassDrumGlry = deviceDriver.mSurface.makeButton(9, 6, 1, 1)
var HZLowBoomGlry = deviceDriver.mSurface.makeButton(10, 6, 1, 1)
var HZLowBoom = deviceDriver.mSurface.makeButton(11, 6, 1, 1)
var CPSurdos = deviceDriver.mSurface.makeButton(12, 6, 1, 1)
var CPSnrPopCorn = deviceDriver.mSurface.makeButton(13, 6, 1, 1)
var CPSnrPicc = deviceDriver.mSurface.makeButton(14, 6, 1, 1)
var CPSnrConcert = deviceDriver.mSurface.makeButton(15, 6, 1, 1)
var CPSnrTenor = deviceDriver.mSurface.makeButton(16, 6, 1, 1)
var CPSnrMetal = deviceDriver.mSurface.makeButton(17, 6, 1, 1)
var CPSnrMilitary = deviceDriver.mSurface.makeButton(18, 6, 1, 1)
var CymbalsPiattis = deviceDriver.mSurface.makeButton(19, 6, 1, 1)
var CPPiatti = deviceDriver.mSurface.makeButton(20, 6, 1, 1)
var CPSusCym = deviceDriver.mSurface.makeButton(0, 7, 1, 1)
var HZPiatti = deviceDriver.mSurface.makeButton(1, 7, 1, 1)
var CPGongsTams = deviceDriver.mSurface.makeButton(2, 7, 1, 1)
var CPTriangles = deviceDriver.mSurface.makeButton(3, 7, 1, 1)
var CPMarkTree = deviceDriver.mSurface.makeButton(4, 7, 1, 1)
var CPTamTam = deviceDriver.mSurface.makeButton(5, 7, 1, 1)
var CPScrapeTamGongs = deviceDriver.mSurface.makeButton(6, 7, 1, 1)
var WoodsToys = deviceDriver.mSurface.makeButton(7, 7, 1, 1)
var CPBongos = deviceDriver.mSurface.makeButton(8, 7, 1, 1)
var CPCongas = deviceDriver.mSurface.makeButton(9, 7, 1, 1)
var CPCastanets = deviceDriver.mSurface.makeButton(10, 7, 1, 1)
var CSCinePiano = deviceDriver.mSurface.makeButton(11, 7, 1, 1)
var NIGrandeur = deviceDriver.mSurface.makeButton(12, 7, 1, 1)
var NIGrandeur2 = deviceDriver.mSurface.makeButton(13, 7, 1, 1)
var NIAliciasKeys = deviceDriver.mSurface.makeButton(14, 7, 1, 1)
var NIAliciasKeys2 = deviceDriver.mSurface.makeButton(15, 7, 1, 1)
var CSHarpMain = deviceDriver.mSurface.makeButton(16, 7, 1, 1)
var CsHarpMain = deviceDriver.mSurface.makeButton(17, 7, 1, 1)
var CSHarpHarmonics = deviceDriver.mSurface.makeButton(18, 7, 1, 1)
var CSHarpGlissLng = deviceDriver.mSurface.makeButton(19, 7, 1, 1)
var CSHarpGlissMedium = deviceDriver.mSurface.makeButton(20, 7, 1, 1)
var CSHarpGlissShort = deviceDriver.mSurface.makeButton(0, 8, 1, 1)
var CSHarpGlissAdLib = deviceDriver.mSurface.makeButton(1, 8, 1, 1)
var Xylophone = deviceDriver.mSurface.makeButton(2, 8, 1, 1)
var Glockenspiel = deviceDriver.mSurface.makeButton(3, 8, 1, 1)
var Celesta = deviceDriver.mSurface.makeButton(4, 8, 1, 1)
var Marimba = deviceDriver.mSurface.makeButton(5, 8, 1, 1)
var Crotales = deviceDriver.mSurface.makeButton(6, 8, 1, 1)
var CrotalesBowed = deviceDriver.mSurface.makeButton(7, 8, 1, 1)
var Vibes = deviceDriver.mSurface.makeButton(8, 8, 1, 1)
var VibesMotorON = deviceDriver.mSurface.makeButton(9, 8, 1, 1)
var VibesBowed = deviceDriver.mSurface.makeButton(10, 8, 1, 1)
var GlassMarimba = deviceDriver.mSurface.makeButton(11, 8, 1, 1)
var TubularBells = deviceDriver.mSurface.makeButton(12, 8, 1, 1)
var LowChimes = deviceDriver.mSurface.makeButton(13, 8, 1, 1)
var MA1HighLng = deviceDriver.mSurface.makeButton(14, 8, 1, 1)
var MA1LowLng = deviceDriver.mSurface.makeButton(15, 8, 1, 1)
var AIJGMerethe = deviceDriver.mSurface.makeButton(16, 8, 1, 1)
var _DLcrEnsStacc = deviceDriver.mSurface.makeButton(17, 8, 1, 1)
var _DLcrEnsMultiVowels = deviceDriver.mSurface.makeButton(18, 8, 1, 1)
var MA1HighShrt = deviceDriver.mSurface.makeButton(19, 8, 1, 1)
var MA1LowShrt = deviceDriver.mSurface.makeButton(20, 8, 1, 1)
var CHOIRLONG = deviceDriver.mSurface.makeButton(0, 9, 1, 1)
var _DLcrLegato = deviceDriver.mSurface.makeButton(1, 9, 1, 1)
var _DLcrSustains = deviceDriver.mSurface.makeButton(2, 9, 1, 1)
var _DLcrMarccatos = deviceDriver.mSurface.makeButton(3, 9, 1, 1)
var _DLcrArcs = deviceDriver.mSurface.makeButton(4, 9, 1, 1)
var D2EnsDesigner1 = deviceDriver.mSurface.makeButton(5, 9, 1, 1)
var D2EnsDesigner2 = deviceDriver.mSurface.makeButton(6, 9, 1, 1)
var D2LoopDesigner = deviceDriver.mSurface.makeButton(7, 9, 1, 1)
var D1Armaggedon = deviceDriver.mSurface.makeButton(8, 9, 1, 1)
var D1PlasticEns = deviceDriver.mSurface.makeButton(9, 9, 1, 1)
var DecimatorEpic = deviceDriver.mSurface.makeButton(10, 9, 1, 1)
var DecimatorRaw = deviceDriver.mSurface.makeButton(11, 9, 1, 1)
var KFDevstHighPerc = deviceDriver.mSurface.makeButton(12, 9, 1, 1)
var KFDevstTrailerDrms = deviceDriver.mSurface.makeButton(13, 9, 1, 1)
var AB1XXLPerc = deviceDriver.mSurface.makeButton(14, 9, 1, 1)
var AB1EasterIsland = deviceDriver.mSurface.makeButton(15, 9, 1, 1)
var AB1DarwinPerc = deviceDriver.mSurface.makeButton(16, 9, 1, 1)
var NIActionStrikes = deviceDriver.mSurface.makeButton(17, 9, 1, 1)
var SmallPerc = deviceDriver.mSurface.makeButton(18, 9, 1, 1)

CSWPiccoloLng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 1)
CSWflute1lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 2)
CSWflute2lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 3)
CSWflutea2lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 4)
CSWpiccoloshrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 5)
CSWfluteshrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 6)
CSWflutesa2shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 7)
CSWoboe1lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 8)
CSWoboe2lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 9)
CSWoboesa2lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 10)
CSWCorlng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 11)
CSWoboeshrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 12)
CSWoboesa2shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 13)
CSWcorshrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 14)
CSWclarinet1lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 15)
CSWclarinet2lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 16)
CSWclarineta2lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 17)
CSWclarinetshrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 18)
CSWclarinetsa2shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 19)
CSWclarinetsa2Lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 20)
CSWbassoon1lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 21)
CSWbassoon2lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 22)
CSWbassoonsa2lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 23)
CSWbassoonshrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 24)
CSWbassoonsa2shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 25)
CSWbassclarinetlng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 26)
CSWcontrabassoonlng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 27)
CSWbassclarinetshrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 28)
CSWcontrabassoonshrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 29)
OTGDAltoSax1.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 30)
OTGDAltoSax2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 31)
OTGDTenorSax1.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 32)
OTGDTenorSax2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 33)
OTGDBariSaxStacc.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 34)
OTGDBariSaxLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 35)
OTGDBariSaxSfz.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 36)
OTGDAltoTrill.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 37)
OTGDTenorTrill.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 38)
OTGDAltoSaxStacc.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 39)
OTGDTenorSaxStacc.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 40)
MIDI02.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 41)
AB1LngEnsHigh.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 42)
AB1LngEnsLow.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 43)
AB1ShrtEnsHigh.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 44)
AB1ShrtEnsLow.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 45)
HollyWoodwindsEns.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 46)
UllieanPipes.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 47)
Bagpipes.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 48)
CBHrnSoloLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 49)
CBHrna2Leg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 50)
CBHrnsa6Leg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 51)
CBHrna12Leg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 52)
CBHrnsa2Sus.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 53)
CBHrnsa6Sus.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 54)
CBHrna2Shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 55)
CBHrna6Shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 56)
CBHrna12Shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 57)
CBHrnsRips.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 58)
CSBHrnSoloLng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 59)
CSBHrna4Lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 60)
CSBHrnSoloShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 61)
CSBHrna4Shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 62)
CBTrpSoloLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 63)
CBTrpEnsLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 64)
CBTrpEnsSus.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 65)
CBTrpEnsShorts.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 66)
CSBTrpSoloLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 67)
CSBTrpEnsLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 68)
CSBTrpSoloShrts.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 69)
CSBTrpEnsShrts.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 70)
CBTrbMlwLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 71)
CBTrbMlwSus.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 72)
CBTrbBrassyLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 73)
CBTrbBrassySus.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 74)
CBTrbEnsShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 75)
CSBTrbSoloLng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 76)
CSBTrbEnsLng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 77)
CSBBassTrbLng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 78)
CSBTrbShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 79)
CSBTrbEnsShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 80)
CSBBassTrnShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 81)
CSBTubaLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 82)
CSBTubaShrts.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 83)
CSSViolin1Lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 84)
CSSViolin1Shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 85)
CSSViolin1ShrtAttr.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 86)
CSSViolin2Lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 87)
CSSViolin2Lng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 88)
CSSViolin2Shrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 89)
CSSViolin2ShrtsAttr.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 90)
SFCHViolin2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 91)
CSSViolaLng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 92)
CSSViolaShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 93)
CSSViolaShrt2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 94)
CSSCelliLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 95)
CSSCelliShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 96)
CSSCelliShrtAttr.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 97)
CSSBassesLeg.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 98)
CSSBassesShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 99)
CSSBassesShrtAttr.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 100)
CSSEnsLng1.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 101)
CSSEnsLng2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 102)
CSSEnsLng3.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 103)
SFCHLongEns1.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 104)
SFCHLongEns2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 105)
SFCHLongEns3.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 106)
SFSYLongEns3.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 107)
SFSYLongEns1.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 108)
SFSYLongEns2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 109)
SFOAChamberGrd.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 110)
SFOAChamberWves.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 111)
MA1StrHigh.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 112)
MA1StrLow.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 113)
AB1Ensemble.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 114)
CSSEnsShrt1.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 115)
CSSEnsShrt2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 116)
CSSShrt2Pizz.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 117)
SFCHShrtEns1.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 118)
SFCHShrtEnsTM.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 119)
SFCHShrtEnsPizz.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 120)
SFSYShrtEnsPizz.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 121)
SFSYShrtEns1.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 122)
SFSYShrtEnsTM.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 123)
MA1StrHigh.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 124)
MA1StrLow.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 125)
CPTimpSoft.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 126)
CPTimpMedium.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(0, 127)
CPTimpHard.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 1)
CPTimpFX.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 2)
HZTimpHard.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 3)
HZTimpRods.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 4)
HZTimpSoft.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 5)
CPBassDrum2_in.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 6)
CPBassDrum36in.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 7)
HZBassDrum36in.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 8)
HZBassDrumGlry.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 9)
HZLowBoomGlry.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 10)
HZLowBoom.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 11)
CPSurdos.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 12)
CPSnrPopCorn.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 13)
CPSnrPicc.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 14)
CPSnrConcert.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 15)
CPSnrTenor.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 16)
CPSnrMetal.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 17)
CPSnrMilitary.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 18)
CymbalsPiattis.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 19)
CPPiatti.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 20)
CPSusCym.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 21)
HZPiatti.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 22)
CPGongsTams.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 23)
CPTriangles.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 24)
CPMarkTree.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 25)
CPTamTam.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 26)
CPScrapeTamGongs.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 27)
WoodsToys.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 28)
CPBongos.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 29)
CPCongas.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 30)
CPCastanets.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 31)
CSCinePiano.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 32)
NIGrandeur.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 33)
NIGrandeur2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 34)
NIAliciasKeys.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 35)
NIAliciasKeys2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 36)
CSHarpMain.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 37)
CsHarpMain.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 38)
CSHarpHarmonics.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 39)
CSHarpGlissLng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 40)
CSHarpGlissMedium.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 41)
CSHarpGlissShort.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 42)
CSHarpGlissAdLib.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 43)
Xylophone.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 44)
Glockenspiel.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 45)
Celesta.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 46)
Marimba.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 47)
Crotales.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 48)
CrotalesBowed.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 49)
Vibes.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 50)
VibesMotorON.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 51)
VibesBowed.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 52)
GlassMarimba.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 53)
TubularBells.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 54)
LowChimes.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 55)
MA1HighLng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 56)
MA1LowLng.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 57)
AIJGMerethe.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 58)
_DLcrEnsStacc.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 59)
_DLcrEnsMultiVowels.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 60)
MA1HighShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 61)
MA1LowShrt.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 62)
CHOIRLONG.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 63)
_DLcrLegato.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 64)
_DLcrSustains.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 65)
_DLcrMarccatos.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 66)
_DLcrArcs.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 67)
D2EnsDesigner1.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 68)
D2EnsDesigner2.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 69)
D2LoopDesigner.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 70)
D1Armaggedon.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 71)
D1PlasticEns.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 72)
DecimatorEpic.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 73)
DecimatorRaw.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 74)
KFDevstHighPerc.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 75)
KFDevstTrailerDrms.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 76)
AB1XXLPerc.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 77)
AB1EasterIsland.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 78)
AB1DarwinPerc.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 79)
NIActionStrikes.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 80)
SmallPerc.mSurfaceValue.mMidiBinding
	.setInputPort(midiInput)
	.bindToControlChange(1, 81)

page.makeCommandBinding(CSWPiccoloLng.mSurfaceValue, 'Process Project Logical Editor', 'CSW Piccolo Lng')
page.makeCommandBinding(CSWflute1lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW flute 1 lng')
page.makeCommandBinding(CSWflute2lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW flute 2 lng')
page.makeCommandBinding(CSWflutea2lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW flute a2 lng')
page.makeCommandBinding(CSWpiccoloshrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW piccolo shrt')
page.makeCommandBinding(CSWfluteshrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW flute shrt')
page.makeCommandBinding(CSWflutesa2shrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW flutes a2 shrt')
page.makeCommandBinding(CSWoboe1lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW oboe 1 lng')
page.makeCommandBinding(CSWoboe2lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW oboe 2 lng')
page.makeCommandBinding(CSWoboesa2lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW oboes a2 lng')
page.makeCommandBinding(CSWCorlng.mSurfaceValue, 'Process Project Logical Editor', 'CSW Cor lng')
page.makeCommandBinding(CSWoboeshrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW oboe shrt')
page.makeCommandBinding(CSWoboesa2shrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW oboes a2 shrt')
page.makeCommandBinding(CSWcorshrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW cor shrt')
page.makeCommandBinding(CSWclarinet1lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW clarinet 1 lng')
page.makeCommandBinding(CSWclarinet2lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW clarinet 2 lng')
page.makeCommandBinding(CSWclarineta2lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW clarinet a2 lng')
page.makeCommandBinding(CSWclarinetshrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW clarinet shrt')
page.makeCommandBinding(CSWclarinetsa2shrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW clarinets a2 shrt')
page.makeCommandBinding(CSWclarinetsa2Lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW clarinets a2 Lng')
page.makeCommandBinding(CSWbassoon1lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW bassoon 1 lng')
page.makeCommandBinding(CSWbassoon2lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW bassoon 2 lng')
page.makeCommandBinding(CSWbassoonsa2lng.mSurfaceValue, 'Process Project Logical Editor', 'CSW bassoons a2 lng')
page.makeCommandBinding(CSWbassoonshrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW bassoon shrt')
page.makeCommandBinding(CSWbassoonsa2shrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW bassoons a2 shrt')
page.makeCommandBinding(CSWbassclarinetlng.mSurfaceValue, 'Process Project Logical Editor', 'CSW bass clarinet lng')
page.makeCommandBinding(CSWcontrabassoonlng.mSurfaceValue, 'Process Project Logical Editor', 'CSW contrabassoon lng')
page.makeCommandBinding(CSWbassclarinetshrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW bass clarinet shrt')
page.makeCommandBinding(CSWcontrabassoonshrt.mSurfaceValue, 'Process Project Logical Editor', 'CSW contrabassoon shrt')
page.makeCommandBinding(OTGDAltoSax1.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Alto Sax 1')
page.makeCommandBinding(OTGDAltoSax2.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Alto Sax 2')
page.makeCommandBinding(OTGDTenorSax1.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Tenor Sax 1')
page.makeCommandBinding(OTGDTenorSax2.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Tenor Sax 2')
page.makeCommandBinding(OTGDBariSaxStacc.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Bari Sax Stacc')
page.makeCommandBinding(OTGDBariSaxLeg.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Bari Sax Leg')
page.makeCommandBinding(OTGDBariSaxSfz.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Bari Sax Sfz')
page.makeCommandBinding(OTGDAltoTrill.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Alto Trill')
page.makeCommandBinding(OTGDTenorTrill.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Tenor Trill')
page.makeCommandBinding(OTGDAltoSaxStacc.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Alto Sax Stacc')
page.makeCommandBinding(OTGDTenorSaxStacc.mSurfaceValue, 'Process Project Logical Editor', 'OTGD Tenor Sax Stacc')
page.makeCommandBinding(MIDI02.mSurfaceValue, 'Process Project Logical Editor', 'MIDI 02')
page.makeCommandBinding(AB1LngEnsHigh.mSurfaceValue, 'Process Project Logical Editor', 'AB1 Lng Ens High')
page.makeCommandBinding(AB1LngEnsLow.mSurfaceValue, 'Process Project Logical Editor', 'AB1 Lng Ens Low')
page.makeCommandBinding(AB1ShrtEnsHigh.mSurfaceValue, 'Process Project Logical Editor', 'AB1 Shrt Ens High')
page.makeCommandBinding(AB1ShrtEnsLow.mSurfaceValue, 'Process Project Logical Editor', 'AB1 Shrt Ens Low')
page.makeCommandBinding(HollyWoodwindsEns.mSurfaceValue, 'Process Project Logical Editor', 'HollyWoodwinds Ens')
page.makeCommandBinding(UllieanPipes.mSurfaceValue, 'Process Project Logical Editor', 'Ulliean Pipes')
page.makeCommandBinding(Bagpipes.mSurfaceValue, 'Process Project Logical Editor', 'Bagpipes')
page.makeCommandBinding(CBHrnSoloLeg.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrn Solo Leg')
page.makeCommandBinding(CBHrna2Leg.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrn a2 Leg')
page.makeCommandBinding(CBHrnsa6Leg.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrns a6 Leg')
page.makeCommandBinding(CBHrna12Leg.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrn a12 Leg')
page.makeCommandBinding(CBHrnsa2Sus.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrns a2 Sus')
page.makeCommandBinding(CBHrnsa6Sus.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrns a6 Sus')
page.makeCommandBinding(CBHrna2Shrt.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrn a2 Shrt')
page.makeCommandBinding(CBHrna6Shrt.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrn a6 Shrt')
page.makeCommandBinding(CBHrna12Shrt.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrn a12 Shrt')
page.makeCommandBinding(CBHrnsRips.mSurfaceValue, 'Process Project Logical Editor', 'CB Hrns Rips')
page.makeCommandBinding(CSBHrnSoloLng.mSurfaceValue, 'Process Project Logical Editor', 'CSB Hrn Solo Lng')
page.makeCommandBinding(CSBHrna4Lng.mSurfaceValue, 'Process Project Logical Editor', 'CSB Hrn a4 Lng')
page.makeCommandBinding(CSBHrnSoloShrt.mSurfaceValue, 'Process Project Logical Editor', 'CSB Hrn Solo Shrt')
page.makeCommandBinding(CSBHrna4Shrt.mSurfaceValue, 'Process Project Logical Editor', 'CSB Hrn a4 Shrt')
page.makeCommandBinding(CBTrpSoloLeg.mSurfaceValue, 'Process Project Logical Editor', 'CB Trp Solo Leg')
page.makeCommandBinding(CBTrpEnsLeg.mSurfaceValue, 'Process Project Logical Editor', 'CB Trp Ens Leg')
page.makeCommandBinding(CBTrpEnsSus.mSurfaceValue, 'Process Project Logical Editor', 'CB Trp Ens Sus')
page.makeCommandBinding(CBTrpEnsShorts.mSurfaceValue, 'Process Project Logical Editor', 'CB Trp Ens Shorts')
page.makeCommandBinding(CSBTrpSoloLeg.mSurfaceValue, 'Process Project Logical Editor', 'CSB Trp Solo Leg')
page.makeCommandBinding(CSBTrpEnsLeg.mSurfaceValue, 'Process Project Logical Editor', 'CSB Trp Ens Leg')
page.makeCommandBinding(CSBTrpSoloShrts.mSurfaceValue, 'Process Project Logical Editor', 'CSB Trp Solo Shrts')
page.makeCommandBinding(CSBTrpEnsShrts.mSurfaceValue, 'Process Project Logical Editor', 'CSB Trp Ens Shrts')
page.makeCommandBinding(CBTrbMlwLeg.mSurfaceValue, 'Process Project Logical Editor', 'CB Trb Mlw Leg')
page.makeCommandBinding(CBTrbMlwSus.mSurfaceValue, 'Process Project Logical Editor', 'CB Trb Mlw Sus')
page.makeCommandBinding(CBTrbBrassyLeg.mSurfaceValue, 'Process Project Logical Editor', 'CB Trb Brassy Leg')
page.makeCommandBinding(CBTrbBrassySus.mSurfaceValue, 'Process Project Logical Editor', 'CB Trb Brassy Sus')
page.makeCommandBinding(CBTrbEnsShrt.mSurfaceValue, 'Process Project Logical Editor', 'CB Trb Ens Shrt')
page.makeCommandBinding(CSBTrbSoloLng.mSurfaceValue, 'Process Project Logical Editor', 'CSB Trb Solo Lng')
page.makeCommandBinding(CSBTrbEnsLng.mSurfaceValue, 'Process Project Logical Editor', 'CSB Trb Ens Lng')
page.makeCommandBinding(CSBBassTrbLng.mSurfaceValue, 'Process Project Logical Editor', 'CSB Bass Trb Lng')
page.makeCommandBinding(CSBTrbShrt.mSurfaceValue, 'Process Project Logical Editor', 'CSB Trb Shrt')
page.makeCommandBinding(CSBTrbEnsShrt.mSurfaceValue, 'Process Project Logical Editor', 'CSB Trb Ens Shrt')
page.makeCommandBinding(CSBBassTrnShrt.mSurfaceValue, 'Process Project Logical Editor', 'CSB Bass Trn Shrt')
page.makeCommandBinding(CSBTubaLeg.mSurfaceValue, 'Process Project Logical Editor', 'CSB Tuba Leg')
page.makeCommandBinding(CSBTubaShrts.mSurfaceValue, 'Process Project Logical Editor', 'CSB Tuba Shrts')
page.makeCommandBinding(CSSViolin1Lng.mSurfaceValue, 'Process Project Logical Editor', 'CSS Violin 1 Lng')
page.makeCommandBinding(CSSViolin1Shrt.mSurfaceValue, 'Process Project Logical Editor', 'CSS Violin 1 Shrt')
page.makeCommandBinding(CSSViolin1ShrtAttr.mSurfaceValue, 'Process Project Logical Editor', 'CSS Violin 1 Shrt Attr')
page.makeCommandBinding(CSSViolin2Lng.mSurfaceValue, 'Process Project Logical Editor', 'CSS Violin 2 Lng')
page.makeCommandBinding(CSSViolin2Lng.mSurfaceValue, 'Process Project Logical Editor', 'CSS Violin 2 Lng ')
page.makeCommandBinding(CSSViolin2Shrt.mSurfaceValue, 'Process Project Logical Editor', 'CSS Violin 2 Shrt')
page.makeCommandBinding(CSSViolin2ShrtsAttr.mSurfaceValue, 'Process Project Logical Editor', 'CSS Violin 2 Shrts Attr')
page.makeCommandBinding(SFCHViolin2.mSurfaceValue, 'Process Project Logical Editor', 'SFCH Violin 2')
page.makeCommandBinding(CSSViolaLng.mSurfaceValue, 'Process Project Logical Editor', 'CSS Viola Lng')
page.makeCommandBinding(CSSViolaShrt.mSurfaceValue, 'Process Project Logical Editor', 'CSS Viola Shrt')
page.makeCommandBinding(CSSViolaShrt2.mSurfaceValue, 'Process Project Logical Editor', 'CSS Viola Shrt 2')
page.makeCommandBinding(CSSCelliLeg.mSurfaceValue, 'Process Project Logical Editor', 'CSS Celli Leg')
page.makeCommandBinding(CSSCelliShrt.mSurfaceValue, 'Process Project Logical Editor', 'CSS Celli Shrt')
page.makeCommandBinding(CSSCelliShrtAttr.mSurfaceValue, 'Process Project Logical Editor', 'CSS Celli Shrt Attr')
page.makeCommandBinding(CSSBassesLeg.mSurfaceValue, 'Process Project Logical Editor', 'CSS Basses Leg')
page.makeCommandBinding(CSSBassesShrt.mSurfaceValue, 'Process Project Logical Editor', 'CSS Basses Shrt')
page.makeCommandBinding(CSSBassesShrtAttr.mSurfaceValue, 'Process Project Logical Editor', 'CSS Basses Shrt Attr')
page.makeCommandBinding(CSSEnsLng1.mSurfaceValue, 'Process Project Logical Editor', 'CSS Ens Lng 1')
page.makeCommandBinding(CSSEnsLng2.mSurfaceValue, 'Process Project Logical Editor', 'CSS Ens Lng 2')
page.makeCommandBinding(CSSEnsLng3.mSurfaceValue, 'Process Project Logical Editor', 'CSS Ens Lng 3')
page.makeCommandBinding(SFCHLongEns1.mSurfaceValue, 'Process Project Logical Editor', 'SFCH Long Ens 1')
page.makeCommandBinding(SFCHLongEns2.mSurfaceValue, 'Process Project Logical Editor', 'SFCH Long Ens 2')
page.makeCommandBinding(SFCHLongEns3.mSurfaceValue, 'Process Project Logical Editor', 'SFCH Long Ens 3')
page.makeCommandBinding(SFSYLongEns3.mSurfaceValue, 'Process Project Logical Editor', 'SFSY Long Ens 3')
page.makeCommandBinding(SFSYLongEns1.mSurfaceValue, 'Process Project Logical Editor', 'SFSY Long Ens 1')
page.makeCommandBinding(SFSYLongEns2.mSurfaceValue, 'Process Project Logical Editor', 'SFSY Long Ens 2')
page.makeCommandBinding(SFOAChamberGrd.mSurfaceValue, 'Process Project Logical Editor', 'SFOA Chamber Grd')
page.makeCommandBinding(SFOAChamberWves.mSurfaceValue, 'Process Project Logical Editor', 'SFOA Chamber Wves')
page.makeCommandBinding(MA1StrHigh.mSurfaceValue, 'Process Project Logical Editor', 'MA1 Str High')
page.makeCommandBinding(MA1StrLow.mSurfaceValue, 'Process Project Logical Editor', 'MA1 Str Low')
page.makeCommandBinding(AB1Ensemble.mSurfaceValue, 'Process Project Logical Editor', 'AB1 Ensemble')
page.makeCommandBinding(CSSEnsShrt1.mSurfaceValue, 'Process Project Logical Editor', 'CSS Ens Shrt 1')
page.makeCommandBinding(CSSEnsShrt2.mSurfaceValue, 'Process Project Logical Editor', 'CSS Ens Shrt 2')
page.makeCommandBinding(CSSShrt2Pizz.mSurfaceValue, 'Process Project Logical Editor', 'CSS Shrt 2 (Pizz)')
page.makeCommandBinding(SFCHShrtEns1.mSurfaceValue, 'Process Project Logical Editor', 'SFCH Shrt Ens 1')
page.makeCommandBinding(SFCHShrtEnsTM.mSurfaceValue, 'Process Project Logical Editor', 'SFCH Shrt Ens TM')
page.makeCommandBinding(SFCHShrtEnsPizz.mSurfaceValue, 'Process Project Logical Editor', 'SFCH Shrt Ens Pizz')
page.makeCommandBinding(SFSYShrtEnsPizz.mSurfaceValue, 'Process Project Logical Editor', 'SFSY Shrt Ens Pizz')
page.makeCommandBinding(SFSYShrtEns1.mSurfaceValue, 'Process Project Logical Editor', 'SFSY Shrt Ens 1')
page.makeCommandBinding(SFSYShrtEnsTM.mSurfaceValue, 'Process Project Logical Editor', 'SFSY Shrt Ens TM')
page.makeCommandBinding(MA1StrHigh.mSurfaceValue, 'Process Project Logical Editor', 'MA1 Str High')
page.makeCommandBinding(MA1StrLow.mSurfaceValue, 'Process Project Logical Editor', 'MA1 Str Low')
page.makeCommandBinding(CPTimpSoft.mSurfaceValue, 'Process Project Logical Editor', 'CP Timp Soft')
page.makeCommandBinding(CPTimpMedium.mSurfaceValue, 'Process Project Logical Editor', 'CP Timp Medium')
page.makeCommandBinding(CPTimpHard.mSurfaceValue, 'Process Project Logical Editor', 'CP Timp Hard')
page.makeCommandBinding(CPTimpFX.mSurfaceValue, 'Process Project Logical Editor', 'CP Timp FX')
page.makeCommandBinding(HZTimpHard.mSurfaceValue, 'Process Project Logical Editor', 'HZ Timp Hard')
page.makeCommandBinding(HZTimpRods.mSurfaceValue, 'Process Project Logical Editor', 'HZ Timp Rods')
page.makeCommandBinding(HZTimpSoft.mSurfaceValue, 'Process Project Logical Editor', 'HZ Timp Soft')
page.makeCommandBinding(CPBassDrum2_in.mSurfaceValue, 'Process Project Logical Editor', 'CP Bass Drum 28in')
page.makeCommandBinding(CPBassDrum36in.mSurfaceValue, 'Process Project Logical Editor', 'CP Bass Drum 36in')
page.makeCommandBinding(HZBassDrum36in.mSurfaceValue, 'Process Project Logical Editor', 'HZ Bass Drum 36in')
page.makeCommandBinding(HZBassDrumGlry.mSurfaceValue, 'Process Project Logical Editor', 'HZ Bass Drum Glry')
page.makeCommandBinding(HZLowBoomGlry.mSurfaceValue, 'Process Project Logical Editor', 'HZ Low Boom Glry')
page.makeCommandBinding(HZLowBoom.mSurfaceValue, 'Process Project Logical Editor', 'HZ Low Boom')
page.makeCommandBinding(CPSurdos.mSurfaceValue, 'Process Project Logical Editor', 'CP Surdos')
page.makeCommandBinding(CPSnrPopCorn.mSurfaceValue, 'Process Project Logical Editor', 'CP Snr Pop Corn')
page.makeCommandBinding(CPSnrPicc.mSurfaceValue, 'Process Project Logical Editor', 'CP Snr Picc')
page.makeCommandBinding(CPSnrConcert.mSurfaceValue, 'Process Project Logical Editor', 'CP Snr  Concert')
page.makeCommandBinding(CPSnrTenor.mSurfaceValue, 'Process Project Logical Editor', 'CP Snr Tenor')
page.makeCommandBinding(CPSnrMetal.mSurfaceValue, 'Process Project Logical Editor', 'CP Snr Metal')
page.makeCommandBinding(CPSnrMilitary.mSurfaceValue, 'Process Project Logical Editor', 'CP Snr Military')
page.makeCommandBinding(CymbalsPiattis.mSurfaceValue, 'Process Project Logical Editor', 'Cymbals-Piattis')
page.makeCommandBinding(CPPiatti.mSurfaceValue, 'Process Project Logical Editor', 'CP Piatti')
page.makeCommandBinding(CPSusCym.mSurfaceValue, 'Process Project Logical Editor', 'CP Sus Cym')
page.makeCommandBinding(HZPiatti.mSurfaceValue, 'Process Project Logical Editor', 'HZ Piatti')
page.makeCommandBinding(CPGongsTams.mSurfaceValue, 'Process Project Logical Editor', 'CP Gongs & Tams')
page.makeCommandBinding(CPTriangles.mSurfaceValue, 'Process Project Logical Editor', 'CP Triangles')
page.makeCommandBinding(CPMarkTree.mSurfaceValue, 'Process Project Logical Editor', 'CP Mark Tree')
page.makeCommandBinding(CPTamTam.mSurfaceValue, 'Process Project Logical Editor', 'CP Tam Tam')
page.makeCommandBinding(CPScrapeTamGongs.mSurfaceValue, 'Process Project Logical Editor', 'CP Scrape Tam & Gongs')
page.makeCommandBinding(WoodsToys.mSurfaceValue, 'Process Project Logical Editor', 'Woods & Toys')
page.makeCommandBinding(CPBongos.mSurfaceValue, 'Process Project Logical Editor', 'CP Bongos')
page.makeCommandBinding(CPCongas.mSurfaceValue, 'Process Project Logical Editor', 'CP Congas')
page.makeCommandBinding(CPCastanets.mSurfaceValue, 'Process Project Logical Editor', 'CP Castanets')
page.makeCommandBinding(CSCinePiano.mSurfaceValue, 'Process Project Logical Editor', 'CS CinePiano')
page.makeCommandBinding(NIGrandeur.mSurfaceValue, 'Process Project Logical Editor', 'NI Grandeur')
page.makeCommandBinding(NIGrandeur2.mSurfaceValue, 'Process Project Logical Editor', 'NI Grandeur 2')
page.makeCommandBinding(NIAliciasKeys.mSurfaceValue, 'Process Project Logical Editor', 'NI Alicias Keys')
page.makeCommandBinding(NIAliciasKeys2.mSurfaceValue, 'Process Project Logical Editor', 'NI Alicias Keys 2')
page.makeCommandBinding(CSHarpMain.mSurfaceValue, 'Process Project Logical Editor', 'CS Harp Main')
page.makeCommandBinding(CsHarpMain.mSurfaceValue, 'Process Project Logical Editor', 'Cs Harp Main')
page.makeCommandBinding(CSHarpHarmonics.mSurfaceValue, 'Process Project Logical Editor', 'CS Harp Harmonics')
page.makeCommandBinding(CSHarpGlissLng.mSurfaceValue, 'Process Project Logical Editor', 'CS Harp Gliss Lng')
page.makeCommandBinding(CSHarpGlissMedium.mSurfaceValue, 'Process Project Logical Editor', 'CS Harp Gliss Medium')
page.makeCommandBinding(CSHarpGlissShort.mSurfaceValue, 'Process Project Logical Editor', 'CS Harp Gliss Short')
page.makeCommandBinding(CSHarpGlissAdLib.mSurfaceValue, 'Process Project Logical Editor', 'CS Harp Gliss Ad Lib')
page.makeCommandBinding(Xylophone.mSurfaceValue, 'Process Project Logical Editor', 'Xylophone')
page.makeCommandBinding(Glockenspiel.mSurfaceValue, 'Process Project Logical Editor', 'Glockenspiel')
page.makeCommandBinding(Celesta.mSurfaceValue, 'Process Project Logical Editor', 'Celesta')
page.makeCommandBinding(Marimba.mSurfaceValue, 'Process Project Logical Editor', 'Marimba')
page.makeCommandBinding(Crotales.mSurfaceValue, 'Process Project Logical Editor', 'Crotales')
page.makeCommandBinding(CrotalesBowed.mSurfaceValue, 'Process Project Logical Editor', 'Crotales Bowed')
page.makeCommandBinding(Vibes.mSurfaceValue, 'Process Project Logical Editor', 'Vibes')
page.makeCommandBinding(VibesMotorON.mSurfaceValue, 'Process Project Logical Editor', 'Vibes Motor ON')
page.makeCommandBinding(VibesBowed.mSurfaceValue, 'Process Project Logical Editor', 'Vibes Bowed')
page.makeCommandBinding(GlassMarimba.mSurfaceValue, 'Process Project Logical Editor', 'Glass Marimba')
page.makeCommandBinding(TubularBells.mSurfaceValue, 'Process Project Logical Editor', 'Tubular Bells')
page.makeCommandBinding(LowChimes.mSurfaceValue, 'Process Project Logical Editor', 'Low Chimes')
page.makeCommandBinding(MA1HighLng.mSurfaceValue, 'Process Project Logical Editor', 'MA1 High Lng')
page.makeCommandBinding(MA1LowLng.mSurfaceValue, 'Process Project Logical Editor', 'MA1 Low Lng')
page.makeCommandBinding(AIJGMerethe.mSurfaceValue, 'Process Project Logical Editor', 'AI JG Merethe')
page.makeCommandBinding(_DLcrEnsStacc.mSurfaceValue, 'Process Project Logical Editor', '8DLcr Ens Stacc')
page.makeCommandBinding(_DLcrEnsMultiVowels.mSurfaceValue, 'Process Project Logical Editor', '8DLcr Ens Multi Vowels')
page.makeCommandBinding(MA1HighShrt.mSurfaceValue, 'Process Project Logical Editor', 'MA1 High Shrt')
page.makeCommandBinding(MA1LowShrt.mSurfaceValue, 'Process Project Logical Editor', 'MA1 Low Shrt')
page.makeCommandBinding(CHOIRLONG.mSurfaceValue, 'Process Project Logical Editor', 'CHOIR LONG')
page.makeCommandBinding(_DLcrLegato.mSurfaceValue, 'Process Project Logical Editor', '8DLcr Legato')
page.makeCommandBinding(_DLcrSustains.mSurfaceValue, 'Process Project Logical Editor', '8DLcr Sustains')
page.makeCommandBinding(_DLcrMarccatos.mSurfaceValue, 'Process Project Logical Editor', '8DLcr Marccatos')
page.makeCommandBinding(_DLcrArcs.mSurfaceValue, 'Process Project Logical Editor', '8DLcr Arcs')
page.makeCommandBinding(D2EnsDesigner1.mSurfaceValue, 'Process Project Logical Editor', 'D2 Ens Designer 1')
page.makeCommandBinding(D2EnsDesigner2.mSurfaceValue, 'Process Project Logical Editor', 'D2 Ens Designer 2')
page.makeCommandBinding(D2LoopDesigner.mSurfaceValue, 'Process Project Logical Editor', 'D2 Loop Designer')
page.makeCommandBinding(D1Armaggedon.mSurfaceValue, 'Process Project Logical Editor', 'D1 Armaggedon')
page.makeCommandBinding(D1PlasticEns.mSurfaceValue, 'Process Project Logical Editor', 'D1 Plastic Ens')
page.makeCommandBinding(DecimatorEpic.mSurfaceValue, 'Process Project Logical Editor', 'Decimator Epic')
page.makeCommandBinding(DecimatorRaw.mSurfaceValue, 'Process Project Logical Editor', 'Decimator Raw')
page.makeCommandBinding(KFDevstHighPerc.mSurfaceValue, 'Process Project Logical Editor', 'KF Devst High Perc')
page.makeCommandBinding(KFDevstTrailerDrms.mSurfaceValue, 'Process Project Logical Editor', 'KF Devst Trailer Drms')
page.makeCommandBinding(AB1XXLPerc.mSurfaceValue, 'Process Project Logical Editor', 'AB1 XXL Perc')
page.makeCommandBinding(AB1EasterIsland.mSurfaceValue, 'Process Project Logical Editor', 'AB1 Easter Island')
page.makeCommandBinding(AB1DarwinPerc.mSurfaceValue, 'Process Project Logical Editor', 'AB1 Darwin Perc')
page.makeCommandBinding(NIActionStrikes.mSurfaceValue, 'Process Project Logical Editor', 'NI Action Strikes')
page.makeCommandBinding(SmallPerc.mSurfaceValue, 'Process Project Logical Editor', 'Small Perc')

