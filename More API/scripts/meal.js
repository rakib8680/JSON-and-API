

const loadMealsData = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(meals => displayMeals(meals.meals))
};

const displayMeals = meals => {
    const mealContainer = document.getElementById('mealsContainer');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal)

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class=" bg-orange-50  mx-auto rounded-xl border-2 border-gray-300 h-auto "  >
            <img src="${meal.strMealThumb}" class="w-auto mx-0 " >
            <div>
                <h5 class="text-center text-4xl p-5 font-semibold text-orange-600">${meal.strMeal}</h5>
                <p class="p-5"> ${meal.strInstructions}</p>
                <button type="button" class="btn btn-primary bg-orange-500 " data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details
                </button>
            </div>
        </div>
        `
        mealContainer.appendChild(mealDiv)
    })
}


const searchMeal = () => {
    const searchText = document.getElementById('searchField').value
    loadMealsData(searchText)
}

loadMealsData('chicken')