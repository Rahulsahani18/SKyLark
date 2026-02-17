
import { GoogleGenAI } from "@google/genai";

// Always use named parameter and process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const HOTEL_CONTEXT = `
You are the AI Concierge for "Hotel Sky Lark" and "Shangilla Restaurant" in Padrauna, UP, India.
Established in 2004 (20+ years legacy).
Location: Gayatri Nagar, Kasia Road, Khushi Nagar, Padrauna-274304.

Rooms Available:
- Deluxe Room: Spacious, AC/Non-AC, modern interiors.
- Executive Suite: Business-friendly, premium lounge, mini fridge.
- Family Room: Interconnected space, multiple beds, kid-friendly.

Restaurant: Shangilla Restaurant.
Cuisines: Chinese, North Indian, Mughlai.
Specialties: Paneer Tikka (₹220), Chicken 65 (₹280), Grilled Chicken Cheese Sandwich (₹135).

Tone: Sophisticated, welcoming, professional, and helpful. Always try to encourage users to book a stay or visit the restaurant.
`;

export const getConciergeResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    // Using ai.models.generateContent with both model name and prompt as per guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        // Move hotel context to systemInstruction for better alignment with Gemini 3 capabilities
        systemInstruction: HOTEL_CONTEXT,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Access the .text property directly as it is a getter, not a method
    return response.text || "I'm sorry, I couldn't process that. How can I help you today?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our concierge is currently busy assisting other guests. Please call +91 5564 245 546 for immediate assistance.";
  }
};
