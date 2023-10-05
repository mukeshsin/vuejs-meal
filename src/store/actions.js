import axiosClient from '../axiosClient';

export function searchMeals({commit},keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        console.log(data,'hdhdhhhdhdh')
        commit('setSearchedMeals',data.meals)
    })
}

export function mealsByLetter({commit},letter) {
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        console.log(data,'hdhdhhhdhdh')
        commit('setMealsByLetter',data.meals)
    })
}

export function mealsByIngredient({commit},ingredient) {
    axiosClient.get(`search.php?i=${ingredient}`)
    .then(({data}) => {
        console.log(data,'hdhdhhhdhdh')
        commit('setMealsByIngredient',data.meals)
    })
}