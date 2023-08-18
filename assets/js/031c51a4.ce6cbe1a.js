"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[3169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=m(a),u=l,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var n=a(7462),l=a(3366),o=(a(7294),a(3905)),i=["components"],r={},p="Types",m={unversionedId:"api-reference/types",id:"api-reference/types",title:"Types",description:"The following types can be imported from react-map-gl when using TypeScript.",source:"@site/../docs/api-reference/types.md",sourceDirName:"api-reference",slug:"/api-reference/types",permalink:"/react-map-gl/docs/api-reference/types",draft:!1,editUrl:"https://github.com/visgl/react-map-gl/tree/master/docs/../docs/api-reference/types.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"useMap",permalink:"/react-map-gl/docs/api-reference/use-map"}},s={},c=[{value:"Components",id:"components",level:2},{value:"MapboxMap",id:"mapboxmap",level:4},{value:"IControl",id:"icontrol",level:4},{value:"CustomLayerInterface",id:"customlayerinterface",level:4},{value:"MapRef",id:"mapref",level:4},{value:"GeolocateControlRef",id:"geolocatecontrolref",level:4},{value:"Styling",id:"styling",level:2},{value:"MapboxStyle",id:"mapboxstyle",level:4},{value:"Fog",id:"fog",level:4},{value:"Light",id:"light",level:4},{value:"TerrainSpecification",id:"terrainspecification",level:4},{value:"ProjectionSpecification",id:"projectionspecification",level:4},{value:"BackgroundLayer",id:"backgroundlayer",level:4},{value:"CircleLayer",id:"circlelayer",level:4},{value:"FillExtrusionLayer",id:"fillextrusionlayer",level:4},{value:"FillLayer",id:"filllayer",level:4},{value:"HeatmapLayer",id:"heatmaplayer",level:4},{value:"HillshadeLayer",id:"hillshadelayer",level:4},{value:"LineLayer",id:"linelayer",level:4},{value:"RasterLayer",id:"rasterlayer",level:4},{value:"SymbolLayer",id:"symbollayer",level:4},{value:"SkyLayer",id:"skylayer",level:4},{value:"GeoJSONSourceRaw",id:"geojsonsourceraw",level:4},{value:"VideoSourceRaw",id:"videosourceraw",level:4},{value:"ImageSourceRaw",id:"imagesourceraw",level:4},{value:"VectorSourceRaw",id:"vectorsourceraw",level:4},{value:"RasterSource",id:"rastersource",level:4},{value:"RasterDemSource",id:"rasterdemsource",level:4},{value:"CanvasSourceRaw",id:"canvassourceraw",level:4},{value:"Configurations",id:"configurations",level:2},{value:"Anchor",id:"anchor",level:4},{value:"Alignment",id:"alignment",level:4},{value:"ControlPosition",id:"controlposition",level:4},{value:"DragPanOptions",id:"dragpanoptions",level:4},{value:"FitBoundsOptions",id:"fitboundsoptions",level:4},{value:"ZoomRotateOptions",id:"zoomrotateoptions",level:4},{value:"PaddingOptions",id:"paddingoptions",level:4},{value:"TransformRequestFunction",id:"transformrequestfunction",level:4},{value:"Data Types",id:"data-types",level:2},{value:"LngLat",id:"lnglat",level:4},{value:"LngLatLike",id:"lnglatlike",level:4},{value:"LngLatBounds",id:"lnglatbounds",level:4},{value:"LngLatBoundsLike",id:"lnglatboundslike",level:4},{value:"Point",id:"point",level:4},{value:"PointLike",id:"pointlike",level:4},{value:"MapboxGeoJSONFeature",id:"mapboxgeojsonfeature",level:4},{value:"ViewState",id:"viewstate",level:4},{value:"Sources",id:"sources",level:2},{value:"GeoJSONSource",id:"geojsonsource",level:4},{value:"VideoSource",id:"videosource",level:4},{value:"ImageSource",id:"imagesource",level:4},{value:"CanvasSource",id:"canvassource",level:4},{value:"VectorTileSource",id:"vectortilesource",level:4},{value:"Events",id:"events",level:2},{value:"MapboxEvent",id:"mapboxevent",level:4},{value:"MapLayerMouseEvent",id:"maplayermouseevent",level:4},{value:"MapWheelEvent",id:"mapwheelevent",level:4},{value:"MapLayerTouchEvent",id:"maplayertouchevent",level:4},{value:"ViewStateChangeEvent",id:"viewstatechangeevent",level:4},{value:"MapBoxZoomEvent",id:"mapboxzoomevent",level:4},{value:"MapStyleDataEvent",id:"mapstyledataevent",level:4},{value:"MapSourceDataEvent",id:"mapsourcedataevent",level:4},{value:"ErrorEvent",id:"errorevent",level:4},{value:"GeolocateEvent",id:"geolocateevent",level:4},{value:"GeolocateResultEvent",id:"geolocateresultevent",level:4},{value:"GeolocateErrorEvent",id:"geolocateerrorevent",level:4},{value:"MarkerDragEvent",id:"markerdragevent",level:4},{value:"PopupEvent",id:"popupevent",level:4}],d={toc:c},u="wrapper";function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"types"},"Types"),(0,o.kt)("p",null,"The following types can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"react-map-gl")," when using TypeScript."),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("h4",{id:"mapboxmap"},"MapboxMap"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/map/"},"mapboxgl.Map")," instance."),(0,o.kt)("h4",{id:"icontrol"},"IControl"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#icontrol"},"mapboxgl.IControl")," implementation."),(0,o.kt)("h4",{id:"customlayerinterface"},"CustomLayerInterface"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface"},"custom layer implementation"),"."),(0,o.kt)("h4",{id:"mapref"},"MapRef"),(0,o.kt)("p",null,"Instance ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html#creating-refs"},"ref")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," component. See ",(0,o.kt)("a",{parentName:"p",href:"/react-map-gl/docs/api-reference/map#methods"},"Map documentation")," for details."),(0,o.kt)("h4",{id:"geolocatecontrolref"},"GeolocateControlRef"),(0,o.kt)("p",null,"Instance ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html#creating-refs"},"ref")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},"GeolocateControl")," component. See ",(0,o.kt)("a",{parentName:"p",href:"/react-map-gl/docs/api-reference/geolocate-control#methods"},"GeolocateControl documentation")," for details."),(0,o.kt)("h2",{id:"styling"},"Styling"),(0,o.kt)("h4",{id:"mapboxstyle"},"MapboxStyle"),(0,o.kt)("p",null,"An object conforming to the ",(0,o.kt)("a",{parentName:"p",href:"https://mapbox.com/mapbox-gl-style-spec/"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"fog"},"Fog"),(0,o.kt)("p",null,"An object conforming to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/fog/"},"Fog Style Specification"),"."),(0,o.kt)("h4",{id:"light"},"Light"),(0,o.kt)("p",null,"An object conforming to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mapbox.com/mapbox-gl-style-spec/#light"},"Light Style Specification"),"."),(0,o.kt)("h4",{id:"terrainspecification"},"TerrainSpecification"),(0,o.kt)("p",null,"An object conforming to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/terrain/"},"Terrain Style Specification"),"."),(0,o.kt)("h4",{id:"projectionspecification"},"ProjectionSpecification"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (string): projection name, one of Albers (",(0,o.kt)("inlineCode",{parentName:"li"},"'albers'"),"), Equal Earth (",(0,o.kt)("inlineCode",{parentName:"li"},"'equalEarth'"),"), Equirectangular/Plate Carr\xe9e/WGS84 (",(0,o.kt)("inlineCode",{parentName:"li"},"'equirectangular'"),"), Lambert (",(0,o.kt)("inlineCode",{parentName:"li"},"'lambertConformalConic'"),"), Mercator (",(0,o.kt)("inlineCode",{parentName:"li"},"'mercator'"),"), Natural Earth (",(0,o.kt)("inlineCode",{parentName:"li"},"'naturalEarth'"),"), and Winkel Tripel (",(0,o.kt)("inlineCode",{parentName:"li"},"'winkelTripel'"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"center?")," (","[number, number]","): longitude and latitude of the projection center"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parallels?")," (","[number, number]","): the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Map_projection#Conic"},"two standard parallels")," of a conic projection such as Albers and Lambert.")),(0,o.kt)("h4",{id:"backgroundlayer"},"BackgroundLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"background")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#background"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"circlelayer"},"CircleLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"circle")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#circle"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"fillextrusionlayer"},"FillExtrusionLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"fill-extrusion")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill-extrusion"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"filllayer"},"FillLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"fill")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"heatmaplayer"},"HeatmapLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"heatmap")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#heatmap"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"hillshadelayer"},"HillshadeLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"hillshade")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#hillshade"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"linelayer"},"LineLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"line")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#line"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"rasterlayer"},"RasterLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"raster")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#raster"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"symbollayer"},"SymbolLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#symbol"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"skylayer"},"SkyLayer"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"sky")," layer according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#sky"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"geojsonsourceraw"},"GeoJSONSourceRaw"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"geojson")," source according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"videosourceraw"},"VideoSourceRaw"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"video")," source according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#video"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"imagesourceraw"},"ImageSourceRaw"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," source according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#image"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"vectorsourceraw"},"VectorSourceRaw"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"vector")," source according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"rastersource"},"RasterSource"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"raster")," source according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"rasterdemsource"},"RasterDemSource"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"raster-dem")," source according to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster-dem"},"Mapbox Style Specification"),"."),(0,o.kt)("h4",{id:"canvassourceraw"},"CanvasSourceRaw"),(0,o.kt)("p",null,"A JSON object that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"canvas")," source type. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/sources/#canvassourceoptions"},"CanvasSourceOptions"),"."),(0,o.kt)("h2",{id:"configurations"},"Configurations"),(0,o.kt)("h4",{id:"anchor"},"Anchor"),(0,o.kt)("p",null,"One of ",(0,o.kt)("inlineCode",{parentName:"p"},"'center'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'top-left'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'top-right'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom-left'")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom-right'"),"."),(0,o.kt)("h4",{id:"alignment"},"Alignment"),(0,o.kt)("p",null,"One of ",(0,o.kt)("inlineCode",{parentName:"p"},"'map'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'viewport'")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"'auto'"),"."),(0,o.kt)("h4",{id:"controlposition"},"ControlPosition"),(0,o.kt)("p",null,"One of ",(0,o.kt)("inlineCode",{parentName:"p"},"'top-right'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'top-left'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom-right'")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom-left'"),"."),(0,o.kt)("h4",{id:"dragpanoptions"},"DragPanOptions"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"linearity?"),": number - The rate at which the speed reduces after the pan ends."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"easing?"),": (t: number) => number - Optional easing function when applying the drag. Defaults to bezier function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deceleration?"),": number - Factor used to scale the drag velocity. Default ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxSpeed?"),": number - The maximum value of the drag velocity. Default ",(0,o.kt)("inlineCode",{parentName:"li"},"1400"),".")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/handlers/#dragpanhandler#enable"},"DragPanHandler#enable"),"."),(0,o.kt)("h4",{id:"fitboundsoptions"},"FitBoundsOptions"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offset?"),": ",(0,o.kt)("a",{parentName:"li",href:"#pointlike"},"PointLike")," - The center of the given bounds relative to the map's center, measured in pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"padding?"),": ",(0,o.kt)("a",{parentName:"li",href:"#paddingoptions"},"PaddingOptions")," - The amount of padding in pixels to add to the given bounds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxZoom?"),": number - The maximum zoom level to allow when the map fits to the specified bounds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxZoom?"),": number - The minimum zoom level to allow when the map fits to the specified bounds.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/map/#map#fitbounds"},"Map#fitBounds")),(0,o.kt)("h4",{id:"zoomrotateoptions"},"ZoomRotateOptions"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"around?"),": 'center' - If \"center\" is passed, map will zoom around center of map.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/handlers/#scrollzoomhandler#enable"},"ScrollZoomHandler#enable"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/handlers/#touchzoomrotatehandler#enable"},"TouchZoomRotateHandler#enable")),(0,o.kt)("h4",{id:"paddingoptions"},"PaddingOptions"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"left"),": number - in pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"top"),": number - in pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"right"),": number - in pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bottom"),": number - in pixels.")),(0,o.kt)("h4",{id:"transformrequestfunction"},"TransformRequestFunction"),(0,o.kt)("p",null,"A function that takes the following arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resourceType"),": 'Unknown' | 'Style' | 'Source' | 'Tile' | 'Glyphs' | 'SpriteImage' | 'SpriteJSON' | 'Image';")),(0,o.kt)("p",null,"And returns an object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": string - The URL to be requested."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"credentials?"),": 'same-origin' | 'include' - Use ",(0,o.kt)("inlineCode",{parentName:"li"},"'include'")," to send cookies with cross-origin requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headers?"),": { ","[header: string]",": any } - The headers to be sent with the request."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method?"),": 'GET' | 'POST' | 'PUT'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"collectResourceTiming?"),": boolean")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/properties/#requestparameters"},"RequestParameters"),"."),(0,o.kt)("h2",{id:"data-types"},"Data Types"),(0,o.kt)("h4",{id:"lnglat"},"LngLat"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/geography/#lnglat"},"mapboxgl.LngLat")," object."),(0,o.kt)("h4",{id:"lnglatlike"},"LngLatLike"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"#lnglat"},"LngLat")," object, an array of two numbers representing longitude and latitude, or an object with ",(0,o.kt)("inlineCode",{parentName:"p"},"lng")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lat")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"lon")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lat")," properties."),(0,o.kt)("h4",{id:"lnglatbounds"},"LngLatBounds"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/geography/#lnglatbounds"},"mapboxgl.LngLatBounds")," object."),(0,o.kt)("h4",{id:"lnglatboundslike"},"LngLatBoundsLike"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"#lnglatbounds"},"LngLatBounds")," object, an array of ",(0,o.kt)("a",{parentName:"p",href:"#lnglatlike"},"LngLatLike")," objects in ","[sw, ne]"," order, or an array of numbers in ","[west, south, east, north]"," order."),(0,o.kt)("h4",{id:"point"},"Point"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mapbox/point-geometry"},"mapboxgl.Point")," object."),(0,o.kt)("h4",{id:"pointlike"},"PointLike"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"#point"},"Point")," or an array of two numbers representing x and y screen coordinates in pixels."),(0,o.kt)("h4",{id:"mapboxgeojsonfeature"},"MapboxGeoJSONFeature"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"http://geojson.org/"},"GeoJSON")," feature that also contains the following library-specific fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"layer"),": Layer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sourceLayer"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": { ","[key: string]",": any }")),(0,o.kt)("h4",{id:"viewstate"},"ViewState"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"longitude"),": number - The longitude of the map center."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"latitude"),": number - The latitude of the map center."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zoom"),": number - The zoom level."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pitch"),": number - The pitch (tilt) of the map, in degrees."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bearing"),": number - The bearing (rotation) of the map, in degrees.")),(0,o.kt)("h2",{id:"sources"},"Sources"),(0,o.kt)("p",null,"The following are implementations of source types that could be retrieved with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/map/#map#getsource"},"Map#getSource"),"."),(0,o.kt)("h4",{id:"geojsonsource"},"GeoJSONSource"),(0,o.kt)("p",null,"A source containing GeoJSON. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/sources/#geojsonsource"},"GeoJSONSource"),"."),(0,o.kt)("h4",{id:"videosource"},"VideoSource"),(0,o.kt)("p",null,"A source containing video. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/sources/#videosource"},"VideoSource"),"."),(0,o.kt)("h4",{id:"imagesource"},"ImageSource"),(0,o.kt)("p",null,"A source containing image. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/sources/#imagesource"},"ImageSource"),"."),(0,o.kt)("h4",{id:"canvassource"},"CanvasSource"),(0,o.kt)("p",null,"A source containing the contents of an HTML canvas. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/sources/#canvassource"},"CanvasSource"),"."),(0,o.kt)("h4",{id:"vectortilesource"},"VectorTileSource"),(0,o.kt)("p",null,"A source containing vector tiles in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/vector-tiles/reference/"},"Mapbox Vector Tile format"),". See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/sources/#vectortilesource"},"VectorTileSource"),"."),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h4",{id:"mapboxevent"},"MapboxEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string - Event type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxmap"},"MapboxMap")," - The map instance that fired the event"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"originalEvent?"),": ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event"},"Event"))),(0,o.kt)("h4",{id:"maplayermouseevent"},"MapLayerMouseEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxmap"},"MapboxMap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"originalEvent?"),": ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent"},"MouseEvent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"point"),": ",(0,o.kt)("a",{parentName:"li",href:"#point"},"Point")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lngLat"),": ",(0,o.kt)("a",{parentName:"li",href:"#lnglat"},"LngLat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"preventDefault"),": () => void"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultPrevented"),": boolean"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"features?"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxgeojsonfeature"},"MapboxGeoJSONFeature"),"[]")),(0,o.kt)("h4",{id:"mapwheelevent"},"MapWheelEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxmap"},"MapboxMap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"originalEvent?"),": ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent"},"WheelEvent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"preventDefault"),": () => void"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultPrevented"),": boolean")),(0,o.kt)("h4",{id:"maplayertouchevent"},"MapLayerTouchEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxmap"},"MapboxMap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"originalEvent?"),": ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent"},"TouchEvent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"point"),": ",(0,o.kt)("a",{parentName:"li",href:"#point"},"Point")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lngLat"),": ",(0,o.kt)("a",{parentName:"li",href:"#lnglat"},"LngLat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"points"),": ",(0,o.kt)("a",{parentName:"li",href:"#point"},"Point"),"[]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lngLats"),": ",(0,o.kt)("a",{parentName:"li",href:"#lnglat"},"LngLat"),"[]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"preventDefault"),": () => void"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultPrevented"),": boolean"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"features?"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxgeojsonfeature"},"MapboxGeoJSONFeature"),"[]")),(0,o.kt)("h4",{id:"viewstatechangeevent"},"ViewStateChangeEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string - Event type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxmap"},"MapboxMap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"viewState"),": ",(0,o.kt)("a",{parentName:"li",href:"#viewstate"},"ViewState")," - the next view state that the camera wants to change to based on user input or transition.")),(0,o.kt)("h4",{id:"mapboxzoomevent"},"MapBoxZoomEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxmap"},"MapboxMap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"originalEvent?"),": ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent"},"MouseEvent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"boxZoomBounds"),": ",(0,o.kt)("a",{parentName:"li",href:"#lnglatbounds"},"LngLatBounds"))),(0,o.kt)("h4",{id:"mapstyledataevent"},"MapStyleDataEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxmap"},"MapboxMap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dataType"),": 'style'")),(0,o.kt)("h4",{id:"mapsourcedataevent"},"MapSourceDataEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxmap"},"MapboxMap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dataType"),": 'source'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isSourceLoaded"),": boolean"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sourceId"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sourceDataType"),": 'metadata' | 'content'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tile"),": any"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"coord"),": Coordinate")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/events/#mapdataevent"},"MapDataEvent"),"."),(0,o.kt)("h4",{id:"errorevent"},"ErrorEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": 'error'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),": ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"},"Error"))),(0,o.kt)("h4",{id:"geolocateevent"},"GeolocateEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"#mapboxmap"},"MapboxMap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol"},"mapboxgl.GeolocateControl"))),(0,o.kt)("h4",{id:"geolocateresultevent"},"GeolocateResultEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol"},"mapboxgl.GeolocateControl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"coords"),": ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates"},"GeolocationCoordinates")," - the current location."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestamp"),": number - the time at which the location was retrieved.")),(0,o.kt)("h4",{id:"geolocateerrorevent"},"GeolocateErrorEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol"},"mapboxgl.GeolocateControl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"code"),": PERMISSION_DENIED | POSITION_UNAVAILABLE | TIMEOUT - see ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError"},"GeolocationPositionError")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message"),": string - the details of the error. Specifications note that this is primarily intended for debugging use and not to be shown directly in a user interface.")),(0,o.kt)("h4",{id:"markerdragevent"},"MarkerDragEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker"},"mapboxgl.Marker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lngLat"),": ",(0,o.kt)("a",{parentName:"li",href:"#lnglat"},"LngLat")," - the new location of the marker")),(0,o.kt)("h4",{id:"popupevent"},"PopupEvent"),(0,o.kt)("p",null,"An object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup"},"mapboxgl.Popup"))))}k.isMDXComponent=!0}}]);