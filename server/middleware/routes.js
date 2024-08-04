const getRoutes = (app, req, res, next) => {
  const routes = []
  app._router.stack.map((r) => {
    if (r.name === 'router') {
      const prefix =  r.regexp.toString().replace(/\/\^|\/\?|\/\$/g, '').replace('(?=\\/|$)', '').replace(/\\(.)/g, '$1').replace(/\/i\n/g, '').replace(/\/i$/, '');
      r.handle.stack?.map((r) => {
        const path = r.route?.path;
        r.route?.stack?.map((r) => {
          routes.push({
            path: path,
            method: r.method,
            prefix: prefix
          })
        })
      })
    }
  })

  return routes;
}
export default getRoutes;