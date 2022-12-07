import os
import json

def path_to_dict(path):
    d = {'name': os.path.basename(path)}
    if os.path.isdir(path):
        d['children'] = [path_to_dict(os.path.join(path, x)) for x in os.listdir(path)]
    return d


art = json.dumps(path_to_dict('./media/Pixelart'), indent=4)
vids = json.dumps(path_to_dict('./media/Vids'), indent=4)

with open("assets.js", "w") as outfile:
    outfile.write("pixelArt = ")
    outfile.write(art)
    outfile.write("\nvids = ")
    outfile.write(vids)
