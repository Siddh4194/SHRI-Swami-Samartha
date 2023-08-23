(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[56151],{297351:(s,e,a)=>{a.d(e,{Oz:()=>r,nt:()=>n,v8:()=>t});const r={BUSINESS_ACCOUNT:"BUSINESS_ACCOUNT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",USER_ACCOUNT:"USER",AD_ACCOUNT:"AD_ACCOUNT",PROFILE:"PROFILE"},t="BUSINESS_PANEL",n="ASSET_PANEL"},571480:(s,e,a)=>{a.d(e,{F:()=>A,d:()=>E});var r=a(667294),t=a(616550),n=a(297351),i=a(317205),c=a(545168),d=a(946689),u=a(835686),_=a(578662),o=a(361202),l=a(785893);const{Provider:m,useHook:E}=(0,d.Z)("AccountSwitcherContext"),A=({children:s})=>{const{params:{userBizId:e,businessHierarchyId:a,advertiserId:d,username:E}}=(0,t.useRouteMatch)(),A=(0,_.Z)(),[I,y]=(0,r.useState)(""),[N,S]=(0,r.useState)({type:n.v8}),[b,p]=(0,r.useState)(!1),[h,T]=(0,r.useState)(null),[R,D]=(0,r.useState)(null),{checkExperiment:P}=(0,u.F)(),C=P("aid_exp_global_account_switcher_beta").anyEnabled,{logContextEvent:g}=(0,c.v)();(0,r.useEffect)((()=>{y(a||"")}),[a]),(0,r.useEffect)((()=>{const s=async({id:s,username:e})=>{const a=await(0,i.bG)({user_id:s,username:e});a&&T({type:s?n.Oz.BUSINESS_ACCOUNT:n.Oz.PROFILE,id:s||a.id,name:a.full_name,img:a.image_medium_url,username:e})};A.isAuth&&C&&(E?((null==h?void 0:h.username)!==E&&s({username:E}),(null==R?void 0:R.id)!==A.id&&D({id:A.id||"",name:A.fullName||"",img:A.imageMediumUrl||""})):h||(a?(async({id:s})=>{const e=await(0,i.p)({hierarchyId:s});T({id:s,name:null!=e&&e.data?e.data.name:"",img:null!=e&&e.data?e.data.image_medium_url:"",type:n.Oz.BUSINESS_HIERARCHY})})({id:a}):e?s({id:e}):d?(async({businessId:s,assetId:e})=>{if(s)try{const{data:{data:{asset:a,type:r}}}=await(0,o.G2)({businessId:s,assetId:e});T({id:e,name:a.name,img:"",type:r})}catch(a){T({id:A.id||"",name:A.fullName||"",img:A.imageMediumUrl||"",type:n.Oz.BUSINESS_ACCOUNT})}})({businessId:null==R?void 0:R.id,assetId:d}):T({type:n.Oz.BUSINESS_ACCOUNT,id:A.id||"",name:A.fullName||"",img:A.imageMediumUrl||""})))}),[h,A,a,e,E,d,R,C]),(0,r.useEffect)((()=>{R||D({id:A.id||"",name:A.fullName||"",img:A.imageMediumUrl||""})}),[R,A]);const O=(0,r.useMemo)((()=>({activePanel:N,selectedHierarchyId:I,switcherOpen:b,openAccountSwitcher:()=>{g({event_type:101,view_type:608,component:14346}),p(!0)},closeAccountSwitcher:()=>p(!1),openAssetPanel:s=>{S({type:n.nt,id:s})},closeAssetPanel:()=>{S({type:n.v8})},actingBusiness:R,selectedAccount:h,setSelectedAccount:T,setActingBusiness:D})),[I,N,b,h,R,g]);return(0,l.jsx)(m,{value:O,children:s})}},238344:(s,e,a)=>{a.d(e,{C:()=>y,H:()=>N});var r=a(667294),t=a(297351),n=a(317205),i=a(512703),c=a(193856),d=a(88835),u=a(946689),_=a(162474),o=a(835686),l=a(13081),m=a(578662),E=a(971203),A=a(785893);const{Provider:I,useHook:y}=(0,u.Z)("BusinessHierarchyContext"),N=({children:s})=>{const[e,a]=(0,r.useState)([]),[u,y]=(0,r.useState)(!0),[N,S]=(0,r.useState)({}),[b,p]=(0,r.useState)([]),h=(0,E.Z)(),T=(0,r.useRef)(h),R=(0,m.Z)(),{checkExperiment:D}=(0,o.F)(),P=D("web_m10n_business_hierarchy_alpha").anyEnabled,C=(0,r.useRef)({}),g=(0,r.useCallback)(((s,e)=>{let a;e===t.Oz.BUSINESS_HIERARCHY?a=(0,d.Z)(c.Q6.DASHBOARD,"","",s):e===t.Oz.BUSINESS_ACCOUNT&&(a=(0,d.Z)(c.Q6.DASHBOARD,s));const r=(0,l.Z)({site:"www",path:a});(0,i.Z)(r)}),[]),O=(0,r.useCallback)((async s=>{if(!P)return[];if(y(!0),C.current[s])return y(!1),C.current[s];{const e=await(0,_.Z)({url:"ads/v4/business_access/business_hierarchies/",data:{search_by:["FULL_NAME","BUSINESS_ID"],search_value:s}}),{data:a}=e.resource_response,r=a&&a.map((s=>(s.children&&(s.children=s.children.map((s=>(s.user.entity_type=t.Oz.USER_ACCOUNT,s)))),s)))||[],i=/^\d+$/.test(s),c=new RegExp(s.toLowerCase(),"g"),d=(await T.current()).filter((e=>{if(i)return e.id.includes(s);return e.user.full_name.toLowerCase().match(c)})).map(n.IT),u=[...r.map((s=>s.id)),...d.map((s=>s.id))],o=i?(R.id||"").includes(s):(R.fullName||"").toLowerCase().match(c);return R.isAuth&&o&&u.push(R.id),C.current[s]=u,y(!1),u}}),[P,T,R.id,R.fullName,R.isAuth]),{id:$="",username:v="",email:U="",fullName:f="",imageSmallUrl:G="",imageMediumUrl:B="",isAuth:w}=R,L=(0,r.useCallback)((async()=>{if(y(!0),!w||!P)return void y(!1);const s=await(0,_.Z)({url:"ads/v4/business_access/business_hierarchies/"}),{data:e}=s.resource_response,r=e&&e.map((s=>(s.children&&(s.children=s.children.map((s=>(s.user.entity_type=t.Oz.USER_ACCOUNT,s)))),s)))||[];a(r);const i=await T.current();p(i.map(n.IT)),S((0,n.WP)({id:$,username:v,email:U,fullName:f,imageSmallUrl:G,imageMediumUrl:B})),C.current[""]=[...r.map((s=>s.id)),...i.map(n.IT).map((s=>s.id)),$],y(!1)}),[$,v,U,f,G,B,w,P,T]);(0,r.useEffect)((()=>{L()}),[L]);const Z=(0,r.useCallback)((s=>e.some((e=>e.id===s||e.children.some((e=>e.id===s||e.user.id===s))))),[e]),x=(0,r.useMemo)((()=>({businessHierarchies:[...N.id&&!Z(N.id)?[N]:[],...e,...b.filter((s=>!Z(s.id)))],switchAccount:g,searchAccounts:O,loadingAccounts:u,fetchData:L})),[e,g,O,b,u,N,L,Z]);return(0,A.jsx)(I,{value:x,children:s})}},317205:(s,e,a)=>{a.d(e,{IT:()=>i,WP:()=>c,bG:()=>u,p:()=>d});var r=a(904062),t=a(297351),n=a(162474);const i=s=>({id:s.id,entity_type:t.Oz.BUSINESS_ACCOUNT,requires_mfa_for_roles:s.requires_mfa_for_roles,user:{id:s.user.id,entity_type:t.Oz.USER_ACCOUNT,username:s.user.username,email:s.user.email,full_name:s.user.full_name,image_small_url:s.user.image_small_url,image_medium_url:s.user.image_medium_url}}),c=s=>({id:s.id,entity_type:t.Oz.BUSINESS_ACCOUNT,user:{id:s.id,entity_type:t.Oz.USER_ACCOUNT,username:s.username,email:s.email,full_name:s.fullName,image_small_url:s.imageSmallUrl,image_medium_url:s.imageMediumUrl}}),d=async({hierarchyId:s})=>(await(0,n.Z)({url:`ads/v4/business_access/business_hierarchy/${s}/`})).resource_response,u=async({user_id:s,username:e})=>{if(!e&&!s)return null;const a=await r.Z.create("UserResource",{user_id:s,username:e}).callGet(),{resource_response:{data:t}}=a;return t}},307164:(s,e,a)=>{a.d(e,{Z:()=>i});var r=a(342529),t=a(545168),n=a(260531);function i(){const s=(0,n.B)(),{logContextEvent:e}=(0,t.v)();return a=>new r.ZP({config:a,logContextEvent:e,requestContext:s})}},193856:(s,e,a)=>{a.d(e,{Hb:()=>h,Hg:()=>N,Hl:()=>E,IR:()=>l,Le:()=>n,Q6:()=>u,QE:()=>r,Sh:()=>p,V3:()=>y,Z4:()=>o,c7:()=>m,cU:()=>c,cg:()=>t,dZ:()=>i,gO:()=>A,j$:()=>I,j9:()=>T,qq:()=>D,tP:()=>S,uE:()=>_,vk:()=>R,we:()=>b,xX:()=>d});const r=3e3,t=280,n=280,i=500,c=1e4,d=250,u={DASHBOARD:"DASHBOARD",PEOPLE:"PEOPLE",PARTNERS:"PARTNERS",AD_ACCOUNTS:"AD_ACCOUNTS",AD_ACCOUNTS_PENDING_TAB:"AD_ACCOUNTS_PENDING_TAB",HISTORY:"HISTORY",PEOPLE_DETAIL:"PEOPLE_DETAIL",PARTNERS_DETAIL:"PARTNERS_DETAIL",SHARED_PARTNERS_DETAIL:"SHARED_PARTNERS_DETAIL",AD_ACCOUNTS_DETAIL:"AD_ACCOUNTS_DETAIL",PENDING_AD_ACCOUNTS_DETAIL:"PENDING_AD_ACCOUNTS_DETAIL",PEOPLE_INVITES:"PEOPLE_INVITES",PARTNERS_INVITES:"PARTNERS_INVITES",CHOOSER:"CHOOSER",PARTNERS_REQUEST_PAGE:"PARTNERS_REQUEST_PAGE",PARTNERS_INVITE_PAGE:"PARTNERS_INVITE_PAGE",PROFILES:"PROFILES",PROFILES_DETAIL:"PROFILES_DETAIL",PARTNERS_PENDING_TAB:"PARTNERS_PENDING_TAB",PEOPLE_PENDING_TAB:"PEOPLE_PENDING_TAB",USERS:"USERS",ACOUNTS:"ACCOUNTS",BUSINESS_SECURITY:"BUSINESS_SECURITY",SUPPORT_TOOL:"SUPPORT_TOOL",ASSETS:"ASSETS",ASSET_GROUPS:"ASSET_GROUPS",INVOICE_MANAGEMENT:"INVOICE_MANAGEMENT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",MANAGERS:"MANAGERS",AUDIENCES:"AUDIENCES",SHARED_TAGS:"SHARED_TAGS"},_={PARTNER:"PARTNER",PARTNER_ADMIN:"PARTNER_ADMIN"},o={ADVERTISER_OWNED_AD_ACCOUNT:"ADVERTISER_OWNED_AD_ACCOUNT",AGENCY_OWNED_AD_ACCOUNT:"AGENCY_OWNED_AD_ACCOUNT"},l={ASCENDING:"ASCENDING",DESCENDING:"DESCENDING"},m={AD_ACCOUNT:"AD_ACCOUNT",PERSON:"PERSON",PARTNER:"PARTNER"},E={PERSON:"PERSON",PARTNER:"PARTNER",PROFILE:"PROFILE"},A={ADMIN:"ADMIN",ANALYST:"ANALYST",FINANCE_MANAGER:"FINANCE_MANAGER",AUDIENCE_MANAGER:"AUDIENCE_MANAGER",CAMPAIGN_MANAGER:"CAMPAIGN_MANAGER",CATALOGS_MANAGER:"CATALOGS_MANAGER"},I=["ADMIN","ANALYST","FINANCE_MANAGER","AUDIENCE_MANAGER","CAMPAIGN_MANAGER","CATALOGS_MANAGER"],y={EMPLOYEE:"EMPLOYEE",BIZ_ADMIN:"BIZ_ADMIN",OWNER:"OWNER"},N=["PROFILE_PUBLISHER"],S={AD_ACCOUNT:0,PROFILE:2,ASSET_GROUP:3},b={id:"0",is_pin_support_user:!0,biz_roles:[y.BIZ_ADMIN],business_roles:[y.BIZ_ADMIN],user:{username:"psupport",full_name:"Pinterest support",image_small_url:"https://i.pinimg.com/60x60_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",image_medium_url:"https://i.pinimg.com/150x150_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg"}},p={ACTIVE:0,PENDING:1},h={ACTIVE:"active",PENDING:"pending"},T="filter_type",R={page:1,totalCount:0,limit:10,sortDirection:"ASCENDING",sortBy:void 0,searchBy:void 0,searchTerm:""},D={WARNING:"WARNING"}},88835:(s,e,a)=>{a.d(e,{Z:()=>n});const r="/business/business-access/",t="/business/business-hierarchy/",n=(s,e,a,n)=>{switch(s){case"DASHBOARD":return`${n?t:r}${String(null!=n?n:e)}/dashboard/`;case"PEOPLE":return`${r}${String(e)}/employees/`;case"PARTNERS":return`${r}${String(e)}/partners/`;case"AD_ACCOUNTS":return`${r}${String(e)}/ad-accounts/`;case"HISTORY":return`${r}${String(e)}/history/`;case"PEOPLE_DETAIL":return`${r}${String(e)}/employees/${String(a)}/details/`;case"PARTNERS_DETAIL":return`${r}${String(e)}/partners/${String(a)}/details/`;case"SHARED_PARTNERS_DETAIL":return`${r}${String(e)}/shared/${String(a)}/details/`;case"AD_ACCOUNTS_DETAIL":return`${r}${String(e)}/ad-accounts/${String(a)}/details/`;case"PENDING_AD_ACCOUNTS_DETAIL":return`${r}${String(e)}/ad-accounts/pending/${String(a)}/details/`;case"PEOPLE_INVITES":return`${r}${String(e)}/employees/invites/`;case"PEOPLE_PENDING_TAB":return`${r}${String(e)}/employees/pending/`;case"PARTNERS_PENDING_TAB":return`${r}${String(e)}/partners/pending/`;case"AD_ACCOUNTS_PENDING_TAB":return`${r}${String(e)}/ad-accounts/pending`;case"PARTNERS_INVITE_PAGE":return`${r}${String(e)}/partners/invites/`;case"PARTNERS_REQUEST_PAGE":return`${r}${String(e)}/partners/requests/`;case"PROFILES":return`${r}${String(e)}/profiles/`;case"PROFILES_DETAIL":return`${r}${String(e)}/profiles/${String(a)}/details/`;case"BUSINESS_SECURITY":return`${r}${String(e)}/security/`;case"SUPPORT_TOOL":return`${r}${String(e)}/support/`;case"ASSET_GROUPS":return a?`${r}${String(e)}/asset-groups/?asset_group_id=${String(a)}`:`${r}${String(e)}/asset-groups/`;case"INVOICE_MANAGEMENT":return`${r}${String(e)}/invoice-management/`;case"BUSINESS_HIERARCHY":return`${t}${String(n)}/hierarchy/`;case"MANAGERS":return`${t}${String(n)}/managers/`;case"AUDIENCES":return`${r}${String(e)}/audiences/`;case"SHARED_TAGS":return`${r}${String(e)}/shared-tags/`;default:return r}}},971203:(s,e,a)=>{a.d(e,{Z:()=>c});var r=a(307164),t=a(162474),n=a(260531),i=a(450302);function c(){const s=(0,r.Z)()(),{experimentsClient:e}=(0,n.B)();return async()=>{var a,r,n;const{anyEnabled:c}=null!==(a=e.checkExperiment("business_access_employees_api_v4_migration"))&&void 0!==a?a:{},{anyEnabled:d}=null!==(r=e.checkExperiment("business_access_employers_resource_holiday_2022"))&&void 0!==r?r:{},{anyEnabled:u}=null!==(n=e.checkExperiment("web_m10n_business_access_disable_employer_enrichment"))&&void 0!==n?n:{},_=c?"/ads/v4/business_access/businesses/me/employers/":"ads/internal/business_access/users/me/employers/";let o;if(d){const s=await(0,t.Z)({url:_});o=s.resource_response?s.resource_response.data:{data:[]}}else o=await s.get(_);const l=(o&&o.data||[]).map((s=>u?s:(0,i.W5)(s)));return await Promise.all(l)}}},187367:(s,e,a)=>{a.d(e,{$2:()=>c,Ah:()=>u,IW:()=>i,Vs:()=>_,dF:()=>o,sl:()=>d});var r=a(193856),t=a(50382),n=a(590688);const i=(s={},e={})=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){const a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex||0},c=(s={},e)=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){const a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex},d=(s,e,a,r)=>{const{businessId:t,...n}=a,{...i}=r;return{id:s,...i,...n,searchBy:n.searchBy,searchTerm:n.searchTerm||i.searchTerm,limit:n.limit||i.limit,page:n.page||i.page,sortBy:n.sortBy||i.sortBy,sortDirection:n.sortDirection||i.sortDirection,startIndex:e,...0===e&&{page:1}}},u=(s,e)=>e.reduce(((e,a)=>({ids:e.ids.concat(s(a)),data:{...e.data,[s(a)]:a}})),{ids:[],data:{}}),_=(s,e)=>{var a,r,t,n,c;const d={page:null!==(a=s.page)&&void 0!==a?a:e.page,limit:null!==(r=s.limit)&&void 0!==r?r:e.limit,sortBy:null!==(t=s.sortBy)&&void 0!==t?t:e.sortBy,searchBy:s.searchBy,searchTerm:null!==(n=s.searchTerm)&&void 0!==n?n:e.searchTerm,sortDirection:null!==(c=s.sortDirection)&&void 0!==c?c:e.sortDirection},u=i(s,e);return{...d,startIndex:u,...0===u&&{page:1}}},o=async(s,e,a)=>{const i="PEOPLE"===a?n.JC:t.Eg,{data:{data:c=[],total_data_count:d}={}}=await i({...s,limit:r.xX,startIndex:0,id:s.id||""}),u=Math.ceil(d/r.xX);if(u<=1)return{data:{data:c,total_data_count:d}};const _=[...Array(u).keys()].slice(1);return{data:{data:(await Promise.allSettled(_.map((e=>i({...s,limit:r.xX,startIndex:e*r.xX}))))).reduce(((s,e)=>{var a,r;return null!==(a=e.value)&&void 0!==a&&null!==(r=a.data)&&void 0!==r&&r.data&&(s=s.concat(e.value.data.data)),s}),c),total_data_count:d}}}},361202:(s,e,a)=>{a.d(e,{ib:()=>E,vf:()=>I,jC:()=>A,oC:()=>m,W3:()=>N,fc:()=>g,cE:()=>b,xZ:()=>y,lo:()=>O,N1:()=>D,BG:()=>P,eo:()=>h,pI:()=>T,cp:()=>p,G2:()=>R,cR:()=>S,EB:()=>l});var r=a(332507),t=a(470210),n=a(193856),i=a(162474),c=a(50382),d=a(590688);const u=async(s,e,a,r=[])=>{const t={bookmark:void 0,data:{business_id:"",data:[]},...(await(0,i.Z)({url:s,method:"GET",data:e})).resource_response};if(!t.bookmark){return a(t.data).push(...r),t.data}return await u(s,{...e,bookmark:t.bookmark},a,r.concat(...a(t.data)))},_={get:(s,e={})=>u(s,e,(s=>s.data),[])};var o=a(869834);const l=async(s,e,a,r,t,n,i)=>"PARTNER"===t?await(0,c.SZ)({businessId:r,partnerId:s,assetId:a,roles:e,clientBusinessId:n,businessHierarchyNodeId:i}):await(0,d.Jg)({businessId:r,memberId:s,assetId:a,roles:e,businessHierarchyNodeId:i}),m=async(s,e,a,r)=>{if(0===e.length)return;const t=[];e.forEach((({assigneeIds:e,adAccountIds:n,roles:i})=>{0!==i.length&&e.forEach((e=>{n.forEach((n=>{t.push(l(e,i,n,s,a,void 0,r))}))}))})),await Promise.all(t)},E=async(s,e,a,r,t)=>{const n="PEOPLE"===r?"MEMBER_INVITE":"PARTNER_INVITE",c=e.reduce(((s,e)=>{const a=Object.keys(e)[0];return{...s,...Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e}}),{}),d=a.map((e=>(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(c),invite_type:n,business_hierarchy_node_id:t}})));await Promise.all(d)},A=async(s,e,a,r)=>{const t=(s=>s.reduce(((s,e)=>{const a=Object.keys(e)[0];return{...s,...Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e}}),{}))(a);return(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(t),business_hierarchy_node_id:r}})).resource_response.data},I=async(s,e,a,r,t)=>{const n=e.reduce(((s,e)=>{const a=Object.keys(e)[0];return{...s,...Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e}}),{}),c=a.map((e=>(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(n),invite_type:r,business_hierarchy_node_id:t}})));await Promise.all(c)},y=async()=>(await(0,i.Z)({url:"ads/v4/advertisers/countries/",method:"GET"})).resource_response.data,N=async(s,e,a,r,n,c)=>(await(0,i.Z)({url:"/ads/v4/advertisers/",method:"POST",data:{owner_user_id:s,name:r,country:n,business_hierarchy_node_id:a,tos_id:c||(0,o.Fc)(t.tN[n]),...e&&{agency_user_id:e}}})).resource_response.data,S=async()=>{var s,e;const{anyEnabled:a}=null!==(s=null===(e=(0,r.Z)())||void 0===e?void 0:e.experimentsClient.checkExperiment("business_access_employees_api_v4_migration"))&&void 0!==s?s:{};if(a){var t;const s=null===(t=(await(0,i.Z)({url:"/ads/v4/business_access/businesses/me/employers/"})).resource_response.data)||void 0===t?void 0:t.data;return await Promise.all(s||[])}const n=(await _.get("ads/internal/business_access/users/me/employers/")).data;return await Promise.all(n||[])},b=async({id:s,limit:e,sortBy:a="name",searchBy:r="name",searchTerm:t="",startIndex:n=0,sortDirection:c="ASCENDING",forPartner:d=!1})=>(await(0,i.Z)({url:`/ads/internal/business_access/businesses/${String(s)}/all_assets/`,data:{limit:e,sort_by:a,search_by:r,start_index:n,search_value:t,sort_ascending:"ASCENDING"===c,for_partner:d}})).resource_response,p=async({id:s,limit:e,sortBy:a="name",sortDirection:r="ASCENDING",searchBy:t="name",searchTerm:c="",startIndex:d=0,forPartner:u})=>(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/all_assets/`,data:{limit:e,sort_by:a,sort_ascending:"ASCENDING"===r,search_by:t,search_value:c,for_partner:u,start_index:d,type:n.tP.PROFILE}})).resource_response,h=async({id:s,assetIds:e,limit:a,type:r})=>(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/batch_assets/`,method:"GET",data:{limit:a,type:r,assets_ids:e.join(",")}})).resource_response,T=async({businessId:s,assetIds:e,resourceType:a,limit:r,sortBy:t,sortDirection:n="ASCENDING",searchBy:c,searchTerm:d="",startIndex:u=0,filtersPayload:_})=>{const o=_&&Object.keys(_).length>0?{filters:JSON.stringify(_)}:{};return(await(0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets_by_ids`,data:{business_id:s,asset_ids:e,resource_type:a,page_size:r,sort_by:t,sort_direction:n,search_by:c,search_value:d,start_index:u,...o}})).resource_response},R=async({businessId:s,assetId:e})=>(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/assets/${e}/`,method:"GET"})).resource_response,D=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:t="full_name",searchTerm:n,startIndex:c,sortDirection:d})=>(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/assets/${e}/partners/`,data:{limit:a,sort_by:r,search_by:t,start_index:c,search_value:n,sort_ascending:"ASCENDING"===d}})).resource_response,P=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:t="full_name",searchTerm:n,startIndex:c,sortDirection:d})=>(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/assets/${e}/members/`,data:{page_size:a,sort_by:r,search_by:t,start_index:c,search_value:n,sort_ascending:"ASCENDING"===d}})).resource_response,C=async({businessId:s,assetId:e,limit:a,sortBy:r="name",searchBy:t="name",searchTerm:n,startIndex:c,sortDirection:d,resourceType:u="ASSET_GROUP"})=>{const _=e?JSON.stringify({child_asset_id:e}):void 0;return(await(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/assets/`,data:{limit:a,sort_by:r,search_by:t,start_index:c,search_value:n,sort_ascending:"ASCENDING"===d,resource_type:u,filters:_}})).resource_response},g=async({id:s,businessId:e,assetId:a,limit:r,sortBy:t="name",searchBy:n="name",searchTerm:i,startIndex:c,sortDirection:d,resourceType:u="ASSET_GROUP"})=>C({id:s,businessId:e,assetId:a,limit:r,sortBy:t,searchBy:n,searchTerm:i,startIndex:c,sortDirection:d,resourceType:u}),O=async({id:s,businessId:e,limit:a,sortBy:r="name",searchBy:t="name",searchTerm:n,startIndex:i,sortDirection:c,resourceType:d="ASSET_GROUP"})=>C({id:s,businessId:e,limit:a,sortBy:r,searchBy:t,searchTerm:n,startIndex:i,sortDirection:c,resourceType:d})},50382:(s,e,a)=>{a.d(e,{Bq:()=>S,Cj:()=>l,Eg:()=>A,F0:()=>E,FA:()=>i,Jq:()=>o,K7:()=>m,M9:()=>b,OA:()=>T,Of:()=>N,SB:()=>y,SZ:()=>h,Zk:()=>_,c4:()=>I,ek:()=>d,h9:()=>p,qC:()=>c,w8:()=>u,wi:()=>R});var r=a(193856),t=a(162474),n=a(187367);const i=async({businessId:s,requestIds:e,includeAssetSummary:a})=>{const r=await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/batch_partners/`,method:"GET",data:{partners:e,assets_summary:a}}),{data:{data:n}}={data:{},...r.resource_response};return n},c=async({businessId:s,requestIds:e,includeAssetSummary:a})=>{const r=await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/shared/batch_partners/`,method:"GET",data:{partners:e,assets_summary:a}}),{data:{data:n}}={data:{},...r.resource_response};return n},d=async(s,e)=>({data:[],business_id:"",partner_id:"",...(await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:r.cU}})).resource_response.data}),u=async(s,e)=>(await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/asset_counts/`,method:"GET"})).resource_response.data,_=async({partnerId:s,role:e,businessId:a,businessHierarchyNodeId:r})=>(await(0,t.Z)({url:`ads/internal/business_access/businesses/${a}/partners/${s}/invite/`,method:"POST",data:{role_name:e,business_hierarchy_node_id:r}})).resource_response,o=async({partnerId:s,role:e,businessId:a})=>(await(0,t.Z)({url:`ads/internal/business_access/businesses/${a}/partners/${s}/invite/`,method:"POST",data:{role_name:e,type:"PARTNER_REQUEST"}})).resource_response,l=async({businessId:s,partnerId:e,businessHierarchyNodeId:a,role:r})=>(await(0,t.Z)({url:`/ads/internal/business_access/businesses/${s}/partners/${e}/`,method:"DELETE",data:{role_name:r,business_hierarchy_node_id:a}})).resource_response,m=async({businessId:s,partnerId:e,businessHierarchyNodeId:a,role:r,partner_type:n})=>(await(0,t.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/`,method:"DELETE",data:{role_name:r,partner_type:n,business_hierarchy_node_id:a}})).resource_response,E=async({id:s,limit:e,sortBy:a="full_name",searchBy:r="full_name",searchTerm:n="",startIndex:i=0,sortDirection:c="ASCENDING",includeAssetSummary:d=!0})=>{const u={data:{data:[]},...(await(0,t.Z)({url:`/ads/internal/business_access/businesses/${s}/all_partners/`,method:"GET",data:{limit:e,sort_by:a,search_by:r,start_index:i,search_value:n,assets_summary:d?"true":"false",sort_ascending:"ASCENDING"===c}})).resource_response};return u.data.data=u.data.data.map((e=>{var a;return(null==e||null===(a=e.created_by_biz)||void 0===a?void 0:a.id)===s&&(e.isAgencyPartner=!0),e})),u},A=async({id:s,limit:e,sortBy:a="full_name",searchBy:r=["FULL_NAME","BUSINESS_ID","USERNAME"],searchTerm:n="",startIndex:i=0,sortDirection:c="ASCENDING",includeAssetSummary:d,partnerType:u,partners:_=[]})=>(await(0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/`,data:{page_size:e,sort_by:a,search_by:r,start_index:i,search_value:n,assets_summary:d?"true":"false",sort_ascending:"ASCENDING"===c,partner_type:u,partners:_}})).resource_response,I=async({businessId:s,partnerId:e,includeAssetSummary:a=!0})=>{var r,n;const i=await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/`,method:"GET",data:{assets_summary:a?"true":"false "}});if((null===(r=i.resource_response.data)||void 0===r||null===(n=r.created_by_biz)||void 0===n?void 0:n.id)===s){const s={data:{isAgencyPartner:void 0},...i.resource_response};return s.data.isAgencyPartner=!0,s}return i.resource_response},y=async({businessId:s,partnerId:e,limit:a,sortBy:r,searchBy:n="name",searchTerm:i,startIndex:c,sortDirection:d})=>(await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:a,sort_by:r,...i&&{search_by:n},start_index:c,search_value:i,sort_ascending:"ASCENDING"===d}})).resource_response,N=async({businessId:s,partnerId:e,limit:a,sortBy:r,searchBy:n="name",searchTerm:i,startIndex:c,sortDirection:d})=>(await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/shared/${e}/assets/`,method:"GET",data:{limit:a,sort_by:r,...i&&{search_by:n},start_index:c,search_value:i,sort_ascending:"ASCENDING"===d}})).resource_response,S=async({businessId:s,partnerId:e,limit:a,sortBy:r,searchBy:n="name",searchTerm:i,startIndex:c,sortDirection:d})=>(await(0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:a,sort_by:r,...i?{search_by:n}:{},start_index:c,search_value:i,sort_ascending:"ASCENDING"===d,resource_type:"ASSET_GROUP",partner_type:"INTERNAL"}})).resource_response,b=async(s,e,a=!1)=>{const i=(await(0,n.dF)({id:s,partnerType:"INTERNAL"},e,"PARTNER")).data.data,c=await Promise.all(i.map((async({id:e})=>(await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:r.cU,type:a?r.tP.PROFILE:r.tP.AD_ACCOUNT}})).resource_response.data)));return i.map(((s,e)=>({...s,assets:c[e].data})))},p=async({businessId:s,partnerId:e,assetId:a})=>(await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/${a}/`,method:"GET"})).resource_response,h=async({businessId:s,partnerId:e,assetId:a,roles:r,clientBusinessId:n,businessHierarchyNodeId:i})=>(await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"PUT",data:{finalRoles:r.includes("ADMIN")?["ADMIN"]:r,business_hierarchy_node_id:i,...n?{client_business_id:n}:{}}})).resource_response.data,T=async({businessId:s,partnerId:e,assetId:a,businessHierarchyNodeId:r,partner_type:n="INTERNAL"})=>(await(0,t.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"DELETE",data:{partner_type:n,business_hierarchy_node_id:r}})).resource_response.data,R=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:n="FULL_NAME",searchTerm:i,startIndex:c,sortDirection:d})=>(await(0,t.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:a,sort_by:r,search_by:n,search_value:i,start_index:c,sort_ascending:"ASCENDING"===d}})).resource_response},590688:(s,e,a)=>{a.d(e,{GL:()=>N,JC:()=>m,Jg:()=>S,QC:()=>A,UQ:()=>u,bP:()=>b,dx:()=>_,kF:()=>p,kH:()=>l,kJ:()=>c,kY:()=>E,mZ:()=>I,n5:()=>y,p6:()=>o,p_:()=>d});var r=a(332507),t=a(193856),n=a(162474),i=a(450302);const c=async({businessId:s,requestIds:e,includeAssetSummary:a})=>{const r=await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/batch_members/`,method:"GET",data:{members:e,assets_summary:a,extend_info_from_user_api:!0}}),{data:{data:t}}={data:{data:{}},...r.resource_response};return t},d=async(s,e,a,r)=>({data:[],...(await(0,n.Z)({url:`ads/internal/business_access/businesses/${a}/members/batch_invite/`,method:"POST",data:{role_name:e,members:s,business_hierarchy_node_id:r}})).resource_response.data}),u=async(s,e,a)=>{const r={data:[],...(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:t.cU,...Number.isInteger(a)&&{asset_permission_type:a}}})).resource_response.data}.data.map(i.PK);return await Promise.all(r)},_=async(s,e,a,t)=>{var i,c;const{anyEnabled:d}=null!==(i=null===(c=(0,r.Z)())||void 0===c?void 0:c.experimentsClient.checkExperiment("business_access_employees_api_v4_migration"))&&void 0!==i?i:{},u=d?"v4":"internal";return{data:void 0,auxData:void 0,...(await(0,n.Z)({url:`ads/${u}/business_access/businesses/${s}/members/${e}/`,method:"DELETE",data:{...d?{business_role:a}:{role_name:[a]},business_hierarchy_node_id:t}})).resource_response.data}},o=async(s,e,a,t)=>{var i,c;const d=null!==(i=null===(c=(0,r.Z)())||void 0===c?void 0:c.experimentsClient.checkExperiment("business_access_employees_api_v4_migration").anyEnabled)&&void 0!==i&&i,u=d?{business_role:s}:{role_name:s};return(await(0,n.Z)({url:d?`ads/v4/business_access/businesses/${a}/members/${e}/`:`ads/internal/business_access/businesses/${a}/members/${e}/`,method:"PUT",data:{...u,...t?{business_hierarchy_node_id:t}:{}}})).resource_response.data},l=async({id:s,limit:e,filters:a,sortBy:r="full_name",searchBy:t="full_name",searchTerm:i="",startIndex:c=0,sortDirection:d="ASCENDING",includeAssetSummary:u})=>(await(0,n.Z)({url:`/ads/internal/business_access/businesses/${s}/members/`,method:"GET",data:{limit:e,filters:a?JSON.stringify(a):void 0,sort_by:r,search_by:t,start_index:c,search_value:i,assets_summary:u?"true":"false",sort_ascending:"ASCENDING"===d,extend_info_from_user_api:!0}})).resource_response,m=async({id:s,limit:e,filters:a,memberIds:r=[],sortBy:t="full_name",searchBy:i=["FULL_NAME","EMAIL","USERNAME"]||0,searchTerm:c="",startIndex:d=0,sortDirection:u="ASCENDING",includeAssetSummary:_})=>(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/members/`,data:{page_size:e,member_ids:r.length?r.join(","):void 0,filters:a?JSON.stringify(a):void 0,sort_by:t,search_by:i,start_index:d,search_value:c,assets_summary:_?"true":"false",sort_ascending:"ASCENDING"===u,extend_info_from_user_api:!0}})).resource_response,E=async({id:s})=>{var e,a;const t=null!==(e=null===(a=(0,r.Z)())||void 0===a?void 0:a.experimentsClient.checkExperiment("business_access_employees_api_v4_migration").anyEnabled)&&void 0!==e&&e;return(await(0,n.Z)({url:t?`/ads/v4/business_access/businesses/${s}/owner/`:`/ads/internal/business_access/businesses/${s}/owner/`})).resource_response.data},A=async({businessId:s,personId:e,limit:a,sortBy:r,searchBy:t="name",searchTerm:i,startIndex:c,sortDirection:d,assetPermissionType:u})=>{const _={limit:a,sort_by:r,search_by:t,start_index:c,search_value:i,sort_ascending:"ASCENDING"===d,...Number.isInteger(u)?{asset_permission_type:u}:{}};return(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/`,data:_})).resource_response},I=async({businessId:s,personId:e,limit:a,sortBy:r,searchBy:i="name",searchTerm:c,startIndex:d,sortDirection:u,assetPermissionType:_})=>{const o={limit:a,sort_by:r,search_by:i,start_index:d,search_value:c,sort_ascending:"ASCENDING"===u,type:t.tP.PROFILE,...Number.isInteger(_)?{asset_permission_type:_}:{}};return(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/`,data:o})).resource_response},y=async({businessId:s,personId:e,limit:a,sortBy:r,searchBy:t="name",searchTerm:i,startIndex:c,sortDirection:d,assetPermissionType:u})=>{const _={page_size:a,sort_by:r,search_by:t,start_index:c,search_value:i,sort_ascending:"ASCENDING"===d,resource_type:"ASSET_GROUP",asset_permission_type:u};return(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:_})).resource_response},N=async({businessId:s,personId:e,assetId:a})=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/${a}/`})).resource_response,S=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:t,roles:i})=>{var c,d;const{anyEnabled:u}=null!==(c=null===(d=(0,r.Z)())||void 0===d?void 0:d.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==c?c:{};if(u){return(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:i.includes("ADMIN")?["ADMIN"]:i,business_hierarchy_node_id:t}})).resource_response.data}return(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"PUT",data:{finalRoles:i.includes("ADMIN")?["ADMIN"]:i,business_hierarchy_node_id:t}})).resource_response.data},b=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:r})=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:r}})).resource_response.data,p=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:t="FULL_NAME",searchTerm:i,startIndex:c,sortDirection:d})=>{const u=await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,method:"GET",data:{page_size:a,sort_by:r,search_by:t,search_value:i,start_index:c,sort_ascending:"ASCENDING"===d}}),{data:_}={data:void 0,...u.resource_response};return _}},450302:(s,e,a)=>{a.d(e,{PK:()=>n,W5:()=>i,bG:()=>t});var r=a(904062);const t=async s=>{const e=await r.Z.create("UserResource",{user_id:s}).callGet(),{resource_response:{data:a}}=e;return a},n=async s=>{const{asset:e}=s,a=e.agency_user_id||e.owner_user_id,r=await t(a);return{...s,asset:{...e,creator:r.full_name}}},i=async s=>{const e=await t(s.user.id);return{...s,user:e,id:e.id}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/56151-d4f999af3f555142.mjs.map