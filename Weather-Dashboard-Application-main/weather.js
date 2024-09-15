const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
	weatherFn('Pune');
});

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a'));
	$('#temperature').
		html(`${data.main.temp}°C`);
	$('#description').
		text(data.weather[0].description);
	$('#wind-speed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#weather-icon').
		attr('src',
			'https://th.bing.com/th/id/R.77dd2072024c88a6ced5962c6d639ce1?rik=VAk7%2flePtyicBQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdi6%2fLLp%2fdi6LLpp6T.jpg&ehk=%2fSYbG4qXvh%2fer6Py2l5wocGWjHufRylGk5s1rKKXVnM%3d&risl=&pid=ImgRaw&r=0');
	$('#weather-info').fadeIn();
}
