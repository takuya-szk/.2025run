//Graph.js

class Graph
{

	constructor()
	{
	}

	//html描画(初回だけで十分)
	display()
	{
		document.getElementById('disp').innerHTML = `

		<div onClick="modoru()">戻る</div>

		<canvas id="myChart" width="600" height="400"></canvas>
		
		`;
		
		drawChart();
	}

}

function drawChart()
{
	// グラフ描画処理
	// ここではChart.jsを使用していますが、他のライブラリでも構いません
	// サンプルデータ
	const data = 
	[
		{ date: '2024-06-20', km: 3 },
		{ date: '2024-06-21', km: 8 },
		{ date: '2024-06-22', km: 14 },
		{ date: '2024-06-23', km: 19 },
		{ date: '2024-06-24', km: 30 }
	];

	// Chart.js用のデータ整形
	const labels = data.map(item => item.date);
	const kmData = data.map(item => item.km);

	// グラフ描画
	const ctx = document.getElementById('myChart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'line',
		data: {
		labels: labels,
		datasets: [{
			label: '距離 (km)',
			data: kmData,
			borderColor: 'rgba(54, 162, 235, 1)',
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			fill: true,
			tension: 0.2
		}]
		},
		options: {
		scales: {
			x: {
			title: {
				display: true,
				text: '日付'
			}
			},
			y: {
			title: {
				display: true,
				text: '距離 (km)'
			},
			beginAtZero: true
			}
		}
		}
	});
}

function modoru()
{
	gm.setKey("Escape");
}
