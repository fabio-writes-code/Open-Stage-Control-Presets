import xml.etree.ElementTree as ET
import shutil
import os

'''C:/Users/fabio/Documents/Steinberg/Cubase/User Presets/Project Logical Editor/Track Selection/'''


def makeSelectors(sections):
    for section, value in sections.items():
        folderName = section
        print(folderName)
        dirPath = f'./Cubase Presets/{folderName}'
        try:
            shutil.rmtree(dirPath)
        except:
            None
        os.mkdir(dirPath)
        for family, instruments in value.items():
            for instrument in instruments:
                trackName = instrument
                fileName = trackName + '.xml'
                filePath = dirPath+'/'+fileName

                # Remove folder if exists, and create a new one
                shutil.copy('cubase-includes.xml', filePath)
                makeSelector(filePath, trackName)

        # One selector


def makeSelector(filePath, instrumentName):
    print(filePath, instrumentName)
    tree = ET.parse(filePath)
    root = tree.getroot()
    node = root[1][3][1][3][0]
    node.attrib['value'] = instrumentName
    tree.write(filePath)

# node.attrib['value'] = instrument_name
# print(node.tag, 'and', node.attrib)
# print(node.attrib['value'])

# tree.write(filePath)
