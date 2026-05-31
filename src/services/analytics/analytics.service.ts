export const analyticsService = {
  track(eventName: string, properties: Record<string, unknown> = {}) {
    console.log('[analytics]', eventName, properties);
  },
};
