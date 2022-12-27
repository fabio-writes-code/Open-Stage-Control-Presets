import xmltodict

# TODO Convert XML to Dict


with open('single-note-change.expressionmap') as f:
    artDict = xmltodict.parse(f.read())

member = artDict['InstrumentMap']['member'][0]['list']['obj']['string']
print(type(member), len(member))
# for k, v in member.items():
#     print(k, ':::>>>', v, type(v), '\n')

for el in member:
    print('OUTSIDE', el, type(el), '\n')
    for k, v in el.items():
        if k == '@value':
            v = 'INHERE'
        print(k, v, type(v), '\n')
