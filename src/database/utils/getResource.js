export default (path) => {
  const resources = path.replace('/', '').split('/');
  const executionList = [];

  let me = false;
  resources.forEach( param => {
    const [resource, id] = param.split(':');
    
    executionList.push({
      method: me ? 'boot' : resource,
      params: me ? [resource] : []
    });

    if (id) {
      executionList.push({
        method: 'find',
        params: [id]
      });
    }

    me = (resource === 'me');
  })

  return executionList;
}
