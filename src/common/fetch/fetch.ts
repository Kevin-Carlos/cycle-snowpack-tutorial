export const fetchSettings = (method: "GET" | "POST", data?: any) => ({
  method: method,
  body: data ? JSON.stringify(data) : undefined,
  headers: {
    'Content-Type': 'application/json',
  },
});
