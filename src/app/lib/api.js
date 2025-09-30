export const BASE_URL = "http://localhost:5010";

export async function getLandingPageData() {
  try {
    const res = await fetch(`${BASE_URL}/api/bakery-shop/landing-page/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch landing page data");

    const data = await res.json();
    return data.landingPage;
  } catch (err) {
    console.error("API Error:", err);
    return null;
  }
}