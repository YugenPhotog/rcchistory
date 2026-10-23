# draw_diaspora_map_100ce.py
# Draws images/rel210-ch10-l1-diaspora-map-100ce.png for REL 210 Ch10 Lecture 1, slide AM (2026-10-23).
# Data: Natural Earth 1:50m land, coastline, rivers_lake_centerlines (public domain), unzipped under NE below.
# Needs: geopandas, matplotlib, shapely; fonts: Crimson Text (Google Fonts). Then: PNG -> WebP q82 (Pillow).
# Borders are hand-drawn approximations; see ch10_conversion_audit.md.

import math, geopandas as gpd, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager as fm
from matplotlib.patches import Patch
from matplotlib.lines import Line2D
from shapely.geometry import Polygon, box
import matplotlib.patheffects as pe

G="/usr/share/fonts/truetype/sand-box/google/"
for p in ["Crimson Text/CrimsonText-"+v+".ttf" for v in ["Regular","Italic","Bold","BoldItalic","SemiBold","SemiBoldItalic"]]:
    fm.fontManager.addfont(G+p)
SERIF="Crimson Text"; TITLE="Crimson Text"

W,E,S,N=-10.5,52.0,25.5,47.0
LAT0=36.5
NE="/workspace/ch10/map/ne/"
clip=box(W-2,S-2,E+2,N+2)
land=gpd.read_file(NE+"ne_50m_land").clip(clip)
coast=gpd.read_file(NE+"ne_50m_coastline").clip(clip)
rivers=gpd.read_file(NE+"ne_50m_rivers_lake_centerlines").clip(clip)
lakes=gpd.read_file(NE+"ne_50m_lakes").clip(clip)
landu=land.union_all()

# Approximate frontiers c. 100 CE (hand-traced, deliberately coarse)
roman=Polygon([(-12,47.5),(8,47.5),(8,48),(17,48),(22.5,44.6),(28.5,45.3),(29.7,45.2),  # Danube line (Dacia not yet Roman)
  (31,44),(41.6,41.6),(39.6,40.9),(38.6,39.2),(38.4,38.3),(38.0,37.1),(38.4,36.0),       # Pontus, upper Euphrates to Zeugma
  (38.6,34.6),(37.2,33.3),(36.3,32.4),(35.6,31.2),(35.0,30.5),(34.4,29.9),(32.8,28.5),     # Syrian edge, Nabataea excluded (annexed 106)
  (33.6,26.5),(34.2,24.0),(30.0,24.0),(29.0,29.8),(25.0,29.6),(19.5,30.2),(15.0,31.0),     # Egypt, Cyrenaica, Tripolitania strip
  (10.5,32.5),(8.5,34.0),(4.0,35.2),(-1.0,34.4),(-5.0,33.6),(-7.5,32.5),(-12,32.5)])
parth=Polygon([(52,40.0),(46.0,39.6),(43.6,38.4),(42.3,37.4),(41.0,37.0),(39.0,36.7),(38.9,35.5),(40.4,34.5),(41.2,34.3),
  (42.4,33.2),(43.7,31.3),(45.5,30.0),(47.6,29.3),(48.6,29.9),(52,29.0)])
romanl=gpd.GeoSeries([roman.intersection(landu)])
parthl=gpd.GeoSeries([parth.intersection(landu)])

SEA="#151a36"; LAND="#4a4859"; COAST="#9a95b8"; RIVER="#6f8cc4"
GOLD="#D4AF37"; CREAM="#F5F1E8"; PURPLE="#6B4C9A"; TEAL="#2C7873"; MUTED="#a49fb5"

fig=plt.figure(figsize=(12,12*((N-S))/((E-W)*math.cos(math.radians(LAT0)))+0.0),dpi=200)
ax=fig.add_axes([0,0,1,1]); ax.set_facecolor(SEA)
ax.set_xlim(W,E); ax.set_ylim(S,N); ax.set_aspect(1/math.cos(math.radians(LAT0)))
land.plot(ax=ax,color=LAND,lw=0)
romanl.plot(ax=ax,color="#7a5aa8",alpha=0.55,lw=0)
parthl.plot(ax=ax,color="#3a8f88",alpha=0.55,lw=0)
coast.plot(ax=ax,color=COAST,lw=0.6)
rv=rivers[rivers["name"].isin(["Nile","Damietta Branch","Rosetta Branch","Euphrates","Al Furat","Firat","Tigris","Dicle","Shatt al-Arab","Jordan","Danube","Bratul Chillia","Bratul Sfântu Gheorghe","Bratul Sulina","Po","Rhône","Rhein","Ebro","Tajo","Tejo","Duero","Loire","Garonne"])]
rv.plot(ax=ax,color=RIVER,lw=1.1,alpha=0.95)
halo=[pe.withStroke(linewidth=3.2,foreground=SEA)]

def region(x,y,t,size=15,color=CREAM,alpha=0.55,style="italic",rot=0,sp=0.18):
    ax.text(x,y,t,fontsize=size,color=color,alpha=alpha,family=SERIF,style=style,ha="center",va="center",rotation=rot,
            fontweight="bold")
region(34.6,39.55,"ROMAN EMPIRE",18,CREAM,0.7,"normal")
region(34.6,38.65,"(approximate)",15,CREAM,0.7)
region(47.7,37.9,"PARTHIAN",18,CREAM,0.7,"normal"); region(47.7,37.0,"EMPIRE",18,CREAM,0.7,"normal"); region(47.7,36.15,"(approximate)",15,CREAM,0.7)
region(17.2,34.9,"Mediterranean Sea",17,"#9fa6d6",0.8)

# sites: (name, lat, lon, [(text, x, y, ha, size, weight)], leader_to or None, big)
F=21
sites=[
 ("Jerusalem",31.778,35.235,[("Jerusalem",36.3,30.25,"left",F+0.5,"bold"),("(ruined 70 CE)",36.3,29.05,"left",16,"semibold")],(36.15,30.3),True),
 ("Galilee",32.746,35.279,[("Galilee",32.7,32.55,"right",F,"semibold")],(32.85,32.6),False),
 ("Damascus",33.513,36.292,[("Damascus",37.0,32.3,"left",F,"semibold")],(36.9,32.45),False),
 ("Antioch",36.205,36.182,[("Antioch",36.85,36.75,"left",F,"semibold")],None,False),
 ("Salamis",35.183,33.900,[("Salamis",33.25,35.45,"right",F,"semibold"),("(Cyprus)",33.25,34.4,"right",15.5,"semibold")],None,False),
 ("Alexandria",31.200,29.919,[("Alexandria",29.7,30.05,"center",F,"semibold")],None,False),
 ("Cyrene",32.823,21.863,[("Cyrene",21.86,31.75,"center",F,"semibold")],None,False),
 ("Ephesus",37.941,27.342,[("Ephesus",27.95,37.2,"left",F,"semibold")],None,False),
 ("Sardis",38.488,28.040,[("Sardis",27.6,39.3,"right",F,"semibold")],None,False),
 ("Corinth",37.905,22.880,[("Corinth",22.3,37.25,"right",F,"semibold")],None,False),
 ("Thessalonica",40.640,22.944,[("Thessalonica",23.1,41.75,"center",F,"semibold")],None,False),
 ("Rome",41.893,12.483,[("Rome",11.9,41.2,"right",F,"semibold")],None,False),
 ("Nehardea",33.379,43.716,[("Nehardea",44.25,34.25,"left",F,"semibold")],None,False),
]
for name,lat,lon,texts,lead,big in sites:
    ax.plot(lon,lat,"o",ms=11 if big else 9.5,mfc=GOLD,mec=SEA,mew=1.6,zorder=6)
    if lead: ax.plot([lon,lead[0]],[lat,lead[1]],color=GOLD,lw=1.1,alpha=0.9,zorder=5)
    for t,x,y,ha,sz,wt in texts:
        ax.text(x,y,t,fontsize=sz,color=CREAM,family=SERIF,ha=ha,va="center",zorder=7,path_effects=halo,fontweight=wt)
# Babylonia region label
ax.text(47.7,32.75,"BABYLONIA",fontsize=18,color=GOLD,family=SERIF,style="italic",ha="center",va="center",path_effects=halo,fontweight="bold")
# later / muted
ax.plot(44.45,31.883,"o",ms=8,mfc="none",mec=MUTED,mew=1.8,zorder=6)
ax.text(44.95,31.2,"Sura (later)",fontsize=17,color=MUTED,family=SERIF,style="italic",ha="left",va="center",path_effects=halo,fontweight="semibold")
ax.text(-4.0,40.4,"IBERIA",fontsize=18,color=MUTED,family=SERIF,style="italic",ha="center",va="center",fontweight="bold")
ax.text(-4.0,39.4,"Jews attested later\n(by c. 300 CE)",fontsize=15,color=MUTED,family=SERIF,style="italic",ha="center",va="top",linespacing=1.0)

# title
ax.text(W+0.6,N-0.5,"Jewish Communities, c. 100 CE",fontsize=36,color=GOLD,family=TITLE,ha="left",va="top",fontweight="bold",path_effects=[pe.withStroke(linewidth=4,foreground=SEA)])
# legend
h=[Line2D([],[],marker="o",ls="",ms=10,mfc=GOLD,mec=SEA,label="Jewish community, c. 100 CE"),
   Line2D([],[],marker="o",ls="",ms=9,mfc="none",mec=MUTED,mew=1.8,label="Attested only later (muted)"),
   Patch(fc=PURPLE,alpha=0.6,label="Roman Empire (approx.)"),
   Patch(fc=TEAL,alpha=0.6,label="Parthian Empire (approx.)")]
lg=ax.legend(handles=h,loc="lower left",bbox_to_anchor=(0.008,0.075),frameon=True,prop={"family":SERIF,"size":17},
   facecolor=SEA,edgecolor=GOLD,framealpha=0.88,labelcolor=CREAM,borderpad=0.6,handletextpad=0.6)
lg.get_frame().set_linewidth(0.8)
ax.text(W+0.3,S+0.25,"Map: World Religions / Natural Earth data; locations per Josephus, Philo, Acts 2:9\u201311 and standard atlases; borders approximate.",
   fontsize=13.5,color=CREAM,alpha=0.9,family=SERIF,ha="left",va="bottom")
ax.set_axis_off()
out="/workspace/ch10/map/out/rel210-ch10-l1-diaspora-map-100ce.png"
fig.savefig(out,dpi=200,facecolor=SEA); print(out, fig.get_size_inches()*200)
