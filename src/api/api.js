export const fetchRecipes = async (ingredients) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = "https://api.spoonacular.com/recipes/findByIngredients";

    const url = `${API_URL}?ingredients=${ingredients}&number=12&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}