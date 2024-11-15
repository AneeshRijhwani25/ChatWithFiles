import axios from "axios";

//Defining the API URL
const API_URL ="https://backend-chat-with-files.vercel.app/api/pdf";
console.log("API: " + API_URL)
//uploadFile Function
export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(`${API_URL}/upload`, formData);
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

//askQuestion Function
export const askQuestion = async (documentId, question) => {
  if (!documentId) {
    throw new Error("documentId is missing");
  }

  const response = await axios.post(`${API_URL}/ask`, { documentId, question });
  return response.data;
};
