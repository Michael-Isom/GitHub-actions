export const getQuestions = async () => {
    try {
        // Make sure to use the full URL with the correct port
        const response = await fetch('http://localhost:3002/api/questions/random');
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Try to parse the response as JSON
        const data = await response.json();
        
        return data;  // This should be an array of question objects
    } catch (error) {
        console.error('Failed to fetch questions:', error);
        throw error;  // Re-throw the error for further handling if needed
    }
};
