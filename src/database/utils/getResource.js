export default (path) => {
  const resources = path.replace('/', '').split('/');
  const executionList = [];

  resources.forEach( param => {
    const [resource, id] = param.split(':');
    
    executionList.push({
      method: resource,
      params: []
    });

    if (id) {
      executionList.push({
        method: 'find',
        params: [id]
      });
    }
  })

  return executionList;
}
