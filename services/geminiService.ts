import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getMarketInsight = async (query: string): Promise<string> => {
  if (!ai) return "AI Service not configured (API Key missing).";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a financial expert for the brand "22K Gold Price". 
      Provide a concise, helpful answer to the user's question about markets, gold rates, or personal finance.
      Keep it under 100 words.
      User Question: ${query}`,
    });
    return response.text || "No insight available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to fetch insights at the moment. Please try again later.";
  }
};

export interface MarketBrief {
  text: string;
  sources: { web?: { uri: string; title: string } }[];
}

export const getLiveMarketBrief = async (): Promise<MarketBrief> => {
  if (!ai) return { text: "AI Service not configured. Please add API KEY.", sources: [] };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "What are the current live prices for 22k Gold in India, Nifty 50 index, and Bitcoin in USD today? Provide a very concise 3-sentence summary of the market status right now.",
      config: {
        tools: [{ googleSearch: {} }],
      }
    });

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map(chunk => chunk) || [];
    // Filter sources to only include those with web URIs if needed, but for now passing all chunks that structure matches
    const cleanSources = sources.filter((s: any) => s.web?.uri);

    return { 
      text: response.text || "Market data currently unavailable.", 
      sources: cleanSources
    };
  } catch (error) {
    console.error("Gemini API Error (Live Brief):", error);
    return { text: "Unable to connect to live market feed.", sources: [] };
  }
};