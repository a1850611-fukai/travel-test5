import { GoogleGenAI } from "@google/genai";

export const getTravelInsight = async (date: string, location: string): Promise<{weather: string, tip: string}> => {
  if (!process.env.API_KEY) {
    console.warn("API Key missing");
    return {
      weather: "Weather data unavailable",
      tip: "Enjoy your trip! Remember to drink plenty of water."
    };
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Using Google Search grounding to get the most accurate current forecast or historical average
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `What is the expected weather in ${location}, Thailand on ${date}? 
      And give me one short, cultural travel tip for this specific area.
      Format the output clearly.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "";
    
    // Simple parsing to extract relevant bits, or just return the text summarization
    // Since we want a structured feel, let's ask Gemini to be concise in a second pass or just trust the search summary.
    // However, to ensure robustness, we will return the raw reliable text but truncating it if too long.
    
    // Let's refine the prompt to be safer for direct display
    const refinedResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Based on this information: "${text.substring(0, 1000)}...", 
        Provide a JSON object with two fields: 'weather' (max 10 words, e.g. "Sunny, 32°C, chance of rain") 
        and 'tip' (max 15 words cultural advice). 
        Do not use Markdown formatting in the response.`,
        config: {
            responseMimeType: "application/json"
        }
    });

    const json = JSON.parse(refinedResponse.text || "{}");
    return {
        weather: json.weather || "Hot and humid, ~30°C",
        tip: json.tip || "Dress modestly when visiting temples."
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      weather: "Sunny, approx 32°C",
      tip: "Thailand is the Land of Smiles!"
    };
  }
};