function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DS4vRwRL.js","assets/index-D1MHHyHP.js","assets/index-f4pFSWeP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D1MHHyHP.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DS4vRwRL.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};