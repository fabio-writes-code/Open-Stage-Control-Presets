import xml.etree.ElementTree as ET
import shutil
import os

# Id Tokens
leTokenArr = ['9713378928', '9713379760', '515554656', '9713382096',
              '8606995872', '9713412400', '8606996352', '9548966528', '9517014464']
leNameTypeTargetArr = ['9398509424', '9398512592', '9398694752', '9398507312',
                       '9449937312', '9398695280', '9449937488', '9398636320', '9535705152']
Value1Arr = ['9536569008', '9536570352', '9432570144', '9536568816',
             '9457969968', '9504974512', '9457968720', '9419453920', '9432579648']
Value2Arr = ['9739790560', '9739787600', '9460865248', '9739790960',
             '9521778976', '9739804000', '9521784016', '9389951568', '9461324032']


# xml Id string
idToken = '''
<obj class="leToken" ID="9548966528">
    <int name="Digit" value="101"/>
</obj>
'''
idNameTarget = '''
<obj class="leNameTypeTarget" ID="9398636320">
    <int name="Digit" value="100"/>
    <int name="Type" value="200"/>
    <int name="DomainType" value="0"/>
    <obj class="UStringValue" name="Value1" ID="9419453920">
        <string name="String" value="CS Harp Harmonics" wide="true"/>
    </obj>
    <obj class="LeUIntValue" name="Value2" ID="9389951568">
        <int name="Min" value="0"/>
        <int name="Max" value="1"/>
        <int name="Value" value="0"/>
    </obj>
</obj>
'''


# main function:
def generator(doublings):
    createFolder()
    doublers(doublings)
    # print(idArr)


# create files
def doublers(doublings):
    for doubling in doublings.keys():
        fileName = doubling.replace('/', '-')+'.xml'
        dirPath = f'././Cubase Presets/DOUBLING'
        filePath = dirPath+'/'+fileName
        shutil.copy('common/cubase-doubler.xml', filePath)
        # Generate id array for tracks in doubling
        idArr = generateId(doublings[doubling])
        # Add id's to xml file
        addTrack(idArr, filePath)


# remove and create folder
def createFolder():
    foldername = 'DOUBLING'
    dirPath = f'././Cubase Presets/{foldername}'
    try:
        shutil.rmtree(dirPath)
    except:
        None
    os.mkdir(dirPath)


# generate track xml id's
def generateId(tracks):
    i = 0
    idArr = []
    for track in tracks:
        rootToken = ET.fromstring(idToken)
        # leTokenID
        rootToken.attrib['ID'] = leTokenArr[i]
        rootToken[0].attrib['value'] = '101' if i == len(tracks) - 1 else '104'

        rootNameTarget = ET.fromstring(idNameTarget)
        # leNameTypeTargetID
        rootNameTarget.attrib['ID'] = leNameTypeTargetArr[i]
        # value1ID
        rootNameTarget[3].attrib['ID'] = Value1Arr[i]
        # value2ID
        rootNameTarget[4].attrib['ID'] = Value2Arr[i]
        # instrumentName
        rootNameTarget[3][0].attrib['value'] = track
        idArr.append(rootNameTarget)
        idArr.append(rootToken)

        i += 1
    return idArr


# Add track Id's to selector
def addTrack(idArr, filePath):
    # print(ET.tostring(idArr[0]))
    tree = ET.parse(filePath)
    root = tree.getroot()
    track_list = root[1][4]
    for elem in idArr:
        track_list.insert(0, elem)
        tree.write(filePath)
