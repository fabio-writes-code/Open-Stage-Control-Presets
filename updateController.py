
import re
import string
pattern = re.compile('[\W_]+')
# TODO update midi controller script


def update_controller(sections):
    channel, cc = 2, 1
    with open('ExampleCompany_SimpleDevice.js', 'r') as f:
        lines = f.readlines()

    lines = [lines[i] for i in range(len(lines)) if i <= 24]
    # lines.append(pagesLine(sections))
    lines.append(buttonString(sections))
    # for section in sections.keys():
    #     for k, v in sections[section].items():
    #         lines.append(buttonString(v, section, channel, cc))
    #         cc += len(v)
    #         if cc > 127:
    #             cc = cc-127
    #             channel += 1

    with open('ExampleCompany_SimpleDevice.js', 'w') as f:
        f.writelines(lines)


# def pagesLine(sections):
#     pageLine = ''
#     for section in sections.keys():
#         pageLine += f'var {section.lower()} = deviceDriver.mMapping.makePage(\'{section.lower()}\')\n'
#         # !hostSelectedTrackChannel???
#     pageLine += '\n'
#     return pageLine


def buttonString(sections):
    controller_elements = ''
    horizontal, vertical = 0, 0
    surface_elements = ''
    host_values = ''
    channel, cc = 0, 1

    for section in sections.keys():
        for k, instruments in sections[section].items():
            for instrument in instruments:
                trackName = pattern.sub('', instrument)
                trackName = trackName.replace('8', '_')
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

                host_values += f'page.makeCommandBinding({trackName}.mSurfaceValue, \'Process Project Logical Editor\',\'{instrument}\')\n'

    pageLine = f'var page = deviceDriver.mMapping.makePage(\'page\')\n'

    return pageLine+'\n'+controller_elements+'\n'+surface_elements+'\n'+host_values+'\n'
