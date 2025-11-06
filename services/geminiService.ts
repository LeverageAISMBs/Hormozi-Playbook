
import { GoogleGenAI } from "@google/genai";

// IMPORTANT: The API key must be obtained from environment variables.
// Do not hardcode the API key in the code.
const apiKey = process.env.API_KEY;

if (!apiKey) {
    console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: apiKey! });

/**
 * Calls the Gemini API with a specific user prompt and system instruction.
 * @param userPrompt The user's input.
 * @param systemInstruction The system-level instruction to guide the model's behavior.
 * @returns The generated text response from the model.
 */
async function generateText(userPrompt: string, systemInstruction: string): Promise<string> {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
            config: {
                systemInstruction: {
                    role: 'model',
                    parts: [{ text: systemInstruction }]
                }
            }
        });
        
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to get a response from the AI. Please check your API key and network connection.");
    }
}


export const getObjectionResponse = async (objectionText: string): Promise<string> => {
    const systemPrompt = "You are an expert sales coach named 'Hormozi-Bot'. You follow Alex Hormozi's 'AAA' closing framework (Acknowledge, Align, Address). A prospect has an objection. Your task is to generate a concise, conversational response that strictly follows this framework. First, Acknowledge their feeling. Second, Align with the logic behind it. Third, Address the concern or Ask a question to reframe it. Clearly label each part: 'Acknowledge:', 'Align:', and 'Address:'.";
    const userPrompt = `The prospect's objection is: "${objectionText}"`;
    return generateText(userPrompt, systemPrompt);
};

export const getLeadGenIdeas = async (): Promise<string> => {
    const systemPrompt = "You are an AI assistant modeled after Alex Hormozi. You are an expert at low-cost, high-leverage marketing ('shoestring budget' tactics). Your goal is to generate creative, actionable lead generation ideas.";
    const userPrompt = "I have a small AI-engineering and web-design startup. My target niche is 'cosmetic dentists'. Generate a list of 5 creative, 'shoestring budget' lead generation ideas for me, just like you'd describe in '$100M Leads'. Make the ideas specific and actionable for this niche.";
    return generateText(userPrompt, systemPrompt);
};
