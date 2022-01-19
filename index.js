"use strict";

let wordList = ["patio", "darts", "piano", "horse"];

const randomIndex = Math.floor(Math.random() * wordList.length);
let secretWord = wordList[randomIndex];

let attempts = [];
let currentAttempt = "";

let grid = document.getElementById("grid");
function buildGrid() {
	for (let i = 0; i < 6; i++) {
		let row = document.createElement("div");
		row.className = "container";
		for (let j = 0; j < 5; j++) {
			let cell = document.createElement("div");
			cell.className = "cell";

			row.appendChild(cell);
		}
		grid.appendChild(row);
	}
}

let counter = 0;

function updateGrid() {
	for (let i = 0; i < 6; i++) {
		let row = grid.children[i];
		for (let j = 0; j < 5; j++) {
			let cell = row.children[j];
			cell.textContent = counter++;
		}
	}
}

buildGrid();
document.addEventListener("click", updateGrid);
