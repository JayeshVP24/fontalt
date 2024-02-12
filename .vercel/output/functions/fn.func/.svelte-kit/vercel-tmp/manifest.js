export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.GLLhVoYK.js","app":"_app/immutable/entry/app.C0t1Ys7V.js","imports":["_app/immutable/entry/start.GLLhVoYK.js","_app/immutable/chunks/entry.DxKf1aMz.js","_app/immutable/chunks/scheduler.6mbSpQn_.js","_app/immutable/chunks/index.DPvC6PAi.js","_app/immutable/entry/app.C0t1Ys7V.js","_app/immutable/chunks/scheduler.6mbSpQn_.js","_app/immutable/chunks/index.BirMtNv6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/font",
				pattern: /^\/font\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/font/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
