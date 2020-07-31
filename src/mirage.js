import { subscriptions, sales } from './mocks';

const loadMirage = () => import('miragejs');

export function loadMirageInDev() {
  if (process.env.NODE_ENV === 'development') {
    loadMirage().then(({ Server }) => {
      return new Server({
        routes() {
          this.namespace = process.env.REACT_APP_BASE_URL;

          this.get('/sales/', () => {
            return sales;
          });

          this.get('/subscriptions/', () => {
            return subscriptions;
          });

          this.get('/totals/', () => {
            return {
              salesTotal: 2311,
              subscriptionTotals: 381,
            };
          });
        },
      });
    });
  }
}
