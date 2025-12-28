import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.REACT_APP_GROQ_API_KEY, // Your new Groq Key
  dangerouslyAllowBrowser: true, // Needed for frontend-only apps
  baseURL: "https://api.groq.com/openai/v1", // This is the magic line
});

export default client;
