

def updateController(doublings):
    with open('Doublings/doublingdevice/Doublings_doublingDevice.js', 'r') as f:
        lines = f.readlines()

    lines = [lines[i] for i in range(len(lines)) if i <= 24]
    lines.append(buttonStrings(doublings))
    with open('Doublings/doublingdevice/Doublings_doublingDevice.js', 'w') as f:
        f.writelines(lines)


def buttonStrings(doublings):
    controller_elements = ''
    horizontal, vertical = 0, 0
    surface_elements = ''
    host_values = ''
    channel, cc = 0, 1

    for doubling in doublings.keys():
        trackName = doubling.replace(' ', '')
        trackName = trackName.replace('/', '_')
        doubling = doubling.replace('/', '-')

        controller_elements += f'var {trackName} = deviceDriver.mSurface.makeButton({horizontal}, {vertical}, 1, 1)\n'
        horizontal += 1
        if horizontal > 20:
            horizontal = 0
            vertical += 1
        surface_elements += f'{trackName}.mSurfaceValue.mMidiBinding\n\t.setInputPort(midiInput)\n\t.bindToControlChange({channel}, {cc})\n'
        cc += 1
        if cc > 127:
            cc = 1
            channel += 1

        host_values += f'page.makeCommandBinding({trackName}.mSurfaceValue, \'Process Project Logical Editor\',\'{doubling}\')\n'

    pageLine = f'var page = deviceDriver.mMapping.makePage(\'page\')\n'

    return pageLine+'\n'+controller_elements+'\n'+surface_elements+'\n'+host_values+'\n'
