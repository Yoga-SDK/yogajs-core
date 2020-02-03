import { getResource } from './utils';
import server from './../server';

export default (path) => {
  const [{ method: resource }, ...executionList] = getResource(path);

  return {
    resource,
    executionList,
    with(params) {
      return this.call('with', [params]);
    },
    where(params) {
      return this.call('where', [params]);
    },
    update(data) {
      return this.call('update', [data]).send();
    },
    create(data) {
      return this.call('create', [data]).send();
    },
    destroy() {
      return this.call('destroy', []).send();
    },
    paginate(page = 1, limit = 20) {
      return this.call('paginate', [page, limit]).send();
    },
    all() {
      return this.call('get', []).send();
    },
    one() {
      return this.send();
    },
    call(method, params) {
      this.executionList.push({
        method,
        params
      })
      return this;
    },
    send() {
      return server().post('/server', {
        resource: this.resource,
        executionList: this.executionList
      })
    }
  }
}
