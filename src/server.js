import { createServer, Model } from 'miragejs';

export function server() {
  return createServer({
    models: {
      log: Model,
    },
    seeds(server) {
      server.db.loadData({
        logs: [
          {
            id: 1,
            weight: 90,
            createdAt: Date.now(),
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api/v1/';

      this.get('/logs', () => {
        return this.schema.all('log');
      });

      this.post('/logs', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('log', data);
      });
    },
  });
}
