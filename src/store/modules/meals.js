import axios from "axios";

const state = {
  meals: [],
  meal: [],
  mealRandom: {},
  resultHeading: false
};
const getters = {
  getMeals: state => state.meals,
  getMeal: state => state.meal,
  getMealRandom: state => state.mealRandom
};

const actions = {
  fetchMeals({}, search) {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => {
        if (res.data.meals === null) {
          state.resultHeading = true
        } else {
          state.meals = res.data.meals;
        }
      });
  },
  fetchMeal({}, idMeal) {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then(res => {
      state.meal = res.data.meals[0];
    })
  },
  fetchMealRandom({}) {
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => {
        state.mealRandom = res.data.meals[0];
      })
  }
};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
