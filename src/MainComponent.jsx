export default function MainComponent(){
    return (
        <main>
            <form className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredients"
                />
                <button>Add Ingredients</button>
            </form>
        </main>
    )
}