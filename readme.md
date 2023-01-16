<div id="badges" align="center">
  <img href="www.linkedin.com/in/fabio-andres-henao-caviedes" src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  <img href="https://fabio-writes-code.github.io/" src="https://img.shields.io/badge/Portfolio-green?style=for-the-badge" alt="Portfolio Website"/>
</div>

# MIDI Surface Preset Creator for Cubase and Open Stage Control

Python script to generate all the files to sync Cubase Midi Generator, Open Stage control and Cubase.

### Languages and Tools

<img src="https://media.giphy.com/media/c5nRXNavtO7CAimH1i/giphy.gif" width="30px" alt="cog-gif">

<div align="center">
  <img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg" title="Python" alt="Python" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg" title="VSCode" alt="VSCode" width="40" height="40"/>&nbsp;
</div>

## Installation

Install project dependencies with pip

```bash
  npm pip install
```

Fill the contents of template-tracks-user.xlsx:

-   You can add or remove sheets
-   The first line of each sheet works as a sub-section header
-   DO NOT remove 'DOUBLINGS' page

Run the script

```bash
  python instrument-generator.py
```

ADD CUBASE PRESETS
Place Cubase Presets in you preset folder
/Users/{userName}/Documents/Steinberg/Cubase/User Presets/Project Logical Editor/Track Selection/

OPEN STAGE CONTROL INTEGRATION

You'll need to create TWO new MIDI devices. Names MUST be 'OSC' and 'OSCDoublings'
-Windows: Use loopMIDI https://www.tobias-erichsen.de/software/loopmidi.html
-Mac: https://support.apple.com/en-ca/guide/audio-midi-setup/ams1013/mac

-Install and Setup Open Stage Control http://openstagecontrol.ammd.net/

Copy '/Doublings' and '/Sections' to:
-Mac: /Users/<Username>/Documents/Steinberg/<Cubase or Nuendo>/MIDI Remote/Driver Scripts
-Windows: C:\Users\<Username>\Documents\Steinberg&lt;Cubase or Nuendo>\MIDI Remote\Driver Scripts

ADDING TRACK BUTTONS TO OSC

-Panels are stored in '/Section Panels'
-You can add them to your OSC surface via containers/fragments

Enjoy!

## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.
