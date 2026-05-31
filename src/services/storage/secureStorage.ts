const secureMemoryStore = new Map<string, string>();

export const secureStorage = {
  async getItem(key: string) {
    return secureMemoryStore.get(key) ?? null;
  },

  async setItem(key: string, value: string) {
    secureMemoryStore.set(key, value);
  },

  async removeItem(key: string) {
    secureMemoryStore.delete(key);
  },
};
