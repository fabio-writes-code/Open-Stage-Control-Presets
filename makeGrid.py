import json
from pathlib import Path

colors = {
    'strings': '#3ddb64',
    'woods': '#3956ad'
}
print(colors['strings'])


# TODO Dumps grid into template json
def make_grid(sections):
    target = 'midi:OSC'
    cc, channel = 1, 1
    # Retrieve panel template and read data
    filePath = Path('./panel-template.json')
    json_template = json.loads(filePath.read_text())
    json_template['content']['widgets'] = []

    for section in sections.keys():

        # Write json panel template per orchestra section
        with open(f'./section-panels/{section.lower()}.json', 'w') as outfile:
            json.dump(json_template, outfile)

        # Create labels json objects and attach to panel
        labels = labels_def(sections[section])
        for label in labels:
            json_template['content']['widgets'].append(label)
        with open(f'./section-panels/{section.lower()}.json', 'w') as outfile:
            json.dump(json_template, outfile, indent=1)

        # Create button json objects and attach to panel
        buttons = button_def(
            sections[section], target, '#3956ad', channel, cc)
        for button in buttons:
            json_template['content']['widgets'].append(button)
            cc += 1
            if cc > 127:
                cc = 1
                channel += 1
        with open(f'./section-panels/{section.lower()}.json', 'w') as outfile:
            json.dump(json_template, outfile, indent=1)
        json_template['content']['widgets'] = []


# TODO Make Labels:
def labels_def(section):
    labels = []
    width = 20
    if len(section) > 5:
        width = 100/len(section)
    labelValues = [label for label in section.keys()]
    print(labelValues, type(labelValues))
    for i in range(len(labelValues)):
        jsonLabel = json.loads(Path('./label-template.json').read_text())
        jsonLabel['id'] = labelValues[i]+'id'
        jsonLabel['left'] = f'{width*i}%'
        jsonLabel['width'] = f'{width}%'
        jsonLabel['value'] = labelValues[i]
        labels.append(jsonLabel)
    return labels


# TODO Makes grid
def button_def(section, target, color, channel, cc):
    buttons = []
    width = 20
    height = 95/7
    side_counter, height_counter = 0, 0
    for choir, instruments in section.items():
        height_counter = 0
        if len(section) > 5:
            width = 100/len(section)
        if len(instruments) > 7:
            height = 95/len(instruments)
        for instrument in instruments:
            jsonBtn = json.loads(Path('./button-template.json').read_text())
            jsonBtn['top'] = f'{(height*height_counter)+5}%'
            jsonBtn['left'] = f'{width*side_counter}%'
            jsonBtn['id'] = f"{instrument.replace(' ','')}Id"
            jsonBtn['width'] = f'{width}%'
            jsonBtn['height'] = f'{height}%'
            jsonBtn['label'] = f'{instrument}'
            jsonBtn['target'] = target
            jsonBtn['preArgs'] = [channel, cc]
            jsonBtn['css'] = 'background-color:#3956ad'
            buttons.append(jsonBtn)
            cc += 1
            height_counter += 1
            if (cc > 127):
                channel += 1
                cc = 1
        side_counter += 1
    return buttons
