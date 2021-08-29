import React from 'react';

function App() {
	return (
		<div className="container">
			<header>
				<h3>Project MCQ</h3>
			</header>

			<main>
				<section className="question">
					<b>Question 1:</b>
					<p>Is this supposed to be a question?</p>
				</section>

				<section className="options">
					<div className="option">Answer 1: </div>
					<div className="option">Answer 1: </div>
					<div className="option">Answer 1: </div>
					<div className="option">Answer 1: </div>
				</section>

				<section className="actions-center">
					<button>Next</button>
					<button>Previous</button>
				</section>
			</main>
		</div>
	);
}

export default App;
