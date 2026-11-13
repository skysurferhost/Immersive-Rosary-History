import bpy,bmesh,math,json
from mathutils import Vector
root='/workspace/scratch/abf7345c982d/'
bpy.ops.wm.open_mainfile(filepath=root+'model10/normalized.blend');o=next(o for o in bpy.context.scene.objects if o.type=='MESH');bpy.context.view_layer.objects.active=o;o.select_set(True)
bm=bmesh.new();bm.from_mesh(o.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000015)
for co,no in [((0,.0315,0),(0,1,0)),((0,0,.060),(0,0,-1)),((0,0,.425),(0,0,1))]:
 bmesh.ops.bisect_plane(bm,geom=list(bm.verts)+list(bm.edges)+list(bm.faces),plane_co=co,plane_no=no,clear_outer=True,dist=.000001)
# Retain the connected sculpture, discarding isolated scan fragments.
seen=set();parts=[]
for v in bm.verts:
 if v in seen:continue
 stack=[v];part=[];seen.add(v)
 while stack:
  v=stack.pop();part.append(v)
  for edge in v.link_edges:
   w=edge.other_vert(v)
   if w not in seen:seen.add(w);stack.append(w)
 parts.append(part)
parts.sort(key=len,reverse=True);print('PARTS',[len(p) for p in parts[:10]])
remove=[v for p in parts[1:] for v in p];bmesh.ops.delete(bm,geom=remove,context='VERTS')
boundary=[ed for ed in bm.edges if ed.is_boundary];bmesh.ops.holes_fill(bm,edges=boundary,sides=0);bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(o.data);bm.free()
# Map the scanned corpus into the existing Rosary cross envelope, uniformly.
vs=[v.co for v in o.data.vertices];lo=Vector([min(v[i] for v in vs) for i in range(3)]);hi=Vector([max(v[i] for v in vs) for i in range(3)]);k=min(.72/(hi.x-lo.x),.87/(hi.z-lo.z));print('CORPUS',list(lo),list(hi),'scale',k)
for v in o.data.vertices:v.co=Vector(((v.co.x-(lo.x+hi.x)/2)*k,(v.co.y-.0315)*k-.065,(v.co.z-hi.z)*k+.30))
# Preserve detail while reducing 500k scan triangles to a mobile-sized corpus.
mod=o.modifiers.new('Devotional sculpture optimization','DECIMATE');mod.ratio=min(1,38000/len(o.data.polygons));bpy.ops.object.modifier_apply(modifier=mod.name)
for p in o.data.polygons:p.use_smooth=True
o.name='Corpus of Christ - Hunt Museum adaptation';o.data.materials[0].node_tree.nodes.get('Principled BSDF').inputs['Base Color'].default_value=(.42,.30,.17,1)
bpy.ops.wm.save_as_mainfile(filepath=root+'model10/corpus.blend')
bpy.ops.export_scene.gltf(filepath=root+'refinement10/.sites-checkout/dist/assets/crucifix-corpus.glb',export_format='GLB',use_selection=True,export_yup=True,export_texcoords=False,export_normals=True,export_materials='EXPORT')
print('FINAL',len(o.data.polygons),list(o.dimensions))
# Render with the existing cross proportions, front and oblique.
mat=bpy.data.materials.new('Cross antique brass');mat.use_nodes=True;bs=mat.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=(.25,.16,.08,1);bs.inputs['Metallic'].default_value=.65;bs.inputs['Roughness'].default_value=.42
for scale,loc in [((.075,.027,.60),(0,.015,0)),((.40,.027,.065),(0,.015,.26))]:
 bpy.ops.mesh.primitive_cube_add(size=2,location=loc);c=bpy.context.object;c.scale=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);be=c.modifiers.new('Bevel','BEVEL');be.width=.012;be.segments=3;c.data.materials.append(mat)
s=bpy.context.scene;s.render.engine='CYCLES';s.cycles.samples=32;s.cycles.use_denoising=False;s.world.color=(.10,.10,.10);s.render.resolution_x=700;s.render.resolution_y=900;s.render.resolution_percentage=100
for loc,power in [((-1,-2,2),80),((1,-1,.2),35)]:
 bpy.ops.object.light_add(type='AREA',location=loc);l=bpy.context.object;l.data.energy=power;l.data.size=2;l.rotation_euler=(-l.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(0,-3,0));cam=bpy.context.object;cam.data.type='ORTHO';cam.data.ortho_scale=1.35;s.camera=cam
for name,loc in [('front',(0,-3,0)),('angle',(1.4,-3,.35)),('side',(3,-1,.2))]:
 cam.location=loc;cam.rotation_euler=(-cam.location).to_track_quat('-Z','Y').to_euler();s.render.filepath=root+'model10/'+name+'-final.png';bpy.ops.render.render(write_still=True)
