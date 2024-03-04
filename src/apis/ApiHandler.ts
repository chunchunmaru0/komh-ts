export class ApiHandler {
  private basePath: string;
  private defaultHeaders: Record<string, string>;

  constructor(basePath: string, defaultHeaders: Record<string, string> = {}) {
    this.basePath = basePath;
    this.defaultHeaders = defaultHeaders;
  }

  async get<T>(
    endpoint: string,
    customHeaders: Record<string, string> = {}
  ): Promise<T> {
    const url = this.basePath + endpoint;
    const headers = new Headers({
      ...this.defaultHeaders,
      ...customHeaders,
    });

    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      return (await response.json()) as T;
    } catch (error) {
      console.log(error);
      throw typeof error === "object" && error !== null && "message" in error
        ? error.message
        : error;
    }
  }
  async post<T>(endpoint: string, body: any): Promise<T> {
    const url = this.basePath + endpoint;
    const headers = new Headers({
      ...this.defaultHeaders,
      "Content-Type": "application/json",
      Accept: "*/*",
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      return (await response.json()) as T;
    } catch (error) {
      console.error(error);
      throw typeof error === "object" && error !== null && "message" in error
        ? error.message
        : error;
    }
  }
}

/*
// Example Test
console.log(process.env.COOKIE);
const api = new ApiHandler("http://192.168.1.17:7766", {
  cookie: process.env.COOKIE!,
});

// Make a GET request to a specific endpoint
api
  .get("/api/v1/series/0FA23DG57M3N0")
  .then((data) => console.log("Response:", data))
  .catch((error) => console.error("Error:", error));
*/
