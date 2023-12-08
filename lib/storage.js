// lib/storage.js

// Function to load data from local storage
export const loadData = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error loading data from local storage", error);
      return null;
    }
  };
  
  // Function to save data to local storage
  export const saveData = (key, data) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error("Error saving data to local storage", error);
    }
  };
  