# draw_neb_babylonian_empire_580bce.py
# Draws images/rel210-ch10-l1-neo-babylonian-empire-580bce.png for REL 210 Ch10 Lecture 1 (R pop-up, slide AQ), 2026-10-23.
# Data: Natural Earth 1:50m land, coastline, rivers_lake_centerlines (public domain), unzipped under NE below.
# Needs: geopandas, matplotlib, shapely; font Crimson Text (Google Fonts). Then PNG -> WebP q82 (Pillow).
# Borders are hand-drawn approximations; see ch10_conversion_audit.md.

# draw_neb.py: "The Neo-Babylonian Empire, c. 580 BCE" for REL 210 Ch10 L1 (slide R popup, slide AQ). 2026-10-23.
# Same method and style as draw.py (AM map): Natural Earth 1:50m, geopandas + matplotlib, Crimson Text.
import math, geopandas as gpd, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager as fm
from matplotlib.patches import Patch
from matplotlib.lines import Line2D
from shapely.geometry import Polygon, box, LineString, Point
from shapely.ops import linemerge, substring
import matplotlib.patheffects as pe

G="/usr/share/fonts/truetype/sand-box/google/"
for p in ["Crimson Text/CrimsonText-"+v+".ttf" for v in ["Regular","Italic","Bold","BoldItalic","SemiBold","SemiBoldItalic"]]:
    fm.fontManager.addfont(G+p)
SERIF="Crimson Text"

W,E,S,N=25.5,53.5,24.0,40.6
LAT0=32.5
NE="/workspace/ch10/map/ne/"
clip=box(W-2,S-2,E+2,N+2)
land=gpd.read_file(NE+"ne_50m_land").clip(clip)
coast=gpd.read_file(NE+"ne_50m_coastline").clip(clip)
rivers=gpd.read_file(NE+"ne_50m_rivers_lake_centerlines").clip(clip)
landu=land.union_all()

# Approximate extent at its height under Nebuchadnezzar II (604-562 BCE), hand-traced, deliberately coarse.
# Mesopotamia (Babylonia + the old Assyrian heartland along the Tigris), upper Mesopotamia to Harran,
# Syria and the Levant to the Brook of Egypt, Transjordan. Arabia (Tayma) not shaded: Nabonidus, 552-543.
# Susiana (Susa) included with a hedge: Babylonian control of Elam is debated.
emp=Polygon([(48.9,29.9),(49.3,31.2),(49.0,32.6),(47.6,33.2),(46.2,33.9),(45.2,35.0),(44.3,36.3),(43.6,37.2),
  (42.2,37.3),(40.6,37.4),(39.4,37.5),(38.1,37.4),(37.0,37.2),(36.4,36.9),(35.7,36.6),
  (34.0,36.0),(33.0,33.0),(33.0,31.25),(33.8,31.0),(34.6,30.3),(35.1,29.6),(35.6,29.9),(36.4,30.7),
  (37.4,32.0),(38.6,33.0),(40.2,33.2),(41.6,32.4),(42.9,31.4),(44.4,30.3),(46.0,29.6),(47.5,29.4)])
empl=gpd.GeoSeries([emp.intersection(landu)])

SEA="#151a36"; LAND="#4a4859"; COAST="#9a95b8"; RIVER="#6f8cc4"
GOLD="#D4AF37"; CREAM="#F5F1E8"; MUTED="#a49fb5"; EMPC="#7a5aa8"

fig=plt.figure(figsize=(12,12*(N-S)/((E-W)*math.cos(math.radians(LAT0)))),dpi=200)
ax=fig.add_axes([0,0,1,1]); ax.set_facecolor(SEA)
ax.set_xlim(W,E); ax.set_ylim(S,N); ax.set_aspect(1/math.cos(math.radians(LAT0)))
land.plot(ax=ax,color=LAND,lw=0)
empl.plot(ax=ax,color=EMPC,alpha=0.55,lw=0)
coast.plot(ax=ax,color=COAST,lw=0.7)
rv=rivers[rivers["name"].isin(["Nile","Damietta Branch","Rosetta Branch","Euphrates","Al Furat","Firat","Tigris","Dicle","Shatt al-Arab","Jordan","Karun","Karkheh","Orontes","Asi","Halys","Kizilirmak","Kızılırmak"])]
rv.plot(ax=ax,color=RIVER,lw=1.4,alpha=0.95)
halo=[pe.withStroke(linewidth=3.4,foreground=SEA)]
def T(x,y,t,size=19,color=CREAM,ha="left",wt="semibold",style="normal",alpha=1,rot=0,z=7,h=True):
    ax.text(x,y,t,fontsize=size,color=color,family=SERIF,ha=ha,va="center",fontweight=wt,style=style,alpha=alpha,
            rotation=rot,zorder=z,path_effects=halo if h else None)

# --- exile route: Jerusalem -> Damascus -> Riblah -> Hamath -> Aleppo -> Carchemish, then down the Euphrates to Babylon
eu=[r for r in rivers[rivers["name"].isin(["Euphrates","Al Furat","Firat"])].geometry.explode()]
main=max(linemerge(eu).geoms,key=lambda g:g.length) if linemerge(eu).geom_type=="MultiLineString" else linemerge(eu)
c=list(main.coords)
if c[0][1]<c[-1][1]: c=c[::-1]                      # make it run downstream (NW -> SE)
riv=LineString(c)
bab=Point(44.421,32.5425)
dcut=riv.project(bab)
down=substring(riv,riv.project(Point(38.3,36.3)),dcut-0.45)
off=down.offset_curve(-0.28)                         # shift to the desert (SW) bank so the dash is not on the river line
oc=list(off.coords)
if Point(oc[0]).distance(Point(c[0]))>Point(oc[-1]).distance(Point(c[0])): oc=oc[::-1]
west=[(35.235,31.778),(35.55,32.55),(36.29,33.51),(36.55,34.433),(36.75,35.135),(37.16,36.2),(37.75,36.75),(38.016,36.83),(38.3,36.3)]
route=LineString(west+oc+[(44.421,32.5425)]).simplify(0.03)
xs,ys=route.xy
ax.plot(xs,ys,color=SEA,lw=5.2,alpha=0.55,zorder=4,solid_capstyle="round")
ax.plot(xs,ys,color=GOLD,lw=2.6,ls=(0,(4.5,2.6)),zorder=5)
T(39.3,33.55,"Deportations to Babylon,",17,GOLD,"center","bold",style="italic")
T(39.3,32.8,"597 and 587/586 BCE",17,GOLD,"center","bold",style="italic")

# --- region labels
T(40.75,36.35,"NEO-BABYLONIAN",14.5,CREAM,"center","bold",alpha=0.85,h=False)
T(40.75,35.83,"EMPIRE",14.5,CREAM,"center","bold",alpha=0.85,h=False)
T(40.75,35.35,"(approximate)",13,CREAM,"center","semibold",style="italic",alpha=0.85,h=False)
T(28.6,29.6,"EGYPT",19,MUTED,"center","bold",style="italic",h=False)
T(49.6,36.9,"MEDIA",19,MUTED,"center","bold",style="italic",h=False)
T(28.7,38.2,"LYDIA",19,MUTED,"center","bold",style="italic",h=False)
T(29.5,33.6,"Mediterranean Sea",17,"#9fa6d6","center","semibold",style="italic",alpha=0.85,h=False)
T(50.15,28.75,"Persian Gulf",16,"#9fa6d6","center","semibold",style="italic",alpha=0.85,h=False)
T(42.1,28.7,"ARABIAN DESERT",15,MUTED,"center","semibold",style="italic",alpha=0.8,h=False)
T(45.05,31.5,"Euphrates",15.5,"#a9bde6","center","semibold",style="italic",rot=-40)
T(44.55,34.55,"Tigris",15.5,"#a9bde6","center","semibold",style="italic",rot=-60)

# --- sites: (lat, lon, [(text,x,y,ha,size,weight)], big, muted)
F=19
sites=[
 (32.5425,44.421,[("Babylon",44.95,32.7,"left",F+3,"bold")],True,False),
 (31.778,35.235,[("Jerusalem",35.8,31.45,"left",F+1,"bold"),("(destroyed 587/586)",35.8,30.65,"left",15,"semibold")],True,False),
 (31.565,34.849,[("Lachish",34.3,31.35,"right",F,"semibold")],False,False),
 (33.271,35.196,[("Tyre (siege)",34.6,33.45,"right",F,"semibold")],False,False),
 (34.433,36.55,[("Riblah",36.0,34.65,"right",F,"semibold")],False,False),
 (36.829,38.016,[("Carchemish",37.7,37.55,"right",F,"semibold"),("(battle, 605)",37.7,36.85,"right",15,"semibold")],False,False),
 (36.871,39.025,[("Harran",39.25,37.45,"left",F,"semibold")],False,False),
 (36.359,43.153,[("Nineveh",43.6,36.75,"left",F,"semibold"),("(ruins since 612)",43.6,36.05,"left",15,"semibold")],False,False),
 (30.962,46.105,[("Ur",46.55,30.75,"left",F,"semibold")],False,False),
 (32.191,48.258,[("Susa",48.7,32.25,"left",F,"semibold")],False,False),
]
for lat,lon,texts,big,muted in sites:
    ax.plot(lon,lat,"o",ms=12 if big else 9.5,mfc=GOLD,mec=SEA,mew=1.6,zorder=6)
    for t,x,y,ha,sz,wt in texts: T(x,y,t,sz,CREAM,ha,wt)
# Babylon star-ish ring
ax.plot(44.421,32.5425,"o",ms=19,mfc="none",mec=GOLD,mew=1.5,zorder=6)
# muted later site
ax.plot(38.544,27.630,"o",ms=9,mfc="none",mec=MUTED,mew=1.8,zorder=6)
T(39.0,27.95,"Tayma",17,MUTED,"left","semibold",style="italic")
T(39.0,27.2,"(later, Nabonidus)",14,MUTED,"left","normal",style="italic")

# --- title, legend, source
ax.text(W+0.5,N-0.45,"The Neo-Babylonian Empire, c. 580 BCE",fontsize=33,color=GOLD,family=SERIF,ha="left",va="top",fontweight="bold",
        path_effects=[pe.withStroke(linewidth=4,foreground=SEA)],zorder=8)
h=[Line2D([],[],marker="o",ls="",ms=10,mfc=GOLD,mec=SEA,label="Site (true location)"),
   Line2D([],[],color=GOLD,lw=2.4,ls=(0,(4.5,2.6)),label="Exile route (probable)"),
   Line2D([],[],marker="o",ls="",ms=9,mfc="none",mec=MUTED,mew=1.8,label="Later, under Nabonidus (muted)"),
   Patch(fc=EMPC,alpha=0.65,label="Neo-Babylonian Empire (approx.)")]
lg=ax.legend(handles=h,loc="lower left",bbox_to_anchor=(0.005,0.06),frameon=True,prop={"family":SERIF,"size":15.5},
   facecolor=SEA,edgecolor=GOLD,framealpha=0.9,labelcolor=CREAM,borderpad=0.6,handletextpad=0.6,handlelength=2.2)
lg.get_frame().set_linewidth(0.8); lg.set_zorder(9)
ax.text(W+0.3,S+0.22,"Map: World Religions / Natural Earth data; places per 2 Kings 24\u201325, Jeremiah 52, the Babylonian Chronicle (ABC 5) and standard atlases; borders approximate.",
   fontsize=12,color=CREAM,alpha=0.9,family=SERIF,ha="left",va="bottom",zorder=9)
ax.set_axis_off()
fig.canvas.draw(); rend=fig.canvas.get_renderer()
bbs=[(t.get_text().replace("\n"," "),t.get_window_extent(rend)) for t in ax.texts]
bbs.append(("LEGEND",lg.get_window_extent(rend)))
for i in range(len(bbs)):
    for j in range(i+1,len(bbs)):
        if bbs[i][1].overlaps(bbs[j][1]): print("OVERLAP:",bbs[i][0],"|",bbs[j][0])
inv=ax.transData.inverted()
for n,b in bbs: (x0,y0),(x1,y1)=inv.transform([(b.x0,b.y0),(b.x1,b.y1)]); print(f"{n[:28]:28s} x {x0:5.1f}-{x1:5.1f} y {y0:5.2f}-{y1:5.2f}")
W_,H_=fig.get_size_inches()*200
for n,b in bbs:
    if b.x0<0 or b.y0<0 or b.x1>W_ or b.y1>H_: print("CLIPPED:",n)
out="/workspace/ch10/map/out/rel210-ch10-l1-neo-babylonian-empire-580bce.png"
fig.savefig(out,dpi=200,facecolor=SEA); print(out, fig.get_size_inches()*200)
