import json
from pathlib import Path

colors = {
    'strings': '#3ddb64',
    'woods': '#3956ad'
}
print(colors['strings'])


# TODO Dumps grid into template json
def make_grid(doublings):
    target = 'midi:OSCDoublings'
    cc, channel = 1, 1
    # Retrieve panel container template, read data and empty widgets
    filePath = Path('common/panel-template.json')
    json_template = json.loads(filePath.read_text())
    json_template['content']['widgets'] = []

    # create button json list
    buttons = button_def(doublings, target)

    # append buttons to json panel file
    for button in buttons:
        json_template['content']['widgets'].append(button)

    with open(f'./Section Panels/doublings.json', 'w') as outfile:
        json.dump(json_template, outfile, indent=1)
    json_template['content']['widgets'] = []


# TODO return button list
def button_def(doublings, target):
    buttons = []
    width = 20
    height = 100/7
    side_counter, height_counter = 0, 0
    channel, cc = 1, 1
    for doubling in doublings.keys():
        height_counter = 0

        # load json button template
        jsonBtn = json.loads(Path('common/button-template.json').read_text())
        jsonBtn['top'] = f'{(height*height_counter)+5}%'
        jsonBtn['left'] = f'{width*side_counter}%'
        jsonBtn['id'] = f"{doubling.replace(' ','')}Id"
        jsonBtn['width'] = f'{width}%'
        jsonBtn['height'] = f'{height}%'
        jsonBtn['label'] = f'{doubling}'
        jsonBtn['target'] = target
        jsonBtn['preArgs'] = [channel, cc]
        jsonBtn['css'] = 'background-color:#3956ad'
        buttons.append(jsonBtn)
        cc += 1
        side_counter += 1
        if (cc > 127):
            channel += 1
            cc = 1
        if side_counter >= 5:
            height_counter += 1
            side_counter = 0
    return buttons
